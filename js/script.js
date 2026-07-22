/* ==========================================================
LOCA SONO
SCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Header com sombra ao rolar
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });



    /* ===============================
       Rolagem suave
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            const destino = document.querySelector(this.getAttribute("href"));

            if (!destino) return;

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        });

    });



    /* ===============================
       Animação ao aparecer
    =============================== */

    const sections = document.querySelectorAll(
        "section, footer"
    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.animate([

                    {

                        opacity:0,

                        transform:"translateY(60px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0)"

                    }

                ],{

                    duration:700,

                    easing:"ease-out",

                    fill:"forwards"

                });

            }

        });

    },{

        threshold:.15

    });

    sections.forEach(section=>observer.observe(section));



    /* ===============================
       Destaque do menu
    =============================== */

    const menuLinks = document.querySelectorAll("nav a");

    const pageSections = document.querySelectorAll("section");

    window.addEventListener("scroll",()=>{

        let atual="";

        pageSections.forEach(sec=>{

            const top = sec.offsetTop-150;

            if(window.scrollY>=top){

                atual=sec.getAttribute("id");

            }

        });

        menuLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+atual){

                link.classList.add("active");

            }

        });

    });

});
