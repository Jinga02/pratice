const todoDetail = {
  createTodoItem: function (todo) {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;
    todoItem.id = "todoItem";
    return todoItem;
  },

  createTodoText: function (todo) {
    const todoText = document.createElement("p");
    todoText.textContent =
      todo.text.length > 30 ? todo.text.substring(0, 30) + "..." : todo.text;
    todoText.id = "todoText";
    return todoText;
  },

  // todo detail
  createTodoDetailWrap: function () {
    const todoDetailWrap = document.createElement("div");
    todoDetailWrap.id = "todoDetailWrap";
    return todoDetailWrap;
  },

  createDetailCloseButton: function () {
    const detailCloseButton = document.createElement("button");
    detailCloseButton.id = "detailCloseButton";
    const detailCloseImg = document.createElement("img");
    detailCloseImg.id = "detailCloseImg";
    detailCloseImg.src = "./asset/close.png";
    detailCloseButton.appendChild(detailCloseImg);

    return detailCloseButton;
  },

  createDetailImgWrap: function () {
    const detailImgWrap = document.createElement("div");
    detailImgWrap.id = "detailImgWrap";
    return detailImgWrap;
  },
};
export default todoDetail;
