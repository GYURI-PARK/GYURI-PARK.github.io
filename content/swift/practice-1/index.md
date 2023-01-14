---
emoji: 🕊
title: Swift 기초 다지기(1)
date: '2022-12-24 13:00:00'
author: 박규리
tags: swift 
categories: Swift
---

</br>
</br>


## 💡 명명법

- Swift 는 대소문자를 구분!

### 1. Lower Camel Case 

> function, method, variable, constant 
    ex) someVariavleName
</br>

### 2. Upper Camel Case 

> type(class, struct, enum, extension, …)
    ex) Person, Point, Week

</br>
</br>


## 💡 콘솔로그
</br>

### 1. print

단순 문자열 출력 
</br>

### 2. dump
인스턴스의 자세한 설명 (description 프로퍼티) 까지 출력

</br>
</br>


## 💡 문자열 보간법 (String interpolation)
</br>


- 프로그램 실행 중 문자열 내에 변수 또는 상수의 실질적인 값을 표현하기 위해 사용
* \() -> 문자열로 자동 치환
</br>

📎 예제 코드

```bash
// 콘솔로그와 문자열 보간법 (print 사용)

import Swift

let age: Int = 20

print("안녕하세요! 저는 \(age)살 입니다:)")
print("안녕하세요! 저는 \(age+4)살 입니다:)")
```
</br>

```bash
// 콘솔로그와 문자열 보간법 (dump 사용)

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


## 💡 상수와 변수

* 띄워쓰기 중요!
* 값의 type이 명확하다면 type 생략 가능

### 1. 상수 선언

> 상수 선언 키워드 : let
</br>
> let 이름: 타입 = 값

</br>

### 2. 변수 선언

> 변수 선언 키워드 : var
</br>
> var 이름: 타입 = 값

</br>
</br>


## 💡 데이터 타입

* Swift는 다른 데이터 타입 간의 변경이 매우 까다롭기 때문에 반드시 명확한 데이터 타입을 설정해주어야 한다.

</br>

### 1. Bool (true or false)

</br>

```bash
var someBool: Bool = true
print(someBool)
someBool = false
```

</br>

### 2. Int (정수형) : 양의 정수, 음의 정수, 0 모두 가능

</br>

```bash
var someInt: Int = -100
print(someInt)
someInt = 100
print(someInt)
someInt = 0
print(someInt)
```

</br>

### 3. UInt (양의 정수)

</br>

```bash
var someUInt: UInt = 100
print(someUInt)
```

</br>

### 4. Float (32비트 부동 소수형)

</br>

```bash
var someFloat: Float = 3.14
print(someFloat)
```
</br>
</br>

### 5. Double (64비트 부동 소수형)

</br>

```bash
var someDouble: Double = 3.14
print(someDouble)
```
</br>

* someFloat라는 변수와 someDouble이라는 변수에 3.14 라는 같은 값을 할당해주었지만 someDouble과 someFloat은 애초에 다른 데이터 타입으로 선언되어있으므로 Float 자료형인 someFloat를 Double 자료형인 someDouble에 할당할 수 없다. 

</br>

🚫 에러 코드 🚫

```bash
someDouble = someFloat
```
</br>
</br>

### 6. Character (문자 1개)
</br>

* 영어, 한글, 이모지 모두 가능
</br>

```bash
var someCharacter1: Character = "🌍"
print(someCharacter1)

var someCharacter2: Character = "가"
print(someCharacter2)

var someCharacter3: Character = "S"
print(someCharacter3)
```
</br>
</br>

### 7. String (문자열)
</br>

```bash
var someString: String = "하하하 🌝"
someString += "웃으면 복이 와요"
print(someString)
```
</br>

* 위의 결과와 마찬가지로 String은 Character을 포함하고 있지만, String으로 할당된 변수에 Character 값을 할당할 수 없다.

## 💡 Any / AnyObject / nil
</br>
</br>

### 1. Any : 모든 타입을 지칭하는 키워드
</br>

```bash
import Swift

var someAny: Any = 100
print(someAny)
someAny = "어떤 타입도 수용 가능합니다"
print(someAny)
someAny = 123.12
print(someAny)
```
</br>

* 다른 타입으로 할당된 변수에는 any 타입 할당 불가

</br>
</br>

### 2. AnyObject : 모든 클래스 타입을 지칭하는 프로토콜
</br>

```bash
class SomeClass{}
var someAnyObject: AnyObject = SomeClass()
print(someAnyObject)
```

</br>

* 클래스의 인스턴스에만 선언 가능

</br>
</br>

### 3. nil : 없음을 의미한느 키워드
</br>

* null과 거의 같은 의미로 쓰인다.
</br>

* Any타입과 AnyObject 타입으로 선언된 변수에는 어떤 데이터 타입도 들어올 수 있지만,
빈 값은 들어올 수 없다.

```toc
```