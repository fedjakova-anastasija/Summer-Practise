const contentDiv = document.getElementById("content");
let a = 0;
let listId = 0;
const lists = [];

//const ADD_ELEMENT = "addElement";
const DELETE_ELEMENT = "deleteElement";

function createElement(tag) {
	return document.createElement(tag);
}

const aboutObj = {
	name: "12",
	lastName: "3432",
	img: "1.png",
}

const model = {
	boards: [],
	title: "123",
	about: aboutObj,
}

const board = {
	title: "title",
	img: "", 
	lists: [],
};


function addList (title) {
	const list = createList(title);
	lists.push(list);
	
	return list;
}

createListView(addList("first"), contentDiv);
createListView(addList("second"), contentDiv);
createListView(addList("4"), contentDiv);

function createList (title) {
	const list = {
		title: title,
		elements: [],
		type: "list", //"note" "image" "map"
	}
	return list;
}

function createListView (list, parent){
	let listView = createElement("div");
	listView.id = listId++;
	
	let header = createElement("p");
	header.className = "title";
	header.innerHTML = list.title;
	 
	let input = createElement("input");
	input.id = "input_place";  
		input.className = "input_place";  
	input.placeholder = "You should do...";

	 let button = createElement("input");
	button.className = "add";  
	button.onclick = function () {
		let value = listView.getElementsByClassName("input_place")[0].value;	
		const element = createListElement(listView, value);
		element.view.addEventListener(DELETE_ELEMENT, function(event) {
			listView.removeChild(element.view);
			const index = list.elements.indexOf(element);
			list.elements.splice(index, 1);
		}, false);
		list.elements.push(element);
	}
	button.value = "add";
	
	 listView.appendChild(header);
	 listView.appendChild(input);
	 listView.appendChild(button);
	 
	 parent.appendChild(listView);
}


function createListElement(parent, value) {
	let liPoint = createElement("li");

  liPoint.setAttribute("id", a++)
  
  let input = createElement("input");
  input.value = value;

   liPoint.appendChild(input);
  parent.appendChild(liPoint);
  parent.getElementsByClassName("input_place")[0].value = "";

  let button = createElement("input");
  newClosePoint(liPoint, parent.id);
  
	const element = {
		view: liPoint, 
		value: value,
	}
	
	return element;
}

function newClosePoint(item, id) {
  let button = createElement("input");

  button.type = "button";
  button.value = "x";
  button.className = "close_point";
  item.appendChild(button);
  
	button.onclick = function () {
		 var event = new CustomEvent(DELETE_ELEMENT, {
			detail: id
		  });
		item.dispatchEvent(event);
    }
}
