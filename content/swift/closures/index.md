---
emoji: 📷
title: 클로저 (Closure)
date: '2023-03-06 00:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

## 💡 클로저 (Closure)

* 클로저는 **사용자의 코드 안에서 전달되어 사용할 수 있는 로직을 가진 중괄호{}로 구분된 코드의 블럭**을 의미
* 전역함수(global function)와 중첨함수(nested function)기 모두 클로저에 포함
* 보통 클로저는 **Unnamed Closure를 의미**하는 것이지만, Named Closure(함수) 또한 Closure에 포함

</br>

1. Named Closure (함수) </br>
</br>

```swift
func doSomething() {
    print("Named Closure")
}
```

> 다음 코드와 같이 우리가 일반적으로 func()을 사용해 정의하는 이름이 있는 함수를 의미 </br>
> 단지, 이를 클로저로 부르는 것이 아니라, 그냥 함수로 명칭 </br>
</br>
</br>

2. Unnamed Closure (익명함수) </br>
</br>

```swift
let closure = { print("Unnamed Closure") }
```

> 보통 Closure의 의미는 다음과 같이 이름을 붙이지 않고 사용하는 함수(익명함수)를 말함 </br>
</br>

* 따라서 클로저는 익명이긴 하지만 함수이기에 1급 객체 함수의 특성을 모두 가짐 

> 1급 객체 함수의 특성 </br>
> </br>
> 1. 변수나 상수에 저장 및 할당 가능 </br>
> 2. 파라미터(객체의 인자)로 전달 가능 </br>
> 3. 함수(객체)에서 return 가능 </br>

</br>
</br>

> Swift의 클로저와 같은 것들 </br>
> </br>
> - C, C++, Objective-C : block </br>
> - Java : Lambda funciton </br>
> - C# : Delegates  </br>

</br>
</br>

## 💡 클로저 표현식

```swift
{ (parameters) -> return type in
    statements
}
```

