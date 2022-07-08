let A = Number(prompt("첫 번째 수 입력"));
let B = Number(prompt("두 번째 수 입력"));

function solution() {
    let result = "";
    if(A > B) {
        result = ">"
    } else if(A < B) {
        result = "<"
    } else if(A === B) {
        result = "=="
    }
    alert(result);
}

solution();


// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.