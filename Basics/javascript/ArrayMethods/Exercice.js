const data = [{
    "id": 1,
    "first_name": "Salmon",
    "last_name": "Duplan",
    "email": "sduplan0@seesaa.net"
}, {
    "id": 2,
    "first_name": "Jase",
    "last_name": "Rowesby",
    "email": "jrowesby1@godaddy.com"
}, {
    "id": 3,
    "first_name": "Rowney",
    "last_name": "De Blasiis",
    "email": "rdeblasiis2@tuttocitta.it"
}, {
    "id": 4,
    "first_name": "Kermit",
    "last_name": "Nayshe",
    "email": "knayshe3@soundcloud.com"
}, {
    "id": 5,
    "first_name": "Elbert",
    "last_name": "Bellinger",
    "email": "ebellinger4@oaic.gov.au"
}, {
    "id": 6,
    "first_name": "Munroe",
    "last_name": "Kubica",
    "email": "mkubica5@networksolutions.com"
}, {
    "id": 7,
    "first_name": "Sherline",
    "last_name": "Mewis",
    "email": "smewis6@newsvine.com"
}, {
    "id": 8,
    "first_name": "Lilah",
    "last_name": "Tredget",
    "email": "ltredget7@businesswire.com"
}, {
    "id": 9,
    "first_name": "Maren",
    "last_name": "Paxforde",
    "email": "mpaxforde8@slate.com"
}, {
    "id": 10,
    "first_name": "Heida",
    "last_name": "Dallow",
    "email": "hdallow9@pcworld.com"
}, {
    "id": 11,
    "first_name": "Dina",
    "last_name": "Ivanin",
    "email": "divanina@goo.ne.jp"
}, {
    "id": 12,
    "first_name": "Moe",
    "last_name": "Pierri",
    "email": "mpierrib@mac.com"
}, {
    "id": 13,
    "first_name": "Anselm",
    "last_name": "Prince",
    "email": "aprincec@zimbio.com"
}, {
    "id": 14,
    "first_name": "Talya",
    "last_name": "Chave",
    "email": "tchaved@ycombinator.com"
}, {
    "id": 15,
    "first_name": "Siobhan",
    "last_name": "Trusse",
    "email": "strussee@bloomberg.com"
}, {
    "id": 16,
    "first_name": "Karel",
    "last_name": "Ablett",
    "email": "kablettf@nasa.gov"
}, {
    "id": 17,
    "first_name": "Itch",
    "last_name": "Monck",
    "email": "imonckg@gov.uk"
}, {
    "id": 18,
    "first_name": "Leda",
    "last_name": "Chaffyn",
    "email": "lchaffynh@arstechnica.com"
}, {
    "id": 19,
    "first_name": "Felecia",
    "last_name": "Overell",
    "email": "foverelli@tumblr.com"
}, {
    "id": 20,
    "first_name": "Dickie",
    "last_name": "Stoltz",
    "email": "dstoltzj@phpbb.com"
}, {
    "id": 21,
    "first_name": "Mohamed",
    "last_name": "Benz",
    "email": "mohamedb@microsoft.com"
}]

data.forEach(function (value) {
    console.log(`Fullname; ${value.first_name.concat(" " + value.last_name)}\nEmail; ${value.email}`);

})




const btn = document.getElementById('btn')
const output = document.getElementById('output')

function ClickHandler(){
    output.innerHTML=""
    //alert(1)
    data.forEach(function(user){
        output.innerHTML+=`<li>${user.first_name}</li>`
    })
}

// Expected output
/*
Fullname; Dickie Stoltz
Email: dstoltzj@phpbb.com
*/