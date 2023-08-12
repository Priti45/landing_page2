const reset = true;
let sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset
});

sr.reveal('nav', { delay: 200, interval: 100 });

sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1500,
    reset
});

sr.reveal('#home, #home h1, #home p, #home button, #home lottie-player, #pre-about lottie-player, #about h1, #about .parent div, #about p, #doc section', { delay: 200, interval: 100 });

sr = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 1500,
    reset
});

sr.reveal('#pre-about p, #features h1, #features lottie-player, .cards .card', { delay: 200, interval: 100 });

sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 1500,
    reset
});

sr.reveal(' #howItWorks img, #about lottie-player, #utility h1, #utility p, #nft h1, #nft p', { delay: 200, interval: 100 });


function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}