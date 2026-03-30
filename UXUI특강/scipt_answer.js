// const loginBtn = document.getElementById('loginBtn');
// const errorBox = document.getElementById('errorBox');

// // // 메시지 초기화 함수
// // // 로그인 시도 전에 기존 메시지를 모두 숨기고 초기화
// // function resetMessages() {
// //   // 메시지 영역 숨기기
// //   errorBox.classList.add('hidden');
// //   successBox.classList.add('hidden');
// //   helperLink.classList.add('hidden');

// //   // 메시지 내용 초기화
// //   errorBox.textContent = '';
// //   successBox.textContent = '';
// // }

// loginBtn.addEventListener('click', () => {
//   errorBox.textContent = '아이디/비밀번호가 잘못되었습니다.';
//   errorBox.classList.remove('hidden');
// });

const loginBtn = document.getElementById('loginBtn');
const errorBox = document.getElementById('errorBox');

// 메시지 초기화
function resetMessages() {
  errorBox.classList.add('hidden');
  errorBox.textContent = '';
}

// 로그인 버튼 클릭
loginBtn.addEventListener('click', () => {
  resetMessages(); // 👉 먼저 초기화

  // 👉 나중에 조건 넣을 자리
  const isLoginSuccess = false;

  if (!isLoginSuccess) {
    errorBox.textContent = '아이디/비밀번호가 잘못되었습니다.';
    errorBox.classList.remove('hidden');
  }
});
