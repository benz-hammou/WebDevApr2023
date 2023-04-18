const githubCards = document.querySelector('.github-cards')

async function getRepos() {
    let url = 'https://api.github.com/users/benz-hammou/repos'
    try {
        let res = await fetch(url)
        return await res.json();
    } catch (error) {
        console.log('Error in the API, Dude ...');
    }
}

getRepos()
    .then(data => data)
    .then((allRepos) => {
        allRepos.map((single_repo) => {

            console.log(single_repo);
            console.log(single_repo.name);
            console.log(single_repo.html_url);

            // Node element (it is not domstring)
            const parse = document.createRange().createContextualFragment(` <a href="${single_repo.html_url}" class="github-card" data-github="@username" target="_blank" >
        <h3>${single_repo.name}</h3>
        <p>${single_repo.html_url}</p>
        <span class="github-card__meta">
            <span class="github-card__language-icon" style="color: #7A0410;">●</span> Javascript
        </span>
        <span class="github-card__meta">
            <i class="fa fa-star" aria-hidden="true"></i>
            <span data-stars>
                <i class="fa fa-spinner" aria-hidden="true"></i>
            </span>
        </span>
        <span class="github-card__meta">
            <i class="fa fa-code-fork" aria-hidden="true"></i>
            <span data-forks>
                <i class="fa fa-spinner" aria-hidden="true"></i>
            </span>
        </span>
    </a>`)
            githubCards.appendChild(parse)
        })
    });