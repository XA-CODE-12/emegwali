document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupération des valeurs des champs
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        // Validation des champs
        if (!validatePassword(password)) {
            alert('Le mot de passe doit comporter au moins 8 caractères, au moins 1 chiffre, au moins 1 minuscule, au moins 1 majuscule, au moins 1 caractère spécial.');
            return;
        }

        if (email !== confirmEmail) {
            alert('Les adresses email ne correspondent pas.');
            return;
        }

        // Si tout est valide, afficher un message de succès
        alert(`Félicitations, ${firstName} ${lastName} ! Votre compte a été créé avec succès.`);
        registrationForm.reset(); // Réinitialiser le formulaire
    });

    // Fonction pour valider le format du mot de passe
    function validatePassword(password) {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}\[\]:;<>,.?/~_+\-=|]).{8,}$/;
        return regex.test(password);
    }
});
