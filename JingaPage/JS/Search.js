const DIV = document.getElementById("search");
const input = document.createElement("input");
input.setAttribute("placeholder", "구글 검색");
DIV.appendChild(input);

const newURL = "https://www.Jinga.com/"; // 주소창에 표시할 새로운 URL
history.pushState(null, null, newURL);

function search(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let url = "https://www.google.com/search?q=" + input.value;
    window.location.href = url; // 현재 창에서 페이지 이동
  }
}

input.addEventListener("keyup", search);
