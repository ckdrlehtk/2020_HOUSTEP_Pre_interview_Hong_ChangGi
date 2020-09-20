## `Functional Programming 이란 무엇인가요? 어떤 장점이 있나요?`

### 답: 
함수형프로그래밍 특징으론 모든 것은 객체이며, 1급객체를 이용하고 고계함수를 사용합니다. <br />
즉 변수에 함수를 넣을어 할당 할 수 있고 리턴 값으로 리턴을 할 수 있으며 인자로 함수를 넘길 수 있습니다. <br />
함수형프로그래밍의 장점 <br />
다중 작업시 다른 작업에 영향을 끼치지 않는 다는 점 때문에 <br />
병렬화에 큰 장점이 있다는 점, 어떤 특정한 값을 넣으면 언제나 같은 값이 나오기에 예측하기가 쉽워 신뢰성이 높은 점이 있고 <br />
코드가 객체지향보단 깔끔하여 익숙해지면 가독성이 높다는점이 있습니다. <br />


## `아래 코드의 의미를 파악해서 서술하세요.`
```
function foo (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
```
### 답: 
배열 left, right  받습니다. <br />
그런다음 각 배열의 0번부터 비교하여 더 작은쪽을 리턴할 배열에 넣고 <br />
그 후 넣은 쪽은 그다음 변수부터 넣지 못한쪽은 전에 비교했던거랑 동일 한 변수랑 비교를 하여 작은 쪽을 넣습니다 <br />
이작업을 둘중 하나의 배열이 끝날때까지 반복합니다. <br />
둘중 하나가 마지막 변수에 도달하여 처리가 끝나면 반복문에서 나오고 <br />
리턴할 배열뒤에 아직 끝까지 도달 하지 못한 배열의 변수를 순서상관없이 전부 넣고 리턴합니다 <br />
ex)
input : [1,3,5,7],[2,4,6,8,-3,-4,-5] <br />
output : [1,2,3,4,5,6,7,8,-3,-4,-5] <br />

## `아래 조건을 만족시키는 코드를 작성하세요.`

- a 값을 기준으로 오름차순으로 정렬하고 a값이 같다면 b값을 기준으로 내림차순하여 정렬합니다.
```
Input: 
[
  { a: 10, b: 5 },
  { a: 7, b: 4 },
  { a: 7, b: 5 },
  { a: 15, b: 1 },
  { a: 10, b: 2 }
]

Output: 
[
  { a: 7, b: 5 },
  { a: 7, b: 4 },
  { a: 10, b: 5 },
  { a: 10, b: 2 },
  { a: 15, b: 1 }
]
```
### 답: 
```
Input.sort(function (x,y){
                if(x.a===y.a){ return y.b-x.b}
               return x.a-y.a;
               });
```
<img src="https://user-images.githubusercontent.com/31956227/93709917-4d9f7100-fb7d-11ea-86b9-fb3e80462ff2.png"/> <br />

## 아래 조건을 만족시키는 코드를 작성하세요
```
- 자연수 x부터 y까지의 합을 구하는 코드를 작성하세요.
- Javascript에서 반복문(for ...)을 사용하지 않아야 함
```
### 답:
```
function sum(x, y){
    return (x+y)*(Math.abs(x-y)+1)/2;
}
```
<img src="https://user-images.githubusercontent.com/31956227/93709861-dec21800-fb7c-11ea-87f7-ecf04f78e21d.png"/> <br />

