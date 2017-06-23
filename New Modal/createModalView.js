function createModelView(model, parent) {
  let modelView = createElement("div");
  modelView.id = "model";

  let newBoard = createElement("input");
  newBoard.type = "button";
  newBoard.value = "+";
  newBoard.className = "button_new_board";

  newBoard.onclick = function () {
    addBoard();
  }

  const boardsViews = [];
  for (let i = 0; i < model.boards.length; ++i) {
    boardsViews.push(createBoardView(model.boards[i], modelView));
  }

  parent.appendChild(modelView);
  parent.appendChild(newBoard);
  return modelView;
}