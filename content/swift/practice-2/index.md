---
emoji: π¦©
title: Swift κΈ°μ΄ λ€μ§κΈ° (2)
date: '2023-01-12 14:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

## π‘ μ»¬λ μ νμ

* μ»¬λ μ νμ : μ¬λ¬ κ°λ€μ λ¬Άμ΄μ νλμ λ³μλ‘ νν

</br>

### 1. Array
* Array : μμκ° μλ list μ»¬λ μ

#### λΉ Array μμ±

π― Int Array μμ±

```swift
var integers: Array<Int> = Array<Int>()
```

</br>

π― Double Array μμ±

```swift
var doubles: Array<Double> = [Double]()
```

</br>

π― String Array μμ±

```swift
var strings: [String] = [String]()
```

</br>

π― Character Array μμ±

```swift
var characters: [Character] = []
```

</br>

β­οΈ letμ μ¬μ©ν΄ Array μ μΈ μ Array μμ λ³κ²½ λΆκ°λ₯

```swift
let immutableArray = [1,2,3]
```

* immutableArray.append(4) λλ immuntableArray.removeAll() κ³Ό κ°μ λͺλ Ήμ΄ μ¬μ© λΆκ°λ₯ 

</br>
</br>

#### **append**

* Int νμμΌλ‘ Arrayλ₯Ό μμ±νκΈ° λλ¬Έμ Int νμμ μ«μλ€λ§ μΆκ°ν  μ μλ€. 

```swift
integers.append(1)
integers.append(100)
```
</br>
π κ²°κ³Ό </br>
[1] </br>
[1, 100]

</br>
</br>

#### **contains**

* Arrayμμ ν΄λΉ μ«μκ° μλμ§ νλ³
> μμΌλ©΄ true λ°ν </br>
> μμΌλ©΄ false λ°ν

```swift
integers.contains(100)
integers.contains(99)
```
</br>
π κ²°κ³Ό </br>
true </br>
false

</br>
</br>

#### **remove**
</br>

1. remove(at: μΈλ±μ€)
* Arrayμμ ν΄λΉ μμΉ κ° μ­μ  ν κ° λ°ν

```swift
integers.remove(at: 0)
```
</br>
π κ²°κ³Ό </br>
1

</br>
</br>
</br>

2. removeLast()
* λ§μ§λ§ κ° μ­μ  ν κ° λ°ν

```swift
integers.removeLast()
```
</br>
π κ²°κ³Ό </br>
100

</br>
</br>
</br>

3. removeAll()
* λͺ¨λ μ­μ 

```swift
integers.removeAll()
```

</br>
</br>

#### **count**
* λͺκ°μ μμκ° μλμ§ νμΈ 

```swift
integers.count
```

</br>
</br>

### 2. Dictionary
* Dictionary : ν€μ κ°μ μμΌλ‘ μ΄λ£¨μ΄μ§ μ»¬λ μ

</br>

#### λΉ Dictionary μμ±

π― Keyκ° String νμμ΄κ³  Valueκ° AnyμΈ λΉ Dictionary μμ±

```swift
var antDictionary: Dictionary<String, Any> = [String: Any]()

// κ°κ°μ Keyμ Value ν λΉνκΈ°
anyDictionay["someKey"] = "value"
anyDictionary["anotherKey"] = 100
```
</br>
π κ²°κ³Ό </br>
["someKey":"value", "anotherKey":100]

</br>
</br>

```swift
// κΈ°μ‘΄ Keyμ μλ‘μ΄ κ°(Value)ν λΉν΄μ£ΌκΈ°
anyDictionay["someKey"] = "dictionary"
```

</br>

π― letμΌλ‘ λΆλ³ Dictionary μ μΈ

```swift
let emptyDictionary: [String: String] = [:]
let initalizedDictionary: [String: String] = ["name": "zorba", "gender": "female"]
```

</br>
</br>

#### value μ­μ 

```swift
anyDictionary.removeValue(forKey: "anotherKey")
anyDictionary["someKey"] = nil 
```

