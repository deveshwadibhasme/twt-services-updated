const menu = document.querySelector('.menu')
const header = document.querySelector('header')
const productContainer = document.querySelector('.product-container')
const servicesContainer = document.querySelector('.services-container')


fetch('item.json')
.then((allItems)=>allItems.json())
.then((items)=>{
    items.forEach((item)=>{
        const div = document.createElement('div')
        div.className = 'product-item'
        div.innerHTML = ` 
                <div class="image-cnt">
                    <img src="${item.img}" alt="">
                    <span id="arrow">&DoubleUpArrow;</span>
                </div>
                <div class="product-info">
                    <h3 class="title">${item.title}</h3>
                    <p>${item.info}</p>
                </div>
                `
        productContainer.appendChild(div)
    })
})

fetch('services.json')
.then((allServices)=>allServices.json())
.then((services)=>{
    services.forEach((service)=>{
        const div = document.createElement('div')
        div.className = 'services-provides'
        div.innerHTML = ` 
                <div class="image-cnt">
                    <img src="${service.img}" alt="">
                    <span id="arrow">&DoubleUpArrow;</span>
                </div>
                <div class="services-info">
                    <h3 class="title">${service.title}</h3>
                    <p>${service.info}</p>
                </div>`
        servicesContainer.appendChild(div)
    })
})

function loader() {
    document.querySelector('#preloader').style.transform = 'translateY(-100%)'
}
function scrolling() {
    document.body.style.overflow = 'visible'
}

window.addEventListener('load', () => {
    setTimeout(loader, 1500)
    setTimeout(scrolling,2000)
})

menu.addEventListener('click', () => {
    header.classList.toggle('active')
})

menu.addEventListener('touchup', () => {
    menu.classList.toggle('active')
    header.classList.toggle('active')
})
