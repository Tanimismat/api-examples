const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
    const countryContainer = document.getElementById('countries');
    for (country of countries) {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <h3>${country.capital}</h3> 
            <img src="${country.flags.png}">
            <br> 
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        countryContainer.appendChild(div)
    }

    /* const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country)
        const h3 = document.createElement('h3');
        h3.innerText = country.name.official;
        countriesDiv.appendChild(h3)
    }); */
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country)
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML = `
        <h4>Country:${country.name.official}</h4>
        <h4>Capital:${country.capital}</h4>
        <h4>Currency:${country.population}</h4>
        <img src="${country.maps.googleMaps}">
    `
}
