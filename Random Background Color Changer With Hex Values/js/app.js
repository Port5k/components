let seedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let buildHex = () => {
    let hexColor = '#';
    for (let x = 0; x < 6; x++) {
        hexColor += seedArray[Math.floor(Math.random() * seedArray.length)];
    }
    return hexColor
}

document.querySelector('body').addEventListener('click', () => {
    let hexColor = buildHex()
    document.querySelector('body').style.backgroundColor = hexColor;
    document.querySelector('.hex_wrapper').textContent = hexColor;
})