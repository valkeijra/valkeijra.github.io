// JavaScript source code


let amountOfSlideShows = document.getElementsByClassName("SlideContainer").length;
let slideIndex = new Map();

let i;
//Initiate all slideshows
for (i = 0; i < amountOfSlideShows; i++)
{
    slideIndex.set(i, 0);
    showSlides(i);
}



//Used by the previous and next buttons
function changeSlide(slideShowIndex, slideChange)
{
    let newSlideIndex = slideIndex.get(slideShowIndex) + slideChange;
    slideIndex.set(slideShowIndex, newSlideIndex);
    showSlides(slideShowIndex);
}


function jumpToSlide(slideShowIndex, targetSlide)
{
    slideIndex.set(slideShowIndex, targetSlide);
    showSlides(slideShowIndex);
}

function showSlides(slideShowIndex)
{
    //Vars
    let slides = document.getElementsByClassName("Slide" + slideShowIndex.toString());
    let j;

    //Clamp slideIndex within the slides length
    if (slideIndex.get(slideShowIndex) >= slides.length) slideIndex.set(slideShowIndex, 0);
    if (slideIndex.get(slideShowIndex) < 0) slideIndex.set(slideShowIndex, (slides.length - 1));

    //Disable all slides
    for (j = 0; j < slides.length; j++)
    {
        slides[j].style.display = "none";
    }

    //Enable the current slide
    slides[slideIndex.get(slideShowIndex)].style.display = "block";
}