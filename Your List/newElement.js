const contentDiv = document.getElementById("content");

function newElement() {
  let liPoint = document.createElement("li");
  let inputPoint = document.getElementById("input_place").value;
  let textPoint = document.createTextNode(inputPoint);

  liPoint.appendChild(textPoint);
  document.getElementById("list").appendChild(liPoint);
  document.getElementById("input_place").value = "";

  let button = document.createElement("input");
  newClosePoint(liPoint, "list");
}


function newClosePoint(item, id) {
  let button = document.createElement("input");

  button.type = "button";
  button.value = "x";
  button.className = "close_point";
  item.appendChild(button);

  let closePoint = document.getElementsByClassName("close_point");

  for (let j = 0; j < closePoint.length; j++) {
    closePoint[j].onclick = function () {
      document.getElementById(id).removeChild(item);
    }
  }
}

let list = document.querySelector('ul');

list.addEventListener('click', function(checkedPoint) {
  if (checkedPoint.target.tagName === 'LI') {
    checkedPoint.target.classList.toggle('checked');
  }
}, false);

/*
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
 img.classList = "stiker"
 movePicture()
 document.body.appendChild(img);
 contentDiv.appendChild(img);
 }

 function movePicture() {
 document.onmousedown = function (e) {

 var dragElement = e.target;

 if (!dragElement.classList.contains('stiker')) return;

 var shiftX, shiftY;

 startDrag(e.clientX, e.clientY);

 document.onmousemove = function (e) {
 moveAt(e.clientX, e.clientY);
 };

 dragElement.onmouseup = function () {
 finishDrag();
 };

 function startDrag(clientX, clientY) {

 shiftX = clientX - dragElement.getBoundingClientRect().left;
 shiftY = clientY - dragElement.getBoundingClientRect().top;

 dragElement.style.position = 'fixed';

 document.body.appendChild(dragElement);

 moveAt(clientX, clientY);
 }

 function finishDrag() {
 dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
 dragElement.style.position = 'absolute';

 document.onmousemove = null;
 dragElement.onmouseup = null;
 }

 function moveAt(clientX, clientY) {
 var newX = clientX - shiftX;
 var newY = clientY - shiftY;
 if (newX < 0) newX = 0;
 if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
 newX = document.documentElement.clientWidth - dragElement.offsetHeight;
 }
 dragElement.style.left = newX + 'px';
 dragElement.style.top = newY + 'px';
 }

 return false;
 }
 }*/


/*
 let canv = document.getElementById("img");
 let c = canv.getContext("2d");
 function onfil(doc) {
 let file = doc.files[0];
 let fileread = new FileReader();

 fileread.onload = function () {
 let img = new Image();

 img.src = fileread.result;
 img.onload = function () {
 canv.width = img.width;
 canv.height = img.height;
 c.drawImage(img, 0, 0);
 }
 }
 fileread.readAsDataURL(file);
 };*/
