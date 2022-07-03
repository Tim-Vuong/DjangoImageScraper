// On submit, 
document.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = document.querySelectorAll('.needs-validation')
    let urlInput = document.querySelector('input').value;

    if(validateUrl(urlInput)) {
        // Updates styles with bootstrap with validated
        document.querySelector('input').classList.remove('is-invalid');
        document.querySelector('form').classList.add('was-validated');
        document.querySelector('form').submit();
    } else {
        // Updates styles with bootstrap using invalid
        e.stopPropagation();
        document.querySelector('input').classList.add('is-invalid');
    }    
});

// Client-side checking of url with regular expressions
function validateUrl(urlInput) {
    // regexp from https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    return regexp.test(urlInput);
}