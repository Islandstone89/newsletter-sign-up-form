
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

/* Select dismiss button */
let dismissBtn = document.getElementById("dismiss-btn");


/* Add event listener on form submission */
form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (emailInput.value === "" || emailInput.value.indexOf("@") === -1) {
        errorMessage.classList.add("inline-visible")
        emailInput.classList.add("error-styling")
    }

    else {
        mainCard.classList.toggle("main-card-hide")
        successCard.classList.toggle("success-card-show")
    }
})

/* Add event listener on dismiss button click */
dismissBtn.addEventListener("click", (e) => {
    successCard.classList.toggle("success-card-show")
    mainCard.classList.toggle("main-card-hide")
})
