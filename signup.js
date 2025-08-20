// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 뒤로가기 함수
    window.goBack = function() {
        window.history.back();
    };

    // 폼 제출 처리
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 비밀번호 확인
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 약관 동의 확인
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            alert('약관에 동의해주세요.');
            return;
        }

        // 회원가입 성공 시 로그인 페이지로 이동
        alert('회원가입이 완료되었습니다!');
        window.location.href = 'index.html';
    });

    // 비밀번호 확인 실시간 검증
    confirmPasswordInput.addEventListener('input', function() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = '#ff6b6b';
        } else {
            confirmPasswordInput.style.borderColor = '#8fe7a9';
        }
    });
});
