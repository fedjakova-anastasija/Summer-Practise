const contentDiv = document.getElementById("content");

let number = 0;
let listId = 0;
let BoardId = 0;
let TitleId = 0;

//const ADD_ELEMENT = "addElement";
const DELETE_ELEMENT = "deleteElement";

const ADD_BOARD = "addBoard";
const ADD_HEADER_BUTTON = "addHeaderButton";

const aboutObj = {
  name: "12",
  lastName: "3432",
  img: "1.png"
};

function createElement(tag) {
  return document.createElement(tag);
}

const m = createModel('Model');
const t = createHeader("1");
const b = createBoard();

b.lists.push(createList("1"));
b.lists.push(createList("2"));
m.boards.push(b);

const modelView = createModelView(m, contentDiv);

modelView.addEventListener(ADD_BOARD, function (event) {
  const b = event.detail;
  createBoardView(b, modelView);
}, false);

const b1 = createBoard();
const t1 = createHeader("2");
b1.lists.push(createList("3"));
b1.lists.push(createList("4"));

function addBoard() {
  m.boards.push(b1);

  var event = new CustomEvent(ADD_BOARD, {
    detail: b1
  });
  modelView.dispatchEvent(event);
}

function addHeaderButton() {
  m.boards.push(t1);

  var event = new CustomEvent(ADD_HEADER_BUTTON, {
    detail: t1
  });
  modelView.dispatchEvent(event);
}
