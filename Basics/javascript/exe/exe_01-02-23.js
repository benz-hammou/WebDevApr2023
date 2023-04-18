// for loop  exercise
const people = [
    {
        "name": "Meghan Logan",
        "phone": "441-6566",
        "address": "654-4615 Nunc. Avenue",
        "postalZip": "4188",
        "region": "Troms og Finnmark",
        "country": "Austria"
    },
    {
        "name": "Gareth Bernard",
        "phone": "484-6241",
        "address": "113-8387 Dictum Av.",
        "postalZip": "17726",
        "region": "Pays de la Loire",
        "country": "Canada"
    },
    {
        "name": "Dean Perry",
        "phone": "1-334-694-1728",
        "address": "Ap #832-4301 Pede. Avenue",
        "postalZip": "526465",
        "region": "South Sumatra",
        "country": "France"
    },
    {
        "name": "Adena Moran",
        "phone": "1-390-867-6226",
        "address": "Ap #228-786 Amet Street",
        "postalZip": "35116",
        "region": "Noord Holland",
        "country": "Turkey"
    },
    {
        "name": "Isabelle Powell",
        "phone": "565-2467",
        "address": "P.O. Box 341, 9069 Velit Rd.",
        "postalZip": "74532",
        "region": "Burgenland",
        "country": "Norway"
    },
    {
        "name": "Judith Barron",
        "phone": "1-235-192-3072",
        "address": "Ap #133-9049 Vitae, St.",
        "postalZip": "08657",
        "region": "Tasmania",
        "country": "Singapore"
    },
    {
        "name": "Alfreda Buckner",
        "phone": "1-674-468-7245",
        "address": "1843 Placerat, St.",
        "postalZip": "42572",
        "region": "Quảng Trị",
        "country": "South Korea"
    },
    {
        "name": "Jaime Fuller",
        "phone": "382-7439",
        "address": "P.O. Box 855, 5581 Proin Road",
        "postalZip": "X8A 8VV",
        "region": "Podkarpackie",
        "country": "Canada"
    },
    {
        "name": "Elijah Whitley",
        "phone": "351-6352",
        "address": "Ap #428-9981 Vestibulum. Ave",
        "postalZip": "71319",
        "region": "Kahramanmaraş",
        "country": "Pakistan"
    },
    {
        "name": "Graiden Mendez",
        "phone": "1-314-207-5731",
        "address": "316-6867 Penatibus Av.",
        "postalZip": "75943",
        "region": "Minas Gerais",
        "country": "Philippines"
    },
    {
        "name": "Bo Hobbs",
        "phone": "1-751-576-2036",
        "address": "319-9479 Nulla Street",
        "postalZip": "67188",
        "region": "Connacht",
        "country": "Turkey"
    },
    {
        "name": "Erica Fischer",
        "phone": "1-448-329-6144",
        "address": "795-4764 Fermentum Avenue",
        "postalZip": "11W 0J7",
        "region": "Meta",
        "country": "Chile"
    },
    {
        "name": "Victor Kim",
        "phone": "377-5754",
        "address": "683-5944 Phasellus Avenue",
        "postalZip": "76069",
        "region": "Şanlıurfa",
        "country": "Vietnam"
    },
    {
        "name": "Porter Wilkinson",
        "phone": "1-585-321-4979",
        "address": "666-2468 Adipiscing, St.",
        "postalZip": "53228",
        "region": "łódzkie",
        "country": "Poland"
    },
    {
        "name": "Callie Buckley",
        "phone": "1-361-368-8211",
        "address": "4509 Montes, Av.",
        "postalZip": "426826",
        "region": "Bryansk Oblast",
        "country": "Vietnam"
    },
    {
        "name": "Hanae Long",
        "phone": "244-3252",
        "address": "768-7458 Semper Ave",
        "postalZip": "42466",
        "region": "Dōngběi",
        "country": "Nigeria"
    },
    {
        "name": "Rhona Wynn",
        "phone": "609-2014",
        "address": "Ap #553-7181 Quisque St.",
        "postalZip": "34403",
        "region": "Valle d'Aosta",
        "country": "Mexico"
    },
    {
        "name": "Paloma Shelton",
        "phone": "821-2722",
        "address": "Ap #508-1199 Dui, Rd.",
        "postalZip": "D6F 6NR",
        "region": "Lipetsk Oblast",
        "country": "Colombia"
    },
    {
        "name": "James Sawyer",
        "phone": "588-4311",
        "address": "518-139 Pretium Rd.",
        "postalZip": "636685",
        "region": "Special Region of Yogyakarta",
        "country": "France"
    },
    {
        "name": "Yoko Salas",
        "phone": "662-4684",
        "address": "370-901 Convallis St.",
        "postalZip": "136632",
        "region": "Haute-Normandie",
        "country": "Italy"
    },
    {
        "name": "Claudia Henderson",
        "phone": "1-141-497-8734",
        "address": "P.O. Box 448, 5265 Morbi Avenue",
        "postalZip": "3426",
        "region": "Nordrhein-Westphalen",
        "country": "Pakistan"
    },
    {
        "name": "Malcolm Kidd",
        "phone": "248-1275",
        "address": "Ap #213-5215 Non, Rd.",
        "postalZip": "602343",
        "region": "Guanacaste",
        "country": "Spain"
    },
    {
        "name": "Wyoming Klein",
        "phone": "1-245-457-9358",
        "address": "9687 Facilisis Rd.",
        "postalZip": "69639",
        "region": "West Sulawesi",
        "country": "Colombia"
    },
    {
        "name": "Lester Vincent",
        "phone": "1-547-737-9264",
        "address": "P.O. Box 774, 9670 Proin Ave",
        "postalZip": "2455",
        "region": "East Lothian",
        "country": "Chile"
    },
    {
        "name": "Yeo Craig",
        "phone": "544-2156",
        "address": "667-6046 Quis Street",
        "postalZip": "26884",
        "region": "Sląskie",
        "country": "Nigeria"
    },
    {
        "name": "Shannon Lancaster",
        "phone": "1-339-364-7216",
        "address": "5016 Eget Rd.",
        "postalZip": "3386",
        "region": "South Island",
        "country": "Sweden"
    },
    {
        "name": "Daniel Hunt",
        "phone": "451-4530",
        "address": "445-5596 Est, Ave",
        "postalZip": "55815",
        "region": "Tyrol",
        "country": "Netherlands"
    },
    {
        "name": "Erin Bowers",
        "phone": "834-5613",
        "address": "667-1758 Vitae Street",
        "postalZip": "2447",
        "region": "South Gyeongsang",
        "country": "Spain"
    },
    {
        "name": "Rooney Velazquez",
        "phone": "1-387-235-5106",
        "address": "221-2909 Vestibulum. Avenue",
        "postalZip": "391435",
        "region": "Rostov Oblast",
        "country": "Costa Rica"
    },
    {
        "name": "Hedy Gutierrez",
        "phone": "1-514-593-6661",
        "address": "836-637 Nec, St.",
        "postalZip": "3450 MX",
        "region": "Bến Tre",
        "country": "Peru"
    },
    {
        "name": "Dai Gordon",
        "phone": "1-289-875-0638",
        "address": "3270 Molestie St.",
        "postalZip": "887563",
        "region": "Nevada",
        "country": "Spain"
    },
    {
        "name": "Robin Carson",
        "phone": "356-4519",
        "address": "4207 Elementum, St.",
        "postalZip": "01542",
        "region": "Stirlingshire",
        "country": "Ukraine"
    },
    {
        "name": "Cecilia Talley",
        "phone": "1-423-565-5323",
        "address": "Ap #605-3756 Viverra. Rd.",
        "postalZip": "322982",
        "region": "Azad Kashmir",
        "country": "Vietnam"
    },
    {
        "name": "Gabriel Macdonald",
        "phone": "1-640-471-3843",
        "address": "2239 Eleifend Av.",
        "postalZip": "S56 2TT",
        "region": "Brussels Hoofdstedelijk Gewest",
        "country": "China"
    },
    {
        "name": "Jade Harrington",
        "phone": "1-158-732-6521",
        "address": "882-464 Semper Rd.",
        "postalZip": "798598",
        "region": "South Island",
        "country": "Austria"
    },
    {
        "name": "Yvette York",
        "phone": "1-783-407-5784",
        "address": "9152 Id, St.",
        "postalZip": "65665",
        "region": "Arequipa",
        "country": "Germany"
    },
    {
        "name": "Amena Sanders",
        "phone": "145-4532",
        "address": "463-2076 Porttitor Street",
        "postalZip": "48645",
        "region": "Connacht",
        "country": "Peru"
    },
    {
        "name": "Leonard Acosta",
        "phone": "1-476-583-2155",
        "address": "Ap #660-4845 Diam Rd.",
        "postalZip": "587846",
        "region": "Northern Mindanao",
        "country": "Belgium"
    },
    {
        "name": "Hunter Kane",
        "phone": "1-652-819-1860",
        "address": "364-6153 Facilisis. Street",
        "postalZip": "9615",
        "region": "Tyrol",
        "country": "Italy"
    },
    {
        "name": "Amir Rosales",
        "phone": "284-0198",
        "address": "851-4362 Sed Av.",
        "postalZip": "35563",
        "region": "Rio Grande do Sul",
        "country": "Nigeria"
    },
    {
        "name": "Sandra Nguyen",
        "phone": "324-3733",
        "address": "P.O. Box 887, 5688 Cursus Avenue",
        "postalZip": "811658",
        "region": "Ulster",
        "country": "South Africa"
    },
    {
        "name": "Jacqueline Cunningham",
        "phone": "1-531-538-7025",
        "address": "P.O. Box 558, 8758 Metus Av.",
        "postalZip": "R8R 1C1",
        "region": "Western Cape",
        "country": "China"
    },
    {
        "name": "Jaden Noel",
        "phone": "1-454-678-6667",
        "address": "605-6222 Risus. Street",
        "postalZip": "547123",
        "region": "South Sumatra",
        "country": "India"
    },
    {
        "name": "Owen Little",
        "phone": "154-1624",
        "address": "249-3538 Lorem St.",
        "postalZip": "16770",
        "region": "San José",
        "country": "Germany"
    },
    {
        "name": "Arsenio Gray",
        "phone": "143-8361",
        "address": "Ap #749-3312 Purus. Rd.",
        "postalZip": "6475 PD",
        "region": "Đắk Nông",
        "country": "Brazil"
    },
    {
        "name": "Kadeem Abbott",
        "phone": "626-2212",
        "address": "P.O. Box 883, 2706 Non Rd.",
        "postalZip": "00738",
        "region": "Balıkesir",
        "country": "New Zealand"
    },
    {
        "name": "Chaney Gonzales",
        "phone": "1-651-437-2845",
        "address": "637-199 Lacus. St.",
        "postalZip": "7301",
        "region": "Special Region of Yogyakarta",
        "country": "Russian Federation"
    },
    {
        "name": "Arden Mcconnell",
        "phone": "1-273-719-3047",
        "address": "2604 Aliquet, Road",
        "postalZip": "392931",
        "region": "Dōngběi",
        "country": "Nigeria"
    },
    {
        "name": "Tatiana Mendez",
        "phone": "1-642-223-8461",
        "address": "P.O. Box 659, 6239 Non Ave",
        "postalZip": "8349",
        "region": "British Columbia",
        "country": "Poland"
    },
    {
        "name": "Belle Reese",
        "phone": "727-8192",
        "address": "404-4579 Et Avenue",
        "postalZip": "483339",
        "region": "Cundinamarca",
        "country": "Peru"
    },
    {
        "name": "Yeo Weiss",
        "phone": "837-7526",
        "address": "Ap #838-2971 Eget Rd.",
        "postalZip": "61714-053",
        "region": "Querétaro",
        "country": "Turkey"
    },
    {
        "name": "Amir Cherry",
        "phone": "1-387-676-4403",
        "address": "103-7738 Cursus. Road",
        "postalZip": "41118",
        "region": "Xīběi",
        "country": "Indonesia"
    },
    {
        "name": "Xaviera Mosley",
        "phone": "1-588-387-5704",
        "address": "Ap #931-2346 Ante St.",
        "postalZip": "594889",
        "region": "Lâm Đồng",
        "country": "Colombia"
    },
    {
        "name": "Jordan Molina",
        "phone": "611-8767",
        "address": "Ap #837-1119 Integer Ave",
        "postalZip": "K1 2WV",
        "region": "Shropshire",
        "country": "Colombia"
    },
    {
        "name": "Rudyard Mathews",
        "phone": "1-515-748-6378",
        "address": "3440 Et Street",
        "postalZip": "3636 BF",
        "region": "Northern Mindanao",
        "country": "Singapore"
    },
    {
        "name": "Carl Watson",
        "phone": "1-853-447-0616",
        "address": "532-4200 Vel Ave",
        "postalZip": "356626",
        "region": "Principado de Asturias",
        "country": "Brazil"
    },
    {
        "name": "Sharon Baird",
        "phone": "440-6816",
        "address": "668-2534 Nunc St.",
        "postalZip": "439977",
        "region": "Western Visayas",
        "country": "United States"
    },
    {
        "name": "Ivy Blankenship",
        "phone": "1-236-268-4629",
        "address": "Ap #844-5584 Nulla Avenue",
        "postalZip": "6929",
        "region": "Cagayan Valley",
        "country": "Italy"
    },
    {
        "name": "Daphne Maldonado",
        "phone": "1-236-317-2457",
        "address": "Ap #652-7919 Ipsum Rd.",
        "postalZip": "IO87 6AG",
        "region": "Oyo",
        "country": "India"
    },
    {
        "name": "Lucian Glass",
        "phone": "1-981-345-6521",
        "address": "P.O. Box 424, 2714 Pede St.",
        "postalZip": "1471 KS",
        "region": "Tây Ninh",
        "country": "South Africa"
    },
    {
        "name": "Bruno Perkins",
        "phone": "547-1235",
        "address": "3910 Amet Rd.",
        "postalZip": "169412",
        "region": "Los Lagos",
        "country": "Ireland"
    },
    {
        "name": "Patience Stafford",
        "phone": "1-467-671-1046",
        "address": "252-2208 Nunc Road",
        "postalZip": "875222",
        "region": "North Island",
        "country": "Chile"
    },
    {
        "name": "Yasir Ramsey",
        "phone": "1-387-638-4128",
        "address": "9367 Varius Avenue",
        "postalZip": "Y4G 1H5",
        "region": "Huádōng",
        "country": "China"
    },
    {
        "name": "Irene Price",
        "phone": "670-8912",
        "address": "6067 Faucibus Av.",
        "postalZip": "Y5 1CV",
        "region": "Rio Grande do Sul",
        "country": "Brazil"
    },
    {
        "name": "Kiara Douglas",
        "phone": "867-6123",
        "address": "985-1213 Facilisis Av.",
        "postalZip": "711592",
        "region": "Bahia",
        "country": "Norway"
    },
    {
        "name": "Anjolie Emerson",
        "phone": "1-855-421-0988",
        "address": "P.O. Box 544, 3505 Lacinia. St.",
        "postalZip": "48-46",
        "region": "Minas Gerais",
        "country": "Netherlands"
    },
    {
        "name": "Urielle Potts",
        "phone": "1-224-707-4072",
        "address": "Ap #964-4657 Egestas. St.",
        "postalZip": "26162",
        "region": "Central Region",
        "country": "Spain"
    },
    {
        "name": "Francesca Wooten",
        "phone": "1-853-821-3432",
        "address": "Ap #859-985 Mus. St.",
        "postalZip": "58773",
        "region": "Sindh",
        "country": "Netherlands"
    },
    {
        "name": "Amela Blackwell",
        "phone": "1-336-618-2867",
        "address": "Ap #319-1227 Tellus Avenue",
        "postalZip": "65204",
        "region": "Namen",
        "country": "Singapore"
    },
    {
        "name": "Reese Rivas",
        "phone": "1-138-751-1763",
        "address": "Ap #956-4731 Pede, Street",
        "postalZip": "4817",
        "region": "Rio Grande do Sul",
        "country": "Austria"
    },
    {
        "name": "Deirdre Rose",
        "phone": "171-8266",
        "address": "716-1751 Imperdiet Ave",
        "postalZip": "61160",
        "region": "Ulster",
        "country": "United States"
    },
    {
        "name": "Jamal Conway",
        "phone": "186-9885",
        "address": "872-9673 Metus. Avenue",
        "postalZip": "25192",
        "region": "Los Ríos",
        "country": "Norway"
    },
    {
        "name": "Nehru Odom",
        "phone": "844-9728",
        "address": "868-4877 Eu Rd.",
        "postalZip": "741187",
        "region": "Aydın",
        "country": "Costa Rica"
    },
    {
        "name": "Shay Watson",
        "phone": "286-6451",
        "address": "796-8737 Nec Rd.",
        "postalZip": "3564",
        "region": "Basse-Normandie",
        "country": "Netherlands"
    },
    {
        "name": "Pascale Kramer",
        "phone": "1-695-735-3173",
        "address": "711-8407 Id Rd.",
        "postalZip": "83-068",
        "region": "Jeju",
        "country": "Ukraine"
    },
    {
        "name": "Hammett Navarro",
        "phone": "1-656-453-6045",
        "address": "P.O. Box 921, 5512 Mauris Avenue",
        "postalZip": "73964",
        "region": "Sokoto",
        "country": "Mexico"
    },
    {
        "name": "Xantha Hahn",
        "phone": "336-7394",
        "address": "404-5251 Etiam Av.",
        "postalZip": "766772",
        "region": "Västra Götalands län",
        "country": "Pakistan"
    },
    {
        "name": "Julian Riddle",
        "phone": "1-533-488-1712",
        "address": "902 Nec, Ave",
        "postalZip": "83-56",
        "region": "Kerala",
        "country": "Ireland"
    },
    {
        "name": "Ross Greene",
        "phone": "1-211-492-6972",
        "address": "Ap #958-1798 Rhoncus Road",
        "postalZip": "3631",
        "region": "Utrecht",
        "country": "Pakistan"
    },
    {
        "name": "Seth Gray",
        "phone": "1-879-311-4213",
        "address": "890-7078 Eu, Road",
        "postalZip": "08477",
        "region": "Baden Württemberg",
        "country": "Spain"
    },
    {
        "name": "Clarke Marsh",
        "phone": "115-3131",
        "address": "5712 Sed St.",
        "postalZip": "4383",
        "region": "Cundinamarca",
        "country": "United Kingdom"
    },
    {
        "name": "Raymond Carrillo",
        "phone": "453-1589",
        "address": "907-6851 Nec Rd.",
        "postalZip": "44910",
        "region": "Hải Phòng",
        "country": "Canada"
    },
    {
        "name": "Bert Stephens",
        "phone": "1-441-323-1937",
        "address": "188-1479 Cras Rd.",
        "postalZip": "84365",
        "region": "Anglesey",
        "country": "Brazil"
    },
    {
        "name": "Jane Chavez",
        "phone": "345-3272",
        "address": "Ap #852-2323 Phasellus Street",
        "postalZip": "57-083",
        "region": "Puebla",
        "country": "Vietnam"
    },
    {
        "name": "Teagan Conner",
        "phone": "1-256-224-8444",
        "address": "P.O. Box 388, 5244 Nisi. Rd.",
        "postalZip": "227667",
        "region": "North Gyeongsang",
        "country": "France"
    },
    {
        "name": "Brynne Craft",
        "phone": "974-5358",
        "address": "P.O. Box 558, 6181 Nisi Ave",
        "postalZip": "7828",
        "region": "São Paulo",
        "country": "New Zealand"
    },
    {
        "name": "Noel Landry",
        "phone": "1-109-212-6156",
        "address": "Ap #101-1601 Euismod St.",
        "postalZip": "20818",
        "region": "Newfoundland and Labrador",
        "country": "New Zealand"
    },
    {
        "name": "Tyrone Walter",
        "phone": "838-6393",
        "address": "P.O. Box 944, 4318 Luctus Rd.",
        "postalZip": "5743",
        "region": "Saskatchewan",
        "country": "Pakistan"
    },
    {
        "name": "Flavia Perez",
        "phone": "1-255-888-8055",
        "address": "P.O. Box 474, 1043 Non St.",
        "postalZip": "9425",
        "region": "Hải Dương",
        "country": "Ireland"
    },
    {
        "name": "Finn Howard",
        "phone": "371-0914",
        "address": "P.O. Box 577, 9014 Proin Street",
        "postalZip": "712069",
        "region": "Bengkulu",
        "country": "Spain"
    },
    {
        "name": "Briar Burt",
        "phone": "810-4828",
        "address": "P.O. Box 477, 1166 Nibh. Road",
        "postalZip": "837340",
        "region": "Brussels Hoofdstedelijk Gewest",
        "country": "Sweden"
    },
    {
        "name": "Aladdin Burton",
        "phone": "1-753-816-8443",
        "address": "510-2854 Elementum, Street",
        "postalZip": "36478",
        "region": "Central Region",
        "country": "Singapore"
    },
    {
        "name": "Zeus Cooke",
        "phone": "1-620-557-5581",
        "address": "505-5375 Curabitur Street",
        "postalZip": "46264",
        "region": "Texas",
        "country": "Canada"
    },
    {
        "name": "Idola Davenport",
        "phone": "1-860-568-8544",
        "address": "802-7766 Et Avenue",
        "postalZip": "695256",
        "region": "Gloucestershire",
        "country": "Mexico"
    },
    {
        "name": "Macon Rich",
        "phone": "1-816-605-4524",
        "address": "831-5677 Faucibus Rd.",
        "postalZip": "4516",
        "region": "Sicilia",
        "country": "Canada"
    },
    {
        "name": "Barry Nichols",
        "phone": "415-8816",
        "address": "638-3451 Pede. St.",
        "postalZip": "457233",
        "region": "Bolívar",
        "country": "India"
    },
    {
        "name": "Nehru Gordon",
        "phone": "467-5842",
        "address": "486-3170 Sollicitudin Av.",
        "postalZip": "8882-2238",
        "region": "Tarapacá",
        "country": "Ireland"
    },
    {
        "name": "Piper Buckner",
        "phone": "1-836-702-3553",
        "address": "9949 Dignissim Ave",
        "postalZip": "FM1V 8GT",
        "region": "Wielkopolskie",
        "country": "Turkey"
    },
    {
        "name": "Hayley Barr",
        "phone": "736-1095",
        "address": "586-5702 Etiam Av.",
        "postalZip": "1455-0686",
        "region": "Vlaams-Brabant",
        "country": "Netherlands"
    },
    {
        "name": "Merrill Willis",
        "phone": "1-888-325-7084",
        "address": "190-9523 Aliquet, Avenue",
        "postalZip": "457233",
        "region": "South Jeolla",
        "country": "Germany"
    }
]

