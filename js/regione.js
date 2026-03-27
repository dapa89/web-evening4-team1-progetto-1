// Elenco dei paesi
const countriesData = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", 
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", 
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", 
    "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", 
    "Malta", "Netherlands", "Norway", "Poland", "Portugal", 
    "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"
];

document.addEventListener('DOMContentLoaded', () => {
   const btnRegione = document.getElementById('country-selector'); 

    if (btnRegione) {
        const region = new FooterSelector(
            btnRegione,    
            countriesData,
            'Regione'        
        );
    } else {
        console.error("Non ho trovato il pulsante con ID country-selector!");
    }
});
     

