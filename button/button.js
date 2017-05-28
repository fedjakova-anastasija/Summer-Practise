const contentDiv = document.getElementById("content");

let button = document.createElement("input");
button.type = "button";
button.id = "button_1";
button.value = "add";
button.onclick = addTextInput;
contentDiv.appendChild(button);

function addTextInput() {
  let input = document.createElement("input");
  input.type = "text";
  input.id = "input_1";
  contentDiv.appendChild(input);

  let button = document.createElement("input");
  button.type = "button";
  button.id = "button_1";
  button.value = "x";
  contentDiv.appendChild(button);

  let button2 = document.createElement("input");
  button2.type = "button";
  button2.id = "button_1";
  button2.value = "attach";
  button2.onclick = img;
  contentDiv.appendChild(button2);

  let button1 = document.createElement("input");
  button1.type = "button";
  button1.id = "button_1";
  button1.value = "add";
  button1.onclick = addTextInput;
  contentDiv.appendChild(button1);
}

function img() {
  let img = document.createElement('img');
  img.setAttribute('src', 'images/stiker.png');
  img.id = "image";
  document.body.appendChild(img);
  contentDiv.appendChild(img);
}