// 1. loop through the array and print out the name of each person
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
// 2. loop through the array and print out the name and phone number of each person
for (let i = 0; i < people.length; i++) {
    const { name, phone } = people[i]
    console.log(`Name: ${name}\nGSM: ${phone}`);
}

// 3. loop through the array and print out the name and address of each person
for (let i = 0; i < people.length; i++) {
    const { name, phone, address } = people[i]
    console.log(`Name: ${name}\nAdresse: ${address}`);
}

// 4. loop through the array and print out the name and postalZip of each person
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip } = people[i]
    console.log(`Name: ${name}\npostalZip: ${postalZip}`);
}

// 5. loop through the array and print out the name and country of each person
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country } = people[i]
    console.log(`Name: ${name}\ncountry: ${country}`);
}

// 6. loop through the array and print out the name and region of each person
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country, region } = people[i]
    console.log(`Name: ${name}\nregion: ${region}`);
}

// 7. loop through the array and print out the name and phone number of each person if the country is "Canada"
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country, region } = people[i]
    country === "Canada" ? console.log(`Name: ${name}\nGSM: ${phone}`) : null
}

// 8. loop through the array and print out the name and phone number of each person if the country is "Canada" or "Mexico"
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country, region } = people[i]
    country === "Canada" || country === "Mexico" ? console.log(`Name: ${name}\nGSM: ${phone}`) : null
}

