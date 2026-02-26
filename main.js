const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

const rowEl = document.getElementById("riga")

function renderCards() {
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        /* console.log(data); */

        data.forEach(element => {
            /*  console.log(element); */
            const { title, date, url } = element

            const markup = 
            `<div class="col">
                <div class="card position-relative">
                    <div class="card-body">
                        <img id="punta" class="punta img-fluid position-absolute top-0 start-50 translate-middle" src="./assets/img/pin.svg" alt="">
                        <img class="img-fluid" src="${url}" alt="">
                        <p class="image_description pt-3">${title}
                        </p>
                        <p class="image_date">${date}
                        </p>
                    </div>
                </div>
            </div>`
            rowEl.innerHTML += markup
            
        });
    })
}
renderCards()

const overlayEl=document.getElementById("overlay")

rowEl.addEventListener("click", (e)=>{
    console.log("elemento cliccato");
    
    if(e.target.tagName==="IMG"){
        overlayEl.classList.remove("d-none")
        
    }
})

const buttonEl=document.getElementById("btn")

buttonEl.addEventListener("click", (e)=>{
    if(e.target.tagName==="BUTTON"){
        overlayEl.classList.add("d-none")
    }
})