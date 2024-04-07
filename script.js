
/* Select the form */
let form = document.getElementById("form");

/* Select email input */
let emailInput = document.getElementById("email");

/* Select error message */
let errorMessage = document.getElementById("error");

/* Select main card */
let mainCard = document.querySelector(".card");

/* Select success message card */
let successCard = document.getElementById("success-message");


/* Add event listener */
form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (emailInput.value === "" || emailInput.value.indexOf("@") === -1) {
        errorMessage.classList.add("inline-visible")
        emailInput.classList.add("error-styling")
    }

    else {
        mainCard.classList.add("main-card-hide")
        successCard.classList.add("success-card-show")
    }
})
