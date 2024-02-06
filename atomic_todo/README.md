# Atomic Design을 적용한 Todo, Calendar

## 1. 컴포넌트 구조

### atom

- button 폴더
  - header todo 상태 버튼 컴포넌트
  - todo 입력 컴포넌트
  - todo 삭제 컴포넌트
  - darkMode 버튼 컴포넌트
- input 폴더
  - todo 입력 컴포넌트
- form 폴더
  - todo 제출 컴포넌트

### molecules

- title 폴더
  - 현재 page의 제목 컴포넌트
  - 오늘 날짜와 현재 시간 (초 단위) 컴포넌트
- todoStatus 폴더
  - 모든 todo 컴포넌트
  - 진행 중인 todo 컴포넌트
  - 완료된 todo 컴포넌트
- darkMode 폴더
  - darkMode button 컴포넌트
- todoItem 폴더

  - todo text 컴포넌트
  - todo checkbox 컴포넌트
  - todo deleteButton 컴포넌트

- todo input 폴더
- todo add button 폴더

### organisms

- header 폴더
  - darkMode button 컴포넌트
  - todo status 컴포넌트
- todoList 폴더
  - todoItem 컴포넌트
- createTodo 폴더
  - todo input 컴포넌트
  - todo add button 컴포넌트

### templates

- title
- todoContent

### page

- todoPage
- calendarPage
