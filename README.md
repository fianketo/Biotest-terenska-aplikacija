# Biotest Teren

Moderna mobilna PWA (progresivna web aplikacija) za terenske saradnike:
pretraga cenovnika analiza, korpa, unos terenskih lokacija i **automatska
optimizacija redosleda obilaska** (mapa + ruta).

Bez servera, bez build koraka — običan HTML/CSS/JS koji radi direktno u
pregledaču i instalira se na telefon kao prava aplikacija ("Add to Home
Screen").

## Šta aplikacija radi

- **Cenovnik** — pretraga i filtriranje 897 analiza (26 kategorija) po
  nazivu, kategoriji, uzorku, metodi ili ceni. Dodavanje u korpu jednim
  dodirom.
- **Korpa** — pregled odabranih analiza i ukupna cena, sa mogućnošću
  uklanjanja pojedinačnih stavki.
- **Lokacije** — unos terenskih lokacija za dan (naziv, adresa, napomena,
  koje analize poneti za tu stanicu). Adresa se automatski pretvara u
  koordinate (geokodiranje), uz mogućnost ručnog unosa koordinata ako
  automatska pretraga ne uspe.
- **Ruta** — prikaz svih lokacija na mapi i dugme **"Optimizuj rutu"** koje
  izračunava najbrži/najlakši redosled obilaska (polazeći od trenutne
  lokacije ili od prve lokacije na listi), sa procenom ukupnog rastojanja i
  vremena vožnje po stanici.
- Radi offline (prikaz cenovnika/korpe/lokacija) posle prvog učitavanja, uz
  tamnu/svetlu temu i instaliranje na telefon.

Svi podaci (korpa, lokacije, tema) se čuvaju lokalno u pregledaču
(`localStorage`) — nema naloga, nema servera, nema deljenja podataka između
uređaja.

## Pokretanje lokalno

Pošto aplikacija koristi ES module (`<script type="module">`) i `fetch` za
manifest, **mora se posluživati preko `http://`, ne otvaranjem `index.html`
direktno kao fajla** (`file://` ne radi). Iz root foldera projekta:

```bash
python3 -m http.server 8080
# ili: npx serve .
```

Zatim otvori `http://localhost:8080` u pregledaču.

## Postavljanje na besplatan GitHub Pages

1. **Settings → Pages** → "Build and deployment" → **Deploy from a branch**
   → grana `main`, folder `/ (root)` → Save.
2. Posle 1-2 minuta sajt je dostupan na
   `https://<korisničko-ime>.github.io/<ime-repoa>/`.
3. Otvori sajt na telefonu i izaberi "Dodaj na početni ekran" / "Add to Home
   Screen" da instaliraš aplikaciju.

## Mapa, geokodiranje i optimizacija rute — besplatni servisi

Aplikacija ne koristi Google Maps niti bilo koji plaćeni API ključ. Umesto
toga koristi javne, besplatne OpenStreetMap servise:

| Funkcija | Servis | Napomena |
|---|---|---|
| Mapa (podloga/tajlovi) | `tile.openstreetmap.org` | [Politika korišćenja](https://operations.osmfoundation.org/policies/tiles/) — za ozbiljniju/veću upotrebu preporučuje se sopstveni tile server ili plaćeni provajder (Mapbox, MapTiler...). |
| Pretvaranje adrese u koordinate | `nominatim.openstreetmap.org` | Max ~1 zahtev/sekundi (aplikacija to poštuje ugrađenim throttle-om), rezultati se keširaju lokalno da se ista adresa ne pretražuje dvaput. [Politika korišćenja](https://operations.osmfoundation.org/policies/nominatim/). Pregledač iz bezbednosnih razloga ne dozvoljava postavljanje prilagođenog `User-Agent` zaglavlja pa se aplikacija oslanja na automatski `Referer`; ako planiraš ozbiljniju upotrebu, upiši svoj kontakt email u `CONTACT_EMAIL` na vrhu `js/geocode.js`. |
| Optimizacija redosleda obilaska (ruta) | `router.project-osrm.org` (javni demo OSRM server) | Deljen, besplatan demo servis — **nije namenjen za veliki/produkcioni saobraćaj**. Ako servis ne odgovori (zauzet, nedostupan), aplikacija automatski prelazi na lokalnu, približnu optimizaciju (najbliži-sledeći po vazdušnoj liniji), što je vidljivo označeno isprekidanom linijom na mapi. Za ozbiljniju/svakodnevnu upotrebu preporučuje se sopstveni OSRM server ([uputstvo](http://project-osrm.org/docs/v5.24.0/api/)) ili plaćeni routing servis. |

Leaflet (JS biblioteka za mapu) je uključena direktno u repozitorijum
(`vendor/leaflet/`) umesto sa CDN-a — brže učitavanje i bez zavisnosti od
dostupnosti eksternog CDN-a.

## Struktura projekta

```
index.html            HTML "školjka" — 4 ekrana (Cenovnik/Korpa/Lokacije/Ruta) + donja navigacija
styles.css             Sav izgled aplikacije (svetla/tamna tema)
manifest.json          PWA manifest (ime, ikonice, boje)
sw.js                  Service worker — keširanje za offline rad
js/data.js              Cenovnik analiza (897 stavki, iz zvaničnog cenovnika)
js/storage.js            localStorage pomoćne funkcije
js/state.js              Stanje aplikacije (korpa, lokacije, pretraga) + interni event bus
js/ui.js                Navigacija, tema, bottom-sheet, toast poruke, formatiranje
js/cenovnik.js            Pretraga/filter cenovnika + deljena kartica-lista (koristi je i Korpa i Lokacije)
js/cart.js               Korpa (dodaj/ukloni/ukupno)
js/locations.js            Lokacije (dodaj/uredi/obriši, forma sa geokodiranjem)
js/geocode.js             Klijent za Nominatim (adresa → koordinate), sa kešom
js/map.js               Leaflet mapa, markeri, iscrtavanje rute
js/route.js              OSRM optimizacija rute + lokalni fallback algoritam
js/ruta.js               Ekran "Ruta" — povezuje mapu, rutu i lokacije
js/app.js               Pokretanje aplikacije
vendor/leaflet/           Leaflet biblioteka (lokalno, ne sa CDN-a)
icons/                 PWA ikonice
```

## Ažuriranje cenovnika

`js/data.js` je generisan iz zvaničnog JSON cenovnika i ima oblik:

```js
export const CENOVNIK = {
  categories: [
    { name: "Hematologija", tests: [ { prefix, name, sample, method, instrument, time, price }, ... ] },
    ...
  ]
};
```

Za izmenu cena ili dodavanje/uklanjanje analiza, uredi direktno ovaj fajl —
ID svake analize se automatski generiše iz naziva kategorije i naziva
analize, pa nije potrebno ništa ručno održavati.
