const input = prompt("숫자입력");

function solution() {
    let num = input.split();
    let sum = 0;  // 분리한 두 숫자를 담을 변수를 선언한다.
    let i = 0;  // 최종적으로 출력할 횟수를 변수 i로 선언한다.

    while (num !== input) {
        i++;

        sum = num[0] + num[1];
        console.log(sum)
        if(sum.length === 1) {
             num = sum[0] + num[1];
            } else if(sum.length === 2) {
                num = sum[1] + num[1]
            }
            console.log(num)
    // sum = Math.floor(num / 10) + num % 10;
    // num = (num % 10) * 10 + sum % 10; 

        break;
    }
    console.log(i)
}

solution();


// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 
// 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 
// 새로운 수는 26이다.

// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.