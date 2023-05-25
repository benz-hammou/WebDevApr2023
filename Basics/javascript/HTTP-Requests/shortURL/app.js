const LinkNeedToBeShorten = document.getElementById("link"); // <input> tag
const QRCodeImage = document.getElementById("qrcode"); // <img> tag
const shortURLText = document.getElementById("short_url"); // <p> tag


let baseURL = "https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url="; // base URL for 1pt.co

async function MakeShortURL(){
    QRCodeImage.innerHTML=""

    console.log(LinkNeedToBeShorten.value);
    console.log(encodeURIComponent(LinkNeedToBeShorten.value));

    const FullLink = `${baseURL}${encodeURIComponent(LinkNeedToBeShorten.value)}`

    let res = await fetch(FullLink)
    let data = res.json()
  
    data.then(obj=>{
        const ShortObj = {
            ShortURL : `https://1pt.co/${obj.short}`,
            QRImage:''
        }

        shortURLText.href=ShortObj.ShortURL
        shortURLText.innerText = `Short URL: ${ShortObj.ShortURL}`

        var qrcode = new QRCode("qrcode", {
           text: ShortObj.ShortURL,
           width: 128,
           height: 128,
           colorDark : "#000000",
           colorLight : "#ffffff",
           correctLevel : QRCode.CorrectLevel.H
        });
    })

}

