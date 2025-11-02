
/*************mode*****/
const btn = document.getElementById("toggle-theme");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("light");
});
/*******************************zoom img*********/
const images_zoom = document.querySelectorAll('.zoom-element');

window.addEventListener('scroll', () => {
    images_zoom.forEach(img => {
        const section = img.closest('.element_anim');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // qué tanto de la sección está en pantalla
        let visible = 1 - Math.abs(rect.top / windowHeight);

        // limitar entre 0 y 1
        visible = Math.max(0, Math.min(1, visible));

        // escala: de 0.8 (alejado) a 1.2 (cerca)
        const scale = 0.65 + (visible * 0.4);
        img.style.transform = `scale(${scale})`;
        img.style.transition = "transform 0.1s linear";
    });
});


/**************zoom left************/
const images_left = document.querySelectorAll('.left-element');

window.addEventListener('scroll', () => {
    images_left.forEach(img => {
        const section = img.closest('.element_anim');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // calcular visibilidad
        let visible = 1 - Math.abs(rect.top / windowHeight);
        visible = Math.max(0, Math.min(1, visible));

        // zoom: 0.4 -> 0.65
        const scale = 0.4 + (visible * 0.65);

        // movimiento lateral: de -300px (fuera a la izquierda) hasta 0 (posición original)
        const translateX = -300 + (visible * 300);

        // aplicar ambas transformaciones
        img.style.transform = `scale(${scale}) translateX(${translateX}px)`;
        img.style.transition = "transform 0.1s linear";
    });
});
/**************zoom rigth************/
const images_right = document.querySelectorAll('.right-element');

window.addEventListener('scroll', () => {
    images_right.forEach(img => {
        const section = img.closest('.element_anim');
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // calcular visibilidad
        let visible = 1 - Math.abs(rect.top / windowHeight);
        visible = Math.max(0, Math.min(1, visible));

        // zoom: 0.4 -> 0.65
        const scale = 0.4 + (visible * 0.65);

        // movimiento lateral: de -300px (fuera a la izquierda) hasta 0 (posición original)
        const translateX = 300 + (visible * -300);

        // aplicar ambas transformaciones
        img.style.transform = `scale(${scale}) translateX(${translateX}px)`;
        img.style.transition = "transform 0.1s linear";
    });
});

/*************body***************/
/*window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    document.body.style.backgroundPositionY = -(scrollY * 0.3) + 'px';
});*/
/********************************nav***************/
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.getElementsByClassName("tooltip-img")[0];
    const links = document.querySelectorAll(".floating-menu a");

    function setupTooltip(link) {
        link.addEventListener("mouseenter", function (e) {
            const imgSrc = link.getAttribute("data-tooltip");
            if (imgSrc) {
                tooltip.innerHTML = `<img src="${imgSrc}" alt="tooltip">`;
                tooltip.style.display = "block";
                tooltip.style.top = e.clientY - 100 + "px";
                tooltip.style.left = e.clientX - 100 + "px";
            }
        });

        link.addEventListener("mousemove", function (e) {
            tooltip.style.top = e.clientY - 100 + "px";
            tooltip.style.left = e.clientX - 100 + "px";
        });

        link.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
        });
    }

    links.forEach(setupTooltip);
});


