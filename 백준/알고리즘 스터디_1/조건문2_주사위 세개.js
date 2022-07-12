let n1 = Number(prompt("첫 번째 수 입력"));
let n2 = Number(prompt("두 번째 수 입력"));
let n3 = Number(prompt("세 번째 수 입력"));

function solution() {
    let result = 0;

    if(n1 === n2 && n1 === n3 && n2 === n3) {
        result = 10000 + n1 * 1000;
    } else {
        if(n1 === n2) {
        result = 1000 + n1 * 100;
        } else if (n1 === n3) {
        result = 1000 + n1 * 100;
        } else if(n2 === n3) {
        result = 1000 + n2 * 100;
        }
    }
    if(n1 !== n2 && n1 !== n3 && n2 !== n3) {
        result = Math.max(n1, n2, n3) * 100;
    }
    

    alert(result + "원");
}

solution();


// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

// 2개만 같을 경우




var box = document.querySelector('.box');
    var toggleBtn = document.querySelector('.toggle');

    var toggle = (function () {
      var isShow = false;

      // TODO: ① 클로저를 반환하는 함수를 작성하세요.
      return function () {
        // TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.
        box.style.display = isShow ? 'block' : 'none'
        isShow = !isShow
      };
    })();

    // ② 이벤트 프로퍼티에 클로저를 할당
    toggleBtn.onclick = toggle;