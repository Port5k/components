let body = document.querySelector("body");
let colorArray = ['White', 'Yellow', 'Blue', 'Red', 'Green', 'Black', 'Brown', 'Azure', 'Ivory', 'Teal', 'Silver', 'Purple', 'antiquewhite', 'firebrick', 'Gray', 'Orange', 'Maroon', 'Charcoal', 'Aquamarine', 'Coral', 'Fuchsia', 'Wheat', 'Lime', 'Crimson', 'Khaki', 'Hotpink', 'Magenta', 'Olden', 'Plum', 'Olive', 'Cyan'];

let colorChange = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)]
}

body.addEventListener("click", () => {
    body.style.backgroundColor = colorChange();
})