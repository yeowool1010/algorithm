let num = Number(prompt("숫자 입력"));

function solution() {
    let result = "";
    let val = 0;
    for(let i = 1; i <= 9; i++) {
        val = num * i
        result += `${num} * ${i} = ${val}` + `\n`
    }
    alert(result);
}

solution();


// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.