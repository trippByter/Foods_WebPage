/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
              N A V B A R
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

document.querySelector(".menu").addEventListener
("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
        // Add class "change" once click
        item.classList.toggle("change");
        
    })
});

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
            E N D  N A V B A R
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
          S E C T I O N   0 1
           S L I D E S H O W
        C H A N G E   I C O N S
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

/*
<div class="section-01-icons">
    <i> All  "i"  elements </i>
</div>*/
const icons = document.querySelectorAll(".section-01-icons i");

/*Fixing the next of the last element.
Once the let "i" is gretaer than the length
of the icons, we should set the counter (i) back to one*/
let i = 1;

/*Manipulate the icons appears 
and desappears, with class "change".
In two thousand five hundred miliseconds (2500)*/
setInterval(() => {
    i++
    const icon = document.querySelector(".section-01-icons .change");
    /*Remove "change" class and put it in the next sibling element*/
    icon.classList.remove("change");
    if(i > icons.length){
        // 1st of div container
        icons[0].classList.add("change");
        i = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    };
}, 2500);
/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
        E N D  S E C T I O N   0 1
*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/
