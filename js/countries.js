const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries => {
    // for (const country of countries)
    // console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3 >
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Click</button> `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);

    })
}
const loadCountryByName = name => {
    // console.log(name);
    const url = `https://restcountries.com/v2/name/${name}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetail(data[0]))


}
const displayCountriesDetail = detail => {
    console.log(detail);
    const divCont = document.getElementById('country-name');
    divCont.innerHTML = `
       <h2>${detail.name}</h2>
       <h2>${detail.capital}</h2>
       <img width="200px" src="${detail.flag}">`
}