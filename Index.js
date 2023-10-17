/* SHOW MENU */
const navMenu = document.getElementById('nav--menu'),
      navToggle = document.getElementById('nav--toggle'),
      navClose = document.getElementById('nav--close')

/* MENU SHOW */
/* Using the If statement */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU BY CLICKING OPTIONS MOBILE */ 
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav--menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SHADOW HEADER */
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}

window.addEventListener('scroll',shadowHeader)

/* EMAIL JS */
const contactForm = document.getElementById('contact--form')
      contactMessage = document.getElementById('contact--message')
      
const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateId - #form - publicKey from emailjs
    emailjs.sendForm('service_p49l56j','template_w8kn44e','#contact--form','Npmng0ZGaa0hDoLt3')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully :)'

        //remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000)
        //clear input fields
        contactForm.reset()
    }, () => {
        //show error message
        contactMessage.textContent = 'Message not sent :('
    })
    } 

    contactForm.addEventListener('submit', sendEmail)

/* SHOW SCROLL UP */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTION ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)