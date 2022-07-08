let input = prompt("숫자입력");

function solution() {
    let num = input;
    let sum;
    let i = 0;
    while(true) {
        i++

        sum = Math.floor(num / 10) + num % 10;
        num = (num % 10) * 10 + sum % 10;
        // sum = Number(num[0]) + Number(num[1]);
        // if(sum.length === 1) {
        //     num = Number(num[1]) + Number(sum[0]);
        // } 
        // if(sum.length === 2) {
        //     num = Number(num[1]) + Number(sum[1]);
        // }
        if(input === num) {
            break;
        }
    }
    alert(i);
}

solution();


// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 
// 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 
// 새로운 수는 26이다.

// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

// N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.