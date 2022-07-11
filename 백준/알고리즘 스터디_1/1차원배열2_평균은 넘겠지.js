let input = prompt("입력값");
let arr = input.split(',');
// 5,5 50 50 70 80 100,7 100 95 90 80 70 60 50,3 70 90 80,3 70 90 81,9 100 99 98 97 96 95 94 93 91
// console.log(arr)

// 한 반의 평균점수 구하기
// 그 평균점수 이준 이상 점수 몇몇인지 구하기
// 전체 명수에 비해 평균이상 학생의 비율이 어떻게 되는지 구하기

function solution() {
    
    let sum = 0;
    let classAver = 0;
    let smartStudent = 0;
    let clacss = 0;
    let result = "";
    let newArr = [];


    for(let i = 0; arr.length; i++) {
        newArr = arr[i].split(" ");
        console.log(newArr) //  각 반별로 쪼개서 배열로 받기
        clacss = newArr[0]; 
    }

    
    alert(result);
}

solution();


