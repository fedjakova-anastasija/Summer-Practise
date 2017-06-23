const contentDiv = document.getElementById("content");

let number = 0;
let listId = 0;
let BoardId = 0;

//const ADD_ELEMENT = "addElement";
const DELETE_ELEMENT = "deleteElement";

const ADD_BOARD = "addBoard";

const aboutObj = {
  name: "12",
  lastName: "3432",
  img: "1.png"
};

function createElement(tag) {
  return document.createElement(tag);
}

const m = createModel('Model');
const b1 = createBoard("1");

b1.lists.push(createList("1"));
m.boards.push(b1);

//const b2 = createBoard("2");
//b2.lists.push(createList("2"));
//m.boards.push(b2);

const modelView = createModelView(m, contentDiv);

modelView.addEventListener(ADD_BOARD, function (event) {
  const b = event.detail;
  createBoardView(b, modelView)
}, false);

function addBoard() {
  const b = createBoard("2");
  m.boards.push(b);

  var event = new CustomEvent(ADD_BOARD, {
    detail: b
  });
  modelView.dispatchEvent(event);
}


