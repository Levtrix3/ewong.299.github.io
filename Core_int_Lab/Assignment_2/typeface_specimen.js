
slider.oninput = () => {
    //Change the value of the span ( font and number )
    const slider = document.getElementById('slider');
    const pixels = document.getElementById('pixels');
    pixels.innerHTML = slider.value;


    // Change the --font-size
    document.querySelector('html').style.setProperty('--font-size', `${slider.value}px`)
}