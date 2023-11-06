
// querySelectors
const listIcon = document.querySelector("#listNavbar");
const navbarMobile = document.querySelector("#navbarWrapperMobile");
const closeIcon = document.querySelector("#closeMobile");
const amount = document.querySelector("#priceInsurance");
const formSelect = document.querySelector("#formSelect");

// events
listIcon.addEventListener("click", () => {
    navbarMobile.classList.toggle("navbarWrapperMobileActive");
});

closeIcon.addEventListener("click", () => {
    navbarMobile.classList.remove("navbarWrapperMobileActive");
});

formSelect.addEventListener("change", (e) => {
    const option = e.currentTarget.value;
    if (option === 'basico') {
        amount.innerText = '$500';
    } else if(option === 'intermedio'){
        amount.innerText = '$1000';
    } else if(option === 'premium'){
        amount.innerText = '$1500';
    }
});