## `아래 문제를 해결하는 코드를 작성하세요.`
```
N 개의 정수로 이뤄진 배열 A가 주어졌을 때 배열의 연속된 부분(P ~ Q, 0 <= P <= Q < N)의 합이 0 이상이면서 최대가 되는 영역과 최대값을 반환하는 함수를 구현하세요. 이 조건을 만족시키는 조합이 없다면 max 값에 -1를 반환합니다.

const A = [1, 2, -3, 4, 5, -6]; 
const { range: [ P, Q ] , max } = resolve(A);
```
### 답:
```
const A = [1, 2, -3, 4, 5, -6]; 

let max = -1; 
let  arrlength= A.length;
let q=0;
let p=0;
A.forEach(function (x,y) {
       if(x>=0 && x<=A[y+1] && x+A[y+1]>0 && x< arrlength && A[y+1]<arrlength )
	{
        		if(max<x+A[y+1]) 
		    {max = x+A[y+1];p=y;q=y+1 };
        	}

               });
console.log('범위: '+p+'~'+q+' 최대값: '+max);
```
<img src="https://user-images.githubusercontent.com/31956227/93709862-e1247200-fb7c-11ea-907b-6dcdca62fda7.png"/> <br />
## 아래 그림은 Tree 구조입니다. 아래 조건이 만족하도록 코드를 작성하세요.
<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0aef90b4-d7e3-4e2f-b916-79d0889a3ba5%2FUntitled.png?table=block&id=4e3b9639-4ee8-4296-9044-f9815972f2e8&width=540&userId=cf62e7e6-c77c-4ba6-8ff1-2b6f73339bf2&cache=v2" />

```
- 위 그림의 트리 구조를 표현하는 데이터셋을 만드세요.
- 데이터셋이 주어졌을때 최대값을 찾는 함수를 만드세요.
``` 

### 답:
1. 트리 구조의 데이터셋을 어떻게 만들어야할지 생각하고 찾아봤지만 기한내의 좋은 방법을 찾아내지 못했습니다. <br />
2. 최대값을 구하는 함수이니 넓이우선 탐색 방법으로 알고리즘을 짜면 될 것 같습니다.

## 아래 문제를 해결하는 코드를 작성하세요.
```
N 개의 정수로 이뤄진 배열 A가 주어졌을 때 배열의 연속된 부분(P ~ Q, 0 <= P <= Q < N)의 합이 0 이상이면서 최대가 되는 영역과 최대값을 반환하는 함수를 구현하세요. 이 조건을 만족시키는 조합이 없다면 max 값에 -1를 반환합니다.

const A = [1, 2, -3, 4, 5, -6]; 
const { range: [ P, Q ] , max } = resolve(A);
```

### 답:
```
const A = [1, 2, -3, 4, 5, -6]; 

let max = -1; 
let  arrlength= A.length;
let q=0;
let p=0;
A.forEach(function (x,y) {
       if(x>=0 && x<=A[y+1] && x+A[y+1]>0 && x< arrlength && A[y+1]<arrlength )
	{
        		if(max<x+A[y+1]) 
		    {max = x+A[y+1];p=y;q=y+1 };
        	}

               });
console.log('범위: '+p+'~'+q+' 최대값: '+max);
```
## React 개념에 대한 문제입니다. 아는 대로 서술해주세요.
```
- 반복되는 Component에 key를 지정하지 않으면 나타날 수 있는 문제가 어떤 것인지 설명하세요.
- Component를 unmount할 때 cleanup을 하는 이유와 하지 않을 때 나타날 수 있는 문제를 설명하세요. 명확한 예제를 들어 설명할 수 있으면 더욱 좋습니다.
```
### 답:

- 리스트에서 key 를 설정 하지 않으면 <br />
1.콘솔에 'Warning: Each child in a list should have a unique "key" prop.' 에러가 뜹니다.<br />
2.key 는 고유값을 지정하여 새로운 데이터가 추가 될때 기존에 키값이 존재하던 데이터는 랜더링 하지않고 새로 추가된 데이터만 랜더링을 합니다.<br />
즉 key를 설정하지 않으면 계속 이미 불렀던 데이터까지 랜더링을 해야하기에 사이트가 느려질 수 있습니다.<br />
<br />

- clean-up는 useEffect를 원상태로 돌리기 위해 사용됩니다.<br />
즉 clean-up을 사용 하는 이유는 메모리 누수를 막기 위해 사용합니다.<br />
만약 a라는 컴포넌트가 있고 이 컴포넌트는 재사용 됩니다. <br />
그런데 이 컴포넌트는 입력된 값을 한번만 사용 하고 그 값을 버리는 컴포넌트인데 cleanup을 해주지 않으면 계속 메모리에 정보가 누적되게 됩니다.<br />



