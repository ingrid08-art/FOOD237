
const Navigation = document.querySelector("nav ul");

const menubouton = document.querySelector(".menu-toggle");




 

    menubouton.addEventListener("click",function(){
        Navigation.classList.toggle("nav-ouverte");
        if (Navigation.classList.contains("nav-ouverte")) {
            menubouton.textContent = "✕"; 
} else {
    menubouton.textContent = "☰"; 
}
    });
 
    


    
    const formulaire = document.querySelector("form");

if (formulaire) {
    const champNom = document.querySelector("#name");
    const champemail = document.querySelector("#email");

    formulaire.addEventListener("submit", function (evenement) {
        evenement.preventDefault();

        if (champNom.value.trim().length < 3) {
            alert("Votre nom doit avoir au moins 3 caractères");
            return;
        }
        if (!champemail.value.includes("@")) {
            alert("L'adresse n'est pas valide");
            return;
        }

        console.log("Formulaire valide (pour l'instant) !");
    });
}
const boutonHaut = document.querySelector("#retour-haut");

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        boutonHaut.classList.add("visible");
    } else {
        boutonHaut.classList.remove("visible");
    }
});
boutonHaut.addEventListener("click",function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
});