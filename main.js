// TOGGLE STYLE SWITCHER

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
     document.querySelector('.style-switcher').classList.toggle('open');
})

// hide switcher while scrolling

window.addEventListener('scroll', () => {
     if(document.querySelector('.style-switcher').classList.contains('open')) {
          document.querySelector('.style-switcher').classList.remove('open')
     }
})

// THEMES

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
     alternateStyles.forEach( (style) => {
          if(color === style.getAttribute('title')) {
               style.removeAttribute('disabled');
          }
          else {
               style.setAttribute('disabled' , 'true');
          }
     })
}


// DARK THEME


const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
     dayNight.querySelector('i').classList.toggle('fa-sun');
     dayNight.querySelector('i').classList.toggle('fa-moon');
     document.body.classList.toggle('dark');
})
window.addEventListener('load', ()=> {
     if (document.body.classList.contains('dark')) {
          dayNight.querySelector('i').classList.add('fa-sun');
     }
     else {
          dayNight.querySelector('i').classList.add('fa-moon');
     }
})

// Typing Animation

var typed = new Typed('.typing', {
     strings: ['','Web Designer','Web Developer','Front-End Developer','Gamer'],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
})

// ASIDE - SECTION SELECTOR

const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li'),
allSections = document.querySelectorAll('.section')


          // LOOP TO SELECT LINKS [Home-About-Services-Portfolio-Contact]
     for(let i=0 ; i<navList.length ; i++) {
          const a = navList[i].querySelector('a');
          // Event While Clicking on one link from the list ==> Do function to
          /*
          1.  On click add active class to link element ( .nav-bar a )
          2. Show Selected Section with aniamtion and hide other sections
          3. If link element contain active class >> add back-section class and remove active
          */
          a.addEventListener('click', function() {



               for(let i=0 ; i<allSections.length ; i++) {
                    allSections[i].classList.remove('back-section');
               }
               for(let j=0 ; j<navList.length ; j++) 
               {
                    if(navList[j].querySelector('a').classList.contains('active')) {
                         allSections[j].classList.add('back-section')
                    }
                    navList[j].querySelector('a').classList.remove('active');
               }
               this.classList.add('active');
               showSection(this);
               if (window.innerWidth <1200) {
                    asideSectionTogglerBtn();
               }
          })
     }
function showSection(element) {
     for(let i=0 ; i<allSections.length ; i++) {
          allSections[i].classList.remove('active');
     }
     const target = element.getAttribute('href').split('#')[1];
     document.querySelector('#'+target).classList.add('active')
}

// Aside Nav Toggler

const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');

      navTogglerBtn.addEventListener('click' , () => {
          asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn() {
          aside.classList.toggle('open');
          navTogglerBtn.classList.toggle('open');
          for (let i=0 ; i<allSections.length ; i++) {
               allSections[i].classList.toggle('open')
          }
      }