/*
<article class="newscard">
                        <img src="http://via.placeholder.com/350x150/5ec8f8/fff    " alt="">
                        <h3 class="title">Lorem Ipsum is simply dummy text </h3>
                        <p class="desc">It has survived not only five centuries, but also the leap into electronic
                            typesetting</p>
                        <div class="location">africa</div>
                    </article>
*/
// step1: fetch the data from the news.json file

const NewsContainer = document.querySelector('.news')
let parser = new DOMParser()

// step1: fetch the data from the news.json file
fetch('news.json')
.then(res=>res.json())
.then(data=>{
    data.database.forEach(news=>{
       // console.log(news)
        let html_news = parser.parseFromString(`<article class="newscard">
        <img src="${news.news_image}" alt="">
        <h3 class="title">${news.news_title}</h3>
        <p class="desc">${news.news_desc}</p>
        <div class="location">${news.news_location}</div>
    </article>`,'text/html')
   // console.log(html_news.body.firstChild)
    NewsContainer.appendChild(html_news.body.firstChild)
    })
})



// step2: create the news card

// step3: append the news card to the news container