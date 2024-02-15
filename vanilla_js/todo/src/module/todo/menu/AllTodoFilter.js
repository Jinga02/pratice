// 모든 todo 보기 기능
const AllTodoFilter = () => {
  const all = document.getElementById("all"); // 모든 todo 보기 버튼

  const showAllTodo = () => {
    TodoList(todos);
  };
  all.addEventListener("click", showAllTodo);
};

export default AllTodoFilter;
