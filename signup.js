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
    const termsCheckbox = document.getElementById('terms');
    const signupBtn = document.querySelector('.signup-btn');

    // 체크박스 상태에 따른 버튼 색상 변경
    function updateButtonColor() {
        if (termsCheckbox.checked) {
            signupBtn.style.backgroundColor = '#7dd699'; // 진한 초록색
        } else {
            signupBtn.style.backgroundColor = '#8FE7A9'; // 기본 초록색
        }
    }

    // 호버 효과
    signupBtn.addEventListener('mouseenter', function() {
        if (termsCheckbox.checked) {
            this.style.backgroundColor = '#6bc588'; // 체크된 상태에서 호버 시 더 진한 색
        } else {
            this.style.backgroundColor = '#7dd699'; // 체크 안된 상태에서 호버 시 진한 색
        }
    });

    signupBtn.addEventListener('mouseleave', function() {
        updateButtonColor(); // 마우스가 벗어나면 원래 상태로 복원
    });

    // 체크박스 이벤트 리스너
    termsCheckbox.addEventListener('change', updateButtonColor);

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 비밀번호 확인
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 약관 동의 확인
        if (!termsCheckbox.checked) {
            alert('약관에 동의해주세요.');
            return;
        }

        // 회원가입 성공 시 온보딩 페이지로 이동
        alert('회원가입이 완료되었습니다!');
        window.location.href = 'onboarding.html';
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


