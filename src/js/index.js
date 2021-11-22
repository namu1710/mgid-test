$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
})

function chooseCountry(){
    let select = document.querySelector('.select')
    let option = document.querySelector('.option')
    let country = document.querySelectorAll('.option-list-item')
    let textBtn = document.querySelector('#text-button')

    select.addEventListener('click', function(e){
        option.classList.toggle('option-active')
    })
     
    for (let i=0; i<country.length; i++){
        country[i].addEventListener('click', function(){
                
            let text = this.textContent
            textBtn.textContent = text
            })
        }
    }

chooseCountry()

