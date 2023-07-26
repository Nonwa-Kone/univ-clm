const firstStatistic = document.querySelectorAll('#first-statistic');

firstStatistic.forEach(element => {
    element.addEventListener('mousemove', (e)=>{
        if(e.currentTarget.dataset.item === "1"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-chapeau-de-diplôme-100-hover.png" alt="Diplôme reconnus" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase text-light">Diplômes reconnus</h5>
            </div>
            `
        } else if(e.currentTarget.dataset.item === "2"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-haute-qualité-100-hover.png" alt="Une formation de qualité" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase text-light">Une formation de qualité</h5>
            </div>
            `
        } else if(e.currentTarget.dataset.item === "3"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-internship-100-hover.png" alt="Offre de stage" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase text-light">Offre de stage</h5>
            </div>
            `
        }else{
            element.innerHTML =  null
        }
    })

    element.addEventListener('mouseout', (e)=>{
        console.log(e);
        if(e.currentTarget.dataset.item === "1"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-diplômé-80.png" alt="Diplôme reconnus" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase">Diplôme reconnus</h5>
            </div>
            `
        } else if(e.currentTarget.dataset.item === "2"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-haute-qualité-50.png" alt="Une formation de qualité" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase">Une formation de qualité</h5>
            </div>
        `
        } else if(e.currentTarget.dataset.item === "3"){
            element.innerHTML = `
            <div class="ps-4 d-flex flex-column justify-content-center align-items-center text-item">
                <img src="./img/partenaires/icons8-internship-100.png" alt="Offre de stage" srcset="" style="width: 100px;">
                <h5 class="text-center text-uppercase">Offre de stage</h5>
            </div>
        `
        }
    })
});