</br>
</br>

### 3. Set
* Set : μμκ° μκ³ , λ©€λ²κ° μ μΌν μ»¬λ μ

#### λΉ Set μμ±

```swift
var integerSet: Set<Int> = Set<Int>()
```
</br>

#### **insert**

* μμ μΆκ°

```swift
integerSet.insert(1)
integerSet.insert(100)
integerSet.insert(99)
integerSet.insert(99)

// Setμμλ μ€λ³΅μ νλ½νμ§ μκΈ° λλ¬Έμ 99κ° λλ² μΆκ°λμ΄λ κ²°κ³Όμ νλ²λ°μ λνλμ§ μλλ€.
```

</br>
</br>

#### **contains**

* μμ ν¬ν¨μ¬λΆ νμΈ

```swift
integerSet.contains(1)
integerSet.contains(2)
```

</br>
π κ²°κ³Ό </br>
true </br>
false

</br>
</br>

#### **remove**
</br>

1. remove(μμ κ°)
* Set μμ ν΄λΉ μμ κ° μ­μ  ν κ° λ°ν

```swift
integerSet.remove(100)
```
</br>
π κ²°κ³Ό </br>
100

</br>
</br>
</br>

2. removeFirst()
* λ§μ§λ§ κ° μ­μ  ν κ° λ°ν

```swift
integerSet.removeFirst()
```
</br>
π κ²°κ³Ό </br>
99

</br>
</br>
</br>

#### **count**
* λͺκ°μ μμκ° μλμ§ νμΈ 

```swift
integerSet.count
```

</br>
</br>

#### **Set μμ©**

```swift
let setA: Set<Int> = [1, 2, 3, 4, 5]
let setB: Set<Int> = [3, 4, 5, 6, 7]
```

</br>

1. union (ν©μ§ν©)
* κ²°κ³Ό μ λ ¬ X

```swift
let union: Set<Int> = setA.union(setB)
```
</br>
π κ²°κ³Ό </br>
{2, 4, 5, 6, 7, 3, 1}

</br>
</br>
</br>

```swift
let sortedUnion: [Int] = union.sorted()
```

</br>
π κ²°κ³Ό </br>
{1, 2, 3, 4, 5, 6, 7}

</br>
</br>
</br>`

2. intersection (κ΅μ§ν©)
* κ²°κ³Ό μ λ ¬ X

```swift
let intersection: Set<Int> = setA.intersection(setB)
```
</br>
π κ²°κ³Ό </br>
{5, 3, 4}

</br>
</br>
</br>

3.  subtracting (μ°¨μ§ν©)
* κ²°κ³Ό μ λ ¬ X

```swift
let subtracting: Set<Int> = setA.subtracting(setB)
```
</br>
π κ²°κ³Ό </br>
{2, 1}

</br>
</br>
</br>
</br>

## π‘ ν¨μ

### ν¨μμ μ μΈ

* **ν¨μ μ μΈμ κΈ°λ³Ένν**
</br>

func ν¨μμ΄λ¦ (λ§€κ°λ³μ1μ΄λ¦: λ§€κ°λ³μ1νμ, λ§€κ°λ³μ2μ΄λ¦: λ§€κ°λ³μ2νμ ...) -> λ°ννμ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** λ°νκ° </br>
}
</br>
</br>

```swift
func sum(a: Int, b: Int) -> Int {
    return a + b
}
```
</br>
</br>
</br>

* **λ°ν κ°μ΄ μλ ν¨μ**
</br>

func ν¨μμ΄λ¦ (λ§€κ°λ³μ1μ΄λ¦: λ§€κ°λ³μ1νμ, λ§€κ°λ³μ2μ΄λ¦: λ§€κ°λ³μ2νμ ...) -> Void { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</br>
}
</br>
</br>

```swift
func printMyName(name: String) -> Void {
    print(name)
}

