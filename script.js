window.addEventListener('load', () => {

    const fname = sessionStorage.getItem('FNAME');
    const lname = sessionStorage.getItem('LNAME');
    const jobtitle = sessionStorage.getItem('JOBTITLE');
    const aboutme = sessionStorage.getItem('ABOUTME');

    document.getElementById('result-fname').innerHTML = fname;
    document.getElementById('result-lname').innerHTML = lname;
    document.getElementById('result-jobtitle').innerHTML = jobtitle;
    document.getElementById('result-aboutme').innerHTML = aboutme;
})