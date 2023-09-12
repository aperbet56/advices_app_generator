// Récupération des différents éléments
const generateBtn = document.querySelector(".generate__btn");
const adviceNumber = document.querySelector(".advice__header");
const adviceText = document.querySelector(".advice__body p");

// Déclaration de la fonction asynchrone fetchAdvices qui va permettre de réupérer les conseils depuis une API
const fetchAdvices = async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An error has occured. Please try again.");
      }
    })
    .then(function (data) {
      // Appel de la fonction displayAdvices(data)
      displayAdvice(data);
    })
    .catch(function (err) {
      // Affichage d'un message d'erreur dans la console
      console.log("Désolé, une erreur est survenue sur le serveur.");
    });
};

// Déclaration de la fonction displayAdvice pour un affichage dynamique du conseil
const displayAdvice = ({ slip: { id, advice } }) => {
  adviceNumber.textContent = `Advice #${id}`;
  adviceText.textContent = `“${advice}”`;
};

// Ecoute de l'événement click sur le bouton generateBtn et appel de la fonction fetchAdvices
generateBtn.addEventListener("click", fetchAdvices);