// μλ΅λ κ°λ₯ 
func printMyName(name: String) {
    print(name)
}
```
</br>
</br>
</br>

* **λ§€κ°λ³μκ° μλ ν¨μ**
</br>

func ν¨μμ΄λ¦ () -> λ°ννμ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return λ°νκ°</br>
}
</br>
</br>

```swift
func maximumIntegerValue() -> Int {
    return Int.max
}
```
</br>
</br>
</br>

* **λ§€κ°λ³μμ λ°νκ°μ΄ μλ ν¨μ**
</br>

func ν¨μμ΄λ¦() -> Void {</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
}
</br>
</br>

```swift
func hello() -> Void {
    print("hello")
}

// μλ΅λ κ°λ₯
func bye() {print("bye")}
```
</br>
</br>

### ν¨μμ νΈμΆ

```swift
func sum(a: Int, b: Int) -> Int {
    return a + b
}

sum(a: 3, b: 5)
```
π κ²°κ³Ό
> 8

</br>

```swift
func printMyName(name: String) {
    print(name)
}

printMyName(name: "gyuri")
```
π κ²°κ³Ό
> gyuri

</br>

```swift
func hello() -> Void {
    print("hello")
}

hello()
```
π κ²°κ³Ό
> hello

</br>
</br>

### λ§€κ°λ³μ κΈ°λ³Έκ°
</br>

func ν¨μμ΄λ¦ (λ§€κ°λ³μ1μ΄λ¦: λ§€κ°λ³μ1νμ, **λ§€κ°λ³μ2μ΄λ¦: λ§€κ°λ³μ2νμ = λ§€κ°λ³μ κΈ°λ³Έκ°** ...) -> λ°ννμ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return λ°νκ°</br>
} 

</br>

* ν¨μμ λ§€κ°λ³μμ κ°μ΄ λ€μ΄κ°μ§ μμλ μλμ μΌλ‘ λ§€κ°λ³μκ° κ°κ² λλ κ°
* κΈ°λ³Έκ°μ κ°λ λ§€κ°λ³μλ λ§€κ°λ³μ λͺ©λ‘ μ€μ λ€μͺ½μ μμΉνλ κ²μ΄ μ’μ

</br>

```swift
func greeting(friend: String, me: String = "gyuri") {
    print("Hello \(friend)! I am \(me)")
}

// friend : κΈ°λ³Έκ°μ΄ μλ λ§€κ°λ³μ
// me : κΈ°λ³Έκ°μ΄ gyuriμΈ λ§€κ°λ³μ
```

</br>
</br>

* λ§€κ°λ³μ κΈ°λ³Έκ°μ κ°μ§λ λ§€κ°λ³μλ μλ΅ κ°λ₯

```swift
greeting(friend: "Jenny")
// Hello Jenny! I am gyuri

greeting(friend: "GD", me: "Doris")
// Hello GD! I am Doris
```

</br>
</br>

### μ λ¬μΈμ λ μ΄λΈ

* ν¨μλ₯Ό νΈμΆν  λ  λ§€κ°λ³μμ μ­ν μ λ λͺννκ² νκ±°λ ν¨μ μ¬μ©μμ μμ₯μμ νννκ³ μ ν  λ μ¬μ©
* ν¨μμ μ€λ³΅ μ μλ μ½κ² κ°λ₯

</br>

func ν¨μμ΄λ¦ (μ λ¬μΈμ λ μ΄λΈ λ§€κ°λ³μ1μ΄λ¦: λ§€κ°λ³μ1νμ, μ λ¬μΈμ λ μ΄λΈ λ§€κ°λ³μ2μ΄λ¦: λ§€κ°λ³μ2νμ ...) -> λ°ννμ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
} </br>

</br>

* ν¨μ λ΄λΆμμ μ λ¬μΈμλ₯Ό μ¬μ©ν  λμλ λ§€κ°λ³μ μ΄λ¦μ μ¬μ©

```swift
func greeting(to friend: String, from me: String) {
    print("Hello \(friend)! I am \(me)")
}

