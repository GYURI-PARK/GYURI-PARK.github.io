---
emoji: π¦
title: Swift κΈ°μ΄ λ€μ§κΈ° (3)
date: '2023-02-11 15:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

## π‘ μ‘°κ±΄λ¬Έ

### if-else

**if** condition { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
}&nbsp;&nbsp;**else if** condition { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
}&nbsp;&nbsp;**else** { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements </br>
} 

</br>

* condition(μ‘°κ±΄) μκ΄νΈ μλ΅ κ°λ₯
* βοΈ Swift μ‘°κ±΄μ ν­μ Bool νμμ΄ λ€μ΄μμΌνλ€. βοΈ

</br>

```swift
import Swift
let someInteger = 100

if someInteger < 100 {
    print("100λ―Έλ§")
} else if someInteger > 100 {
    print("100μ΄κ³Ό")
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

* λ²μ μ°μ°μλ₯Ό νμ©νλ©΄ μ μ©

#### π­ **λ²μ μ°μ°μ**

1. λ«ν λ²μ μ°μ°μ(Closed Range Operator)

> a...b
> a μ΄μ b μ΄ν
</br>

2. λ° λ«ν λ²μ μ°μ°μ (Half-Open Range Operator)

> a..<b
> a μ΄μ b λ―Έλ§
</br>

3. λ¨λ°©ν₯ λ²μ (One-Side Ranges)

> ...a , a... , ..<a
> μμκ³Ό λ μ€ νλλ§ μ ν΄μ£Όλ μ°μ°μ

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

* μ μ μΈμ λλΆλΆμ νμμ κΈ°λ³Έ νμμΌλ‘ μ¬μ© κ°λ₯
* switch μ‘°κ±΄λ¬Έμ λͺννκ² λͺμνμ§ μμΌλ©΄ λ°λμ default κ° νμ
* break λͺμ νμ X

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

## π‘ λ°λ³΅λ¬Έ

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

* Dictionaryμ κ²½μ° itemμ (key, value) ννμΈ νν νμ

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

* μ‘°κ±΄ (condition)μλ λ°λμ bool κ°μ΄ λ€μ΄μμΌνλ€.
* μ‘°κ±΄ λΆλΆμ μκ΄νΈ() μλ΅ κ°λ₯

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
