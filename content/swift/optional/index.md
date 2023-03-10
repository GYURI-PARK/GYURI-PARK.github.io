---
emoji: π±
title: μ΅μλ(Optional)κ³Ό μ΅μλ μ²΄μ΄λ(Optional Chaining)
date: '2023-02-17 14:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

## π‘ μ΅μλ (Optional)

> κ°μ΄ μμ μλ μκ³ , μμ μλ μλ κ²!

</br>

### π§  Why?

1. nilμ κ°λ₯μ±μ λͺμμ μΌλ‘ νν
2. nilμ κ°λ₯μ±μ λ¬Έμν νμ§ μμλ μ½λλ§μΌλ‘ μΆ©λΆν ννμ΄ κ°λ₯νλ―λ‘ λ¬Έμ / μ£Όμ μμ± μκ°μ μ μ½ κ°λ₯
3. μ λ¬ λ°μ κ°μ΄ μ΅μλμ΄ μλ κ²½μ° nilμ²΄ν¬λ₯Ό νμ§ μλλΌλ μμ¬νκ³  μ¬μ©ν  μ μμΌλ―λ‘ ν¨μ¨μ μΈ μ½λ©κ³Ό μμΈ μν©μ μ΅μννλ μμ ν μ½λ©μ΄ κ°λ₯

</br>
</br>


```swift
// int optional νμ μ¬μ©

func someFunction(someOptionalParam: Int?) {
    // ...
}

someFunction(someOptionalParam: nil)
// someOptionalParam can be nil
```

```swift
// int νμ μ¬μ©

func someFunction(someParam: Int) {
    // ...
}

someFunction(someParam: nil)
// π« someParam must not be nil π« -> μ€λ₯μ½λ
```
</br>
</br>

### enum + general

```swift
// 1. μ΄κ±°ν
enum Optional<Wrapped> : ExpressibleByNilLiteral {
    case none
    case some(Wrapped)
}
```

```swift
// μΌλ°μ μΈ optional νμ μ μΈ
let optionalValue: Optional<Int> = nil
let optionalValue: Int? = nil
```

</br>
</br>

### βοΈ μμμ  μΆμΆ μ΅μλ (Implicitly Unwrapped Optional)

```swift
// λλνλ‘ μ μΈ

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

* κΈ°μ‘΄ λ³μμ²λΌ μ¬μ© κ°λ₯
```swift
optionalValue = optionalValue + 1
```

</br>

* nil ν λΉ κ°λ₯
```swift
optionalValue = nil

// π« μ€λ₯μ½λ
optionalValue = optionalValue + 1
// optionalValueμ nilμ΄ ν λΉλμ΄μμΌλ―λ‘ λ°νμ μ€λ₯ λ°μ
```
</br>
</br>

### β μ΅μλ (Optional)

```swift
// λ¬Όμνλ‘ μ μΈ

var optionalValue: Int? = 100

switch optionalValue {
    case .none:
        print("This Optional variable is nil")
    case .some(let value):
        print("Value is \(value)")
}
```
</br>

* nil ν λΉ κ°λ₯
```swift
optionalValue = nil
```

</br>

* κΈ°μ‘΄ λ³μμ²λΌ μ¬μ©λΆκ° β 

```swift
// μ΅μλκ³Ό μΌλ° κ°μ λ€λ₯Έ νμμ΄λ―λ‘ μ°μ° λΆκ°
// π« μ€λ₯ μ½λ π«
optionalValue = optionalValue + 1
```

</br>
</br>

## π‘ μ΅μλ μΆμΆ (Optional Unwrapping)

### μ΅μλ λ°μΈλ© (Optional Binding)

* nil μ²΄ν¬ + μμ ν κ° μΆμΆ

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String? = nil

printNmae(myName)
// π« μ€λ₯μ½λ π«
// μ λ¬λλ κ°μ νμμ΄ λ€λ₯΄κΈ° λλ¬Έμ μ»΄νμΌ μ€λ₯ λ°μ
// λ°λΌμ if - let λ°©μμΌλ‘ μ΅μλ λ°μΈλ© 
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

// μμ nameμ if-let κ΅¬λ¬Έ μμμλ§ μ¬μ©κ°λ₯
```

</br>

* μ¬λ¬ λ³μλ€μ νλ²μ λ°μΈλ© κ°λ₯

```swift
var myName: String? = "Doris"
var yourName: String? = nil

if let name = myName, let friend = yourName {
    print("\(name) and \(friend)")
}
// myName, yourName λκ°μ λ³μμ λͺ¨λ ν λΉ λμ΄μΌμ§λ§ μ€ν κ°λ₯
// yourNameμ΄ nilμ΄κΈ° λλ¬Έμ μ€ν β
```

</br>
</br>

### κ°μ  μΆμΆ (Force Unwrapping)

* μ΅μλμ κ°μ κ°μ λ‘ μΆμΆ

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String? = "Doris"

