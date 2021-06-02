window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    const motivation = localStorage.getItem('MOTIVATION');
 ; 
    
    // const motivation = sessionStorage.getItem('motivation');
    
    document.getElementById('result-motivation').innerHTML = motivation;

})