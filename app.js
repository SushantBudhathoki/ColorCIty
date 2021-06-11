const bar = document.getElementById('mobile-menu')
const navbarMenu = document.querySelector('.navbar-menu')
const navbarLogo = document.getElementById ('navbar-logo')

bar.addEventListener('click', () =>{
  bar.classList.toggle('is-active')
  navbarMenu.classList.toggle('active')
})



function highlightMenu(){
  const elem = document.querySelector('.highlight')
  const homeMenu = document.getElementById('home-page')
  const aboutMenu = document.getElementById('about-page')
  const servicesMenu = document.getElementById('services-page')

  let scrollpos = window.scrollY
  
  if(window.innerWidth > 960 && scrollpos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollpos < 1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollpos < 1900){
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    homeMenu.classList.remove('highlight')
    return
  }

  if ((elem && window.innerWidth < 960 && scrollpos <600) || elem ){
    elem.classList.remove('highlight')
  } 
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMenuBar = ()=> {
  const menubars = document.querySelector('.is-active')
  if(window.innerWidth<=960 && menubars){
    navbarMenu.classList.remove('active')
    bar.classList.remove('is-active')
  }
}

navbarMenu.addEventListener('click',hideMenuBar)
navbarLogo.addEventListener('click',hideMenuBar)
