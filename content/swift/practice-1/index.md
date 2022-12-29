---
emoji: 🕊
title: Swift 기초 다지기(1)
date: '2022-12-24 13:00:00'
author: 박규리
tags: swift 
categories: Swift
---

![swift-logo.png](swift-log.png)

## 💡 명명법

### Swift 는 대소문자를 구분!

* Lower Camel Case : function, method, variable, constant 
    ex) someVariavleName

* Upper Camel Case : type(class, struct, enum, extension, …)
    ex) Person, Point, Week

</br>
</br>


## 💡 콘솔로그
</br>
* print : 단순 문자열 출력
* dump : 인스턴스의 자세한 설명 (description 프로퍼티) 까지 출력

</br>
</br>


## 💡 문자열 보간법 (String interpolation)
</br>
</br>

#### 프로그램 실행 중 문자열 내에 변수 또는 상수의 실질적인 값을 표현하기 위해 사용
* \() -> 문자열로 자동 치환

### 📎 예제 코드
```bash
// 콘솔로그와 문자열 보간법 (print 사용)

import Swift

let age: Int = 20

print("안녕하세요! 저는 \(age)살 입니다:)")
print("안녕하세요! 저는 \(age+4)살 입니다:)")
```
</br>

```bash
// 콘솔로그와 문자열 보간법 (dump 사용)

class Person {
    var name: String = "gyu ri"
    var age: Int = 20
}

let orange: Person = Person()

print("(1) use print : ", orange)
print("\n")
print("(2) use dump : ")
dump(orange)
```



## 💡 상수와 변수


## 💡 데이터 타입


## 💡 Any / AnyObject / nil


```toc
```