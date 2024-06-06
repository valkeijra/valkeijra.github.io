// JavaScript source code

let slideIndex = 0;

showSlides(0);

//Used by the previous and next buttons
function changeSlide(n)
{
    slideIndex += n;
    showSlides();
}


function jumpToSlide(n)
{
    slideIndex = n;
    showSlides();
}

function showSlides()
{
    //Vars
    let i;
    let slides = document.getElementsByClassName("Slide");

    //Clamp slideIndex within the slides length
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = (slides.length - 1);

    //Disable all slides
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }


    //Enable the current slide
    slides[slideIndex].style.display = "block";
}