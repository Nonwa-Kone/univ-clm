import { sectorsUniv } from "../database/database.js";


// DECLARATION DES CONSTANTES
const filiere = document.getElementById('list-filiere')


sectorsUniv.forEach((sector=>{
    const options = document.querySelectorAll('option#sector-list')
    filiere.innerHTML += `<option value="${sector.sector_name}" id="sector-list">${sector.sector_name}</option>`
    console.log(options);
}))