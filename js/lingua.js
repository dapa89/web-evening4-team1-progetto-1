const languagesData = [
    "United States", 
    "United Kingdom",
    "Australia",
    "France",
    "Deutschland",
    "Italia",
    "日本",
    "Polska",
    "Brasil",
    "Россия",
    "Espana",
    "Česká_republika",
    "Canada",
    "Danmark",
    "Suomi",
    "México",
    "Nederland",
    "Norge",
    "Sverige",
    "대한민국",
    "Türkiye"
];

document.addEventListener('DOMContentLoaded', () => {
   
    const btnLingua = document.getElementById('language-selector'); 

    if (btnLingua) {
        const language = new FooterSelector(
            btnLingua,    
            languagesData,
            'Lingua'        
        );
    } else {
        console.error("Non ho trovato il pulsante con ID language-selector!");
    }
});
    
