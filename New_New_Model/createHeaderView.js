function createHeaderView(model, parent) {
  let boardHeader = createElement("div");
  boardHeader.id = "board_header";
  boardHeader.className = "board_header";

  let boardHeaderTitles = createElement("div");
  boardHeaderTitles.id = "board_header_titles";

  let newBoardButton = createElement("input");
  newBoardButton.type = "button";
  newBoardButton.value = "+";
  newBoardButton.className = "button_new_board";

  newBoardButton.onclick = function () {
    addBoard();
    addHeaderButton();
  };

  boardHeader.appendChild(newBoardButton);
  boardHeader.appendChild(boardHeaderTitles);
  parent.appendChild(boardHeader);

  const boardHeaders = [];
  for (let i = 0; i < model.boards.length; ++i) {
    boardHeaders.push(createHeaderElement(model.boards[i], boardHeaderTitles));
  }

  return boardHeader;
}

function createHeaderElement(head, parent) {

  let title = createElement("input");
  title.type = "button";
  title.value = title.title;
  title.className = "title";
  title.id = "title" + TitleId++;

  parent.appendChild(title);

  return title;
}

/*
var showNewButton = document.getElementById('');
var showNewBlock = document.getElementsByClassName('');

showNewButton.addEventListener("click", function (event) {
  event.preventDefault();
  showNewButton.classList.add('hidden_block');
  showNewBlock[0].classList.add('open_block');
}, false);*/
