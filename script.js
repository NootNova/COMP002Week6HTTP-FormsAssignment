
// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

const textName = document.getElementById("name");

const backColor = document.getElementById("background-color");

const textColor = document.getElementById("foreground-color");

const form = document.querySelector("form");

let greeting = document.getElementById("greeting");

greeting.textContent = 

form.addEventListener("submit", event => {

    event.preventDefault();

    console.log(textName.value);

    console.log(backColor.value);

    console.log(textColor.value);

    localStorage.setItem("username", textName.value);

    localStorage.setItem("favbg", backColor.value);

    localStorage.setItem("favcolor", textColor.value);

});

const button = document.getElementById("button");

button.addEventListener("click", formChange);

function formChange() {

    localStorage.getItem("username");

    greeting.textContent = "Username";

};

//document.body.style.backgroundColor = localStorage.getItem("favBG");

//document.body.style.color = localStorage.getItem("favColor");