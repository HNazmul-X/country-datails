const countriesBoxArea = document.getElementById('all-countries-area');
const infoCountryName = document.querySelector(".all-info #country-name");
const infoFlag = document.querySelector(".all-info #flag");
let code = ""
var idName = '';
fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => {
  console.log(data)
    for(let i =0; i < data.length; i ++){
        const countriesbox = document.createElement("div");
        countriesbox.className = "countries-box";
        const countryName = document.createElement("h3");
        const countrycapital = document.createElement("h5");
        const viewDetailsBtn = document.createElement("button")
        viewDetailsBtn.innerText = "view Datails"
        viewDetailsBtn.className = "view-datails"
        viewDetailsBtn.id = data[i].alpha2Code;

        countryName.innerText =data[i].name;
        countrycapital.innerText = data[i].capital

        countriesBoxArea.appendChild(countriesbox);
        countriesbox.appendChild(countryName);
        countriesbox.appendChild(countrycapital)
        countriesbox.appendChild(viewDetailsBtn)

       

    }

    const datailsBtn  = document.querySelectorAll(".countries-box button");
    for (let i = 0; i < datailsBtn.length; i++) {
      datailsBtn[i].addEventListener("click", (e) => {
         code = e.target.id
          console.log(code);
          const datailsUrl = `https://restcountries.eu/rest/v2/alpha/${code}`;

          fetch(datailsUrl)
          .then(res => res.json())
          .then(data => {
            infoFlag.src = data.flag;
          })

      });
    }
    
     
})












// /* create h1 item funtin */
// const creatH1 = (text) =>{
//     const h1 = document.createElement('h1')
//     h1.textContent = text;
//     return h1;
// }
// /* create h2 item funtin */
// const createH2 = (text) =>{
//     const h2 = document.createElement('h1')
//     h2.textContent = text;
//     return h2;
// }

// const appendChildren = (parents,children) =>{
//     for(let i = 0; i < children.length; i ++){
//         parents.appendChild(children[i]);
//         children[i].id = idName
//     }
// }


// const items = [
//     creatH1('Dom'),
//     creatH1("nazmul"),
//     creatH1("sabina"),
// ]

// appendChildren(countriesBoxArea,items);