// 9. loop through the array and print out the name and phone number of each person if the country is "Canada" or "Mexico" or "Ireland"
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country, region } = people[i]
    country === "Canada" || country === "Mexico" || country === "Ireland" ? console.log(`Name: ${name}\nGSM: ${phone}`) : null
}

// 10. loop through the array and compare the postalZip of each person to the postalZip and print out the name and postalZip of each person if the postalZip is the same as the postalZip of the person in the array
let found = []
for (let i = 0; i < people.length; i++) {
    const { name, phone, address, postalZip, country, region } = people[i]
    let getData = people.filter( person =>{
        return person.postalZip === postalZip
    })
    found = getData
}
console.log(found);

// Atilla Solutions 

// 1. loop through the array and print out the name of each person
// people.forEach(person=>{
//     console.log(person.name)
// })

// 2. loop through the array and print out the name and phone number of each person
// people.forEach(person=>{
//     console.log(`Phone: ${person.phone}\nName: ${person.name}`)
// })

// 3. loop through the array and print out the name and address of each person
// for(let x=0;x<people.length;x++){
//     console.log(`name:${people[x].name}\naddress:${people[x].address}`)
// }

// 4. loop through the array and print out the name and postalZip of each person
// for(let person of people){
//     console.log(`Name:${person.name}\nPostalZip:${person.postalZip}`)
// }

