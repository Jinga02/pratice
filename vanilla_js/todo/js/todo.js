const todoForm = document.querySelector("form"); // todo 입력 폼
const todoInput = document.querySelector("input"); // todo 입력 필드
const todoList = document.querySelector("ul"); // todo 목록
const all = document.getElementById("all"); // 모든 todo 보기 버튼
const active = document.getElementById("active"); // 진행 중인 todo 보기 버튼
const complete = document.getElementById("complete"); // 완료된 todo 보기 버튼
const important = document.getElementById("important"); // 중요한 todo 보기 버튼
const section = document.querySelector("section"); // todo 상세 정보를 표시할 섹션
let todos = []; // todo 목록을 저장할 배열

// 로컬 스토리지에서 저장된 todo 목록 불러오기
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
}

// 새로운 todo의 고유 ID 생성
let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

// todo 추가 기능
const onAddTodo = () => {
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() == "") {
      return alert("오늘 할 일을 입력해주세요!.");
    }

    // 새로운 todo 객체 생성
    const todo = {
      id: id++,
      text: todoInput.value,
      complete: false,
      important: false,
    };
    todos.push(todo); // todo 목록에 추가
    todoInput.value = ""; // 입력 필드 초기화
    onRender(todos); // todo 목록 업데이트
  });
};

// todo 삭제 기능
const onDeleteTodo = (id) => {
  todos = todos.filter((todo) => {
    return todo.id !== id; // 삭제할 todo의 ID와 다른 것만 필터링하여 새로운 목록 생성
  });
  onRender(todos); // todo 목록 업데이트
};

// todo 상태 변경 기능
const onUpdateTodo = (id) => {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      // 선택된 todo의 상태를 변경
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
  onRender(todos); // todo 목록 업데이트
};

// 모든 todo 보기 기능
const showAllTodo = () => {
  onRender(todos);
};
all.addEventListener("click", () => {
  showAllTodo();
});

// 진행 중인 todo 보기 기능
const showActiveTodo = () => {
  const activeTodos = todos.filter((todo) => {
    return todo.complete === false;
  });
  onRender(activeTodos);
};
active.addEventListener("click", () => {
  showActiveTodo();
});

// 완료된 todo 보기 기능
const showCompleteTodo = () => {
  const completeTodos = todos.filter((todo) => {
    return todo.complete === true;
  });
  onRender(completeTodos);
};
complete.addEventListener("click", () => {
  showCompleteTodo();
});

// 중요한 todo 보기 기능
const showImportantTodo = () => {
  const importantTodos = todos.filter((todo) => {
    return todo.important === true;
  });
  onRender(importantTodos);
};
important.addEventListener("click", () => {
  showImportantTodo();
});