// μ λ¬μΈμ λ μ΄λΈ : to, from
// λ§€κ°λ³μ μ΄λ¦ : friend, me
```
</br>

* ν¨μλ₯Ό νΈμΆν  λμλ μ λ¬μΈμ λ μ΄λΈμ μ¬μ©

```swift
greeting(to: "GD", from: "gyuri")
// Hello GD! I am gyuri
```
</br>
</br>
</br>

### κ°λ³ λ§€κ°λ³μ

* μ λ¬ λ°μ κ°μ κ°μλ₯Ό μκΈ° μ΄λ €μΈ λ μ¬μ©
* κ°λ³ λ§€κ°λ³μλ ν¨μλΉ νλλ§ κ°μ§ μ μλ€.

</br>

func ν¨μμ΄λ¦(λ§€κ°λ³μ1μ΄λ¦: λ§€κ°λ³μ1νμ, μ λ¬μΈμ λ μ΄λΈ λ§€κ°λ³μ2μ΄λ¦: λ§€κ°λ³μ2νμ...) -> λ°ννμ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ν¨μ κ΅¬νλΆ </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
}

</br>
</br>

```swift
func sayHelloToFriends(me: String, friends: String...) -> String {
    return "Hello \(friends)! I'm \(me)!"
}
print(sayHelloToFriends(me: "gyuri", friends: "jenny", "rose", "jisoo", "risa"))
```
</br>

* π« μ λ¬μΈμκ° μκ±°λ nil μλ ₯ μ μ€λ₯ λ°μ

</br>
</br>
</br>

### λ°μ΄ν° νμμΌλ‘μμ ν¨μ

* Swiftλ ν¨μν νλ‘κ·Έλλ° ν¨λ¬λ€μμ ν¬ν¨νλ λ€μ€ ν¨λ¬λ€μ μΈμ΄
* Swiftμ ν¨μλ μΌκΈκ°μ²΄μ΄λ―λ‘ λ³μ, μμ λ±μ μ μ₯μ΄ κ°λ₯νκ³  λ§€κ°λ³μλ₯Ό ν΅ν΄ μ λ¬ν  μλ μλ€.

</br>
</br>
</br>

### ν¨μμ νμνν

* Swiftμ ν¨μλ νλμ λ°μ΄ν° νμμΌλ‘μ ννλ  μ μλ€.
* λ°ννμμ μλ΅ν  μ μλ€.
</br>

(λ§€κ°λ³μ1νμ, λ§€κ°λ³μ2νμ ...) -> λ°ννμ </br>

</br>
</br>

```swift
var someFunction: (String, String) -> Void = greeting(to:from:)

// λ³μ someFunctionμ (String νμμ λ§€κ°λ³μ 2κ°λ₯Ό κ°μ§κ³  λ°νκ°μ΄ μλ) ν¨μ ν λΉ 
```

```swift 
someFunction("GD", "gyuri")
```

π κ²°κ³Ό </br>
> Hello GD! I am gyuri 

</br>

```swift 
someFunction = greeting(friend:me:)
someFunction("GD", "gyuri")
```
π κ²°κ³Ό </br>
> Hello GD! I am gyuri

</br>
</br>

* νμμ΄ λ€λ₯Έ ν¨μλ ν λΉν  μ μλ€.


```swift
someFunction = sayHelloToFriends(me:friends:)
// π« friendsκ° κ°λ³ λ§€κ°λ³μλ₯Ό κ°μ§λ―λ‘ μ€λ₯ μ½λ π«
```

</br>
</br>

* ν¨μ νμμ λ§€κ°λ³μ νμμΌλ‘ μ§μ ν΄μ£Όλ©΄ ν¨μ λ΄λΆμμλ μ€ν κ°λ₯

```swift
func runAnother(function: (String, String) -> Void) {
    function("jenny", "mike")
}

// 1. ν¨μ μ§μ  λκ²¨μ£ΌκΈ°
runAnother(function: greeting(friend:me:))

// 2. ν¨μκ° ν λΉλ λ³μ λκ²¨μ£ΌκΈ°
runAnother(function: someFunction)
```
π κ²°κ³Ό </br>
> Hello jenny! I am mike

</br>
</br>

```toc
```