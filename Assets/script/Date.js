function majAnnee(anneeDeDepart) {
    var anneeEnCours = new Date().getFullYear();
    document.getElementById('annee').textContent = anneeDeDepart === anneeEnCours ? anneeDeDepart : anneeDeDepart + " - " + anneeEnCours;
}
// Année initial
majAnnee(2023); 

