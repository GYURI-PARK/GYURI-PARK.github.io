---
emoji: π 
title: κ΅¬μ‘°μ²΄(Struct)μ ν΄λμ€(Class) 
date: '2023-02-17 16:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

β¨ κ΅¬μ‘°μ²΄μ ν΄λμ€λ OOP(Object-Oriented Programming)λ₯Ό μν νμ μμλ‘ νλ‘κ·Έλ¨μ μ½λλ₯Ό **μΆμν**νκΈ° μν΄ μ¬μ© </br>

β¨ Swiftμμλ κ΅¬μ‘°μ²΄μ ν΄λμ€λ₯Ό μν λ³λμ μΈν°νμ΄μ€μ νμΌμ λ§λ€ νμκ° μλ€.

</br>
</br>

## π‘ κ΅¬μ‘°μ²΄ (Struct)

### μ μ

* μΈμ€ν΄μ€μ κ°(νλ‘νΌν°)μ μ μ₯νκ±°λ κΈ°λ₯(λ©μλ)μ μ κ³΅νκ³  μ΄λ₯Ό μΊ‘μνν  μ μλ Swiftκ° μ κ³΅νλ νμ

* Swiftμμλ λλΆλΆμ νμμ΄ κ΅¬μ‘°μ²΄λ‘ μ΄λ£¨μ΄μ Έ μλ€.

* λλ¬Έμ CamelCase μ¬μ©

* κ΅¬μ‘°μ²΄λ **κ° νμ (Value Type)**
> ν¨μμμ μμλ λ³μμ μ λ¬λ  λ κ°μ΄ **λ³΅μ¬λμ΄ μ λ¬**

```swift
struct Resolution {
    var width = 0
    var height = 0
}

let hd = Resolution(width: 100, height:100)
// Resolution κ΅¬μ‘°μ²΄μ μΈμ€ν΄μ€ hd μ μΈ
var picture = hd
// λ³μ pictureμ hd ν λΉ
```

> κ΅¬μ‘°μ²΄μμλ κ°μ΄ ν λΉλλ μκ° λ³΅μ¬λκΈ° λλ¬Έμ pictureμ hdλ μ ν λ€λ₯Έ μΈμ€ν΄μ€

</br> 

struct μ΄λ¦ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; κ΅¬νλΆ </br>    
}

</br>
</br>

### νλ‘νΌν° λ° λ§€μλ

