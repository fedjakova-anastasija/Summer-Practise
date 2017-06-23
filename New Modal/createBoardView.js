function createBoardView(board, parent) {
  let boardView = createElement("div");
  boardView.id = "board" + BoardId++;
  boardView.className = "board";

  let header = createElement("input");
  header.type = "button";
  header.value = board.title;
  header.className = "title";

  let boardViewLists = createElement("div");
  boardViewLists.id = "board_lists";

  boardView.appendChild(header);
  boardView.appendChild(boardViewLists);


  const listViews = [];
  for (let i = 0; i < board.lists.length; ++i) {
    listViews.push(createListView(board.lists[i], boardViewLists));
  }

  //createListView(addList("Second List"), boardView);

  parent.appendChild(boardView);
  return {
    view: boardView,
    lists: listViews
  };
}