---
emoji: 🍔
title: 열거형 (Enum)
date: '2023-04-04 22:43:00'
author: 박규리
tags: Swift
categories: Swift
---

## 💡 Enum 개념

> 연관된 항목들을 묶어서 표현할 수 있는 타입 </br>
> 이미 정해놓은 입력 값만 선택해서 사용하고 싶을 떄 유리 </br>
> -> 정의해 준 항목 외에는 추가 / 수정 불가능 </br>

</br>
</br>

즉, 열거형은 다음과 같은 경우 유용 </br>

</br>

* 제한된 선택지를 주고 싶을 떄
* 정해진 값 외에는 입력받고 싶지 않을 때
* 예상된 입력 값이 한정되어 있을 떄

</br>
</br>

## 💡 열거형을 사용하는 이유

1. 깔끔하고 간결한 코드 

```swift
// 대룩별 나라 구분

enum Asia {
    case korea, japan, china
}

enum America {
    case usa
    case mexico
    case panama
}

enum Europe {
    case france
    case germany
    case spain
}
```

> 다음과 같이 열거형을 사용해 코드를 짤 경우 각 대륙 안에 어떤 국가가 있는지 한눈에 알아볼 수 있다. </br>

</br>

2. 코드 작성이 편리 

```swift
// 1) 열거형으로 선언
enum Capital:String {
    case KualaLumpur = "Malaysia"
}
print(Capital.KualaLumpur)

// 2) 그냥 선언
let capital = ["KualaLumpur":"Malaysia"]

print(capital["KualaLumpur"])
```
> 위 두개의 코드는 모두 말레이시아 수도 쿠알라룸푸르를 선언하고 있다. </br>
> 두 가지의 코드로 수도(KualaLumpur)를 출력 하려고 할 떄, 열거형으로 선언할 경우에는 Capital 입력 시, 자동완성을 통해 어려운 철자를 입력하지 않아도 된다. 
</br>
</br>
</br>

## 💡 열거형 졍의 

### 원시값이 없는 열거형

## Switch 구문에서의 열거형

## Enum associated values (연관 값)



</br>
</br>

```toc
```