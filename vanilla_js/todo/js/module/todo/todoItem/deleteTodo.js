const deleteTodo = () => {
  // todo 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("img");
  deleteImg.src = "./asset/trash.png";
  deleteButton.appendChild(deleteImg);
  deleteButton.id = "deleteButton";
  deleteButton.addEventListener("click", () => {
    onDeleteTodo(todo.id); // 삭제 버튼 클릭 시 onDeleteTodo 호출
  });
  // todo 삭제 기능
  const onDeleteTodo = (id) => {
    todos = todos.filter((todo) => {
      return todo.id !== id; // 삭제할 todo의 ID와 다른 것만 필터링하여 새로운 목록 생성
    });
    onRender(todos); // todo 목록 업데이트
  };
  detailUl.appendChild(deleteButton); // todo 아이템에 삭제 버튼 추가
};

export default deleteTodo;
