const contentDiv = document.getElementById("content");

let a = 0;
let listId = 0;
let BoardId = 0;

//const ADD_ELEMENT = "addElement";
const DELETE_ELEMENT = "deleteElement";

const lists = [];
const Boards = [];
const Model = [];

const aboutObj = {
  name: "12",
  lastName: "3432",
  img: "1.png"
};

function createElement(tag) {
  return document.createElement(tag);
}

createModelView(addModel('Model'), contentDiv);

function addModel(title) {
  const model = createModel(title);
  Model.push(model);

  return model;
}

function createModel(title) {
  const model = {
    Boards: [],
    title: "Model",
    about: aboutObj
  };

  return model;
}

function createModelView(model, parent) {
  let modelView = createElement("div");
  modelView.id = "model";

  createBoardView(addBoard("First Board"), modelView);
  createBoardView(addBoard("Second Board"), modelView);

  parent.appendChild(modelView);
}

function addBoard(title) {
  const board = createBoard(title);
  Boards.push(board);

  return board;
}

function createBoard(title) {
  const board = {
    title: title,
    img: "",
    Lists: []
  };

  return board;
}

function addList(title) {
  const list = createList(title);
  lists.push(list);

  return list;
}

function createList(title) {
  const list = {
    title: title,
    elements: [],
    type: "list" //"note" "image" "map"
  };

  return list;
}


function createBoardView(board, parent) {
  let boardView = createElement("div");
  boardView.id = "board" + BoardId++;

  let header = createElement("input");
  header.value = board.title;
  header.className = "title";

  boardView.appendChild(header);

  createListView(addList("First List"), boardView);
  createListView(addList("Second List"), boardView);

  parent.appendChild(boardView);
}

function createListView(list, parent) {
  let listView = createElement("div");
  listView.id = "list" + listId++;
  listView.className = "list";

  let header = createElement("input");
  header.className = "title_list";
  header.value = list.title;
  // header.innerHTML = list.title;

  let input = createElement("input");
  input.id = "input_place";
  input.className = "input_place";
  input.placeholder = "You should do...";

  let button = createElement("input");
  button.type = "button";
  button.className = "add";
  button.onclick = function () {
    let value = listView.getElementsByClassName("input_place")[0].value;
    const element = createListElement(listView, value);
    element.view.addEventListener(DELETE_ELEMENT, function (event) {
      listView.removeChild(element.view);
      const index = list.elements.indexOf(element);
      list.elements.splice(index, 1);
    }, false);
    list.elements.push(element);
  };
  button.value = "add";

  listView.appendChild(header);
  listView.appendChild(input);
  listView.appendChild(button);

  parent.appendChild(listView);
}


function createListElement(parent, value) {
  let liPoint = createElement("li");

  liPoint.setAttribute("id", a++);

  let input = createElement("input");
  input.value = value;

  liPoint.appendChild(input);
  parent.appendChild(liPoint);
  parent.getElementsByClassName("input_place")[0].value = "";

  //let button = createElement("input");
  newClosePoint(liPoint, parent.id);
  newCheckedPoint(liPoint, parent.id);

  const element = {
    view: liPoint,
    value: value
  };

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


function newCheckedPoint(item, id) {
  let check = createElement("input");

  check.type = "checkbox";
  check.id="checkbox";
  item.appendChild(check);

  check.onclick = function () {
    document.getElementById('checkbox').setAttribute('checked','checked');
  }
}
