// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 뒤로가기 함수
    window.goBack = function() {
        window.history.back();
    };

    // 요소들 가져오기
    const usageCards = document.querySelectorAll('.usage-card');
    const nextBtn = document.getElementById('nextBtn');
    let selectedCard = null;

    // 카드 클릭 이벤트 처리
    usageCards.forEach(card => {
        card.addEventListener('click', function() {
            // 이전 선택 해제
            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }
            
            // 현재 카드 선택
            this.classList.add('selected');
            selectedCard = this;
            
            // NEXT 버튼 활성화
            nextBtn.disabled = false;
        });
    });

    // NEXT 버튼 클릭 이벤트
    nextBtn.addEventListener('click', function() {
        if (selectedCard) {
            const selectedType = selectedCard.getAttribute('data-type');
            console.log('선택된 사용 방법:', selectedType);
            
            // 여기에 다음 화면으로 이동하는 로직을 추가할 수 있습니다
            // 예: 메인 앱 화면으로 이동
            alert(`선택하신 사용 방법: ${selectedCard.querySelector('.card-title').textContent}`);
            
            // 실제 앱에서는 여기서 메인 화면으로 이동
            // window.location.href = 'main.html';
        }
    });

    // 키보드 접근성 지원
    usageCards.forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // 포커스 가능하도록 설정
        card.setAttribute('tabindex', '0');
    });
});