printNmae(myName!)
// λ³μ λ€μ λλν λΆμ¬μ κ°μ  μΆμΆ
```

</br>

* κ°μ μΆμΆ μ κ°μ΄ μμΌλ©΄ λ°νμ μ€λ₯ λ°μ

<br>

* μμμ  μΆμΆ μ΅μλμμλ κ°μ μΆμΆμ κ°μ νκ³  μ μΈ

```swift
var yourName: String! = nil
printName(yourName)

// λ€μ λλνλ₯Ό λΆμ΄μ§ μμλ κ°μ μΆμΆ κ°λ₯
// κ·Έλ¬λ nil κ°μ΄ μ λ¬λκΈ° λλ¬Έμ λ°νμ μ€λ₯ λ°μ
```

</br>
</br>

## π‘ μ΅μλ μ²΄μ΄λ (Optional Chaining)

* μ²΄μΈμ ννλ‘ μ°μμ μΌλ‘ μ΅μλμ μ¬μ©νλ κ²
* .(dot)μ ν΅ν΄ λ΄λΆ νλ‘νΌν°λ λ§€μλμ μ°μμ μΌλ‘ μ κ·Όν  λ μ΅μλ κ°μ΄ νλλΌλ κ»΄ μμΌλ©΄ μ΅μλ μ²΄μ΄λ
* μ°κ²°λ μ§μμμ μ΄λ νλλΌλ nilμ΄ μ‘΄μ¬νλ€λ©΄ μ μ²΄ κ²°κ³Όλ nilμ΄ λλ€.


### μμ

```swift
struct Contacts {
    var email : String
    var address : [String : String]
}

struct Person {
    var name : String
    var contacts : Contacts
    
    init(name : String, email : String, address : String) {
        self.name = name
        contacts = Contacts(email: email, address: ["home" : address])
    }
}

var my : Person? = Person(name: "Doris", email: "doris@naver.com", address: "Seoul")
```

> λ κ°μ κ΅¬μ‘°μ²΄ Contactsμ Personμ λ§λ€κ³  Person κ΅¬μ‘°μ²΄ μμ Contents κ΅¬μ‘°μ²΄λ₯Ό μΈμ€ν΄μ€λ‘ κ°μ§λ νλ‘νΌν° contactsλ₯Ό μ μΈ </br>
> μ΅μλ Person νμμΈ myλ λ³μλ₯Ό μ μΈ </br>
> κ° (my.contacts.email)μ μ κ·Όν΄λ³΄μ </br>

```swift
my.contacts.email 
my.name 
```

> μ λκ°μ μ½λ λͺ¨λ μλ¬κ° λλ κ²μ νμΈν  μ μλ€. </br>
> myλ Personμ μΆμλ νμμ κ°μ§κ³  μκΈ° λλ¬Έμ κ° νλ‘νΌν°μ μ κ·ΌνκΈ° μν΄μλ λ°λμ unwrappingμ ν΄μΌνλ€ βοΈ </br>
</br>

#### HOW?

π§  κ·Έλ λ€λ©΄ μ΅μλ νν μμ νλ‘νΌν°λ μ΄λ»κ² μ κ·Όν΄μΌ ν κΉ? 

</br>
</br>

```swift
my?.contacts.email
my?.name
```

> **μ μ½λμμμ²λΌ myμΈμ€ν΄μ€μ ?(λ¬Όμν)λ₯Ό λΆμ¬μ£Όμ΄μ μ΅μλ ννμμ μλ €μ£Όλ©΄ λλ€.**

</br>
</br>

μ¦, μ΅μλ ννμμ λ©€λ²μ μ κ·Όν  λ, ννμμ΄ nilμΌ μλ μμΌλ ?λ₯Ό μ¬μ©ν΄μ£Όλ κ²μ΄ λ°λ‘ **μ΅μλ μ²΄μ΄λ** 

</br>
</br>

#### nilμΌ κ²½μ°

π§  λ§μ½ λ³μκ° nilμ΄λΌλ©΄ λ°νλλ κ°μ?

</br>
</br>

```swift
my = nil
my?.contacts.email
```
> λ€μκ³Ό κ°μ΄ ννμμ΄ nilμΌ κ²½μ° nilμ λ°ν </br>
> my, contacts, email μ€ λ¨ νλμ ννμμ΄λΌλ nilμ΄λΌλ©΄ κ²°κ³Όκ°μ nil </br>

<br>

* μ¦, μ΅μλ μ²΄μ΄λμ λ³μκ° nilμΈμ§ μλμ§λ₯Ό νμΈνκ³  nilμ΄ μλ κ²½μ°μλ λ³Έλμ κ°μ λ°ννκ³  nilμΌ κ²½μ° nilμ λ°ννκ² λλ€.

</br>
</br>

</br>
</br> 

```toc
```
