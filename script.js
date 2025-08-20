// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 입력 필드와 버튼 요소 가져오기
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const signinBtn = document.querySelector('.signin-btn');

    // 입력 필드의 변화를 감지하는 함수
    function checkInputs() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        
        // 이메일이 입력되고 비밀번호 입력이 시작되면 활성화
        if (emailValue !== '' && passwordValue !== '') {
            signinBtn.classList.add('active');
        } else {
            signinBtn.classList.remove('active');
        }
    }

    // 이벤트 리스너 추가
    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    // 페이지 로드 시 초기 상태 설정
    checkInputs();
});