/*señalar section*/

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("[id]");
    const navLinks = document.querySelectorAll(".floating-menu a");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitar 'active' de todas las imágenes
                document.querySelectorAll('.img_nav').forEach(img => {
                    img.classList.remove('active');
                    img.classList.remove('border_nav');
                });

                // Buscar el link correspondiente y activar su imagen
                const activeLink = document.querySelector(`.floating-menu a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.querySelector('img').classList.add('active');
                    activeLink.querySelector('img').classList.add('border_nav');
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar cada sección
    sections.forEach(section => observer.observe(section));
});


/**********************heroword**************/

spans.forEach((span, idx) => {
    span.addEventListener('mousemove', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1));
});



/********************projects***************************/

(function (window, document) {
    let slides, btnArr;
    let scrollTimeout;

    function onClick(e) {
        const target = e.target.closest('.slide_work');
        if (!target) return;

        if (
            !target.classList.contains('active') &&
            ![...target.parentElement.children].some(s => s !== target && s.classList.contains('active'))
        ) {
            target.classList.remove('anim-in', 'last-viewed');
            target.classList.add('active');

            [...target.parentElement.children].forEach(s => {
                if (s !== target) {
                    s.classList.remove('anim-in', 'last-viewed');
                    s.classList.add('anim-out');
                }
            });
        }
    }

    function closeSlide(e) {
        if (e) e.stopPropagation?.();
        const slide = e?.target?.closest?.('.slide_work') || document.querySelector('.slide_work.active');
        if (!slide) return;

        slide.classList.remove('active', 'anim-in');
        slide.classList.add('last-viewed');

        [...slide.parentElement.children].forEach(s => {
            if (s !== slide) {
                s.classList.remove('anim-out');
                s.classList.add('anim-in');
            }
        });
    }

    function isHalfOutOfView(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (rect.top >= windowHeight / 2) || (rect.bottom <= windowHeight / 2);
    }

    document.addEventListener("DOMContentLoaded", () => {
        slides = document.querySelectorAll('.slide_work');
        btnArr = document.querySelectorAll('.slide_work .btn-close');

        slides.forEach(slide => {
            slide.addEventListener('click', onClick);
        });

        btnArr.forEach(btn => {
            btn.addEventListener('click', closeSlide);
        });

        window.addEventListener('scroll', () => {
            const activeSlide = document.querySelector('.slide_work.active');
            if (!activeSlide) return;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (isHalfOutOfView(activeSlide)) {
                    closeSlide();
                }
            }, 300);
        }, { passive: true });
    });

})(this, document);


/************qassi***********/
function imgSlider(anything) {
    document.querySelector('.media_qa').src = anything;
}


/*************modal_video_qa******************/

const videoModal = document.getElementById("modal_video_qa");
const video = document.getElementById("video_qa");

// Cuando se abre el modal
videoModal.addEventListener("shown.bs.modal", () => {
    video.src = "https://paolozada.com/info/wp-content/uploads/2025/11/qasisstant.mp4";
    video.load();
    video.play();
});

// Cuando se cierra el modal
videoModal.addEventListener("hidden.bs.modal", () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
});


/*****************************************/
const circles = document.querySelectorAll('.circle');
const legends = document.querySelectorAll('.legend-item');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        const category = circle.dataset.category; // "qa", "web", "trends"
        legends.forEach(l => {
            if (l.classList.contains(category)) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });
    });

    circle.addEventListener('mouseleave', () => {
        legends.forEach(l => l.classList.remove('active'));
    });
});


/******about******************/

const aboutDesc = [
    {
        quote:
            "Me apasiona construir herramientas digitales que no solo funcionan, sino que también aportan valor real a quienes las usan.",
        name: "Tecnología con propósito",
        designation: "Innovación que conecta personas",
        src: "img/LOGO_PAO/paolaL.png",
        aboutBadge: "Human + Code"
    },
    {
        quote:
            "Creo en transformar retos en soluciones creativas. Para mí, cada prueba es una oportunidad de aprender, innovar y fortalecer el producto. Me apoyo en la automatización para liberar el verdadero potencial de los equipos y alcanzar mayor eficiencia.",
        name: "Test & Beyond",
        designation: "Más que validar, transformar",
        src: "img/LOGO_PAO/paolaL_pix.png",
        aboutBadge: "QA Engineer"
    },
    {
        quote:
            "Me entusiasma experimentar con nuevas herramientas, metodologías y tecnologías. Desde bots hasta soluciones basadas en IA, mi objetivo es estar a la vanguardia y aportar valor en cada proyecto, sin perder el toque humano y creativo.",
        name: "El futuro se constuye hoy",
        designation: "Curiosidad que impulsa innovación",
        src: "img/LOGO_PAO/paolaL_free.png",
        aboutBadge: "Exploradora Tech"
    }
];

let activeIndex = 0;
const imageContainer = document.getElementsByClassName("about_img-container")[0];
const nameElement = document.getElementsByClassName("name")[0];
const designationElement = document.getElementsByClassName("designation")[0];
const quoteElement = document.getElementsByClassName("quote")[0];
const prevButton = document.getElementsByClassName("prev-button")[0];
const nextButton = document.getElementsByClassName("next-button")[0];
const about_badge = document.getElementsByClassName("about-badge")[0];

function calculateGap(width) {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;

    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
        return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

    return (
        minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
}

function updateAboutDesc(direction) {
    const oldIndex = activeIndex;
    activeIndex =
        (activeIndex + direction + aboutDesc.length) % aboutDesc.length;

    const containerWidth = imageContainer.offsetWidth;
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8; // 80% of the calculated gap

    aboutDesc.forEach((aboutDes, index) => {
        let img = imageContainer.querySelector(`[data-index="${index}"]`);
        if (!img) {
            img = document.createElement("img");
            /*img.src = aboutDes.src;
            img.alt = aboutDes.name;
            img.classList.add("aboutDes-image");*/
            img.dataset.index = index;
            imageContainer.appendChild(img);
        }

        const offset =
            (index - activeIndex + aboutDesc.length) % aboutDesc.length;
        const zIndex = aboutDesc.length - Math.abs(offset);
        const opacity = index === activeIndex ? 1 : 1;
        const scale = index === activeIndex ? 1 : 0.85;

        let translateX, translateY, rotateY;
        if (offset === 0) {
            translateX = "0%";
            translateY = "0%";
            rotateY = "0deg";
        } else if (offset === 1 || offset === -2) {
            translateX = "20%";
            translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
            rotateY = "-15deg";
        } else {
            translateX = "-20%";
            translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
            rotateY = "15deg";
        }

        img.style.zIndex = zIndex;
        img.style.opacity = opacity;
        img.style.transform = `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`;
    });

    about_badge.textContent = aboutDesc[activeIndex].aboutBadge;
    nameElement.textContent = aboutDesc[activeIndex].name;
    designationElement.textContent = aboutDesc[activeIndex].designation;
    quoteElement.innerHTML = aboutDesc[activeIndex].quote
        .split(" ")
        .map((word) => `<span class="word_about">${word}</span>`)
        .join(" ");

    animateWords();
}

function animateWords() {
    const words = quoteElement.querySelectorAll(".word_about");
    words.forEach((word, index) => {
        word.style.opacity = "0";
        word.style.transform = "translateY(10px)";
        word.style.filter = "blur(10px)";
        setTimeout(() => {
            word.style.transition =
                "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out";
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
            word.style.filter = "blur(0)";
        }, index * 20);
    });
}

function handleNext() {
    updateAboutDesc(1);
}

function handlePrev() {
    updateAboutDesc(-1);
}

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

// Initial setup
updateAboutDesc(0);

// Autoplay functionality
const autoplayInterval = setInterval(handleNext, 5000);

// Stop autoplay on user interaction
[prevButton, nextButton].forEach((button) => {
    button.addEventListener("click", () => {
        clearInterval(autoplayInterval);
    });
});

// Handle window resize
window.addEventListener("resize", () => updateAboutDesc(0));

