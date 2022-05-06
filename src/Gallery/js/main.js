//jshint esversion:6
// $(window).on('load', () => {
//     $('.bdy').fadeOut('slow');
// });

let hamburger = document.querySelector('#hamburger'),
 navlinks = document.querySelector('#navlinks'),
 line = hamburger.querySelector('#line'),
 line2 = hamburger.querySelector('#line2');

hamburger.addEventListener('click', ()=>{
return (navlinks.classList.contains('hidden')) ? 
        (navlinks.classList.remove('hidden'),
        line.classList.add('absolute','rotate-45'),
        line2.classList.add('absolute','-rotate-45'),
        line2.classList.remove('mt-2'))
:
    (navlinks.classList.add('hidden'),
    line.classList.remove('absolute','rotate-45'),
    line2.classList.remove('absolute','-rotate-45'),
    line2.classList.add('mt-2'));

});

const sections = document.querySelectorAll('section'),
    navlist = document.querySelectorAll('nav .container ul li');
    window.addEventListener('scroll',()=>{
            let current = '';
            sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    return (pageYOffset >= (sectionTop - sectionHeight / 3)) ? 
                            current = section.getAttribute('id')
                    :
                            current;
                    
            });})
            console.log(FileSystemDirectoryReader);