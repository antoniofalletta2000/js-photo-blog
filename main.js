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

            const markup = `<div class="col">
                <div class="card">
                    <div class="card-body">
                        <img src="${url}" alt="">
                        <p class="image_description">${title}
                        </p>
                            <p class="image_description">${date}
                        </p>
                    </div>
                </div>
            </div>`
            rowEl.innerHTML += markup
            
        });
    })
}
renderCards()
