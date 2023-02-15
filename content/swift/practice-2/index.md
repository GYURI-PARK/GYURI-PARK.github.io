---
emoji: 🌕
title: Swift 기초 다지기 (2)
date: '2023-01-12 14:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

## 💡 컬렉션 타입

* 컬렉션 타입 : 여러 값들을 묶어서 하나의 변수로 표현

</br>

### 1. Array
* Array : 순서가 있는 list 컬렉션

#### 빈 Array 생성

🎯 Int Array 생성

```swift
var integers: Array<Int> = Array<Int>()
```

</br>

🎯 Double Array 생성

```swift
var doubles: Array<Double> = [Double]()
```

</br>

🎯 String Array 생성

```swift
var strings: [String] = [String]()
```

</br>

🎯 Character Array 생성

```swift
var characters: [Character] = []
```

</br>

⭐️ let을 사용해 Array 선언 시 Array 원소 변경 불가능

```swift
let immutableArray = [1,2,3]
```

* immutableArray.append(4) 또는 immuntableArray.removeAll() 과 같은 명령어 사용 불가능 

</br>
</br>

#### **append**

* Int 타입으로 Array를 생성했기 때문에 Int 타입의 숫자들만 추가할 수 있다. 

```swift
integers.append(1)
integers.append(100)
```
</br>
📎 결과 </br>
[1] </br>
[1, 100]

</br>
</br>

#### **contains**

* Array안에 해당 숫자가 있는지 판별
> 있으면 true 반환 </br>
> 없으면 false 반환

```swift
integers.contains(100)
integers.contains(99)
```
</br>
📎 결과 </br>
true </br>
false

</br>
</br>

#### **remove**
</br>

1. remove(at: 인덱스)
* Array안에 해당 위치 값 삭제 후 값 반환

```swift
integers.remove(at: 0)
```
</br>
📎 결과 </br>
1

</br>
</br>
</br>

2. removeLast()
* 마지막 값 삭제 후 값 반환

```swift
integers.removeLast()
```
</br>
📎 결과 </br>
100

</br>
</br>
</br>

3. removeAll()
* 모두 삭제

```swift
integers.removeAll()
```

</br>
</br>

#### **count**
* 몇개의 원소가 있는지 확인 

```swift
integers.count
```

</br>
</br>

### 2. Dictionary
* Dictionary : 키와 값의 쌍으로 이루어진 컬렉션

</br>

#### 빈 Dictionary 생성

🎯 Key가 String 타입이고 Value가 Any인 빈 Dictionary 생성

```swift
var antDictionary: Dictionary<String, Any> = [String: Any]()

// 각각의 Key에 Value 할당하기
anyDictionay["someKey"] = "value"
anyDictionary["anotherKey"] = 100
```
</br>
📎 결과 </br>
["someKey":"value", "anotherKey":100]

</br>
</br>

```swift
// 기존 Key에 새로운 값(Value)할당해주기
anyDictionay["someKey"] = "dictionary"
```

</br>

🎯 let으로 불변 Dictionary 선언

```swift
let emptyDictionary: [String: String] = [:]
let initalizedDictionary: [String: String] = ["name": "zorba", "gender": "female"]
```

</br>
</br>

#### value 삭제

```swift
anyDictionary.removeValue(forKey: "anotherKey")
anyDictionary["someKey"] = nil 
```

</br>
</br>

### 3. Set
* Set : 순서가 없고, 멤버가 유일한 컬렉션

#### 빈 Set 생성

```swift
var integerSet: Set<Int> = Set<Int>()
```
</br>

#### **insert**

* 원소 추가

```swift
integerSet.insert(1)
integerSet.insert(100)
integerSet.insert(99)
integerSet.insert(99)

// Set에서는 중복을 허락하지 않기 때문에 99가 두번 추가되어도 결과에 한번밖에 나타나지 않는다.
```

</br>
</br>

#### **contains**

* 원소 포함여부 확인

```swift
integerSet.contains(1)
integerSet.contains(2)
```

</br>
📎 결과 </br>
true </br>
false

</br>
</br>

