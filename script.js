/*Select ALL the icons*/
const icons = document.querySelectorAll(".section-01-icons i");

/*Fixing the next of the last element*/
/*Once the let "i" is gretaer than the length
of the icons, we should set the counter (i) back to one*/
let i = 1;

/*Manipulate the appears and desappears.
In two thousand five hundred miliseconds (2500)*/
setInterval(() => {
    i++
    const icon = document.querySelector(".section-01-icons .change");
    /*Remove "change" class and put it in the next sibling element*/
    icon.classList.remove("change");
    if(i > icons.length){
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    };
}, 2500);