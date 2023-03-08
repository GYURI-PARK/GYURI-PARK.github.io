---
emoji: 🎱
title: 옵셔널(Optional)과 옵셔널 체이닝(Optional Chaining)
date: '2023-02-17 14:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

## 💡 옵셔널 (Optional)

> 값이 있을 수도 있고, 없을 수도 있는 것!

</br>

### 🧠 Why?

1. nil의 가능성을 명시적으로 표현
2. nil의 가능성을 문서화 하지 않아도 코드만으로 충분히 표현이 가능하므로 문서 / 주석 작성 시간을 절약 가능
3. 전달 받은 값이 옵셔널이 아닐 경우 nil체크를 하지 않더라도 안심하고 사용할 수 있으므로 효율적인 코딩과 예외 상황을 최소화하는 안전한 코딩이 가능

</br>
</br>


```swift
// int optional 타입 사용

func someFunction(someOptionalParam: Int?) {
    // ...
}

someFunction(someOptionalParam: nil)
// someOptionalParam can be nil
```

```swift
// int 타입 사용

func someFunction(someParam: Int) {
    // ...
}

someFunction(someParam: nil)
// 🚫 someParam must not be nil 🚫 -> 오류코드
```
</br>
</br>

### enum + general

```swift
// 1. 열거형
enum Optional<Wrapped> : ExpressibleByNilLiteral {
    case none
    case some(Wrapped)
}
```

```swift
// 일반적인 optional 타입 선언
let optionalValue: Optional<Int> = nil
let optionalValue: Int? = nil
```

</br>
</br>

### ❗️ 암시적 추출 옵셔널 (Implicitly Unwrapped Optional)

```swift
// 느낌표로 선언

var optionalValue: Int! = 100

switch optionalValue {
    case .none:
        print("This Optional variable is nil")
    case .some(let value):
        print("Value is \(value)")
}
```
</br>
</br>

* 기존 변수처럼 사용 가능
```swift
optionalValue = optionalValue + 1
```

</br>

* nil 할당 가능
```swift
optionalValue = nil

// 🚫 오류코드
optionalValue = optionalValue + 1
// optionalValue에 nil이 할당되어있으므로 런타임 오류 발생
```
</br>
</br>

### ❓ 옵셔널 (Optional)

```swift
// 물음표로 선언

var optionalValue: Int? = 100

switch optionalValue {
    case .none:
        print("This Optional variable is nil")
    case .some(let value):
        print("Value is \(value)")
}
```
</br>

* nil 할당 가능
```swift
optionalValue = nil
```

</br>

* 기존 변수처럼 사용불가 ❌ 

```swift
// 옵셔널과 일반 값은 다른 타입이므로 연산 불가
// 🚫 오류 코드 🚫
optionalValue = optionalValue + 1
```

</br>
</br>

## 💡 옵셔널 추출 (Optional Unwrapping)

### 옵셔널 바인딩 (Optional Binding)

* nil 체크 + 안전한 값 추출

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String? = nil

printNmae(myName)
// 🚫 오류코드 🚫
// 전달되는 값의 타입이 다르기 때문에 컴파일 오류 발생
// 따라서 if - let 방식으로 옵셔널 바인딩 
```

</br>

#### if - let

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String! = nil

if let name: String = myName {
    printName(name)
} else {
    print("myName == nil")
}

// 상수 name은 if-let 구문 안에서만 사용가능
```

</br>

* 여러 변수들을 한번에 바인딩 가능

```swift
var myName: String? = "Doris"
var yourName: String? = nil

if let name = myName, let friend = yourName {
    print("\(name) and \(friend)")
}
// myName, yourName 두개의 변수에 모두 할당 되어야지만 실행 가능
// yourName이 nil이기 때문에 실행 ❌
```

</br>
</br>

### 강제 추출 (Force Unwrapping)

* 옵셔널의 값을 강제로 추출

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String? = "Doris"

printNmae(myName!)
// 변수 뒤에 느낌표 붙여서 강제 추출
```

</br>

* 강제추출 시 값이 없으면 런타임 오류 발생

<br>

* 암시적 추출 옵셔널에서는 강제추출을 가정하고 선언

```swift
var yourName: String! = nil
printName(yourName)

// 뒤에 느낌표를 붙이지 않아도 강제추출 가능
// 그러나 nil 값이 전달되기 때문에 런타임 오류 발생
```

</br>
</br>

## 💡 옵셔널 체이닝 (Optional Chaining)

* 체인의 형태로 연쇄적으로 옵셔널을 사용하는 것
* .(dot)을 통해 내부 프로퍼티나 매서드에 연속적으로 접근할 때 옵셔널 값이 하나라도 껴 있으면 옵셔널 체이닝
* 연결된 질의에서 어느 하나라도 nil이 존재한다면 전체 결과는 nil이 된다.




</br>
</br> 

```toc
```
