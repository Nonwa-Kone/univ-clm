import { sectorsUniv } from "./database/database.js";



const listBox = document.getElementById('detail-filiere-universitaire')

sectorsUniv.map((sector)=>{
    listBox.innerHTML+=`
    <li class="list-group-item fs-5 p-4 fw-bold">${sector.sector_name}</li>
    `
})    

