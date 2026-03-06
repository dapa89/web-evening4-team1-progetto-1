const languagesData = [
    "united states", 
    "united kingdom",
    "australia",
    "france",
    "deutschland",
    "italia",
    "日本",
    "polska",
    "brasil",
    "Россия",
    "espana",
    "Česká_republika",
    "Canada",
    "danmark",
    "suomi",
    "méxico",
    "nederland",
    "norge",
    "sverige",
    "대한민국",
    "Türkiye"
];

document.addEventListener('DOMContentLoaded', () => {
    new FooterSelector(
        languagesData, 
        'language-selector', 
        'languages-list',    
        'current-language'   
    );
});