#### **remove**
</br>

1. remove(원소 값)
* Set 안에 해당 원소 값 삭제 후 값 반환

```swift
integerSet.remove(100)
```
</br>
📎 결과 </br>
100

</br>
</br>
</br>

2. removeFirst()
* 마지막 값 삭제 후 값 반환

```swift
integerSet.removeFirst()
```
</br>
📎 결과 </br>
99

</br>
</br>
</br>

#### **count**
* 몇개의 원소가 있는지 확인 

```swift
integerSet.count
```

</br>
</br>

#### **Set 응용**

```swift
let setA: Set<Int> = [1, 2, 3, 4, 5]
let setB: Set<Int> = [3, 4, 5, 6, 7]
```

</br>

1. union (합집합)
* 결과 정렬 X

```swift
let union: Set<Int> = setA.union(setB)
```
</br>
📎 결과 </br>
{2, 4, 5, 6, 7, 3, 1}

</br>
</br>
</br>

```swift
let sortedUnion: [Int] = union.sorted()
```

</br>
📎 결과 </br>
{1, 2, 3, 4, 5, 6, 7}

</br>
</br>
</br>`

2. intersection (교집합)
* 결과 정렬 X

```swift
let intersection: Set<Int> = setA.intersection(setB)
```
</br>
📎 결과 </br>
{5, 3, 4}

</br>
</br>
</br>

3.  subtracting (차집합)
* 결과 정렬 X

```swift
let subtracting: Set<Int> = setA.subtracting(setB)
```
</br>
📎 결과 </br>
{2, 1}

</br>
</br>
</br>
</br>

## 💡 함수

### 함수의 선언

* **함수 선언의 기본형태**
</br>

func 함수이름 (매개변수1이름: 매개변수1타입, 매개변수2이름: 매개변수2타입 ...) -> 반환타입 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**return** 반환값 </br>
}
</br>
</br>

🎯 예제 코드
```swift
func sum(a: Int, b: Int) -> Int {
    return a + b
}
```
</br>
</br>
</br>

* **반환 값이 없는 함수**
</br>

func 함수이름 (매개변수1이름: 매개변수1타입, 매개변수2이름: 매개변수2타입 ...) -> Void { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</br>
}
</br>
</br>

🎯 예제 코드
```swift
func printMyName(name: String) -> Void {
    print(name)
}

// 생략도 가능 
func printMyName(name: String) {
    print(name)
}
```
</br>
</br>
</br>

* **매개변수가 없는 함수**
</br>

func 함수이름 () -> 반환타입 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 반환값</br>
}
</br>
</br>

🎯 예제 코드
```swift
func maximumIntegerValue() -> Int {
    return Int.max
}
```
</br>
</br>
</br>

* **매개변수와 반환값이 없는 함수**
</br>

func 함수이름() -> Void {</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
}
</br>
</br>

🎯 예제 코드
```swift
func hello() -> Void {
    print("hello")
}

// 생략도 가능
func bye() {print("bye")}
```
</br>
</br>

### 함수의 호출

🎯 예제 코드
```swift
func sum(a: Int, b: Int) -> Int {
    return a + b
}

sum(a: 3, b: 5)
```
📎 결과
> 8

</br>

```swift
func printMyName(name: String) {
    print(name)
}

printMyName(name: "gyuri")
```
📎 결과
> gyuri

</br>

```swift
func hello() -> Void {
    print("hello")
}

hello()
```
📎 결과
> hello

</br>
</br>

### 매개변수 기본값
</br>

func 함수이름 (매개변수1이름: 매개변수1타입, **매개변수2이름: 매개변수2타입 = 매개변수 기본값** ...) -> 반환타입 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 반환값</br>
} 

</br>

* 함수의 매개변수에 값이 들어가지 않아도 자동적으로 매개변수가 갖게 되는 값
* 기본값을 갖는 매개변수는 매개변수 목록 중에 뒤쪽에 위치하는 것이 좋음

</br>

🎯 예제 코드
```swift
func greeting(friend: String, me: String = "gyuri") {
    print("Hello \(friend)! I am \(me)")
}

