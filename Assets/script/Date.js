function Annee() {
    var newAnnee = new Date().getFullYear();
    document.getElementById('currentYear').textContent = newAnnee > 2023 ? " - " + newAnnee : "";
  }