// todo 목록 출력 및 업데이트 기능
const onRender = (todos) => {
  // 이미 열려있는 상세 정보 창 제거
  document.querySelectorAll("#todoDetailWrap").forEach((detailWrap) => {
    detailWrap.parentNode.removeChild(detailWrap);
  });
  todoList.innerHTML = ""; // 목록 초기화
  todos.map((todo) => {
    // 각각의 todo에 대해 처리
    const todoItem = document.createElement("li"); // 새로운 todo 아이템 생성
    todoItem.dataset.id = todo.id; // 데이터셋에 고유 ID 할당
    todoItem.id = "todoItem"; // 아이디 지정
    const todoText = document.createElement("p"); // todo 텍스트 생성
    todoText.textContent =
      todo.text.length > 30 ? todo.text.substring(0, 30) + "..." : todo.text; // 일정 길이 이상인 경우 생략 처리

    todoText.id = "todoText"; // 아이디 지정

    // todo 클릭 시 상세 정보 표시
    const todoDetailWrap = document.createElement("div");
    todoDetailWrap.id = "todoDetailWrap";
    const detailCloseButton = document.createElement("button"); // 상세 정보 닫기 버튼 생성
    const detailCloseImg = document.createElement("img"); // 닫기 이미지 생성
    detailCloseImg.id = "detailCloseImg"; // 이미지 아이디 지정
    detailCloseImg.src = "./asset/close.png"; // 이미지 경로 설정
    detailCloseButton.id = "detailCloseButton"; // 버튼 아이디 지정
    detailCloseButton.appendChild(detailCloseImg); // 이미지를 버튼에 추가
    todoDetailWrap.appendChild(detailCloseButton); // 닫기 버튼을 상세 정보 창에 추가

    todoText.addEventListener("click", () => {
      // todo 텍스트를 클릭했을 때
      document.querySelectorAll("#todoDetailWrap").forEach((detailWrap) => {
        // 이미 열려있는 상세 정보 창 제거
        detailWrap.parentNode.removeChild(detailWrap);
      });
      if (todoDetailWrap.querySelector("#detailUl")) return;

      const detailUl = document.createElement("ul"); // 상세 정보 목록 생성
      detailUl.id = "detailUl"; // 목록 아이디 지정
      const textLi = document.createElement("li"); // 텍스트 목록 생성
      textLi.textContent = todo.text; // 텍스트 내용 설정
      textLi.id = "textLi";
      const imgWrap = document.createElement("div"); // 이미지 래퍼 생성
      imgWrap.id = "imgWrap"; // 래퍼 아이디 지정
      const completeLi = document.createElement("li"); // 완료 상태 목록 생성
      completeLi.id = "completeLi"; // 목록 아이디 지정
      const completeImg = document.createElement("img"); // 완료 이미지 생성
      completeImg.src = todo.complete
        ? "./asset/check.png"
        : "./asset/circle.png"; // 완료 상태에 따른 이미지 경로 설정
      completeLi.appendChild(completeImg); // 이미지를 목록에 추가
      completeImg.id = "completeImg"; // 이미지 아이디 지정
      const completeText = document.createElement("span"); // 완료 상태 텍스트 생성
      completeText.textContent = todo.complete ? "Complete" : "Active"; // 완료 상태에 따른 텍스트 설정
      completeText.id = "completeText"; // 텍스트 아이디 지정
      completeLi.appendChild(completeText); // 텍스트를 목록에 추가
      const importantLi = document.createElement("li"); // 중요 상태 목록 생성
      importantLi.id = "importantLi"; // 목록 아이디 지정
      const importantImg = document.createElement("img"); // 중요 이미지 생성
      importantImg.src = todo.important
        ? "./asset/star.png"
        : "./asset/emptyStar.png"; // 중요 상태에 따른 이미지 경로 설정
      importantLi.appendChild(importantImg); // 이미지를 목록에 추가
      importantImg.id = "importantImg"; // 이미지 아이디 지정
      const importantText = document.createElement("span"); // 중요 상태 텍스트 생성
      importantText.textContent = todo.important ? "Important" : "Normal"; // 중요 상태에 따른 텍스트 설정
      importantText.id = "importantText"; // 텍스트 아이디 지정
      importantLi.appendChild(importantText); // 텍스트를 목록에 추가

      todoDetailWrap.appendChild(detailUl); // 목록을 상세 정보 창에 추가
      imgWrap.appendChild(completeLi); // 완료 상태 목록을 이미지 래퍼에 추가
      imgWrap.appendChild(importantLi); // 중요 상태 목록을 이미지 래퍼에 추가
      detailUl.appendChild(imgWrap); // 이미지 래퍼를 목록에 추가
      detailUl.appendChild(textLi); // 텍스트 목록을 목록에 추가
      detailUl.appendChild(deleteButton); // todo 아이템에 삭제 버튼 추가

      section.appendChild(todoDetailWrap); // 상세 정보 창을 섹션에 추가
    });

    detailCloseButton.addEventListener("click", () => {
      // 상세 정보 닫기 버튼을 클릭했을 때
      section.removeChild(todoDetailWrap); // 상세 정보 창을 섹션에서 제거
    });

    // todo 상태 변경 체크박스 생성
    const updateCheckBox = document.createElement("input");
    updateCheckBox.id = "updateCheckBox";
    updateCheckBox.type = "checkbox";
    updateCheckBox.checked = todo.complete;
    updateCheckBox.addEventListener("change", () => {
      onUpdateTodo(todo.id); // 체크박스 상태 변경 시 onUpdateTodo 호출
    });

    // todo 중요 표시 버튼 생성
    const importantButton = document.createElement("button");
    const importantImg = document.createElement("img");
    importantImg.src = todo.important
      ? "./asset/star.png"
      : "./asset/emptyStar.png";
    importantImg.id = "importantButton";
    importantImg.alt = "star";
    importantButton.appendChild(importantImg);
    importantButton.addEventListener("click", () => {
      todo.important = !todo.important;
      onRender(todos);
    });

    // todo 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    const deleteImg = document.createElement("img");
    deleteImg.src = "./asset/trash.png";
    deleteButton.appendChild(deleteImg);
    deleteButton.id = "deleteButton";
    deleteButton.addEventListener("click", () => {
      onDeleteTodo(todo.id); // 삭제 버튼 클릭 시 onDeleteTodo 호출
    });

    todoList.appendChild(todoItem); // todo 목록에 todo 아이템 추가
    todoItem.appendChild(updateCheckBox); // todo 아이템에 체크박스 추가
    todoItem.appendChild(todoText); // todo 아이템에 텍스트 추가
    todoItem.appendChild(importantButton); // todo 아이템에 중요 표시 버튼 추가
  });
  localStorage.setItem("todos", JSON.stringify(todos)); // todo 목록을 로컬 스토리지에 저장
};

onAddTodo(); // todo 추가 기능 호출
onRender(todos); // 초기 렌더링 시 todo 목록 출력
