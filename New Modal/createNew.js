function createBoard(title) {
  const board = {
    title: title,
    img: "",
    lists: []
  };

  return board;
}

function createList(title) {
  const list = {
    title: title,
    elements: [],
    type: "list", //"note" "image" "map"
    position: {x: 0, y: 0}
  };

  return list;
}

function createModel(title) {
  const model = {
    boards: [],
    title: title,
    about: aboutObj
  };

  return model;
}