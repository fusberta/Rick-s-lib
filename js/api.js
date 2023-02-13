/*
function getTranslate() {
    fetch("https://rickandmortyapi.com/api/character/1", {method: 'get'})
        .then(response=>response.json())
        .then(result=>{
            fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${result.status}`)
                .then(response=>response.json())
                .then(result=>{
                    console.log(result[0][0][0]);
                })
        })
}
*/

const shcase = document.querySelector('.showcase')
function getPage(num) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${num}`, {method: 'get'})
        .then(response=>response.json())
        .then(result=>{
            for(let i = 0; i < result.results.length; i++) {
                
                shcase.innerHTML += 
                `<article class="showcase__hero">
                    <div class="showcase__hero-img">
                        <img src="${result.results[i].image}">
                    </div>
                    <div class="showcase__hero-card">
                        <div class="hero-card__segment1">
                            <a class="hero-card__link" href="#">
                                ${result.results[i].name}
                            </a>
                            <span class="hero-card__status">
                                <img src="res/img/${result.results[i].status}-status.png" class="status__icon"> 
                                ${result.results[i].status}
                            </span>
                        </div>    
                        <div class="hero-card__segment2">
                            <span class="hero-card__last-location-text">Последнее появление:</span>
                            <a href="#" class="hero-card__last-location-link">${result.results[i].location.name}</a>
                        </div>
                        <div class="hero-card__segment3">
                            <span class="hero-card__first-location-text">Происхождение:</span>
                            <a href="#" class="hero-card__first-location-link">${result.results[i].origin.name}</a>
                        </div>
                    </div>
                </article>`
            }
        })
}

getPage(6)






