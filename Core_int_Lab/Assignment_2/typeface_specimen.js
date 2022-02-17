/* For the Slider */
slider.oninput = () => {
    //Change Span Value
    const slider = document.getElementById('slider');
    const pixels = document.getElementById('pixels');
    pixels.innerHTML = slider.value;
    

    // Change the --font-size
    document.querySelector('html').style.setProperty('--font-size', `${slider.value}px`)
}