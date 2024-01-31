const scrollLinks = document.querySelectorAll(".scroll-link");
const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".links-container")
console.log(linksContainer);


scrollLinks.forEach((link)=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-top");
    // console.log(element);
    let position = element.offsetTop - navHeight;
    // console.log(navHeight);
    if (navHeight > 128) {
      position = position + containerHeight;
    }
    if(!fixedNav) {
      position = position - navHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    console.log(linksContainer.style.height)
    // linksContainer.style.height = 0;

    linksContainer.classList.remove('show');                     
  })
})