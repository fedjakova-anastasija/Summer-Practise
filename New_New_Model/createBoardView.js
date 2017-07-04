function createBoardView(board, parent) {
  let boardView = createElement("div");
  boardView.id = "board" + BoardId++;
  boardView.className = "board";

  const listViews = [];
  for (let i = 0; i < board.lists.length; ++i) {
    listViews.push(createListView(board.lists[i], boardView));
  }

  parent.appendChild(boardView);
  return {
    view: boardView,
    lists: listViews
  };
}

