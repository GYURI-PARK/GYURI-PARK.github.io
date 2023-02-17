---
emoji: 🍩
title: Swift 기초 다지기 (3)
date: '2023-02-11 15:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

## 💡 조건문

### if-else

**if** condition { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
}&nbsp;&nbsp;**else if** condition { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
}&nbsp;&nbsp;**else** { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
} 

</br>

* condition(조건) 소괄호 생략 가능
* ❗️ Swift 조건은 항상 Bool 타입이 들어와야한다. ❗️

</br>

```swift
import Swift
let someInteger = 100

if someInteger < 100 {
    print("100미만")
} else if someInteger > 100 {
    print("100초과")
} else {
    print("100")
}
```

</br>
</br>

### switch

**switch** value { </br>
**case** pattern: </br>
&nbsp;&nbsp;&nbsp;code </br>
**default:** </br>
&nbsp;&nbsp;&nbsp;code </br>
}

</br>

* 범위 연산자를 활용하면 유용

#### 💭 **범위 연산자**

1. 닫힌 범위 연산자(Closed Range Operator)

> a...b
> a 이상 b 이하
</br>

2. 반 닫힌 범위 연산자 (Half-Open Range Operator)

> a..<b
> a 이상 b 미만
</br>

3. 단방향 범위 (One-Side Ranges)

> ...a , a... , ..<a
> 시작과 끝 중 하나만 정해주는 연산자

</br>
</br>

```swift
switch someInteger {
    case 0:
        print("zero")
    case 1..<100:
        print("1~99")
    case 101...Int.max:
        print("over 100")
    default:
        print("unknown")
}
```

</br>
</br>

* 정수 외의 대부분의 타입을 기본 타입으로 사용 가능
* switch 조건문을 명확하게 명시하지 않으면 반드시 default 값 필요
* break 명시 필요 X

</br>

```swift
switch "Doris" {
    case "A":
        print("A")
    case "B":
        print("B")
    case "Doris":
        print("It's Doris")
    default:
        print("unknown")
}
```

</br>
</br>
</br>

## 💡 반복문

### for - in 

for item in items { </br>
&nbsp;&nbsp;&nbsp;&nbsp; code </br>
}

</br>

```swift
import Swift

var integers = [1,2,3]
let people = ["Doris": 10, "Jenny": 15, "Timmy":20]

for i in integers {
    print(i)
}
```
</br>
</br>

* Dictionary의 경우 item은 (key, value) 형태인 튜플 타입

```swift
for (name, age) in people {
    print("\(name): \(age)")
}
```
</br>
</br>

### while

while condition { </br>
&nbsp;&nbsp;&nbsp;&nbsp; code </br>
}

</br>

* 조건 (condition)에는 반드시 bool 값이 들어와야한다.
* 조건 부분에 소괄호() 생략 가능

</br>

```swift
while integers.count > 1 {
    integers.removeLast()
}
```

</br>
</br>

### repeat - while

repeat { </br>
&nbsp;&nbsp;&nbsp;&nbsp; code </br>
} while condition 

</br>

```swift
repeat {
    integers.removeLast()
} while integers.count > 0
```

</br>
</br> 

```toc
```
