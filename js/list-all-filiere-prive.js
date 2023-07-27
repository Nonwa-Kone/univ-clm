import { sectorsPrive } from "./database/database-prive.js";


const listBoxPrive = document.getElementById("detail-filiere-grande-ecole")

sectorsPrive.map((sector)=>{
    listBoxPrive.innerHTML+=`
    <li class="list-group-item fs-5 p-4 fw-bold">${sector.sector_name}</li>
    `
})    


