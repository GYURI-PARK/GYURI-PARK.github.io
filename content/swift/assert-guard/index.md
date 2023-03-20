---
emoji: 👮‍♂️
title: assert와 guard
date: '2023-03-20 21:26:00'
author: 박규리
tags: Swift
categories: Swift
---

## 💡 assert 함수

> 특정조건을 체크하고 조건이 성립되지 않으면 메시지를 출력할 수 있게 해주는 함수

</br>
</br>

* 애플리케이션이 동작 도중에 생성하는 다양한 결과값을 동적으로 확인하고 안전하게 처리할 수 있도록 확인하고 빠르게 처리 가능
* assert(_:_:file:line:) 함수를 사용
* 디버깅 모드에서만 동작
* 배포하는 애플리케이션에서는 제외됨
* 주로 디버깅 중 조건의 검증을 위해 사용

</br>

```swift
var someInt: Int = 0
assert(someInt == 0, "someInt != 0")
// 조건 (someInt == 0)에 부합하면 지나가기
// 부합하지 않으면 -> (동작 중지) Assertion failed: someInt != 0 

someInt = 1
// assertion failed: someInt != 0: file guard_assert.swift, line 26
```

</br>

```swift
func functionWithAssert(age: Int?) {

    assert(age != nil, "age == nil")

    assert((age! >= 0) && (age! <= 130), "나이값 입력이 잘못되었습니다")
    print("당신의 나이는 \(age!)세입니다")
}

functionWithAssert(age: 50)
//functionWithAssert(age: -1) // 동작 중지, 검증 실패
//functionWithAssert(age: nil) // 동작 중지, 검증 실패
```

</br>
</br>

## 💡 guard 구문

* guard 구문의 핵심은 **Early EXIT (빠른 종료)**

> if 조건문과 비교해본다면, if문은 '(조건)이면 (code)해라'의 실행구문이지만, guard구문의 경우 '(조건)이 아니면 끝내라'

</br>

* 디버깅 모드뿐만 아니라 어떤 조건에서도 동작 가능
* guard의 else 블럭 내부에는 *특정 코드블럭을 종료하는 지시어(return, break, continue, throw 등)*가 꼭 있어야 한다.
* 단순 조건 판단 후 빠르게 종료할 떄도 용이

### guard let 옵셔널 바인딩

```swift
func functionWithGuard(age: Int?) {

    guard let unwrappedAge = age, // guard let을 통해 옵셔널 바인딩
    // age가 nil일 경우 실행 X -> 종료
        unwrappedAge < 130,
        unwrappedAge >= 0 else {
        print("나이값 입력이 잘못되었습니다")
        return
    }
    // 조건 1 = unwrappedAge < 130, 조건 2 = unwrappedAge >= 0
    // 조건과 맞지 않을 경우 "나이값 입력이 잘못되었습니다" 출력 -> 종료

    print("당신의 나이는 \(unwrappedAge)세입니다")
    // guard구문을 통과했을 경우 당신의 나이는 OO세입니다 출력
}
```
</br>

* if-let 구문과 다르게, else문 생략 불가능
* 제어문 전환 명령어 반드시 필요
* 요구사항만을 반영해서 예외처리할 경우 guard let이 유용
* 함수 전체에서 optional로 추출된 상수나 함수 사용 가능

</br>
</br>

### 반복문 안에서의 guard 구문

```swift
var count = 1
while true {
    guard count < 3 else {
        break
    }
    print(count)
    count += 1
}
// 1
// 2
```
</br>
</br>

### Dictionary 활용

```swift
func someFunction(info: [String: Any]) {
    guard let name = info["name"] as? String else {
        return
    }

    guard let age = info["age"] as? Int, age >= 0 else {
        return
    }

    print("\(name): \(age)")

}

someFunction(info: ["name": "jenny", "age": "25"]) // 종료
someFunction(info: ["name": "jisoo"]) // 종료 
someFunction(info: ["name": "doris", "age": 25]) // doris: 25
```

</br>
</br> 

```toc
```