π νλ‘νΌν°μ λ§€μλμ λν μμΈν μ€λͺμ [μ¬κΈ°](https://gyuri-park.github.io/swift/property-method/#-λ©μλ-method) μ°Έκ³ 

</br>

```swift
struct Sample {
    // νλ‘νΌν° : μΈμ€ν΄μ€ λ³μ (νμμμ λ€μ΄μλ λ³μ)
    // λ§€μλ : κ΅¬μ‘°μ²΄ μμ ν¨μ (νμμμ λ€μ΄μλ ν¨μ)
    var mutableProperty: Int = 100 // κ°λ³ νλ‘νΌν°
    let immutableProperty: Int = 100 // λΆλ³ νλ‘νΌν°

    static var typeProperty: Int = 100 // μ μΈν νμ(Sample)μμ μ¬μ©ν  μ μλ νμ νλ‘νΌν°

    // μΈμ€ν΄μ€ λ§€μλ
    func instanceMethod() {
        print("instance method")
    }

    // νμ λ§€μλ
    static func typeMethod() {
        print("type method")
    }
}
```

</br>
</br>

### κ΅¬μ‘°μ²΄ μ¬μ©

#### 1. κ°λ³ μΈμ€ν΄μ€

```swift
// κ°λ³ μΈμ€ν΄μ€ μ μ
var mutable: Sample = Sample()

// λ΄λΆ νλ‘νΌν° κ° λ³κ²½ κ°λ₯
mutable.mutableProperty = 200

// π« λΆλ³μΌλ‘ μ μΈν νλ‘νΌν°λ λ³κ²½ λΆκ°λ₯
mutable.immutableProperty = 200 // β error code β
```

</br>
</br>

#### 2. λΆλ³ μΈμ€ν΄μ€ 

```swift
// λΆλ³ μΈμ€ν΄μ€ μ μ
let immutable: Sample = Sample()

// π« λ΄λΆ νλ‘νΌν° λͺ¨λ λ³κ²½ λΆκ°λ₯
mutable.mutableProperty = 200 // β error code β
mutable.immutableProperty = 200 // β error code β
```

</br>
</br>

#### 3. νμ νλ‘νΌν° λ° λ§€μλ

* κ΅¬μ‘°μ²΄ νμ μμ²΄μμ μ¬μ©ν  μ μλ νλ‘νΌν° λ° λ§€μλ

```swift
Sample.typeProperty = 300
Sample.typeMethod() // -> type method

// π« μΈμ€ν΄μ€μμλ μ¬μ© λΆκ°λ₯
mutable.typeProperty = 400 // β error code β
mutable.typeMethod() // β error code β
```

</br>
</br>

#### μμ 

```swift
struct Student {
    var name: String = "unknown"
    var `class`: String = "Swift"

    static func selfIntroduce() {
        print("νμνμ")
    }

    func selfIntroduce() {
        print("μ λ \(self.class)λ° \(name)μλλ€")
    }
}
```

</br>

* νμ λ§€μλ μ¬μ©
```swift
Student.selfIntroduce()
// -> νμνμ
```
</br>

* μλ‘μ΄ κ°λ³ μΈμ€ν΄μ€ μμ±
```swift
var doris: Student = Student()
doris.name = "Doris"
doris.class = "Java"

doris.selfIntroduce()
// -> μ λ Javaλ° Dorisμλλ€
```

</br>

* λΆλ³ μΈμ€ν΄μ€ μμ±

```swift
let jenny: Student = Student()

// π« νλ‘νΌν° κ° λ³κ²½ λΆκ°λ₯
jenny.name = "jenny" // β error code β

jenny.selfIntroduce()
// -> μ λ Swiftλ° unknownμλλ€
```

</br>
</br>
</br>

## π‘ ν΄λμ€ (Class)

### μ μ

* ν΄λμ€λ μ°Έμ‘° νμ (Reference Type)
> λ³μλ μμμ κ°μ ν λΉ νκ±°λ ν¨μμ μΈμλ‘ μ λ¬ν  λ κ·Έ κ°μ΄ λ³΅μ¬λμ§ μκ³  μ°Έμ‘°
> κ°μ κ°κ³  μλ λ©λͺ¨λ¦¬λ₯Ό λ°λΌλ³Έλ€λ μλ―Έ

```swift
// ν΄λμ€ μμ±
class VideoMode {
    var resolution = Resolution()  
    // μ Resolution κ΅¬μ‘°μ²΄λ₯Ό κ°μΌλ‘ μ¬μ©
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```

```swift
// ν΄λμ€ (VideoMode) μΈμ€ν΄μ€ tenEigthy μμ±
let tenEighty = VideoMode()

// κ° νλ‘νΌν°μ κ° ν λΉ
tenEighty.resolution = hd
tenEighty.interlaced = true
tenEighty.name = "1080i"
tenEighty.frameRate = 25.0
```

```swift
// μλ‘μ΄ μμ μ μΈ ν tenEighty ν΄λμ€ μΈμ€ν΄μ€ ν λΉ
let alsoTenEighty = tenEighty
alseoTenEighty.frameRate = 30.0
```
> alsoTenEighty μμκ° tenEighty μΈμ€ν΄μ€λ₯Ό λ³΅μ¬ν κ²μ΄ μλλΌ μ°Έμ‘°ν κ²μ΄λ―λ‘ 
> μ΅μ΄μ ν λΉν tenEight.frameRate κ° λν 30.0μΌλ‘ μΆλ ₯λλ€. </br>
> μ¦, alsoTenEightyλ tenEightyκ° λ°λΌλ³΄κ³  μλ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό λμΌνκ² λ°λΌλ³΄κ³  μ°Έμ‘°νκ³  μλ κ²μ΄κ³  </br>
> alseoTenEighty.frameRate = 30.0 μ½λλ alsoTenEighty μμ²΄λ₯Ό λ³κ²½νλ κ²μ΄ μλ λ°λΌλ³΄λ κ°μ λ³κ²½νλ κ²

</br>

class μ΄λ¦ { </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;κ΅¬νλΆ </br>
}

</br>
</br>

### νλ‘νΌν° λ° λ§€μλ

```swift
class Sample {
    var mutableProperty: Int = 100 // κ°λ³ νλ‘νΌν°
    let immutableProperty: Int = 100 // λΆλ³ νλ‘νΌν°

    static var typeProperty: Int = 100 // νμ νλ‘νΌν°

    func instanceMethod() {
        print("instance method")
    } // μΈμ€ν΄μ€ λ§€μλ

    // νμ λ§€μλ 
    // 1. static - μ¬μ μ λΆκ° νμ λ§€μλ
    static func typeMethod() {
        print("type method - static")
    }

    // 2. clss - μ¬μ μ κ°λ₯ νμ λ§€μλ
    class func classMethod() {
        print("type method - class")
    }
}
```

</br>
</br>

### ν΄λμ€ μ¬μ©

#### 1. κ°λ³ μΈμ€ν΄μ€ / λΆλ³ μΈμ€ν΄μ€

β¨ κ΅¬μ‘°μ²΄μ λ€λ₯΄κ² κ°λ³ μΈμ€ν΄μ€μ λΆλ³ μΈμ€ν΄μ€μμ **λͺ¨λ** κ°λ³μΌλ‘ μ μΈν νλ‘νΌν°λ λ³κ²½μ΄ κ°λ₯

```swift
var mutableReference: Sample = Sample()
let immutableReference: Sample = Sample()

mutableReference.mutableProperty = 200
immutableReference.mutableProperty = 200

// β error code β λΆλ³ νλ‘νΌν°λ λ³κ²½ λΆκ°λ₯
mutableReference.immutableProperty = 200
immutableReference.immutableProperty = 200
```

</br>
</br>

#### 2. νμ νλ‘νΌν° λ° λ§€μλ

```swift
Sample.typeProperty = 300
Sample.typeMethod()
// -> type method - static

// π« μΈμ€ν΄μ€μμλ μ¬μ© λΆκ°λ₯
mutableReference.typeProperty = 400 // β error code β
mutableReference.typeMethod() // β error code β
```

</br>
</br>
</br>

## π‘ κ΅¬μ‘°μ²΄μ ν΄λμ€μ λΉκ΅

### κ³΅ν΅ κΈ°λ₯

> 1. κ°μ μ μ₯νκΈ° μν **νλ‘νΌν° μ μ** </br>
> 2. κΈ°λ₯μ μ κ³΅νκΈ° μν **λ©μλ μ μ** </br>
> 3. subscript λ¬Έλ²μ μ΄μ©ν΄ νΉμ  κ°μ μ κ·Όν  μ μλ **subscript μ μ** </br>
> 4. μ΄κΈ° μνλ₯Ό μ€μ ν  μ μλ **initializer μ μ** </br>
> 5. κΈ°λ³Έ κ΅¬νμμ **κΈ°λ₯ νμ₯** </br>
> 6. νΉμ ν μ’λ₯μ νμ€ κΈ°λ₯μ μ κ³΅νκΈ° μν **νλ‘ν μ½ μμ(confirm)** </br>

</br>
</br>

### only ν΄λμ€

> **μμ(Inheritance)** : ν΄λμ€μ μ¬λ¬ μμ±μ λ€λ₯Έ ν΄λμ€μ λ¬Όλ €μ€ </br>
> **νμ μΊμ€ν(Type casting)** : λ°νμμ ν΄λμ€ μΈμ€ν΄μ€μ νμμ νμΈ </br>
> **μλ©Έμ(Deinitializers)** : ν λΉλ μμμ ν΄μ²΄(free up) μν΄ </br>
> **μ°Έμ‘° μΉ΄μ΄νΈ(Reference counting)** : ν΄λμ€ μΈμ€ν΄μ€μ νλ μ΄μμ μ°Έμ‘°κ° κ°λ₯ </br>

</br>
</br> 

```toc
```