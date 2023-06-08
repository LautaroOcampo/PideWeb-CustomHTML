const URLactual = window.location.pathname
const marcasSection = document.getElementsByClassName('marcas-section')[0]
const destacadasSection = document.getElementsByClassName('destacadas-section')[0]
const destacadasSection2 = document.getElementsByClassName('destacadas-section2')[0]
const destacadasTitleDiv = document.getElementsByClassName('destacadas-title-div')[0]
const newsletterSection = document.getElementsByClassName('p-body')[0]
const pagosSection = document.getElementsByClassName('pagos-section')[0]

if(screen.width < 767){
    destacadasSection.classList.remove('invisible')
    destacadasSection2.classList.add('invisible')
}

if(URLactual !== '/'){
        marcasSection.classList.add('invisible')
        destacadasTitleDiv.classList.add('invisible')
        newsletterSection.classList.add('invisible')
        pagosSection.classList.add('invisible')
        destacadasSection2.classList.add('invisible')
        destacadasSection.classList.add('invisible')
}

if(screen.width < 960){
    document.getElementsByClassName('hr')[0].classList.toggle('invisible')
    document.getElementsByClassName('hr')[1].classList.toggle('invisible')
    document.getElementsByClassName('hr')[2].classList.toggle('invisible')
}

const arrow = document.getElementsByClassName('arrow-menu')
const categorias = document.getElementsByClassName('categorias-mobile')
const subcategorias = document.getElementsByClassName('subcategorias')
const subcategorias2 = document.getElementsByClassName('subcategorias2')
let arrowActivated0
let arrowActivated1
let arrowActivated2
let arrowActivated3
let arrowActivated4
let arrowActivated5
let arrowActivated6

categorias[0].style.backgroundColor = 'rgb(1,33,118)'

arrow[0].addEventListener('click', (e) => {

    if(arrowActivated0){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[1].style.backgroundColor = ''
        arrowActivated0 = false
        
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[1].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated0 = true
    }
    subcategorias[0].classList.toggle('invisible')
    subcategorias[1].classList.toggle('invisible')
    subcategorias[2].classList.toggle('invisible')
    subcategorias[3].classList.toggle('invisible')
    subcategorias[4].classList.toggle('invisible')
})
arrow[1].addEventListener('click', (e) => {

    if(arrowActivated1){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[2].style.backgroundColor = ''
        arrowActivated1 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[2].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated1 = true
    }

    subcategorias[5].classList.toggle('invisible')
    subcategorias[6].classList.toggle('invisible')
    subcategorias[7].classList.toggle('invisible')
    subcategorias[8].classList.toggle('invisible')
    subcategorias[9].classList.toggle('invisible')

    subcategorias2[0].classList.add('invisible')
    subcategorias2[1].classList.add('invisible')
    subcategorias2[2].classList.add('invisible')
    subcategorias2[3].classList.add('invisible')
    subcategorias2[4].classList.add('invisible')
})
arrow[2].addEventListener('click', (e) => {

    if(arrowActivated2){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[3].style.backgroundColor = ''
        arrowActivated2 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[3].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated2 = true
    }

    subcategorias2[0].classList.toggle('invisible')
    subcategorias2[1].classList.toggle('invisible')

    
})
arrow[3].addEventListener('click', (e) => {

    if(arrowActivated3){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[4].style.backgroundColor = ''
        arrowActivated3 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[4].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated3 = true
    }

    subcategorias2[2].classList.toggle('invisible')
    subcategorias2[3].classList.toggle('invisible')
    subcategorias2[4].classList.toggle('invisible')
})
arrow[4].addEventListener('click', (e) => {

    if(arrowActivated4){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[5].style.backgroundColor = ''
        arrowActivated4 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[5].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated4 = true
    }

    subcategorias[10].classList.toggle('invisible')
    subcategorias[11].classList.toggle('invisible')
    subcategorias[12].classList.toggle('invisible')
    subcategorias[13].classList.toggle('invisible')
})
arrow[5].addEventListener('click', (e) => {

    if(arrowActivated5){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[6].style.backgroundColor = ''
        arrowActivated5 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[6].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated5 = true
    }

    subcategorias[14].classList.toggle('invisible')
    subcategorias[15].classList.toggle('invisible')
})
arrow[6].addEventListener('click', (e) => {

    if(arrowActivated6){
        e.target.style.transform = 'rotate(-0deg)'
        categorias[7].style.backgroundColor = ''
        arrowActivated6 = false
    }else{
        e.target.style.transform = 'rotate(90deg)'
        categorias[7].style.backgroundColor = 'rgb(1,33,118)'
        arrowActivated6 = true
    }

    subcategorias[16].classList.toggle('invisible')
    subcategorias[17].classList.toggle('invisible')
})

