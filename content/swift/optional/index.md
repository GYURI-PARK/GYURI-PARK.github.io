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
ㅐㅔ
```


</br>
</br> 

```toc
```
