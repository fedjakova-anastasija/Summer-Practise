function moveElement(list, listView) {
  listView.onmousedown = function (e) {

    let dragElement = e.target;

    if (!dragElement.classList.contains(listView.className)) {
      return;
    }

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

      /*for (let i = 0; i < list.lists.length; ++i) {
        document.getElementById("board" + i).appendChild(dragElement);
      }*/


      moveAt(clientX, clientY);
    }

    function finishDrag() {
      let x = parseInt(dragElement.style.left);
      let y = parseInt(dragElement.style.top);

      /*const BOUNDINGS = {left: 600, right: 1200};

      if (x > BOUNDINGS.left && x < BOUNDINGS.right) {
        x = BOUNDINGS.left;
      }*/

      list.position.x = x;
      list.position.y = y;

      dragElement.style.left = x + "px";
      dragElement.style.top = y + "px";

      document.onmousemove = null;
      dragElement.onmouseup = null;
    }

    function moveAt(clientX, clientY) {
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      /*// нижняя граница
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
      if (newY < 94) {

        /!*let scrollY = Math.max(newY, 84);
        if (scrollY < 0) scrollY = 0; // ошибка округления

        window.scrollBy(0, -scrollY);*!/

        newY = Math.max(newY, 94);
      }*/

      const boundings = dragElement.parentNode.getBoundingClientRect();
      const heightElement = dragElement.offsetHeight;
      const widthElement = dragElement.offsetWidth;

      // нижняя граница
      if (newY > boundings.bottom - heightElement) {
        newY = Math.min(newY, boundings.bottom - heightElement);
      }

      // верхняя граница
      if (newY < boundings.top) {
        newY = Math.max(newY, boundings.top);
      }

      // границы по горизонтали
      if (newX < boundings.left) {
        newX = boundings.left;
      }

     if (newX > boundings.right) {
        newX = boundings.right;
      }

      if (newX > document.documentElement.clientWidth - heightElement) {
        newX = document.documentElement.clientWidth - heightElement;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

    return false;
  }
}
