console.log("안녕", "반갑습니다.");
console.log("3 + 4 = ", 3 + 4);

var num1;
let num2;

//  const는 상수임 한번 넣은 값은 바뀌지않음
const num3= 100;

// 화면에 그리는 모든것이 객체
num2 = 40;
num1 = 30;
// num3 = 200;

// 함수자체를 변수화 시킨것
const myfunc = function(num) {console.log(num)};

// 1급함수: 변수 = 객체 = 함수
myfunc(1000);
myfunc();

// const : java에서 final과 같다 
const callfunc = function(call){
    call(2000);
};
// facade 패턴
// 함수를 다른 함수의 매개변수로 전달하여 
// 함수내부에서 실행 하도록 하는 패턴

callfunc(myfunc);

//변수 : 1개의 값을 저장하는 공간
// 배열, JSON 객체 : 1개 이상의 값을 저장하고 활용하는 메모리 구조형

// 배열선언하기
// 배열은 같은 종류의 데이터들을 저장할때 주로 사용한다.
// 다른 type(숫자, 문자열)의 데이터를 저장할수 있지만
// 일반적으로 그렇게 사용하지 않는다.
let 이름 = ["홍길동","이몽룡","성춘향"];
console.log(이름[0]);



// JASON 객체 (key, value) 타입 key값을 가지고 조회할수 있다.
// key:value 쌍으로 이루어진 종류가 다른 데이터들을 저장할때 사용한다.
// 다수의 데이터를 저장하는 용도로 아주 많이 사용하는 타입이다.
let car = {이름:"그랜져", 엔진:"알파"};
console.log(car["이름"]); 

// 이름 배열에 장보고 데이터를 추가하고 싶다.
// 전통적인 방법
이름.push("장보고");
console.log(이름);

// 전개연산자
// 요즘많이쓰는 방법

이름 = [...이름,"장영실"];

// JASON 객체의 어떤 요소 값을 변경하고 싶을때
// 엔진이라는 요소를 베타로 바꿔라
car["엔진"] = "베타";
//엔진을 => 베타로 바꿔라 만약없으면 추가해라
car = {...car, 엔진:"베타"};
// 색깔을 => 흰색으로 바꿔라 만약 없으면 추가해라
car = {...car, 색깔 : "흰색"};
console.log(car);


//public static void main(String[] agrs)
//public static void main(String... agrs)
//같은 문법

