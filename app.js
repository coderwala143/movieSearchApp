const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imgPath =  "https://image.tmdb.org/t/p/w1280";

const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector(".main");

const getMovies = async(api) => {
        let res = await fetch(api);
        let data = await res.json();
        showMovies(data.results);
        
}

const showMovies = (data) => {
    main.innerHTML="";
    data.forEach(
        (item) => {
            console.log(item);
            const box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = `
            <div class="img">
            <img src="${imgPath + item.poster_path}" alt="">
        </div>
        <div class="description">
            <div>

            <h3>${item.original_title
                }</h3>
            <h2>${item.vote_average}</h2>
            </div>
            <div>
            <h3>Overview</h3>
            <p>${item.overview}</p>
            </div>
            </div>
            `

            main.appendChild(box);

        });
    };
    

    const inputValue = document.querySelector("#inputValue");

    inputValue.addEventListener('keyup', function(event){
        if(event.target.value != ""){
            getMovies(searchApi + event.target.value);
        }
        else{
            getMovies(APIURL);
        }
    });

getMovies(APIURL);