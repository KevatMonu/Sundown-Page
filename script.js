
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function banner() {
    if (window.innerWidth > 600) {
        var banner = document.querySelector(".banner-list");
        var fixed = document.querySelector(".fixed-img");

        banner.addEventListener("mouseenter", function() {
            fixed.style.display = "block";
        });

        banner.addEventListener("mouseleave", function() {
            fixed.style.display = "none";
        });

        var bg = document.querySelectorAll(".banner");
        bg.forEach(function(e) {
            e.addEventListener("mouseenter", function() {
                var image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url(${image})`;
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", banner);

window.addEventListener("resize", function() {
    banner();
});


const paragraphs = [
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
];

function handleClick(index, imageSrc) {
    changeContent(index, imageSrc);
}

function changeContent(index, imageSrc) {
    
    const paragraphs = document.querySelectorAll('.paragraph');
    const texts = document.querySelectorAll('.text');
    
    paragraphs.forEach((p, i) => {
        p.classList.toggle('show', i === index);
        if (i === index) {
            p.classList.add('blink');
            setTimeout(() => {
                p.classList.remove('blink');
            }, 300); 
        }
    });

  
    texts.forEach((link, i) => {
        link.classList.toggle('faint', i !== index);
        link.classList.toggle('active', i === index);
    });


    const imageElement = document.getElementById('displayed-image');
    imageElement.classList.add('blink');

    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.classList.remove('blink');
    }, 300);
}


changeContent(0, 'asset/image/textimg1.webp');



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
  });


  var menu = document.querySelector(".Menu");
  var full = document.querySelector(".fullscr");
  var navimg = document.querySelector(".logo img");
  var flag = 0;

  menu.addEventListener("click", function() {
    if (flag == 0) {
      full.style.top = "0";
      navimg.style.opacity = "0";
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = "1";
      flag = 0;
    }
  });