// friend : 기본값이 없는 매개변수
// me : 기본값이 gyuri인 매개변수
```

</br>
</br>

* 매개변수 기본값을 가지는 매개변수는 생략 가능

🎯 예제 코드
```swift
greeting(friend: "Jenny")
// Hello Jenny! I am gyuri

greeting(friend: "GD", me: "Doris")
// Hello GD! I am Doris
```

</br>
</br>

### 전달인자 레이블

* 함수를 호출할 때  매개변수의 역할을 더 명확하게 하거나 함수 사용자의 입장에서 표현하고자 할 때 사용
* 함수의 중복 정의도 쉽게 가능

</br>

func 함수이름 (전달인자 레이블 매개변수1이름: 매개변수1타입, 전달인자 레이블 매개변수2이름: 매개변수2타입 ...) -> 반환타입 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
} </br>

</br>

* 함수 내부에서 전달인자를 사용할 때에는 매개변수 이름을 사용

🎯 예제 코드
```swift
func greeting(to friend: String, from me: String) {
    print("Hello \(friend)! I am \(me)")
}

// 전달인자 레이블 : to, from
// 매개변수 이름 : friend, me
```
</br>

* 함수를 호출할 때에는 전달인자 레이블을 사용

🎯 예제 코드
```swift
greeting(to: "GD", from: "gyuri")
// Hello GD! I am gyuri
```
</br>
</br>
</br>

### 가변 매개변수

* 전달 받을 값의 개수를 알기 어려울 때 사용
* 가변 매개변수는 함수당 하나만 가질 수 있다.

</br>

func 함수이름(매개변수1이름: 매개변수1타입, 전달인자 레이블 매개변수2이름: 매개변수2타입...) -> 반환타입 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함수 구현부 </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return </br>
}

</br>
</br>

🎯 예제 코드
```swift
func sayHelloToFriends(me: String, friends: String...) -> String {
    return "Hello \(friends)! I'm \(me)!"
}
print(sayHelloToFriends(me: "gyuri", friends: "jenny", "rose", "jisoo", "risa"))
```
</br>

* 🚫 전달인자가 없거나 nil 입력 시 오류 발생

</br>
</br>
</br>

### 데이터 타입으로서의 함수

* Swift는 함수형 프로그래밍 패러다임을 포함하는 다중 패러다임 언어
* Swift의 함수는 일급객체이므로 변수, 상수 등에 저장이 가능하고 매개변수를 통해 전달할 수도 있다.

</br>
</br>
</br>

### 함수의 타입표현

* Swift의 함수는 하나의 데이터 타입으로서 표현될 수 있다.
* 반환타입을 생략할 수 없다.
</br>

(매개변수1타입, 매개변수2타입 ...) -> 반환타입 </br>

</br>
</br>

🎯 예제 코드
```swift
var someFunction: (String, String) -> Void = greeting(to:from:)

// 변수 someFunction에 (String 타입의 매개변수 2개를 가지고 반환값이 없는) 함수 할당 
```

```swift 
someFunction("GD", "gyuri")
```

📎 결과 </br>
> Hello GD! I am gyuri 

</br>

```swift 
someFunction = greeting(friend:me:)
someFunction("GD", "gyuri")
```
📎 결과 </br>
> Hello GD! I am gyuri

</br>
</br>

* 타입이 다른 함수는 할당할 수 없다.

🎯 예제 코드
```swift
someFunction = sayHelloToFriends(me:friends:)
// 🚫 friends가 가변 매개변수를 가지므로 오류 코드 🚫
```

</br>
</br>

* 함수 타입을 매개변수 타입으로 지정해주면 함수 내부에서도 실행 가능

🎯 예제 코드
```swift
func runAnother(function: (String, String) -> Void) {
    function("jenny", "mike")
}

// 1. 함수 직접 넘겨주기
runAnother(function: greeting(friend:me:))

// 2. 함수가 할당된 변수 넘겨주기
runAnother(function: someFunction)
```
📎 결과 </br>
> Hello jenny! I am mike

</br>
</br>

```toc
```