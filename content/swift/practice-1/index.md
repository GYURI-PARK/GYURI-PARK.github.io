---
emoji: π
title: Swift κΈ°μ΄ λ€μ§κΈ° (1)
date: '2022-12-24 13:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

## π‘ λͺλͺλ²

- Swift λ λμλ¬Έμλ₯Ό κ΅¬λΆ!

### 1. Lower Camel Case 

> function, method, variable, constant 
    ex) someVariavleName
</br>

### 2. Upper Camel Case 

> type(class, struct, enum, extension, β¦)
    ex) Person, Point, Week

</br>
</br>


## π‘ μ½μλ‘κ·Έ

### 1. print

λ¨μ λ¬Έμμ΄ μΆλ ₯ 
</br>

### 2. dump
μΈμ€ν΄μ€μ μμΈν μ€λͺ (description νλ‘νΌν°) κΉμ§ μΆλ ₯

</br>
</br>

## π‘ λ¬Έμμ΄ λ³΄κ°λ² (String interpolation)
</br>

- νλ‘κ·Έλ¨ μ€ν μ€ λ¬Έμμ΄ λ΄μ λ³μ λλ μμμ μ€μ§μ μΈ κ°μ νννκΈ° μν΄ μ¬μ©
* \() -> λ¬Έμμ΄λ‘ μλ μΉν
</br>

```swift
// μ½μλ‘κ·Έμ λ¬Έμμ΄ λ³΄κ°λ² (print μ¬μ©)

import Swift

let age: Int = 20

print("μλνμΈμ! μ λ \(age)μ΄ μλλ€:)")
print("μλνμΈμ! μ λ \(age+4)μ΄ μλλ€:)")
```
</br>

```swift
// μ½μλ‘κ·Έμ λ¬Έμμ΄ λ³΄κ°λ² (dump μ¬μ©)

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

</br>
</br>


## π‘ μμμ λ³μ

* λμμ°κΈ° μ€μ!
* κ°μ typeμ΄ λͺννλ€λ©΄ type μλ΅ κ°λ₯

### 1. μμ μ μΈ

> μμ μ μΈ ν€μλ : let </br>
> let μ΄λ¦: νμ = κ°

</br>

### 2. λ³μ μ μΈ

> λ³μ μ μΈ ν€μλ : var </br>
> var μ΄λ¦: νμ = κ°

</br>
</br>


## π‘ λ°μ΄ν° νμ

* Swiftλ λ€λ₯Έ λ°μ΄ν° νμ κ°μ λ³κ²½μ΄ λ§€μ° κΉλ€λ‘­κΈ° λλ¬Έμ λ°λμ λͺνν λ°μ΄ν° νμμ μ€μ ν΄μ£Όμ΄μΌ νλ€.

</br>

### 1. Bool (true or false)

</br>

```swift
var someBool: Bool = true
print(someBool)
someBool = false
```

</br>

### 2. Int (μ μν) : μμ μ μ, μμ μ μ, 0 λͺ¨λ κ°λ₯

</br>

```swift
var someInt: Int = -100
print(someInt)
someInt = 100
print(someInt)
someInt = 0
print(someInt)
```

</br>

### 3. UInt (μμ μ μ)

</br>

```swift
var someUInt: UInt = 100
print(someUInt)
```

</br>

### 4. Float (32λΉνΈ λΆλ μμν)

</br>

```swift
var someFloat: Float = 3.14
print(someFloat)
```
</br>
</br>

### 5. Double (64λΉνΈ λΆλ μμν)

</br>

```swift
var someDouble: Double = 3.14
print(someDouble)
```
</br>

* someFloatλΌλ λ³μμ someDoubleμ΄λΌλ λ³μμ 3.14 λΌλ κ°μ κ°μ ν λΉν΄μ£Όμμ§λ§ someDoubleκ³Ό someFloatμ μ μ΄μ λ€λ₯Έ λ°μ΄ν° νμμΌλ‘ μ μΈλμ΄μμΌλ―λ‘ Float μλ£νμΈ someFloatλ₯Ό Double μλ£νμΈ someDoubleμ ν λΉν  μ μλ€. 

</br>

π« μλ¬ μ½λ π«

```swift
someDouble = someFloat
```
</br>
</br>

### 6. Character (λ¬Έμ 1κ°)
</br>

* μμ΄, νκΈ, μ΄λͺ¨μ§ λͺ¨λ κ°λ₯
</br>

```swift
var someCharacter1: Character = "π"
print(someCharacter1)

var someCharacter2: Character = "κ°"
print(someCharacter2)

var someCharacter3: Character = "S"
print(someCharacter3)
```
</br>
</br>

### 7. String (λ¬Έμμ΄)
</br>

```swift
var someString: String = "ννν π"
someString += "μμΌλ©΄ λ³΅μ΄ μμ"
print(someString)
```
</br>

* μμ κ²°κ³Όμ λ§μ°¬κ°μ§λ‘ Stringμ Characterμ ν¬ν¨νκ³  μμ§λ§, StringμΌλ‘ ν λΉλ λ³μμ Character κ°μ ν λΉν  μ μλ€.

</br>
</br>

## π‘ Any / AnyObject / nil
</br>

### 1. Any : λͺ¨λ  νμμ μ§μΉ­νλ ν€μλ
</br>

```swift
import Swift

var someAny: Any = 100
print(someAny)
someAny = "μ΄λ€ νμλ μμ© κ°λ₯ν©λλ€"
print(someAny)
someAny = 123.12
print(someAny)
```
</br>

* λ€λ₯Έ νμμΌλ‘ ν λΉλ λ³μμλ any νμ ν λΉ λΆκ°

</br>
</br>

### 2. AnyObject : λͺ¨λ  ν΄λμ€ νμμ μ§μΉ­νλ νλ‘ν μ½
</br>

```swift
class SomeClass{}
var someAnyObject: AnyObject = SomeClass()
print(someAnyObject)
```

</br>

* ν΄λμ€μ μΈμ€ν΄μ€μλ§ μ μΈ κ°λ₯

</br>
</br>

### 3. nil : μμμ μλ―Ένλ ν€μλ
</br>

* nullκ³Ό κ±°μ κ°μ μλ―Έλ‘ μ°μΈλ€.

* Anyνμκ³Ό AnyObject νμμΌλ‘ μ μΈλ λ³μμλ μ΄λ€ λ°μ΄ν° νμλ λ€μ΄μ¬ μ μμ§λ§,
λΉ κ°μ λ€μ΄μ¬ μ μλ€.

</br>
</br>

```toc
```