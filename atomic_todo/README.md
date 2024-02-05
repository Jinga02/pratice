# Atomic Design을 적용한 Todo

## 1. 컴포넌트 구조

### atom

- span
- button
  - header에 todo 상태 버튼, todo 입력, todo 삭제
- input
  - todo 입력
- form
  - todo 제출

### molecules

- title
  - text로 이름과 오늘의 todo 갯수를 표현
- todoList
  - todo 목록을 담음
- todoItem
  - todo text와 checkbox, deleteButton을 가짐
- header
  - 모든 todo, 진행 중인 todo을 가짐, 완료된 todo

### organisms
