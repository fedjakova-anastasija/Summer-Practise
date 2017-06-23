function moveElement(element) {
  document.onmousedown = function (e) {

    let dragElement = e.target;

    if (!dragElement.classList.contains(element)) return;

    let coords;
    let shiftX;
    let shiftY;

    startDrag(e.clientX, e.clientY);

    document.onmousemove = function (e) {
      moveAt(e.clientX, e.clientY);
    };

    dragElement.onmouseup = function () {
      finishDrag();
    };

    function startDrag(clientX, clientY) {

      shiftX = clientX - dragElement.getBoundingClientRect().left;
      shiftY = clientY - dragElement.getBoundingClientRect().top;

      dragElement.style.position = 'fixed';

      document.getElementById("board_lists").appendChild(dragElement);

      moveAt(clientX, clientY);
    };

    function finishDrag() {
      dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
      dragElement.style.position = 'absolute';

      document.onmousemove = null;
      dragElement.onmouseup = null;
    }

    function moveAt(clientX, clientY) {
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      // нижняя граница
      let newBottom = newY + dragElement.offsetHeight;

      // скролл
      if (newBottom > document.documentElement.clientHeight) {
        // координата нижней границы документа относительно окна
        let docBottom = document.documentElement.getBoundingClientRect().bottom;

        let scrollY = Math.min(docBottom - newBottom, 10);

        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, scrollY);

        // передвигаем на максимально возможную нижнюю позицию внутри документа
        newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
      }


      // верхняя граница
      if (newY < 0) {

        let scrollY = Math.min(-newY, 10);
        if (scrollY < 0) scrollY = 0; // ошибка округления

        window.scrollBy(0, -scrollY);

        newY = Math.max(newY, 0);
      }


      // границы по горизонтали
      if (newX < 0) newX = 0;
      if (newX > 240) newX = 240;
      if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
        newX = document.documentElement.clientWidth - dragElement.offsetHeight;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

    return false;
  }
}
