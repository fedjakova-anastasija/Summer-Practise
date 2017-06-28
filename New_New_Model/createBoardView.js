function createBoardView(board, parent) {
  let boardView = createElement("div");
  boardView.id = "board" + BoardId++;
  boardView.className = "board";

  /*let boardViewLists = createElement("div");
  boardViewLists.id = "board_lists" + BoardId++;

  boardView.appendChild(boardViewLists);*/

  const listViews = [];
  for (let i = 0; i < board.lists.length; ++i) {
    listViews.push(createListView(board.lists[i], boardView));
  }

  //createListView(addList("Second List"), boardView);

  parent.appendChild(boardView);
  return {
    view: boardView,
    lists: listViews
  };
}

