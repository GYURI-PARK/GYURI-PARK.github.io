---
emoji: 🏠
title: 구조체(Struct)와 클래스(Class) 
date: '2023-02-17 16:30:00'
author: 박규리
tags: Swift 
categories: Swift
---

✨ 구조체와 클래스는 OOP(Object-Oriented Programming)를 위한 필수 요소로 프로그램의 코드를 **추상화**하기 위해 사용 </br>

✨ Swift에서는 구조체와 클래스를 위한 별도의 인터페이스와 파일을 만들 필요가 없다.

</br>
</br>

## 💡 구조체 (Struct)

### 정의

* 인스턴스의 값(프로퍼티)을 저장하거나 기능(메소드)을 제공하고 이를 캡슐화할 수 있는 Swift가 제공하는 타입

* Swift에서는 대부분의 타입이 구조체로 이루어져 있다.

* 대문자 CamelCase 사용

* 구조체는 **값 타입 (Value Type)**
> 함수에서 상수나 변수에 전달될 때 값이 **복사되어 전달**

```swift
struct Resolution {
    var width = 0
    var height = 0
}

let hd = Resolution(width: 100, height:100)
// Resolution 구조체의 인스턴스 hd 선언
var picture = hd
// 변수 picture에 hd 할당
```

> 구조체에서는 값이 할당되는 순간 복사되기 때문에 picture와 hd는 전혀 다른 인스턴스

</br> 

struct 이름 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 구현부 </br>    
}

</br>
</br>

### 프로퍼티 및 매서드

