function createModelView(model, parent) {
  let modelView = createElement("div");
  modelView.id = "model";

  parent.appendChild(modelView);


  const headerView = createHeaderView(model, modelView);

  modelView.addEventListener(ADD_HEADER_BUTTON, function (event) {
    const t = event.detail;
    createHeaderElement(t, headerView)
  }, false);

  const boardsViews = [];
  for (let i = 0; i < model.boards.length; ++i) {
    boardsViews.push(createBoardView(model.boards[i], modelView));
  }

  return modelView;
}