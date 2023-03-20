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



</br>
</br> 

```toc
```