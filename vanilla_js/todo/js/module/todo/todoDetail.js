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
  createDeleteButton: function (deleteTodo, todoRender, todos) {
    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img");
    deleteImg.src = "./asset/trash.png";
    deleteButton.appendChild(deleteImg);
    deleteButton.id = "deleteButton";
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((todo) => {
        return todo.id !== deleteTodo.id; // 삭제할 todo의 ID와 다른 것만 필터링하여 새로운 목록 생성
      });
      todoRender(todos); // todo 목록 업데이트
    });
    return deleteButton;
  },
  createUpdateButton: function (todo, todoRender, todos) {
    const updateButton = document.createElement("button");
    updateButton.id = todo.complete ? "completeButton" : "activeButton";

    const updateImg = document.createElement("img");
    updateImg.src = todo.complete ? "./asset/check.png" : "./asset/circle.png";
    updateImg.id = "updateImg";
    updateButton.appendChild(updateImg);

    updateButton.addEventListener("click", () => {
      todo.complete = !todo.complete;
      todoRender(todos);
      updateImg.src = todo.complete
        ? "./asset/check.png"
        : "./asset/circle.png";
      updateButton.id = todo.complete ? "completeButton" : "activeButton";
    });
    return updateButton;
  },

  createImportantButton: function (todo, todoRender, todos) {
    const importantButton = document.createElement("button");
    importantButton.id = todo.important ? "importantButton" : "normalButton";

    const importantImg = document.createElement("img");
    importantImg.src = todo.important
      ? "./asset/star.png"
      : "./asset/emptyStar.png";
    importantImg.id = "importantImg";
    importantImg.alt = "star";

    importantButton.appendChild(importantImg);

    importantButton.addEventListener("click", () => {
      todo.important = !todo.important;
      importantImg.src = todo.important
        ? "./asset/star.png"
        : "./asset/emptyStar.png";
      importantButton.id = todo.important ? "importantButton" : "normalButton";

      todoRender(todos);
    });
    return importantButton;
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
