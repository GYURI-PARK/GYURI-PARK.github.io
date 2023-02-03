---
emoji: 🕊
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

```bash
var integers: Array<Int> = Array<Int>()
```

</br>

🎯 Double Array 생성

```bash
var doubles: Array<Double> = [Double]()
```

</br>

🎯 String Array 생성

```bash
var strings: [String] = [String]()
```

</br>

🎯 Character Array 생성

```bash
var characters: [Character] = []
```

</br>

⭐️ let을 사용해 Array 선언 시 Array 원소 변경 불가능

```bash
let immutableArray = [1,2,3]
```

* immutableArray.append(4) 또는 immuntableArray.removeAll() 과 같은 명령어 사용 불가능 

</br>
</br>

#### **append**

* Int 타입으로 Array를 생성했기 때문에 Int 타입의 숫자들만 추가할 수 있다. 

```bash
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

```bash
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

```bash
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

```bash
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

```bash
integers.removeAll()
```

</br>
</br>

#### **count**
* 몇개의 원소가 있는지 확인 

```bash
integers.count
```

</br>
</br>

### 2. Dictionary
* Dictionary : 키와 값의 쌍으로 이루어진 컬렉션

</br>

#### 빈 Dictionary 생성

🎯 Key가 String 타입이고 Value가 Any인 빈 Dictionary 생성

```bash
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

```bash
// 기존 Key에 새로운 값(Value)할당해주기
anyDictionay["someKey"] = "dictionary"
```

</br>

🎯 let으로 불변 Dictionary 선언

```bash
let emptyDictionary: [String: String] = [:]
let initalizedDictionary: [String: String] = ["name": "zorba", "gender": "female"]
```

</br>
</br>

#### value 삭제

```bash
anyDictionary.removeValue(forKey: "anotherKey")
anyDictionary["someKey"] = nil 
```

</br>
</br>

### 3. Set
* Set : 순서가 없고, 멤버가 유일한 컬렉션

#### 빈 Set 생성

```bash
var integerSet: Set<Int> = Set<Int>()
```
</br>

#### **insert**

* 원소 추가

```bash
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

```bash
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

```bash
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

```bash
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

```bash
integerSet.count
```

</br>
</br>

#### **Set 응용**

```bash
let setA: Set<Int> = [1, 2, 3, 4, 5]
let setB: Set<Int> = [3, 4, 5, 6, 7]
```

</br>

1. union (합집합)
* 결과 정렬 X

```bash
let union: Set<Int> = setA.union(setB)
```
</br>
📎 결과 </br>
{2, 4, 5, 6, 7, 3, 1}

</br>
</br>
</br>

```bash
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

```bash
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

```bash
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

* 함수 선언의 기본형태
</br>
func 함수이름 (매개변수1이름: 매개변수1타입, 매개변수2이름: 매개변수2타입 ...) -> 반환타입 { </br>
    함수 구현부 </br>
    return 반환값 </br>
}
</br>
</br>

🎯 예제 코드
```bash
func sum(a: Int, b: Int) -> Int {
    return a + b
}
```
</br>
</br>
</br>

* 반환 값이 없는 함수
</br>

func 함수이름 (매개변수1이름: 매개변수1타입, 매개변수2이름: 매개변수2타입 ...) -> Void { </br>
    함수 구현부 </br>
    return</br>
}
</br>
</br>

🎯 예제 코드
```bash
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

* 매개변수가 없는 함수
</br>

func 함수이름 () -> 반환타입 { </br>
    함수 구현부 </br>
    return 반환값</br>
}
</br>
</br>

🎯 예제 코드
```bash
func maximumIntegerValue() -> Int {
    return Int.max
}
```

```toc
```