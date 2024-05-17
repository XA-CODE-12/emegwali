// Script JavaScript pour ajouter des fonctionnalités dynamiques
document.addEventListener('DOMContentLoaded', function() {
    // Services disponibles
    const services = ['Coaching individuel personnalisé', 'Sessions de mentorat en groupe', 'Évaluation de compétences et planification de carrière', 'Accès à une communauté d\'experts en IT'];
    const servicesList = document.getElementById('servicesList');
    
    // Ajouter les services à la liste
    services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        servicesList.appendChild(li);
    });

    // Soumission du formulaire d'inscription
    const inscriptionForm = document.getElementById('inscriptionForm');
    inscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        // Traitement de l'inscription...
        alert(`Merci ${nom} ! Votre inscription a bien été enregistrée.`);
        // Réinitialiser le formulaire
        inscriptionForm.reset();
    });
});
        // Script pour activer le smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
        });
    });
});