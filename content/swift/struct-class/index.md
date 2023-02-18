---
emoji: 🏠
title: 구조체(Struct)와 클래스(Class) 
date: '2023-02-17 16:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

✨ 구조체와 클래스는 OOP(Object-Oriented Programming)를 위한 필수 요소로 프로그램의 코드를 **추상화**하기 위해 사용 </br>

✨ Swift에서는 구조체와 클래스를 위한 별도의 인터페이스와 파일을 만들 필요가 없다.

</br>
</br>

## 💡 구조체 (Struct)

### 정의

* 인스턴스의 값(프로퍼티)을 저장하거나 기능(메소드)을 제공하고 이를 캡슐화할 수 있는 Swift가 제공하는 타입

* Swift에서는 대부분의 타입이 구조체로 이루어져 있다.

* 대문자 CamelCase 사용

</br> 

struct 이름 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 구현부 </br>    
}

</br>
</br>

### 프로퍼티 및 매서드

* 프로퍼티와 매서드에 대한 자세한 설명은 여기 참고

</br>

```swift
struct Sample {
    // 프로퍼티 : 인스턴스 변수 (타입안에 들어있는 변수)
    // 매서드 : 구조체 안의 함수 (타입안에 들어있는 함수)
    var mutableProperty: Int = 100 // 가변 프로퍼티
    let immutableProperty: Int = 100 // 불변 프로퍼티

    static var typeProperty: Int = 100 // 선언한 타입(Sample)에서 사용할 수 있는 타입 프로퍼티
    


}
```