🔎 프로퍼티와 매서드에 대한 자세한 설명은 [여기](https://gyuri-park.github.io/swift/property-method/#-메소드-method) 참고

</br>

```swift
struct Sample {
    // 프로퍼티 : 인스턴스 변수 (타입안에 들어있는 변수)
    // 매서드 : 구조체 안의 함수 (타입안에 들어있는 함수)
    var mutableProperty: Int = 100 // 가변 프로퍼티
    let immutableProperty: Int = 100 // 불변 프로퍼티

    static var typeProperty: Int = 100 // 선언한 타입(Sample)에서 사용할 수 있는 타입 프로퍼티

    // 인스턴스 매서드
    func instanceMethod() {
        print("instance method")
    }

    // 타입 매서드
    static func typeMethod() {
        print("type method")
    }
}
```

</br>
</br>

### 구조체 사용

#### 1. 가변 인스턴스

```swift
// 가변 인스턴스 정의
var mutable: Sample = Sample()

// 내부 프로퍼티 값 변경 가능
mutable.mutableProperty = 200

// 🚫 불변으로 선언한 프로퍼티는 변경 불가능
mutable.immutableProperty = 200 // ❌ error code ❌
```

</br>
</br>

#### 2. 불변 인스턴스 

```swift
// 불변 인스턴스 정의
let immutable: Sample = Sample()

// 🚫 내부 프로퍼티 모두 변경 불가능
mutable.mutableProperty = 200 // ❌ error code ❌
mutable.immutableProperty = 200 // ❌ error code ❌
```

</br>
</br>

#### 3. 타입 프로퍼티 및 매서드

* 구조체 타입 자체에서 사용할 수 있는 프로퍼티 및 매서드

```swift
Sample.typeProperty = 300
Sample.typeMethod() // -> type method

// 🚫 인스턴스에서는 사용 불가능
mutable.typeProperty = 400 // ❌ error code ❌
mutable.typeMethod() // ❌ error code ❌
```

</br>
</br>

#### 예제

```swift
struct Student {
    var name: String = "unknown"
    var `class`: String = "Swift"

    static func selfIntroduce() {
        print("학생타입")
    }

    func selfIntroduce() {
        print("저는 \(self.class)반 \(name)입니다")
    }
}
```

</br>

* 타입 매서드 사용
```swift
Student.selfIntroduce()
// -> 학생타입
```
</br>

* 새로운 가변 인스턴스 생성
```swift
var doris: Student = Student()
doris.name = "Doris"
doris.class = "Java"

doris.selfIntroduce()
// -> 저는 Java반 Doris입니다
```

</br>

* 불변 인스턴스 생성

```swift
let jenny: Student = Student()

// 🚫 프로퍼티 값 변경 불가능
jenny.name = "jenny" // ❌ error code ❌

jenny.selfIntroduce()
// -> 저는 Swift반 unknown입니다
```

</br>
</br>
</br>

## 💡 클래스 (Class)

### 정의

* 클래스는 참조 타입 (Reference Type)
> 변수나 상수에 값을 할당 하거나 함수에 인자로 전달할 때 그 값이 복사되지 않고 참조
> 값을 갖고 있는 메모리를 바라본다는 의미

```swift
// 클래스 생성
class VideoMode {
    var resolution = Resolution()  
    // 위 Resolution 구조체를 값으로 사용
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```

```swift
// 클래스 (VideoMode) 인스턴스 tenEigthy 생성
let tenEighty = VideoMode()

// 각 프로퍼티에 값 할당
tenEighty.resolution = hd
tenEighty.interlaced = true
tenEighty.name = "1080i"
tenEighty.frameRate = 25.0
```

```swift
// 새로운 상수 선언 후 tenEighty 클래스 인스턴스 할당
let alsoTenEighty = tenEighty
alseoTenEighty.frameRate = 30.0
```
> alsoTenEighty 상수가 tenEighty 인스턴스를 복사한 것이 아니라 참조한 것이므로 
> 최초에 할당한 tenEight.frameRate 값 또한 30.0으로 출력된다. </br>
> 즉, alsoTenEighty는 tenEighty가 바라보고 있는 메모리 주소를 동일하게 바라보고 참조하고 있는 것이고 </br>
> alseoTenEighty.frameRate = 30.0 코드는 alsoTenEighty 자체를 변경하는 것이 아닌 바라보는 값을 변경하는 것

</br>

class 이름 { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구현부 </br>
}

</br>
</br>

### 프로퍼티 및 매서드

```swift
class Sample {
    var mutableProperty: Int = 100 // 가변 프로퍼티
    let immutableProperty: Int = 100 // 불변 프로퍼티

    static var typeProperty: Int = 100 // 타입 프로퍼티

    func instanceMethod() {
        print("instance method")
    } // 인스턴스 매서드

    // 타입 매서드 
    // 1. static - 재정의 불가 타입 매서드
    static func typeMethod() {
        print("type method - static")
    }

    // 2. clss - 재정의 가능 타입 매서드
    class func classMethod() {
        print("type method - class")
    }
}
```

</br>
</br>

### 클래스 사용

#### 1. 가변 인스턴스 / 불변 인스턴스

✨ 구조체와 다르게 가변 인스턴스와 불변 인스턴스에서 **모두** 가변으로 선언한 프로퍼티는 변경이 가능

```swift
var mutableReference: Sample = Sample()
let immutableReference: Sample = Sample()

mutableReference.mutableProperty = 200
immutableReference.mutableProperty = 200

// ❌ error code ❌ 불변 프로퍼티는 변경 불가능
mutableReference.immutableProperty = 200
immutableReference.immutableProperty = 200
```

</br>
</br>

#### 2. 타입 프로퍼티 및 매서드

```swift
Sample.typeProperty = 300
Sample.typeMethod()
// -> type method - static

// 🚫 인스턴스에서는 사용 불가능
mutableReference.typeProperty = 400 // ❌ error code ❌
mutableReference.typeMethod() // ❌ error code ❌
```

</br>
</br>
</br>

## 💡 구조체와 클래스의 비교

### 공통 기능

> 1. 값을 저장하기 위한 **프로퍼티 정의** </br>
> 2. 기능을 제공하기 위한 **메서드 정의** </br>
> 3. subscript 문법을 이용해 특정 값을 접근할 수 있는 **subscript 정의** </br>
> 4. 초기 상태를 설정할 수 있는 **initializer 정의** </br>
> 5. 기본 구현에서 **기능 확장** </br>
> 6. 특정한 종류의 표준 기능을 제공하기 위한 **프로토콜 순응(confirm)** </br>

</br>
</br>

### only 클래스

> **상속(Inheritance)** : 클래스의 여러 속성을 다른 클래스에 물려줌 </br>
> **타입 캐스팅(Type casting)** : 런타임에 클래스 인스턴스의 타입을 확인 </br>
> **소멸자(Deinitializers)** : 할당된 자원을 해체(free up) 시킴 </br>
> **참조 카운트(Reference counting)** : 클래스 인스턴스에 하나 이상의 참조가 가능 </br>

</br>
</br> 

```toc
```