// let categoriaDestacada1 = document.getElementsByClassName('destacadas-img-div1')[0]
// let categoriaDestacada2 = document.getElementsByClassName('destacadas-img-div2')[0]
// let categoriaDestacada3 = document.getElementsByClassName('destacadas-img-div3')[0]

// let nombreCategoriaDestacada1 = document.getElementsByClassName('destacadas-img-title')[0]
// let nombreCategoriaDestacada2 = document.getElementsByClassName('destacadas-img-title')[1]
// let nombreCategoriaDestacada3 = document.getElementsByClassName('destacadas-img-title')[2]

// if(screen.width >= 1000){
//     categoriaDestacada1.addEventListener('mouseenter', () => {
//         nombreCategoriaDestacada1.classList.toggle('invisible')
//     })
    
//     categoriaDestacada1.addEventListener('mouseleave', () => {
//         nombreCategoriaDestacada1.classList.toggle('invisible')
//     })
    
//     categoriaDestacada2.addEventListener('mouseenter', () => {
//         nombreCategoriaDestacada2.classList.toggle('invisible')
//     })
    
//     categoriaDestacada2.addEventListener('mouseleave', () => {
//         nombreCategoriaDestacada2.classList.toggle('invisible')
//     })
    
//     categoriaDestacada3.addEventListener('mouseenter', () => {
//         nombreCategoriaDestacada3.classList.toggle('invisible')
//     })
    
//     categoriaDestacada3.addEventListener('mouseleave', () => {
//         nombreCategoriaDestacada3.classList.toggle('invisible')
//     })
// }else{
//     nombreCategoriaDestacada1.classList.remove('invisible')
//     nombreCategoriaDestacada2.classList.remove('invisible')
//     nombreCategoriaDestacada3.classList.remove('invisible')
// }


const marcasDiv = document.querySelector('.marcas-div');
let isDown = false;
let startX;
let scrollLeft;

marcasDiv.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - marcasDiv.offsetLeft;
    scrollLeft = marcasDiv.scrollLeft;
    marcasDiv.style.scrollBehavior = 'auto';
});

marcasDiv.addEventListener('mouseleave', () => {
    isDown = false;
});

marcasDiv.addEventListener('mouseup', () => {
    isDown = false;
    marcasDiv.style.scrollBehavior = 'smooth';
});

marcasDiv.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marcasDiv.offsetLeft;
    const walk = (x - startX) * 2;
    marcasDiv.scrollLeft = scrollLeft - walk;
});

const componentWrapper = document.querySelectorAll(".component-wrapper");
const marcas = document.querySelector(".marcas-section");
const arrepentimiento = document.querySelector(".buyer-info");
const pagos = document.querySelector(".pagos-section");

if (URLactual == "/") {
  setTimeout(function () {
    $(document).ready(function () {
      $(marcas).insertAfter($(componentWrapper[0]));
    });

    $(document).ready(function () {
        $(arrepentimiento).insertAfter($(pagos));
    });
  }, 500);
}

if(URLactual === '/'){
    setTimeout(() => {
    const titulo = document.getElementsByClassName('section-header__original');

    let divNuevo = document.createElement('div');
    divNuevo.classList.add('div-titulo');

    let divNuevo2 = document.createElement('div');
    divNuevo2.classList.add('div-titulo');

    let divNuevo3 = document.createElement('div');
    divNuevo3.classList.add('div-titulo');

    let divNuevo4 = document.createElement('div');
    divNuevo4.classList.add('div-titulo');

    titulo[0].appendChild(divNuevo);
    titulo[1].appendChild(divNuevo2);
    titulo[2].appendChild(divNuevo3);
    titulo[3].appendChild(divNuevo4);


    }, 500)
}

// const categoriasDiv = document.getElementsByClassName('carousel-container')

// for(let i = 1 ; i < categoriasDiv.length ; i++){
//     categoriasDiv[i].style.maxWidth = "1200px !important";
// }
