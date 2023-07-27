import { sectorsPrive } from "../database/database-prive.js";

const filiere = document.getElementById('list-filieres')

sectorsPrive.sort((a,b)=>a-b)

sectorsPrive.map((sector=>{
    const options = document.querySelectorAll('option#sector-list')
    filiere.innerHTML += `<option value="${sector.sector_name}" id="sector-list">${sector.sector_name}</option>`
    console.log(options);
}))