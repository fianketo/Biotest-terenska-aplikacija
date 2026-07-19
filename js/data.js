// Cenovnik analiza — generisano iz zvaničnog cenovnika (26 kategorija, 897 analiza).
// Struktura: { categories: [ { name, tests: [ {prefix, name, sample, method, instrument, time, price} ] } ] }
export const CENOVNIK = {
  "categories": [
    {
      "name": "Hematologija",
      "tests": [
        {
          "prefix": "cK",
          "name": "Sedimentacija",
          "sample": "Krv",
          "method": "Westergreen",
          "instrument": null,
          "time": "4h",
          "price": 150
        },
        {
          "prefix": "eK",
          "name": "KKS",
          "sample": "Krv (EDTA)",
          "method": "Hem. brojač",
          "instrument": "Mythic 22 AL",
          "time": "4h",
          "price": 470
        },
        {
          "prefix": "eK",
          "name": "Leukociti",
          "sample": "Krv (EDTA)",
          "method": "Hem. brojač",
          "instrument": null,
          "time": "4h",
          "price": 250
        },
        {
          "prefix": "eK",
          "name": "Trombociti",
          "sample": "Krv (EDTA)",
          "method": "Hem. brojač",
          "instrument": null,
          "time": "4h",
          "price": 250
        },
        {
          "prefix": "eK",
          "name": "Retikulociti",
          "sample": "Periferna krv",
          "method": "BKB",
          "instrument": null,
          "time": "6h",
          "price": 400
        },
        {
          "prefix": "K",
          "name": "Leukocitarna formula",
          "sample": "Krv",
          "method": "MS",
          "instrument": null,
          "time": "4h",
          "price": 140
        },
        {
          "prefix": "K",
          "name": "Razmaz periferne krvi",
          "sample": "Krv",
          "method": "MS",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "hK",
          "name": "Methemoglobin",
          "sample": "Krv",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1630
        },
        {
          "prefix": "eK",
          "name": "Anemija srpastih elija",
          "sample": "Krv (EDTA)",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4200
        },
        {
          "prefix": "eK",
          "name": "Redukovani glutation",
          "sample": "Krv (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 radnih dana",
          "price": 4600
        },
        {
          "prefix": null,
          "name": "34 mutacije cistična fibroza",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 3800
        }
      ]
    },
    {
      "name": "Hemostaza",
      "tests": [
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor XI",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3300
        },
        {
          "prefix": "K",
          "name": "Vreme krvarenja",
          "sample": "Krv",
          "method": "po Dukeu",
          "instrument": null,
          "time": "4h",
          "price": 140
        },
        {
          "prefix": "K",
          "name": "Vreme koagulacije",
          "sample": "Krv",
          "method": "po Lee White",
          "instrument": null,
          "time": "4h",
          "price": 140
        },
        {
          "prefix": "cP",
          "name": "Vreme koagulacije (Howell)",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": null,
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "cP",
          "name": "Protrombinsko vreme",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Sysmex CA660",
          "time": "4h",
          "price": 390
        },
        {
          "prefix": "cP",
          "name": "aPTT",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Sysmex CA660",
          "time": "4h",
          "price": 390
        },
        {
          "prefix": "cP",
          "name": "Fibrinogen",
          "sample": "Plazma",
          "method": "Clauss",
          "instrument": "Sysmex CA660",
          "time": "4h",
          "price": 450
        },
        {
          "prefix": "cP",
          "name": "Trombinsko vreme",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": null,
          "time": "1 dan",
          "price": 500
        },
        {
          "prefix": "cP",
          "name": "D-Dimer",
          "sample": "Plazma",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "1 dan",
          "price": 2100
        },
        {
          "prefix": "cP",
          "name": "Lupus antikoagulans",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1850
        },
        {
          "prefix": "cP",
          "name": "Protein C",
          "sample": "Plazma",
          "method": "FTM",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3500
        },
        {
          "prefix": "cP",
          "name": "Protein S",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3500
        },
        {
          "prefix": "cP",
          "name": "Antitrombin III",
          "sample": "Plazma",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2800
        },
        {
          "prefix": "cP",
          "name": "APCR (rezistencija na aktivisani protein C)",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2800
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor IX",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3000
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor VIII",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3400
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor XII",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3400
        },
        {
          "prefix": "cP",
          "name": "Heparin (anti Xa aktivnost)",
          "sample": "Plazma",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2400
        },
        {
          "prefix": "cP",
          "name": "von Willebrand-ov faktor (aktivnost)",
          "sample": "Plazma",
          "method": "ELFA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3200
        },
        {
          "prefix": "cP",
          "name": "von Willebrand-ov faktor (antigen)",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3400
        },
        {
          "prefix": "cP",
          "name": "Euglobulinska fibrinoliza",
          "sample": "Plazma",
          "method": "Fibrinoliza",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1000
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor XIII",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3950
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor V",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 3300
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor VII",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 3300
        },
        {
          "prefix": "cP",
          "name": "Koagulacioni faktor X",
          "sample": "Plazma",
          "method": "KGM",
          "instrument": "Biomedika",
          "time": "6 dana",
          "price": 3300
        }
      ]
    },
    {
      "name": "Biohemija",
      "tests": [
        {
          "prefix": "S",
          "name": "Glukoza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 140
        },
        {
          "prefix": "S",
          "name": "Lipidni",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 690
        },
        {
          "prefix": "S",
          "name": "OGTT sa 75g glukoze",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "OGTT sa 100g glukoze",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 750
        },
        {
          "prefix": "eK",
          "name": "HbA1c",
          "sample": "Krv (EDTA)",
          "method": "IT",
          "instrument": "Cobas Integra 400",
          "time": "24h",
          "price": 950
        },
        {
          "prefix": "S",
          "name": "Holesterol",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 240
        },
        {
          "prefix": "S",
          "name": "HDL holesterol",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 240
        },
        {
          "prefix": "S",
          "name": "Trigliceridi",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 240
        },
        {
          "prefix": "S",
          "name": "LDL holesterol",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 50
        },
        {
          "prefix": "S",
          "name": "Apo-A1",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 800
        },
        {
          "prefix": "S",
          "name": "Apo-B",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 800
        },
        {
          "prefix": "S",
          "name": "Lipoprotein A",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Natrijum",
          "sample": "Serum",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Kalijum",
          "sample": "Serum",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Hlor",
          "sample": "Serum",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Bikarbonati",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 300
        },
        {
          "prefix": "S",
          "name": "Kalcijum - ukupni",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Kalcijum - jonski",
          "sample": "Serum",
          "method": "Runjski",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "S",
          "name": "Fosfor",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Magnezijum",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Cink",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Bakar",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 800
        },
        {
          "prefix": "S",
          "name": "ALT",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "AST",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "ALP",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "GGT",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "LDH",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 220
        },
        {
          "prefix": "S",
          "name": "Holinesteraza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 500
        },
        {
          "prefix": "S",
          "name": "CK (CPK)",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 390
        },
        {
          "prefix": "S",
          "name": "CK-MB",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "S",
          "name": "Amilaza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "S",
          "name": "Lipaza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "S",
          "name": "Kisela fosfataza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 350
        },
        {
          "prefix": "S",
          "name": "Kisela fosfataza - prostatična",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 350
        },
        {
          "prefix": "S",
          "name": "Alkalna fosfataza (koštana)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4800
        },
        {
          "prefix": "S",
          "name": "Gvožđe",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 240
        },
        {
          "prefix": "S",
          "name": "TIBC",
          "sample": "Serum",
          "method": "Računski",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "S",
          "name": "UIBC",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "S",
          "name": "Saturacija transferina",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "8h",
          "price": 200
        },
        {
          "prefix": "S",
          "name": "Test oralnog opterećenja gvožđem",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 500
        },
        {
          "prefix": "S",
          "name": "Feritin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 1100
        },
        {
          "prefix": "S",
          "name": "Transferin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "1 dan",
          "price": 990
        },
        {
          "prefix": "S",
          "name": "Haptoglobin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "4h",
          "price": 1300
        },
        {
          "prefix": "S",
          "name": "Hepatogram",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Jonogram",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 1310
        },
        {
          "prefix": "S",
          "name": "Nefrogram",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 480
        },
        {
          "prefix": "S",
          "name": "Proteini ukupni",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Albumini",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Ceruloplazmin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Bilirubin - ukupan",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Bilirubin - direktan",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "Urea",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Urea - klirens",
          "sample": "Urin",
          "method": "Računski",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 400
        },
        {
          "prefix": "S",
          "name": "Kreatinin",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Kreatinin-klirens",
          "sample": "Urin",
          "method": "Računski",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 400
        },
        {
          "prefix": "S",
          "name": "eGFR (Procenjena brzina glomerularne filtracije)",
          "sample": "Serum",
          "method": "MDRD",
          "instrument": null,
          "time": "4h",
          "price": 300
        },
        {
          "prefix": "S",
          "name": "Acidum uricum",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "S",
          "name": "RF (reumatoidni faktor)",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 700
        },
        {
          "prefix": "S",
          "name": "Waaler Rose",
          "sample": "Serum",
          "method": "AGL",
          "instrument": null,
          "time": "1 dan",
          "price": 660
        },
        {
          "prefix": "S",
          "name": "ASTO",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 700
        },
        {
          "prefix": "S",
          "name": "CRP*",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "CRP",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "S",
          "name": "Troponin I",
          "sample": "Serum",
          "method": "HRG",
          "instrument": null,
          "time": "4h",
          "price": 1100
        },
        {
          "prefix": "S",
          "name": "Troponin T",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Mioglobin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "eP",
          "name": "BNP (B. NATRIURETIČKI PEPTID)",
          "sample": "Plazma (EDTA)",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 3700
        },
        {
          "prefix": "S",
          "name": "NT-proBNP",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 4100
        },
        {
          "prefix": "hP",
          "name": "Olovo",
          "sample": "Puna krv (heparin)",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "12 dana",
          "price": 4100
        },
        {
          "prefix": "hK",
          "name": "Živa",
          "sample": "Krv (heparin)",
          "method": "HPAAS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4100
        },
        {
          "prefix": "S",
          "name": "Selen",
          "sample": "Serum",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3800
        },
        {
          "prefix": "S",
          "name": "Aluminijum",
          "sample": "Serum",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "S",
          "name": "Arsen",
          "sample": "Serum",
          "method": "AAS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "S",
          "name": "Kobalt",
          "sample": "Serum",
          "method": "IPS-MS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "hK",
          "name": "Hrom",
          "sample": "Krv (heparin)",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4000
        },
        {
          "prefix": "hK",
          "name": "Mangan",
          "sample": "Krv (heparin)",
          "method": "AAS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "Km",
          "name": "Analiza kamena",
          "sample": "Kamen",
          "method": "hemijski",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "F",
          "name": "Pankreasna elastaza",
          "sample": "Feces",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Fruktozamin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1350
        },
        {
          "prefix": "eK",
          "name": "Glukoza-6-fosfat-dehidrogenaza",
          "sample": "Krv (EDTA)",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "6 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "Ukupne žučne kiseline",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "S",
          "name": "Pankreasna amilaza",
          "sample": "Serum",
          "method": "FTM",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 800
        },
        {
          "prefix": "S",
          "name": "Jod nivo",
          "sample": "Serum",
          "method": "ICPMS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4300
        },
        {
          "prefix": "S",
          "name": "Triptaza",
          "sample": "Serum",
          "method": "FEIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4700
        },
        {
          "prefix": "eK",
          "name": "Holinesteraza eritrocitna",
          "sample": "Krv (EDTA)",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Troponin I (kvantitativno)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1800
        },
        {
          "prefix": "eP",
          "name": "Omega 6/Omega 3 masne kiseline",
          "sample": "Plazma (EDTA)",
          "method": "GC/MS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 8200
        },
        {
          "prefix": "S",
          "name": "Bilirubin indirektni",
          "sample": "Serum",
          "method": "Računski",
          "instrument": null,
          "time": "4 sata",
          "price": 140
        },
        {
          "prefix": "S",
          "name": "Hitotriodizada",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 2700
        },
        {
          "prefix": "eP",
          "name": "Koenzim Q10",
          "sample": "Plazma (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4700
        },
        {
          "prefix": "S",
          "name": "Superoksid dizmutaza (SOD)",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "sTfR (Solubilni transferinski receptor)",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3700
        },
        {
          "prefix": "S",
          "name": "Osmolalitet seruma",
          "sample": "Serum",
          "method": "OSM",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1200
        },
        {
          "prefix": "S",
          "name": "Oksidativni stres",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "12 dana",
          "price": 6000
        },
        {
          "prefix": "eK",
          "name": "CRP/Mx",
          "sample": "Krv (EDTA)",
          "method": "AFIA",
          "instrument": "Afias",
          "time": "14h",
          "price": 900
        },
        {
          "prefix": null,
          "name": "Hemosiderin",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": "15 radnih dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Aldolaza",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 1700
        },
        {
          "prefix": "P",
          "name": "Pregled seroznih tečnosti",
          "sample": "Punkat",
          "method": "mikroskopski, SPFT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1200
        }
      ]
    },
    {
      "name": "Elektroforeza",
      "tests": [
        {
          "prefix": "dU",
          "name": "Elektroforeza proteina urina",
          "sample": "24h urin",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Imunoelektroforeza seruma",
          "sample": "Serum",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 5000
        },
        {
          "prefix": "U",
          "name": "Imunoelektroforeza urina",
          "sample": "Urin",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 5000
        },
        {
          "prefix": "eK",
          "name": "Elektroforeza hemoglobina",
          "sample": "Krv (EDTA)",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "Elektroforeza serumskih proteina",
          "sample": "Serum",
          "method": "ELF",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2100
        }
      ]
    },
    {
      "name": "Analiza urina",
      "tests": [
        {
          "prefix": "U",
          "name": "Kompletan pregled urina",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "U",
          "name": "pH - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "2h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Specifična težina - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Proteini - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Glukoza - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": "Cobas Integra 400",
          "time": "4h",
          "price": 100
        },
        {
          "prefix": "U",
          "name": "Glukoza - urin (kvantitativno)",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Ketoni - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Bilirubin - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 100
        },
        {
          "prefix": "U",
          "name": "Krv - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Leukociti - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Nitriti - urin",
          "sample": "Urin",
          "method": "test traka",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Kalcijum - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Kreatinin - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Acidum uricum - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Amilaza - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Test na trudnoću",
          "sample": "Urin",
          "method": "IHG",
          "instrument": null,
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "U",
          "name": "Urea - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Bence Jones proteini",
          "sample": "Urin",
          "method": "Bradshaw",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 850
        },
        {
          "prefix": "U",
          "name": "Proteini - urin (kvantitativno)",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 300
        },
        {
          "prefix": "U",
          "name": "Mikroalbumini - urin",
          "sample": "Urin",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 1100
        },
        {
          "prefix": "U",
          "name": "Kalijum - urin",
          "sample": "Urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Natrijum - urin",
          "sample": "Urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Hlor - urin",
          "sample": "Urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Fosfat - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "U",
          "name": "Trichomonas vaginalis",
          "sample": "Urin",
          "method": "MS",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "U",
          "name": "Magnezijum - urin",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 220
        },
        {
          "prefix": "U",
          "name": "Fenol - urin",
          "sample": "Urin",
          "method": "SK",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1900
        },
        {
          "prefix": "U",
          "name": "Beta 2 mikroglobulin (urin)",
          "sample": "Urin",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1500
        },
        {
          "prefix": "U",
          "name": "Alkohol u urinu",
          "sample": "Urin",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1900
        },
        {
          "prefix": "U",
          "name": "Odnos mikroalbumini/kreatinin (ACR)",
          "sample": "Urin",
          "method": "računski",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 300
        },
        {
          "prefix": "U",
          "name": "Osmolalitet urina",
          "sample": "Urin",
          "method": "OSM",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1200
        },
        {
          "prefix": "U",
          "name": "Bakar - urin",
          "sample": "Urin",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4000
        }
      ]
    },
    {
      "name": "24h urin",
      "tests": [
        {
          "prefix": "dU",
          "name": "Olovo - 24h urin",
          "sample": "24h urin",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 4000
        },
        {
          "prefix": "dU",
          "name": "Natrijum - 24h urin",
          "sample": "24h urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Kalijum - 24h urin",
          "sample": "24h urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Hlor - 24h urin",
          "sample": "24h urin",
          "method": "ISE",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Fosfat - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Kalcijum - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Magnezijum - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Bakar - 24h urin",
          "sample": "24h urin",
          "method": "ETAAS",
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 4000
        },
        {
          "prefix": "dU",
          "name": "Urea - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Kreatinin - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Acidum uricum - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Proteini - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 350
        },
        {
          "prefix": "dU",
          "name": "Glukoza - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 160
        },
        {
          "prefix": "dU",
          "name": "Mikroalbumini - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 1100
        },
        {
          "prefix": "dU",
          "name": "Kateholamini - 24h urin (Adrenalin, Noradrenalin, Dopamin)",
          "sample": "24h urin",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 5000
        },
        {
          "prefix": "dU",
          "name": "VMA",
          "sample": "24h urin",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "6 dana",
          "price": 2100
        },
        {
          "prefix": "dU",
          "name": "5-HIAA",
          "sample": "24h urin",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "6 dana",
          "price": 2100
        },
        {
          "prefix": "dU",
          "name": "17-ketosteroidi",
          "sample": "24h urin",
          "method": "HRG",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2600
        },
        {
          "prefix": "dU",
          "name": "17-OH kortikosteroidi",
          "sample": "24h urin",
          "method": "HRG",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3100
        },
        {
          "prefix": "dU",
          "name": "Metanefrin free - 24h urin",
          "sample": "24h urin",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4000
        },
        {
          "prefix": "dU",
          "name": "Porfobilinogen",
          "sample": "24h urin",
          "method": "HRG",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1900
        },
        {
          "prefix": "dU",
          "name": "Koproporfirini",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1700
        },
        {
          "prefix": "dU",
          "name": "Uroporfirini",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1700
        },
        {
          "prefix": "dU",
          "name": "Aldosteron - 24h urin",
          "sample": "24h urin",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "dU",
          "name": "d-Aminolevulinska kiselina",
          "sample": "24h urin",
          "method": "HRG",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2000
        },
        {
          "prefix": "dU",
          "name": "Normetanefrin - 24h urin",
          "sample": "24h urin",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4600
        },
        {
          "prefix": "dU",
          "name": "Serotonin - 24h urin",
          "sample": "24h urin",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "dU",
          "name": "Cistin - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3300
        },
        {
          "prefix": "dU",
          "name": "Oksalati - 24h urin",
          "sample": "24h urin",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 1900
        },
        {
          "prefix": "dU",
          "name": "Citrati - 24h urin",
          "sample": "24h urin",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "dU",
          "name": "Homovanilna kiselina (HVA) 24h urin",
          "sample": "24h urin",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 2100
        },
        {
          "prefix": "dU",
          "name": "Slobodni Kappa lanci (24h urin)",
          "sample": "24h urin",
          "method": null,
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4100
        },
        {
          "prefix": "dU",
          "name": "Slobodni Lambda lanci (24h urin)",
          "sample": "24h urin",
          "method": null,
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4100
        },
        {
          "prefix": "dU",
          "name": "Živa - 24h urin",
          "sample": "24h urin",
          "method": null,
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 4100
        },
        {
          "prefix": "dU",
          "name": "Jod - 24h urin",
          "sample": "24h urin",
          "method": null,
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 4500
        }
      ]
    },
    {
      "name": "Feces",
      "tests": [
        {
          "prefix": "F",
          "name": "Helicobacter pylori Ag",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 1200
        },
        {
          "prefix": "F",
          "name": "Okultno krvarenje",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "F",
          "name": "Svarljivost hrane",
          "sample": "Feces",
          "method": "MS",
          "instrument": null,
          "time": "5h",
          "price": 500
        },
        {
          "prefix": "F",
          "name": "Kalprotektin",
          "sample": "Feces",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "4 dana",
          "price": 3900
        },
        {
          "prefix": "F",
          "name": "Adeno/Rota/Noro/Astro virusi",
          "sample": "Feces",
          "method": "IHG",
          "instrument": null,
          "time": "3 dana",
          "price": 5300
        },
        {
          "prefix": "F",
          "name": "Adeno/Rota virus",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "2 dana?",
          "price": 900
        },
        {
          "prefix": "F",
          "name": "Okultno krvarenje II",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "F",
          "name": "Okultno krvarenje III",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 600
        },
        {
          "prefix": "F",
          "name": "Okultno krvarenje IIII",
          "sample": "Feces",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 600
        }
      ]
    },
    {
      "name": "Transfuziologija",
      "tests": [
        {
          "prefix": "S",
          "name": "Krvna grupa",
          "sample": "Serum",
          "method": "AGL",
          "instrument": null,
          "time": null,
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Trudnička antitela",
          "sample": "Serum",
          "method": "AGL",
          "instrument": null,
          "time": "3 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Coombs-ov test",
          "sample": "Serum",
          "method": "AGL",
          "instrument": null,
          "time": "3 dana",
          "price": 1800
        }
      ]
    },
    {
      "name": "Hormoni",
      "tests": [
        {
          "prefix": "S",
          "name": "TSH",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "T3",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "T4",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "FT3",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "FT4",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 650
        },
        {
          "prefix": "S",
          "name": "Tireoglobulin - hTg",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1250
        },
        {
          "prefix": "S",
          "name": "Tg At",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1150
        },
        {
          "prefix": "S",
          "name": "Anti TPO",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1200
        },
        {
          "prefix": "S",
          "name": "TSH receptorska At (TRAb)",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2500
        },
        {
          "prefix": "S",
          "name": "rT3 (reverzni T3)",
          "sample": "Serum",
          "method": "LC-MS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 6700
        },
        {
          "prefix": "S",
          "name": "Kalcitonin",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "FSH",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "LH",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "Estradiol",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "Progesteron",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "17-OH progesteron",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Prolaktin",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "Makroprolaktin",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Testosteron",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 850
        },
        {
          "prefix": "S",
          "name": "Free Testosteron",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Naissa",
          "time": "4 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Dihidrotestosteron",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2400
        },
        {
          "prefix": "S",
          "name": "Androstendion",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "DHEA-S",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Inhibin A",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3600
        },
        {
          "prefix": "S",
          "name": "Inhibin B",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2850
        },
        {
          "prefix": "S",
          "name": "SHBG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Naissa",
          "time": "2 dana",
          "price": 1150
        },
        {
          "prefix": "S",
          "name": "Insulin",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1250
        },
        {
          "prefix": "S",
          "name": "Insulin 60 min",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1250
        },
        {
          "prefix": "S",
          "name": "Insulinska rezistencija - HOMA",
          "sample": "Serum",
          "method": "računski",
          "instrument": null,
          "time": "4h",
          "price": 200
        },
        {
          "prefix": "S",
          "name": "C-peptid",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1150
        },
        {
          "prefix": "S",
          "name": "Adiponektin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3900
        },
        {
          "prefix": "S",
          "name": "Glukagon",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4900
        },
        {
          "prefix": "S",
          "name": "Kortizol",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1000
        },
        {
          "prefix": "eP",
          "name": "ACTH",
          "sample": "Plazma (EDTA)",
          "method": "CLIA",
          "instrument": "Cobas e601",
          "time": "4h",
          "price": 1300
        },
        {
          "prefix": "S",
          "name": "Aldosteron",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "eP",
          "name": "Renin",
          "sample": "Plazma (EDTA)",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2350
        },
        {
          "prefix": "S",
          "name": "hGH (hormon rasta)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1550
        },
        {
          "prefix": "S",
          "name": "IGF I (somatomedin C)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2300
        },
        {
          "prefix": "eP",
          "name": "Vazopresin ADH",
          "sample": "Plazma (EDTA)",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4400
        },
        {
          "prefix": "S",
          "name": "Oksitocin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3800
        },
        {
          "prefix": "eP",
          "name": "Adrenalin (Epinefrin)",
          "sample": "Plazma (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 1500
        },
        {
          "prefix": "eP",
          "name": "Noradrenalin (Norepinefrin)",
          "sample": "Plazma (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Serotonin",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Vitamin B12",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e601",
          "time": "4h",
          "price": 1300
        },
        {
          "prefix": "S",
          "name": "Folna kiselina",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1200
        },
        {
          "prefix": "S",
          "name": "Eritropoetin",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2800
        },
        {
          "prefix": "S",
          "name": "Cross Laps",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1650
        },
        {
          "prefix": "S",
          "name": "Osteokalcin",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "PTH",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1100
        },
        {
          "prefix": "S",
          "name": "Vitamin D total",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "P1NP",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 4950
        },
        {
          "prefix": "S",
          "name": "Leptin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Grelin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3500
        },
        {
          "prefix": "S",
          "name": "Homocistein",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "Prokalcitonin",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 3000
        },
        {
          "prefix": "S",
          "name": "Melatonin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3600
        },
        {
          "prefix": "eP",
          "name": "Free Metanefrin",
          "sample": "Plazma (EDTA)",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3400
        },
        {
          "prefix": "eP",
          "name": "Free Normetanefrin",
          "sample": "Plazma (EDTA)",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3400
        },
        {
          "prefix": "S",
          "name": "Humani placentarni laktogen",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2500
        },
        {
          "prefix": "S",
          "name": "Cistatin C",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2400
        },
        {
          "prefix": "S",
          "name": "IGFBP3",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Vitamin C",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "Vitamin E",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2800
        },
        {
          "prefix": "S",
          "name": "Vitamin A",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2800
        },
        {
          "prefix": "eK",
          "name": "Vitamin B1",
          "sample": "Krv (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2800
        },
        {
          "prefix": "S",
          "name": "Vitamin B2",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2800
        },
        {
          "prefix": "eK",
          "name": "Vitamin B6",
          "sample": "Krv (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Vitamin H (B7, biotin)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3200
        },
        {
          "prefix": "S",
          "name": "Vitamin K",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 5100
        },
        {
          "prefix": "S",
          "name": "Beta Karoten",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "17 dana",
          "price": 5400
        },
        {
          "prefix": "S",
          "name": "Beta HCG",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 990
        },
        {
          "prefix": "S",
          "name": "Estriol free E3",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Melanin",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 5400
        },
        {
          "prefix": "S",
          "name": "Gastrin",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2500
        },
        {
          "prefix": "S",
          "name": "DHEA",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2100
        },
        {
          "prefix": "S",
          "name": "Estron E1",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2100
        },
        {
          "prefix": "S",
          "name": "Karnitin i profil acil-karnitina",
          "sample": "Serum",
          "method": "LC-MS",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 10000
        },
        {
          "prefix": "S",
          "name": "Pregnenolon",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4500
        },
        {
          "prefix": "S",
          "name": "PTH intact",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Tau protein ukupni",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4200
        },
        {
          "prefix": "eP",
          "name": "Metilmalonska kiselina",
          "sample": "Plazma (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 6000
        },
        {
          "prefix": "eP",
          "name": "Kateholamini u plazmi (Adrenalin, Noradrenalin, Dopamin)",
          "sample": "Plazma (EDTA)",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 5000
        },
        {
          "prefix": "S",
          "name": "Anti Millerov Hormon",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 3200
        }
      ]
    },
    {
      "name": "Tumor markeri",
      "tests": [
        {
          "prefix": "S",
          "name": "TATI (Tu. asoc. tripsin inhibitor)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "CEA",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1100
        },
        {
          "prefix": "S",
          "name": "CA 19-9",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "CA 15-3",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "4h",
          "price": 1350
        },
        {
          "prefix": "S",
          "name": "CA 125",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "HE4",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "PSA",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1100
        },
        {
          "prefix": "S",
          "name": "Free PSA",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1200
        },
        {
          "prefix": "S",
          "name": "CA 72-4",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "CYFRA 21-1",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e601",
          "time": "1 dan",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "NSE",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "S 100 protein",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 4000
        },
        {
          "prefix": "S",
          "name": "Beta 2 mikroglobulin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Hromogranin A (CgA)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3000
        },
        {
          "prefix": "S",
          "name": "ACE (angiotenzin konvertujući enzim)",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1900
        },
        {
          "prefix": "U",
          "name": "UBC",
          "sample": "Urin",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3900
        },
        {
          "prefix": "S",
          "name": "CA 50",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2500
        },
        {
          "prefix": "S",
          "name": "SCC (squamous cell carcinoma Ag)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "AFP",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "TNF-A (Tumor necrosis factor alpha)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4600
        },
        {
          "prefix": "eK",
          "name": "EGF (epidermalni faktor rasta)",
          "sample": "Krv (EDTA)",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3500
        },
        {
          "prefix": "S",
          "name": "TPA (Tkivni polipeptidni antigen)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Roma index (CA125 + HE4)",
          "sample": "Serum",
          "method": "Računski",
          "instrument": null,
          "time": "1 dan",
          "price": 3800
        }
      ]
    },
    {
      "name": "Prenatalni skrining",
      "tests": [
        {
          "prefix": "S",
          "name": "Free beta HCG",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "28h",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "PAPP-A",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Double test (12-14 NG)",
          "sample": "Serum",
          "method": "računski",
          "instrument": null,
          "time": "1 dan",
          "price": 3100
        },
        {
          "prefix": "S",
          "name": "Triple test (16-18 NG)",
          "sample": "Serum",
          "method": "računski",
          "instrument": null,
          "time": "5 dana",
          "price": 3700
        }
      ]
    },
    {
      "name": "Imunologija",
      "tests": [
        {
          "prefix": "S",
          "name": "ZnT8 (Cink Transporter 8) antitela",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 5800
        },
        {
          "prefix": "S",
          "name": "IgE - ukupni",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Cobas e411",
          "time": "24h",
          "price": 950
        },
        {
          "prefix": "S",
          "name": "Imunoglobulin A (IgA)",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "8h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "Imunoglobulin M (IgM)",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "8h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "Imunoglobulin G (IgG)",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "8h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "C3 komplement",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "C4 komplement",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Cobas C501",
          "time": "4h",
          "price": 750
        },
        {
          "prefix": "S",
          "name": "C1 inhibitor",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1700
        },
        {
          "prefix": "cP",
          "name": "C1 inaktivator",
          "sample": "Plazma",
          "method": "FTM",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "ANA screen",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1550
        },
        {
          "prefix": "S",
          "name": "ANA (HEP-2)",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Anti Ro/SSA",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Anti La/SSB",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Anti JO-1 At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "RNP/Sm At (U1-RNP/Sm)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "c-ANCA (anti PR3)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "p-ANCA (anti MPO)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Antimitohondrijalna M2 At (AMA)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Kardiolipinska IgM At (ACA)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Kardiolipinska IgG At (ACA)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Antifosfolipidna At IgM",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Antifosfolipidna At IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Antiglaktomisićna At (ASMA)",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1850
        },
        {
          "prefix": "S",
          "name": "Gliiadinska IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Gliiadinska IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Transglutaminska At IgA",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "3 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Transglutaminska At IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "3 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "GAD At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2900
        },
        {
          "prefix": "S",
          "name": "Anti MUSK At",
          "sample": "Serum",
          "method": "RIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4700
        },
        {
          "prefix": "S",
          "name": "Acetilholinski receptori At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Krioglobulini",
          "sample": "Serum",
          "method": "AGL",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 900
        },
        {
          "prefix": "S",
          "name": "Anti LKM1 At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "ASCA IgA",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "ASCA IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Ovarijalna At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2100
        },
        {
          "prefix": "S",
          "name": "Spermatozoidna At (serum)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1700
        },
        {
          "prefix": "SPR",
          "name": "Spermatozoidna At (sperma)",
          "sample": "Sperma",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "ANA (ENA) Profil 15 At",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 5700
        },
        {
          "prefix": "hK",
          "name": "Quantiferon TB GOLD",
          "sample": "Krv (heparin)",
          "method": "IGRA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 7400
        },
        {
          "prefix": "S",
          "name": "C1q antitela",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Beta 2 glikoprotein IgM",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Beta 2 glikoprotein IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Ukupni komplement CH50",
          "sample": "Serum",
          "method": "MAYER",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Anti SCL 70 At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Anti neuronalna At (Hu, Yu, Ri...)",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Endomizijalna IgA At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Aquaporine 4 At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3600
        },
        {
          "prefix": "S",
          "name": "Anti IA2 At (Tyrozin phosphatase At)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2900
        },
        {
          "prefix": "S",
          "name": "Anti ICA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4500
        },
        {
          "prefix": "S",
          "name": "Insulinska At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Antiparijetalna At (APA)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "eK",
          "name": "T limfociti (CD4+)",
          "sample": "Krv (EDTA)",
          "method": null,
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 5500
        },
        {
          "prefix": "S",
          "name": "Centromerni protein B At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "eK",
          "name": "Subpopulacije limfocita",
          "sample": "Krv (EDTA)",
          "method": "MFC",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 8000
        },
        {
          "prefix": "S",
          "name": "Anti GBM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Intrinsic faktor At",
          "sample": "Serum",
          "method": "EIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Trombocitna At IgA/IgG/IgM",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3000
        },
        {
          "prefix": "S",
          "name": "Alfa 1 antitripsin",
          "sample": "Serum",
          "method": "IT",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Interleukin 6 (IL6)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 4300
        },
        {
          "prefix": "S",
          "name": "Adrenalna At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "S",
          "name": "Imunokompleksi (PEG)",
          "sample": "Serum",
          "method": "PEG",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Anti MOG At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "Sm At (lupusna At)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Diaminooksidaza (DAO)",
          "sample": "Serum",
          "method": "SPFT",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3700
        },
        {
          "prefix": "S",
          "name": "Anti CCP hs (high sensitive)",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "1 dan",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Antisrčana At (ASA)",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 3500
        },
        {
          "prefix": "S",
          "name": "Retikulinska At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4300
        },
        {
          "prefix": "S",
          "name": "Infliximab At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "do 15 dana",
          "price": 4700
        },
        {
          "prefix": "S",
          "name": "IgG subklase (IgG 1,2,3,4)",
          "sample": "Serum",
          "method": "NEPH",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 5900
        },
        {
          "prefix": "S",
          "name": "Slobodni Kappa/Lambda Lanci",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 5200
        },
        {
          "prefix": "S",
          "name": "ds-DNA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "C1q Komplement",
          "sample": "Serum",
          "method": "NEPH",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "ANA (ENA) Profil 25 At",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 7100
        },
        {
          "prefix": "S",
          "name": "Miozitis profil",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 6000
        },
        {
          "prefix": "S",
          "name": "RNP 70 At",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Streptokokna DNaza B At",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": "20 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "SLA (Solubil liver Ag) IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2300
        }
      ]
    },
    {
      "name": "Virusologija",
      "tests": [
        {
          "prefix": "eK",
          "name": "JC virus PCR",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 10500
        },
        {
          "prefix": "S",
          "name": "Herpes simplex tip I IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Herpes simplex tip I IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Herpes simplex tip II IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Herpes simplex tip II IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Respiratorni sincicijalni virus IgM",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Respiratorni sincicijalni virus IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Mumps virus IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Mumps virus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "TORCH IgM At",
          "sample": "Serum",
          "method": "ELISA, ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 7000
        },
        {
          "prefix": "S",
          "name": "TORCH IgG At",
          "sample": "Serum",
          "method": "ELISA, ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 6500
        },
        {
          "prefix": "S",
          "name": "Borrelia burgdorferi IgM At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Borrelia burgdorferi IgG At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Echinococcus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Trichinela spiralis IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Helicobacter pylori IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Helicobacter pylori IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Candida IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Candida IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Coxsackie virus IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Coxsackie virus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "CMV IgM At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "CMV IgG At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Epstein Barr IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "1 dan",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Epstein Barr IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "1 dan",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Parvovirus B19 IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Parvovirus B19 IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Rubella IgM At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Rubella IgG At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Varicella zoster IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Varicella zoster IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Varicella zoster IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Alegria",
          "time": "2 dana",
          "price": 1400
        },
        {
          "prefix": "S",
          "name": "Toxoplasma gondii IgM At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Toxoplasma gondii IgG At",
          "sample": "Serum",
          "method": "ELFA",
          "instrument": "MiniVidas",
          "time": "2 dana",
          "price": 1450
        },
        {
          "prefix": "S",
          "name": "Morbili (Measles) IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Morbili (Measles) IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "Toxocariosis At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 3600
        },
        {
          "prefix": "S",
          "name": "Cysticercosis IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Listeria monocytogenes IgM At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Aviditet Toxoplasma IgG",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet CMV IgG",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet VZV IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet Rubella IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet EBV IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet HSV 1 IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet HSV 2 IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet Parvovirus B19 IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aviditet Morbilli IgG",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "HAV ukupna At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "HAV IgM",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "HBs Ag",
          "sample": "Serum",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "HBs ukupna At",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "HBc ukupna At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "HBc IgM At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "HBe Ag",
          "sample": "Serum",
          "method": "ECLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "HBe ukupna At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Anti HCV",
          "sample": "Serum",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "HIV 1/2",
          "sample": "Serum",
          "method": "IHRG",
          "instrument": null,
          "time": "4h",
          "price": 1500
        },
        {
          "prefix": "S",
          "name": "TPHA",
          "sample": "Serum",
          "method": "AGL",
          "instrument": null,
          "time": "6h",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum",
          "sample": "Serum",
          "method": "IHRG",
          "instrument": null,
          "time": "6h",
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Borrelia Burgdorferi WB IgM At",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 5100
        },
        {
          "prefix": "S",
          "name": "Borrelia Burgdorferi WB IgG At",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 5100
        },
        {
          "prefix": "S",
          "name": "Galaktomanan test",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3600
        },
        {
          "prefix": "S",
          "name": "Brucella IgM At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Brucella IgG At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3100
        },
        {
          "prefix": "S",
          "name": "West Nile virus IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 2400
        },
        {
          "prefix": "S",
          "name": "West Nile virus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 2400
        },
        {
          "prefix": "S",
          "name": "HIV Western Blot",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 7200
        },
        {
          "prefix": "S",
          "name": "Epstein-Barr EBNA-1 IgG At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 3000
        },
        {
          "prefix": "S",
          "name": "Humani herpes virus 6 IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 4400
        },
        {
          "prefix": "S",
          "name": "Humani herpes virus 6 IgG At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 3200
        },
        {
          "prefix": "S",
          "name": "Echinococcus IgG At WB",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 7500
        },
        {
          "prefix": "S",
          "name": "Yersinia IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Yersinia IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Leptospira IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3200
        },
        {
          "prefix": "S",
          "name": "Leptospira IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3200
        },
        {
          "prefix": "S",
          "name": "HDV ukupna At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "HEV - Hepatitis E ukupna AT",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Tularemija At (Francisella tularensis)",
          "sample": "Serum",
          "method": "HRG",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2600
        },
        {
          "prefix": "S",
          "name": "Adenovirus IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Adenovirus IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 radna dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Adenovirus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Influenza A IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Influenza A IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Influenza B IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Parainfluenza 1 IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Parainfluenza 1 IgG At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2000
        },
        {
          "prefix": "S",
          "name": "Mycoplasma pneum. IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Mycoplasma pneum. IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Chlamydia trachomatis IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "Chlamydia trachomatis IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 1700
        },
        {
          "prefix": "B/U",
          "name": "Chlamydia Rapid test",
          "sample": "Bris/Urin",
          "method": "IB",
          "instrument": null,
          "time": null,
          "price": 1000
        },
        {
          "prefix": "S",
          "name": "Chlamydia pneumoniae IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Chlamydia pneumoniae IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Echinococcus ukupna At",
          "sample": "Serum",
          "method": "HAGL",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "HCV ukupna At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1700
        },
        {
          "prefix": "S",
          "name": "Coxiella Burnetii IgM At (Q GROZNICA)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Coxiella Burnetii IgG At (Q GROZNICA)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Ureaplasma urealyticum IgM At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Ureaplasma urealyticum IgG At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Paul-Bunnell",
          "sample": "Serum",
          "method": "AGL",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Toxocara canis IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 3500
        },
        {
          "prefix": "S",
          "name": "Listeria monocytogenes IgM At (1/2a,4b)",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 1800
        },
        {
          "prefix": "S",
          "name": "Bordetella pertussis toksin IgA At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Bordetella pertussis toksin IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 1900
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": null,
          "price": 2050
        },
        {
          "prefix": "S",
          "name": "Aspergillus Fumigatus IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2050
        },
        {
          "prefix": "S",
          "name": "Aspergillus Fumigatus IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "9 dana",
          "price": 2050
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum WB IgM At",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4700
        },
        {
          "prefix": "S",
          "name": "Treponema pallidum WB IgG At",
          "sample": "Serum",
          "method": "WB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 4700
        },
        {
          "prefix": "S",
          "name": "Tetanus toxoid IgG At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2900
        },
        {
          "prefix": "S",
          "name": "Bordetella pertussis IgM At",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "7 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Mycoplasma hominis IgM At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Mycoplasma hominis IgG At",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Echinococcus IgG At IIF",
          "sample": "Serum",
          "method": "IIF",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 4000
        },
        {
          "prefix": "S",
          "name": "MONO Rapid test (Infectious Mononucleosis)",
          "sample": "Serum",
          "method": "IHGR",
          "instrument": null,
          "time": "4h",
          "price": 1200
        },
        {
          "prefix": "S",
          "name": "SARS-COV-2 IgM At",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "SARS-COV-2 IgG At - Spike protein",
          "sample": "Serum",
          "method": "CMIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Bartonella henselae IgM At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3400
        },
        {
          "prefix": "S",
          "name": "Bartonella henselae IgG At",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3400
        }
      ]
    },
    {
      "name": "Toksikologija",
      "tests": [
        {
          "prefix": "U",
          "name": "Opiates (5)",
          "sample": "Urin",
          "method": "IHG",
          "instrument": null,
          "time": "8h",
          "price": 2700
        },
        {
          "prefix": "U",
          "name": "Opiates (10)",
          "sample": "Urin",
          "method": "IHG",
          "instrument": null,
          "time": "3 dana",
          "price": 3500
        },
        {
          "prefix": "U",
          "name": "Methaqualone",
          "sample": "Urin",
          "method": "IHRG",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 900
        }
      ]
    },
    {
      "name": "Nivo leka",
      "tests": [
        {
          "prefix": "S",
          "name": "Litijum",
          "sample": "Serum",
          "method": "ISE",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 600
        },
        {
          "prefix": "S",
          "name": "Valproat (Eftil)",
          "sample": "Serum",
          "method": "PETINIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Karbamazepin",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Fenobarbital",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "1 dan",
          "price": 1600
        },
        {
          "prefix": "S",
          "name": "Digoksin nivo leka",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Lidocaine (nivo leka)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "1-OH-Midazolam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Alprazolam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "B",
          "name": "Bromazepam",
          "sample": "Blood?",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Chlordiazepoxide",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Clobazam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Clonazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "D",
          "name": "Semoxepam",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Desalkylflurazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Diazepam (Valium)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Flunitrazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Flurazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Lorazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Lormetazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Medazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Midazolam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Nitrazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Norclobazam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Nordiazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Oxazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Prazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Temazepam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Triazolam",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 6200
        },
        {
          "prefix": "S",
          "name": "Lamictal",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 3400
        },
        {
          "prefix": "S",
          "name": "Levetiracetam (Keppra)",
          "sample": "Serum",
          "method": "HPLC",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 3400
        },
        {
          "prefix": "S",
          "name": "Infliximab nivo leka",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "do 15 dana",
          "price": 6200
        }
      ]
    },
    {
      "name": "Dermatologija",
      "tests": [
        {
          "prefix": "B",
          "name": "Dermatofiti",
          "sample": "Bris",
          "method": null,
          "instrument": null,
          "time": "15 dana",
          "price": 1500
        },
        {
          "prefix": "B",
          "name": "Sarcoptes scabiei",
          "sample": "Bris",
          "method": null,
          "instrument": null,
          "time": "21 dan",
          "price": 1000
        },
        {
          "prefix": "B",
          "name": "Wood-ova lampa",
          "sample": "Bris",
          "method": null,
          "instrument": null,
          "time": null,
          "price": 1000
        },
        {
          "prefix": "B",
          "name": "Nativan mikološki preparat",
          "sample": "Bris",
          "method": null,
          "instrument": null,
          "time": "1 dan",
          "price": 1000
        },
        {
          "prefix": "B",
          "name": "Demodex folliculorum",
          "sample": "Bris",
          "method": null,
          "instrument": null,
          "time": null,
          "price": 1000
        },
        {
          "prefix": null,
          "name": "Pediculosis pubis",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 1000
        }
      ]
    },
    {
      "name": "Mikrobiologija",
      "tests": [
        {
          "prefix": "B",
          "name": "Bris nokta + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris kože oko nokta",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris uha + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 480
        },
        {
          "prefix": "B",
          "name": "Bris uha bakteriološki",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris nosa + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris nosa bakteriološki",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 480
        },
        {
          "prefix": "S",
          "name": "Streptotest",
          "sample": "Serum",
          "method": "IHG",
          "instrument": null,
          "time": "45 min",
          "price": 950
        },
        {
          "prefix": "F",
          "name": "Brzi test za kampilobakter",
          "sample": "Feces",
          "method": null,
          "instrument": null,
          "time": null,
          "price": 1450
        },
        {
          "prefix": "B",
          "name": "Bris epifaringsa + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris oka + gljivice (levo)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris oka (levo)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 480
        },
        {
          "prefix": "B",
          "name": "Bris oka + gljivice (desno)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris oka (desno)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 480
        },
        {
          "prefix": "B",
          "name": "Bris uha + gljivice (levo)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris uha + gljivice (desno)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris kože + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 730
        },
        {
          "prefix": "B",
          "name": "Bris uretre + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris cerviksa + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris vagine + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris vulve + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris prepuciuma + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris glansa + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris pustule + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris akne + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris usne duplje + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris jezika + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris desni + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris bukalne sluznice + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "B",
          "name": "Bris proteze + gljivice",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": null,
          "name": "Iscjedak dojke + gljivice",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 780
        },
        {
          "prefix": "B",
          "name": "Chlamydia Trach. DIF (bris cerviksa)",
          "sample": "Bris",
          "method": "DIF",
          "instrument": null,
          "time": "1 dan",
          "price": 1200
        },
        {
          "prefix": "B",
          "name": "Chlamydia Trach. DIF (bris uretre)",
          "sample": "Bris",
          "method": "DIF",
          "instrument": null,
          "time": "1 dan",
          "price": 1200
        },
        {
          "prefix": "B/U",
          "name": "Chlamydia antigen test",
          "sample": "Bris/Urin",
          "method": "IHRG",
          "instrument": null,
          "time": null,
          "price": 800
        },
        {
          "prefix": "B",
          "name": "Ureaplasma/Mycoplasma (bris cerviksa)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "B",
          "name": "Ureaplasma/Mycoplasma (bris uretre)",
          "sample": "Bris",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "U",
          "name": "Ureaplasma/Mycoplasma (urin)",
          "sample": "Urin",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "SPR",
          "name": "Ureaplasma/Mycoplasma (ejakulat)",
          "sample": "Sperma",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 2100
        },
        {
          "prefix": "B",
          "name": "Gonokok",
          "sample": "Bris",
          "method": "MS/kult",
          "instrument": null,
          "time": "2 dana",
          "price": 550
        },
        {
          "prefix": "U",
          "name": "Urin gljivice",
          "sample": "Urin",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 400
        },
        {
          "prefix": "U",
          "name": "Urinokultura",
          "sample": "Urin",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "U",
          "name": "Urinokultura - brzi test 24h",
          "sample": "Urin",
          "method": null,
          "instrument": null,
          "time": "24h",
          "price": 1300
        },
        {
          "prefix": "SPR",
          "name": "Spermokultura",
          "sample": "Sperma",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": null,
          "name": "Antibiogram",
          "sample": null,
          "method": "Difuzija",
          "instrument": null,
          "time": "2 dana",
          "price": 300
        },
        {
          "prefix": null,
          "name": "Prošireni antibiogram",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 400
        },
        {
          "prefix": null,
          "name": "Antimikogram",
          "sample": null,
          "method": "difuzija",
          "instrument": null,
          "time": "3 dana",
          "price": 1800
        },
        {
          "prefix": "SPT",
          "name": "Sputum bakterije + gljivice",
          "sample": "Sputum",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 630
        },
        {
          "prefix": "OT",
          "name": "Perianalni otisak",
          "sample": "Otisak",
          "method": "Mikroskopski",
          "instrument": null,
          "time": "1 dan",
          "price": 350
        },
        {
          "prefix": "F",
          "name": "Koprokultura",
          "sample": "Feces",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 850
        },
        {
          "prefix": "F",
          "name": "Koprokultura (+Y.Enterocolitica, Camp.spp.)",
          "sample": "Feces",
          "method": "kultivacija",
          "instrument": "Biomedika",
          "time": "3-4 dana",
          "price": 1900
        },
        {
          "prefix": "F",
          "name": "Stolica na gljivice",
          "sample": "Feces",
          "method": "kultivacija",
          "instrument": null,
          "time": "2 dana",
          "price": 400
        }
      ]
    },
    {
      "name": "Alergeni",
      "tests": [
        {
          "prefix": "B",
          "name": "Eozinofili u nosu (bris)",
          "sample": "Bris",
          "method": "mikroskopski",
          "instrument": null,
          "time": "8h",
          "price": 400
        },
        {
          "prefix": "S",
          "name": "Inhalatorni panel",
          "sample": "Serum",
          "method": "IB",
          "instrument": null,
          "time": "2 dana",
          "price": 5800
        },
        {
          "prefix": "S",
          "name": "Nutritivni panel",
          "sample": "Serum",
          "method": "IB",
          "instrument": null,
          "time": "3 dana",
          "price": 5800
        },
        {
          "prefix": "S",
          "name": "Phadiatop - alatop",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2400
        },
        {
          "prefix": "S",
          "name": "Phadiatop - infant",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "8-10 dana",
          "price": 3200
        },
        {
          "prefix": "S",
          "name": "ECP (eozinofilni katjonski protein)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2350
        },
        {
          "prefix": "eP",
          "name": "Histamin",
          "sample": "Plazma (EDTA)",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2100
        },
        {
          "prefix": "S",
          "name": "Pčela I1",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Osa I3",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Bubašvaba I6",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Komarac I71",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Stršljen I75",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Paprika F218",
          "sample": "Serum",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "U",
          "name": "Histamin u urinu",
          "sample": "Urin",
          "method": "ELISA",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Inhalatorni i nutritivni panel 54",
          "sample": "Serum",
          "method": null,
          "instrument": null,
          "time": "4 dana",
          "price": 10000
        },
        {
          "prefix": "S",
          "name": "Articaine C68",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        }
      ]
    },
    {
      "name": "Alergeni - Inhalatorni",
      "tests": [
        {
          "prefix": "S",
          "name": "Polen trava mix GX1 (G3,G4,G5,G6,G8)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen drveća mix TX9 (T2,T3,T4,T7,T12)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen korova mix WX1 (W1,W6,W9,W10,W11)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen korova mix WX2 (W2,W6,W9,W10)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Buđ mix MX1 (M1,M2,M3,M6)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Buđ mix MX2 (M1,M2,M3,M5,M6,M8)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Perje mix EX73",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Dlaka mix EX1",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Pas (dlaka) E5",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Pirevina G2",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Ambrosia elatior W1",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ljulj, engleska trava G5",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Niski korov W1",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Topola T4",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Maslačak W8",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Divlji pelin W6",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Platan T11",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Konj E3 (dlaka)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Mačka E1",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Helminthosporum halodes M8",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kućna prašina H1",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Duvan O201",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Grinje D2, Dermatophago, farine",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Grinje D1, Dermatophago, pteronyssinus",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Posteljina prašina H3",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Latex K82",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Popino prase G6",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kućna prašina H2",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Polen trava mix GP4 (G1,G5,G7,G12,G13)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen trava mix GX3 (G1,G5,G6,G12,G13)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen trava mix GX2 (G2,G5,G6,G8,G10,G17)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen korova i cveća mix WX5 (W1,W6,W7,W8,W12)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen niskih korova mix WX7 (W7,W8,W9,W10,W12)",
          "sample": "Serum",
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Polen drveća mix TP1 (T1,T3,T7,T8,T10)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Buđ mix MP1 (M1,M2,M3,M5,M6)",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Buđ mix MX8 (M1,M25,M28,M30)",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Pas (epitel) E2",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Zova",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Žitarice E82",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Vrba T12",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Zamorac E6",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Visoki korov W3",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Svinja E83",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Papagaj E196",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ovca E81",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Maslina T9",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Lipa",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Leska T4",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kućni ljubimci EX2 (E1,E2,E6,E84)",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Kravlja dlaka E4",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kopriva W20",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": null,
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kanarinac E9",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Javor platan T1",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Jova T2",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Hrčak E84",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Hrast T16",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Golub E11",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Glycyphagus domesticus D73",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Glycyphagus destructor D71",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Čempres T23",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Breza T3",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Brest T8",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Bor T16",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Bokvica W9",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Acarus siro D70 (grinja brašna)",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Alerqoharma H4",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Jasen T15",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Loboda W15",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Tyrophagus putrescental",
          "sample": "Serum",
          "method": "IB",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Aspergillus fumigatus M3",
          "sample": "Serum",
          "method": "RAST",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        }
      ]
    },
    {
      "name": "Alergeni - Nutritivni",
      "tests": [
        {
          "prefix": "S",
          "name": "Paradajz F25",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Laktoza B312",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Gluten F79",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Belance F1",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Žumance F75",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "2 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Jaje mix RF 245",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Mleko F2",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Mleko u prahu F228",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Kazein F78",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Alfa laktalbumin F76",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Pšenično brašno F4",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ražano brašno F5",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Pirinac F9",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Soja F14",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Piletina F83",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kikiriki F13",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Jagode F44",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kivi F84",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kakao F93",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Čokolada F52",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Šargarepa F31",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Celer F85",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Krompir F35",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kvasac F45",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Tuna F40",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Svinjetina F26",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Spanać F214",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Skuša F174",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ribizla F171",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Morska riba mix FP2",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Raž G12",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Oslić F307",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Orah F16",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Meso mix FP73 (F26,F27,F83,F88)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Med F247",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Malina F156",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Lešnik F17",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kupina F211",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kukuruzno brašno F8",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kruška F271",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ječam G18",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Indijski orah F158",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Grašak F287",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Ćureće meso F284",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Goveđe meso F27",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Borovnica F229",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Borania F132",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Badem F20",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Kafa F221",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Grožđe F50",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Pšenica G15",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Želatin",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2700
        },
        {
          "prefix": "S",
          "name": "Kupus F216",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Mleko + Gluten panel",
          "sample": "Serum",
          "method": "EIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 4000
        }
      ]
    },
    {
      "name": "Alergeni - Lekovi",
      "tests": [
        {
          "prefix": "S",
          "name": "Penicilloyl G C1",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Penicilloyl V C2",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 2200
        },
        {
          "prefix": "S",
          "name": "Cephalosporini C6",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Ampicillin C203",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Amoxicillin C204",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Ciprofloxacin C108",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Baktrim trimethoprim",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 3300
        },
        {
          "prefix": "S",
          "name": "Aspirin (acetilsalicilna kiselina) C217",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Erythromycin C212",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Ibuprofen C286",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Tetracycline C211",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Doxycyclin C216",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Paracetamol/Acetaminophen C209",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Streptomycin C206",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 3700
        },
        {
          "prefix": "S",
          "name": "Lidocaine/Xilocaine C232",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Mepivacaine C88",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Gentamycin C213",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Diclofenac C281",
          "sample": "Serum",
          "method": "REAST",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Clindamycin",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        },
        {
          "prefix": "S",
          "name": "Azitromycin (hemomycin)",
          "sample": "Serum",
          "method": "CLIA",
          "instrument": "Biomedika",
          "time": "10-15 dana",
          "price": 2300
        }
      ]
    },
    {
      "name": "Intolerancija",
      "tests": [
        {
          "prefix": "S",
          "name": "Intolerancija na hranu 54",
          "sample": "Serum",
          "method": "IB",
          "instrument": null,
          "time": "4 dana",
          "price": 11000
        }
      ]
    },
    {
      "name": "Sperma",
      "tests": [
        {
          "prefix": "SPR",
          "name": "Spermogram",
          "sample": "Sperma",
          "method": "MS",
          "instrument": null,
          "time": "1 dan",
          "price": 2700
        },
        {
          "prefix": "SPR",
          "name": "Trichomonas vaginalis sp.",
          "sample": "Sperma",
          "method": "MS",
          "instrument": null,
          "time": "4h",
          "price": 200
        }
      ]
    },
    {
      "name": "PCR",
      "tests": [
        {
          "prefix": null,
          "name": "28 HPV Humani papiloma virus PCR",
          "sample": null,
          "method": "PCR",
          "instrument": "Biomedika",
          "time": null,
          "price": 9200
        },
        {
          "prefix": null,
          "name": "41 HPV Humani papiloma virus PCR",
          "sample": null,
          "method": "PCR",
          "instrument": "Biomedika",
          "time": null,
          "price": 10500
        },
        {
          "prefix": "cK",
          "name": "JAK2 GEN detekcija mutacije V617F",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 10000
        },
        {
          "prefix": "eK",
          "name": "M.Tuberculosis u krvi (PCR)",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "12 dana",
          "price": 8000
        },
        {
          "prefix": "SPT",
          "name": "M.Tuberculosis u sputumu (PCR)",
          "sample": "Sputum",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "12 dana",
          "price": 7000
        },
        {
          "prefix": "U",
          "name": "Chlamydia Trachomatis PCR (urin)",
          "sample": "Urin",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 3400
        },
        {
          "prefix": "B",
          "name": "Chlamydia Trachomatis PCR (bris)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 3400
        },
        {
          "prefix": "Sp",
          "name": "Chlamydia Trachomatis PCR (sperma)",
          "sample": "Sperma",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 3400
        },
        {
          "prefix": "Sp",
          "name": "Human papilloma virus sa tipizacijom - HPV (sperma)",
          "sample": "Sperma",
          "method": "PCR",
          "instrument": null,
          "time": "15 dana",
          "price": 8800
        },
        {
          "prefix": "B",
          "name": "Humani papilloma virus sa tipizacijom - HPV (bris)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": null,
          "time": "15 dana",
          "price": 8800
        },
        {
          "prefix": "B",
          "name": "Trombofilija faktor II (protrombin G20210A)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "B",
          "name": "Trombofilija faktor V (Leiden)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "15 dana",
          "price": 4000
        },
        {
          "prefix": "B",
          "name": "Trombofilija MTHFR (C677T mut)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "15 dana",
          "price": 4300
        },
        {
          "prefix": null,
          "name": "Trombofilija MTHFR (lokus 1298)",
          "sample": null,
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "5 dana",
          "price": 4100
        },
        {
          "prefix": "cK",
          "name": "PAI-1",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "5 dana",
          "price": 4500
        },
        {
          "prefix": "k",
          "name": "EGFR",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 13000
        },
        {
          "prefix": "B/U",
          "name": "Ureaplasma urealyticum PCR",
          "sample": "Bris/Urin",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3900
        },
        {
          "prefix": "eK",
          "name": "HLA B27 antigen",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 9300
        },
        {
          "prefix": "eK",
          "name": "HLA tipizacija (aleli DQ2 i DQ8 haplotipovi)",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 10000
        },
        {
          "prefix": "B",
          "name": "STD 4 (Mycoplasma hominis, Ureaplasma spp, Chlamydia trachomatis, HPV)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10-12 dana",
          "price": 10000
        },
        {
          "prefix": "B",
          "name": "STD 3 (Chlamydia trachomatis, Mycoplasma hominis, Ureaplasma spp)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10-12 dana",
          "price": 7000
        },
        {
          "prefix": "B/U",
          "name": "Mycoplasma hominis PCR",
          "sample": "Bris/Urin",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3900
        },
        {
          "prefix": "eK",
          "name": "HIV RNK PCR kvantitativni",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 12500
        },
        {
          "prefix": "eP",
          "name": "HIV RNK PCR kvalitativni",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 12500
        },
        {
          "prefix": "eP",
          "name": "HCV RNK PCR kvantitativni",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 12500
        },
        {
          "prefix": "eP",
          "name": "HCV RNK PCR genotip",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 14500
        },
        {
          "prefix": "eP",
          "name": "HBV DNK PCR kvantitativni",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 12500
        },
        {
          "prefix": null,
          "name": "HBV DNK PCR kvalitativni",
          "sample": null,
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 12500
        },
        {
          "prefix": "B",
          "name": "Gonokok PCR (bris)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 3500
        },
        {
          "prefix": "eK",
          "name": "CMV PCR kvantitativni",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 7000
        },
        {
          "prefix": "cK",
          "name": "CMV PCR kvalitativni",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 7000
        },
        {
          "prefix": "hK",
          "name": "Kariotip",
          "sample": "Krv (heparin)",
          "method": "KL i GTG",
          "instrument": "Biomedika",
          "time": "8 dana",
          "price": 10500
        },
        {
          "prefix": "B",
          "name": "Očinstvo, utvrđivanje",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": null,
          "price": 29000
        },
        {
          "prefix": "B",
          "name": "Srodstvo, utvrđivanje",
          "sample": "Bris",
          "method": "PCR",
          "instrument": null,
          "time": null,
          "price": 25000
        },
        {
          "prefix": "B",
          "name": "HSV PCR (bris)",
          "sample": "Bris",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 4000
        },
        {
          "prefix": "U",
          "name": "HSV PCR (urin)",
          "sample": "Urin",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 4000
        },
        {
          "prefix": "Sp",
          "name": "HSV PCR (sperma)",
          "sample": "Sperma",
          "method": "PCR",
          "instrument": null,
          "time": "10 dana",
          "price": 4000
        },
        {
          "prefix": "eP",
          "name": "Borrelia Burgdorferi PCR",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 6000
        },
        {
          "prefix": "eP",
          "name": "Borrelia Burgdorferi PCR (krpelj)",
          "sample": "Plazma (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 6000
        },
        {
          "prefix": "eK",
          "name": "Alfa 1 Antitripsin genotipizacija",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 12500
        },
        {
          "prefix": "eK",
          "name": "Laktozna intolerancija PCR",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 7000
        },
        {
          "prefix": "cK",
          "name": "Mikrodelecije Y hromozoma (15 lokusa)",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 13500
        },
        {
          "prefix": "cK",
          "name": "Cistična fibroza PCR",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": "4 dana",
          "price": 15000
        },
        {
          "prefix": "eK",
          "name": "BRCA1/BRCA2",
          "sample": "Krv (EDTA)",
          "method": "NGS",
          "instrument": "Biomedika",
          "time": "30 dana",
          "price": 80000
        },
        {
          "prefix": "cK",
          "name": "Beta talasemija PCR",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "16 dana",
          "price": 14000
        },
        {
          "prefix": "cK",
          "name": "Herpes simplex virus tip 1/tip 2 PCR (HSV)",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "11 dana",
          "price": 9000
        },
        {
          "prefix": "cK",
          "name": "Epstein-Barr virus PCR (EBV)",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "11 dana",
          "price": 10800
        },
        {
          "prefix": null,
          "name": "Očinstvo, utvrđivanje, drugo dete",
          "sample": null,
          "method": "PCR",
          "instrument": "DNK Centar",
          "time": null,
          "price": 8000
        },
        {
          "prefix": "cK",
          "name": "BCR/ABL molekularna detekcija AML i CML i praćenje minimalne rezidualne bolesti",
          "sample": "Krv",
          "method": "PCR",
          "instrument": null,
          "time": "15 dana",
          "price": 30000
        },
        {
          "prefix": "cK",
          "name": "Hemohromatoza PCR",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 10500
        },
        {
          "prefix": "hK",
          "name": "Hromozomske aberacije",
          "sample": "Krv (heparin)",
          "method": "CG",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 6500
        },
        {
          "prefix": "cK",
          "name": "Fragilni X sindrom genetska analiza",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 22000
        },
        {
          "prefix": "B",
          "name": "Panel respiratornih virusa PCR",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "3 dana",
          "price": 7000
        },
        {
          "prefix": "U",
          "name": "Gonokok PCR (urin)",
          "sample": "Urin",
          "method": "PCR",
          "instrument": null,
          "time": "2 dana",
          "price": 3000
        },
        {
          "prefix": "cK",
          "name": "UGT1A1 (Žilberov sindrom)",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 13500
        },
        {
          "prefix": "B",
          "name": "Praporeklo (Y haplotip)",
          "sample": "Bris",
          "method": null,
          "instrument": "DNK Centar",
          "time": "7 dana",
          "price": 13000
        },
        {
          "prefix": "B",
          "name": "Humani papiloma virus sa tipizacijom 14",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 5500
        },
        {
          "prefix": "B",
          "name": "Humani papiloma virus sa tipizacijom 28",
          "sample": "Bris",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "4 dana",
          "price": 8800
        },
        {
          "prefix": "U",
          "name": "STD 7",
          "sample": "Urin",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 10000
        },
        {
          "prefix": "cK",
          "name": "VZV PCR",
          "sample": "Krv",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "10 dana",
          "price": 9000
        },
        {
          "prefix": "eK",
          "name": "Dihidropirimidin dehidrogenaza genotipizacija (DPYD)",
          "sample": "Krv (EDTA)",
          "method": "PCR",
          "instrument": "Biomedika",
          "time": "5 dana",
          "price": 14400
        },
        {
          "prefix": null,
          "name": "CFTR gen sekvenciranje (99% mutacija)",
          "sample": null,
          "method": "PCR",
          "instrument": null,
          "time": null,
          "price": 32000
        }
      ]
    },
    {
      "name": "Patohistologija",
      "tests": [
        {
          "prefix": null,
          "name": "Papanikolau - citoskriner - akreditovani supervizor",
          "sample": null,
          "method": "MS",
          "instrument": null,
          "time": "3 dana",
          "price": 900
        },
        {
          "prefix": null,
          "name": "Papanikolau",
          "sample": null,
          "method": "MS",
          "instrument": null,
          "time": "5 dana",
          "price": 1300
        },
        {
          "prefix": null,
          "name": "Vaginarni sekret - patolog",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 800
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4000
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - 2",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2500
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - konizat grlića materice",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4500
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - biopsija kože i mekih tkiva",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 3000
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - hirurški materijal",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4500
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - hirurški materijal - 2",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2250
        },
        {
          "prefix": null,
          "name": "Punkciona citologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2000
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - punkciona citologija - 2",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2000
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - gastro.",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2500
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - gastro. 2. uzorak",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 800
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - gastro. 3. uzorak",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 800
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4400
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate + 1 isečak",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4900
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate + 2 isečka",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5400
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate + 3 isečka",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5900
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate + 4 isečka",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6400
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate + 5 isečaka",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6500
        },
        {
          "prefix": null,
          "name": "Ex tempore sa definitivnom PH dijagnostikom",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 8000
        },
        {
          "prefix": null,
          "name": "Imunohistohemija - obrada materijala",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2500
        },
        {
          "prefix": null,
          "name": "Imunohistohemija - sa 1 antitelom",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 3000
        },
        {
          "prefix": null,
          "name": "Obrada dela tkiva jajnika za in vitro aktivaciju",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 12000
        },
        {
          "prefix": null,
          "name": "Revizija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5000
        },
        {
          "prefix": null,
          "name": "Sekstant (12)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6000
        },
        {
          "prefix": null,
          "name": "Plitak konizat (LOOP, RF)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4500
        },
        {
          "prefix": null,
          "name": "Plitak konizat i ECC",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6000
        },
        {
          "prefix": null,
          "name": "Konizat (klasičan)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5000
        },
        {
          "prefix": null,
          "name": "Konizat i ECC",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6500
        },
        {
          "prefix": null,
          "name": "Operacija (do 5 kalupa)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5000
        },
        {
          "prefix": null,
          "name": "Operacija (6-10 kalupa)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 7000
        },
        {
          "prefix": null,
          "name": "Radikalna operacija (maligni tumori - više od 10 kalupa)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 10000
        },
        {
          "prefix": null,
          "name": "Patohistološka analiza - hirurški materijal (dopuna)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 5000
        },
        {
          "prefix": null,
          "name": "PH urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 4000
        },
        {
          "prefix": null,
          "name": "Sekstant biopsije prostate urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6500
        },
        {
          "prefix": null,
          "name": "Biopsija 2 urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2000
        },
        {
          "prefix": null,
          "name": "Biopsija 3 urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2000
        },
        {
          "prefix": null,
          "name": "Biopsija 4 urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 2000
        },
        {
          "prefix": null,
          "name": "Sekstant 12 urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 8500
        },
        {
          "prefix": null,
          "name": "Hirurški materijal - urologija",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 6500
        },
        {
          "prefix": null,
          "name": "Braf mutacije",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 9900
        },
        {
          "prefix": null,
          "name": "PDL receptori",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 9600
        },
        {
          "prefix": null,
          "name": "HER status",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 10600
        },
        {
          "prefix": null,
          "name": "MSI",
          "sample": null,
          "method": null,
          "instrument": "Biomedika",
          "time": null,
          "price": 14700
        }
      ]
    },
    {
      "name": "Ostalo",
      "tests": [
        {
          "prefix": null,
          "name": "Uslužno vađenje u laboratoriji",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 200
        },
        {
          "prefix": null,
          "name": "Uzimanje uzorka za laboratorijsku analizu 300",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 300
        },
        {
          "prefix": null,
          "name": "Uzimanje uzorka za laboratorijsku analizu 600",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 600
        },
        {
          "prefix": null,
          "name": "Uzimanje uzorka za laboratorijsku analizu 800",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 800
        },
        {
          "prefix": null,
          "name": "Uzimanje uzorka za laboratorijsku analizu 1200",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 1200
        },
        {
          "prefix": null,
          "name": "Određivanje antikoag. terapije",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 900
        },
        {
          "prefix": null,
          "name": "Određivanje antikoag. terapije (kontrola do 7 dana)",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 700
        },
        {
          "prefix": null,
          "name": "Konsultacija hemostaziologa",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 3000
        },
        {
          "prefix": null,
          "name": "Vađenje krvi",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 100
        },
        {
          "prefix": "hK",
          "name": "Mikronukleusni test",
          "sample": "Krv (heparin)",
          "method": "CG",
          "instrument": "Biomedika",
          "time": "15 dana",
          "price": 6200
        },
        {
          "prefix": null,
          "name": "Uzimanje briseva",
          "sample": null,
          "method": null,
          "instrument": null,
          "time": null,
          "price": 100
        }
      ]
    }
  ]
}
;