// 5. loop through the array and print out the name and country of each person
// people.map(person=>console.log(`Name:${person.name}\nCountry:${person.country}`))

// 6. loop through the array and print out the name and region of each person
// people.map(person=>console.log(`Name:${person.name}\nRegion:${person.region}`))

// 7. loop through the array and print out the name and phone number of each person if the country is "Canada"
// people.forEach(person=>{
//     if(person.country==='Canada'){
//         console.log(`Name:${person.name}\nPhone:${person.phone}`)
//     }
// })

// 8. loop through the array and print out the name and phone number of each person if the country is "Canada" or "Mexico"
// people.forEach(person=>{
//     if(person.country==='Canada' || person.country==='Mexico'){
//         console.log(`Name:${person.name}\nPhone:${person.phone}`)
//     }
// })


// 9. loop through the array and print out the name and phone number of each person if the country is "Canada" or "Mexico" or "Ireland"
// people.forEach(person=>{
//     if(person.country==='Canada' || person.country==='Mexico' || person.country==='Ireland'){
//         console.log(`Name:${person.name}\nPhone:${person.phone}`)
//     }
// })

// for (let x = 0; x < people.length; x++) {
//     if (people[x].country === 'Canada' || people[x].country === 'Mexico' || people[x].country === 'Ireland') {
//         console.log(`Name:${people[x].name}\nPhone:${people[x].phone}`)
//     }
// }


// 10. loop through the array and compare the postalZip of each person to the postalZip and print out the name and postalZip of each person if the postalZip is the same as the postalZip of the person in the array
// let found=[]
// for(let i=0;i<people.length;i++){
//     let getData = people.filter(function(person){
//         return person.postalZip === people[i].postalZip
//     })
//     found=getData
// }

// console.log(found)