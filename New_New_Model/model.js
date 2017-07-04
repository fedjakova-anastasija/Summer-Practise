const contentDiv = document.getElementById("content");

let number = 0;
let listId = 0;
let BoardId = 0;
let TitleId = 0;

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

const model = createModel('Model');
const title = createHeader();
const board = createBoard("1");

board.lists.push(createList("1"));
board.lists.push(createList("2"));
model.boards.push(board);

const modelView = createModelView(model, contentDiv);

modelView.addEventListener(ADD_BOARD, function (event) {
  const board = event.detail;
  createBoardView(board, modelView);
}, false);


function addBoard() {
  const newBoard = createBoard("New");
  newBoard.lists.push(createList("3"));
  model.boards.push(newBoard);

  let addBoardEvent = new CustomEvent(ADD_BOARD, {
    detail: newBoard
  });
  modelView.dispatchEvent(addBoardEvent);
}

document.getElementById('title0').onclick = function openBoard() {
  let i;

  let board = document.getElementsByClassName("board");
  for (i = 0; i < board.length; i++) {
    board[i].style.display = "none";
  }

  /* let title = document.getElementsByClassName("title");
   for (i = 0; i < title.length; i++) {
   title[i].className = title[i].className.replace(" active", "");
   }*/

  document.getElementById('board0').style.display = "block";
  //event.currentTarget.className += " active";
};

