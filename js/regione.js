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
    new FooterSelector(
        countriesData, 
        'country-selector', 
        'countries-list',   
        'current-country'   
    );
});