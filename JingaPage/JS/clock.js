const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${second}`;
}
getClock();

// 2번째 Argument초 마다 반복
setInterval(getClock, 1000);

// 2번째 Argument초 후에 시작
// setTimeout(sayHello, 3000);

// padStart(글씨길이, 빈칸 값) 앞쪽을 채움 , padEnd(글씨길이, 빈칸 값) 뒤쪽을 채움
