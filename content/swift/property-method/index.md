---
emoji: π§©
title: νλ‘νΌν°(Property)μ λ©μλ(Method)
date: '2023-02-20 22:00:00'
author: λ°κ·λ¦¬
tags: Swift 
categories: Swift
---

## π‘ νλ‘νΌν° (Property)

β¨ νλ‘νΌν°λ **ν΄λμ€, κ΅¬μ‘°μ²΄, μ΄κ±°ν**κ³Ό κ΄λ ¨ν κ° </br>
β¨ νλ‘νΌν°μ μ’λ₯μλ *μ μ₯ νλ‘νΌν°(Stored Property)*μ *κ³μ°λ νλ‘νΌν°(Computed Property)*κ° μλ€. </br>

</br>

### 1. μ μ₯ νλ‘νΌν° (Stored Property)

> λ¨μν κ°μ μ μ₯νκ³  μλ νλ‘νΌν° </br>
> **let**μ μ¬μ©ν΄ μμ λλ **var**λ₯Ό μ¬μ©ν΄ λ³μλ‘ μ μΈν΄ μ¬μ© κ°λ₯ </br>
> ν΄λμ€μ κ΅¬μ‘°μ²΄(μ΄κ±°ν X) μμλ§ μ¬μ©κΈ°λ₯

</br>

```swift
struct FixedLengthRange {
    var firstValue: Int
    let length: Int
}

var rangeOfThreeItems = FixedLengthRange(firstValue: 0, length: 3)
// -> λ²μ κ°μ 0, 1, 2 

rangeOfThreeItems.firstValue = 6
// -> λ²μ κ°μ 6, 7, 8 
```
</br>
</br>

#### μμ κ΅¬μ‘°μ²΄ μΈμ€ν΄μ€μ μ μ₯ νλ‘νΌν° 

* κ΅¬μ‘°μ²΄λ₯Ό μμ(let)λ‘ μ μΈνλ©΄ κ΅¬μ‘°μ²΄ μΈμ€ν΄μ€μ νλ‘νΌν° λ³κ²½ λΆκ°λ₯
* ν΄λμ€ μΈμ€ν΄μ€λ letμΌλ‘ μ μΈνλλΌλ νλ‘νΌν° λ³κ²½ κ°λ₯

```swift
let rangeOfFourItems = FixedLengRange(firstValue: 0, length: 4)
// -> λ²μ κ°μ 0, 1, 2, 3

rangeOfFourItems.firstValue = 6
// β error code β
```

</br>
</br>

#### μ§μ° μ μ₯ νλ‘νΌν° 

* κ°μ΄ μ²μμΌλ‘ μ¬μ©λκΈ° μ μλ κ³μ°λμ§ μλ νλ‘νΌν°
* **lazy** ν€μλ μ¬μ©
* μμκ° λλκΈ° μ μ μ μ ν κ°μ μμ§ λͺ»νλ κ²½μ°μ μ μ©
* μ€μ  μ¬μ©λκΈ° μ μλ μ€νλμ§ μμΌλ―λ‘ μΈμ€ν΄μ€μ μ΄κΈ°ν μμ μ λ³΅μ‘ν κ³μ° ννΌ κ°λ₯

> π </br>
> μ§μ° νλ‘νΌν°λ λ°λμ λ³μ(var)λ‘ μ μΈ </br>
> μμ(let) = μ΄κΈ°ν λκΈ° μ μ ν­μ κ°μ κ°λ νλ‘νΌν° </br>
> BUT, μ§μ° νλ‘νΌν°λ μ²μ μ¬μ©λκΈ° μ μλ κ°μ κ°μ§ μμ

</br>
</br>

```swift
// μΈλΆ νμΌμμ λ°μ΄ν°λ₯Ό κ°μ Έμ€λ ν΄λμ€ μμ±
// μ΄κΈ°ννλλ° λ§€μ° λ§μ μκ°μ΄ μμλλ€κ³  κ°μ  

class DataImporter {
    var filename = "data.txt"
}

// λ°μ΄ν° κ΄λ¦¬ κΈ°λ₯ ν΄λμ€ μ μΈ κ°μ 
class DataManager {
    lazy var importer = DataImporter()
    var data = [String]()
}

let manager = Datamanager()
manager.data.append("Some data")
manager.data.append("Some more data")
// β­οΈ DataImporter μΈμ€ν΄μ€λ μ΄ μμ μ μμ±λΌ μμ§ μλ€.
```
* DataManager ν΄λμ€λ DataImportν΄λμ€λ₯Ό κ°μ§κ³  μμ§λ§ μ§μ° νλ‘νΌν°λ‘ μ μΈνμμΌλ―λ‘ DataManagerμ μΈμ€ν΄μ€ managerλ₯Ό λ§λ€κ³  dataλ₯Ό μΆκ°μν€λ λμ DataImporterμΈμ€ν΄μ€λ μμ±λμ§ μλλ€.

</br>
</br>

```swift
print(manager.importer.filename)
// λ€μκ³Ό κ°μ΄ importer νλ‘νΌν°μ μ²μ μ κ·Όν  λ importer μΈμ€ν΄μ€λ μμ±
```

</br>
</br>

### 2. κ³μ°λ νλ‘νΌν° (Computed Property)


* κ°μ μ μ₯νκ³  μμ§ μκ³  νΉμ νκ² κ³μ°ν κ°μ λ°νν΄ μ£Όλ νλ‘νΌν°
* ν΄λμ€, κ΅¬μ‘°μ²΄, μ΄κ±°ν λͺ¨λμμ μ¬μ© κ°λ₯ 
* ν€μλ **get**κ³Ό **set**μ ν΅ν΄ *(getterμ optionalν setterλ₯Ό μ κ³΅)* κ°μ νμνκ³  κ°μ μ μΌλ‘ λ€λ₯Έ νλ‘νΌν° κ°μ μ€μ ν  μ μλ λ°©λ²μ μ κ³΅ 

</br>
</br>

```swift
// μ’νμ ν¬κΈ°λ₯Ό κ°λ μ¬κ°νμ νννλ κ΅¬μ‘°μ²΄

struct Point {
    var x = 0.0, y = 0.0
}
struct Size {
    var width = 0.0, height = 0.0
}

struct Rect {
    var origin = Point()
    var size = Size()
    var center: Point {
        get {
            let centerX = origin.x + (size.width / 2)
            let centerY = origin.y + (size.height / 2)
            return Point(x: centerX, y: centerY)
        }
        // get : λ€λ₯Έ μ’νμ ν¬κΈ° νλ‘νΌν°λ€μ μ°μ°νμ¬ μ€μ  νν
        set(newCenter) {
            origin.x = newCenter.x - (size.width / 2)
            origin.y = newCenter.y - (size.height / 2)
        }
        // set : μ¬κ°νμ μ€μ  μ§μ  μ€μ 
        // x,y μ’νκ° μ΄λ€ κ°μ κ°μ ΈμΌ νλμ§ κ³μ°ν΄μ x,yμ μ μ ν μ’νκ° λ£μ΄μ€
    }
}
```
> π» </br>
> center : μ¬κ°νμ μ€μ μ νννλ κ³μ°λ νλ‘νΌν° </br>

</br>

```swift
var square = Rect(origin: Point(x: 0.0, y: 0.0),
                  size: Size(width: 10.0, height: 10.0))
                  
let initialSquareCenter = square.center
square.center = Point(x: 15.0, y: 15.0)

print("square.origin is now at (\(square.origin.x), \(square.origin.y))")

// -> square.origin is now at (10.0, 10.0)
```

![μ¬μ§](./square.webp)

</br>
</br>

#### π­ Setter μ μΈμ κ°λ΅ν νν

* μμ  μ½λμμ Setterμ μΈμ μ΄λ¦μ set(newCenter)λΌκ³  λͺμνμ§λ§, μΈμ μ΄λ¦(newCenter)μ μ§μ νμ§ μμΌλ©΄ *μΈμ κΈ°λ³Έ μ΄λ¦μΈ **newValue*** μ¬μ© κ°λ₯

```swift
struct AlternativeRect {
    var origin = Point()
    var size = Size()
    var center: Point {
        get {
            let centerX = origin.x + (size.width / 2)
            let centerY = origin.y + (size.height / 2)
            return Point(x: centerX, y: centerY)
        }
        set {
            origin.x = newValue.x - (size.width / 2)
            origin.y = newValue.y - (size.height / 2)
        }
    }
}
```

</br>
</br>

#### μ½κΈ°μ μ© κ³μ°λ νλ‘νΌν°

* getterλ§ μκ³  setterλ₯Ό μ κ³΅νμ§ μλ κ³μ°λ νλ‘νΌν° 
* λ°λμ λ°ν κ°μ μ κ³΅νκ³  λ€λ₯Έ κ°μ μ§μ ν  μλ μλ νλ‘νΌν°

```swift
struct Cuboid {
    var width = 0.0, height = 0.0, depth = 0.0
    var volume: Double {
        return width * height * depth
    }
}
// volume : μ½κΈ° μ μ© κ³μ°λ νλ‘νΌν°
```

</br>
</br>

> π </br>
> λ°λμ **var**λ‘ μ μΈ (letβ) </br>

</br>
</br>

### 3. νμ νλ‘νΌν° (Type Property)

* νΉμ  νμμ μν νλ‘νΌν°λ‘ κ·Έ νμμ ν΄λΉνλ λ¨ νλμ νλ‘νΌν°λ§ μμ±λλ€.
* νΉμ  νμμ λͺ¨λ  μΈμ€ν΄μ€μ κ³΅ν΅μ μΌλ‘ μ¬μ©λλ κ°μ μ μν  λ μ μ©
* ν­μ **μ΄κΈ°κ°**μ μ§μ ν΄μ μ¬μ©
* **static** ν€μλ μ¬μ©

</br>
</br>

#### κ΅¬μ‘°μ²΄μμμ νμ νλ‘νΌν° μ μΈ

```swift
struct SomeStructure {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 1
    }
}
```

#### μ΄κ±°νμμμ νμ νλ‘νΌν° μ μΈ
```swift
enum SomeEnumeration {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 6
    }
}
```

#### ν΄λμ€μμμ νμ νλ‘νΌν° μ μΈ

* staticκ³Ό class 2κ°μ§ ννλ‘ μ μΈ κ°λ₯ 
* class μ μΈ μ μλΈν΄λμ€μμ overriding κ°λ₯

```swift
class SomeClass {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 27
    }
    class var overrideableComputedTypeProperty: Int {
        return 107
    }
}
```
</br>
</br>

## π‘ λ©μλ (Method)

* νΉμ  νμμ ν΄λμ€, κ΅¬μ‘°μ²΄, μ΄κ±°νκ³Ό κ΄λ ¨λ ν¨μ 

</br>

### 1. μΈμ€ν΄μ€ λ©μλ (Instance Method)

* νΉμ  ν΄λμ€, κ΅¬μ‘°μ²΄, μ΄κ±°νμ μΈμ€ν΄μ€μ μν λ©μλ
* μΈμ€ν΄μ€ λ΄μ κ°μ μ μ΄νκ±°λ λ³κ²½ κ°λ₯
* μ΄λ¦ κ·Έλλ‘ κ·Έ μΈμ€ν΄μ€κ° μν νΉμ  νμμ μΈμ€ν΄μ€μ μλ§ μ€ν κ°λ₯

</br>
</br>

```swift
class Counter {
    var count = 0
    func increment() {
        count += 1
    }
    func increment(by amount: Int) {
        count += amount
    }
    func reset() {
        count = 0
    }
}
```
> π» </br>
> Counter ν΄λμ€λ₯Ό μ μΈνκ³  μΈμ€ν΄μ€ λ©μλ increment(), increment(by amount: Int), reset()λ₯Ό μ μ

</br>
</br>

```swift
let counter = Counter()
// μ΄κΈ° count κ° = 0

counter.increment()
// count κ°μ΄ 1λ‘ λ³κ²½

counter.increment(by: 5)
// count κ°μ νμ¬ 6

counter.reset()
// count κ°μ 0
```
</br>
</br>

#### self νλ‘νΌν°

* λͺ¨λ  νλ‘νΌν°λ μμμ μΌλ‘ μΈμ€ν΄μ€ μμ²΄λ₯Ό μλ―Ένλ selfλΌλ νλ‘νΌν°λ₯Ό κ°λλ€
* μΈμ€ν΄μ€ μμ²΄λ₯Ό μ°Έμ‘°νλλ° μ¬μ©

</br>
</br>

```swift
func increment() {
    self.count += 1
}
```  
> π» </br>
> Counter ν΄λμ€μμ μ μΈν  λ increment() λ©μλμμμ count += 1κ³Ό self.count += 1μ κ°μ μλ―Έ </br>
> Swiftμμ νΉμ  λ©μλμμ ν΄λΉ μΈμ€ν΄μ€μ λ±λ‘λ λ©μλλ νλ‘νΌν°λ₯Ό νΈμΆνλ©΄ νμ¬ μΈμ€ν΄μ€μ λ©μλλ νλ‘νΌν°λ₯Ό μ¬μ©νλ κ²μΌλ‘ μλμΌλ‘ κ°μ νκΈ° λλ¬Έ </br>
> **μΈμ μ΄λ¦μ΄ νλ‘νΌμΉ μ΄λ¦κ³Ό κ°μ κ²½μ°**μλ νλ‘νΌν°μ μ κ·ΌνκΈ° μν΄ λͺμμ μΌλ‘ self ν€μλλ₯Ό μ¬μ©ν΄μΌνλ€.

</br>

```swift
struct Point {
    var x = 0.0, y = 0.0

    func isToTheRightOf(x: Double) -> Bool {
        return self.x > x  
        // self.xλ₯Ό μ΄μ©ν΄ νλ‘νΌν° xμ μΈμ xλ₯Ό κ΅¬λΆ
    }
} 
```  
</br>
</br>

#### μΈμ€ν΄μ€ λ©μλ λ΄μμ κ° νμ λ³κ²½

* **mutating** ν€μλ μ¬μ©
* μΌλ°μ μΌλ‘ μΈμ€ν΄μ€ λ©μλ λ΄μμ κ° νμ(κ΅¬μ‘°μ²΄, μ΄κ±°ν)μ νλ‘νΌλ λ³κ²½ λΆκ°λ₯
* mutatingμ΄λΌλ ν€μλκ° λΆμ λ©μλμμλ λ©μλμ κ³μ°μ΄ λλ ν μλ³Έ κ΅¬μ‘°μ²΄μ κ·Έ κ²°κ³Όλ₯Ό λ?μ΄ μ¨μ κ·Έ κ°μ λ³κ²½

</br>

```swift
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
} 
``` 

</br>
</br>

### 2. νμ λ©μλ (Type Method)

* νΉμ  νμ μμ²΄μμ νΈμΆν΄ μ¬μ©
* λ©μλ ν€μλ funcμμ **staic** νΉμ **class** ν€μλλ₯Ό μΆκ°ν΄ μ μΈ
* ν΄λμ€, κ΅¬μ‘°μ²΄, μ΄κ±°νμμ λͺ¨λ νμ λ©μλ μ¬μ© κ°λ₯

</br>

```swift
class SomeClass {
    class func someTypeMethod() {
        // Type Method κ΅¬ν
    }
}

SomeClass.someTypeMethod()
// νμ λ©μλ νΈμΆ
```
</br>

* νμ λ©μλ μμμλ selfν€μλ μ¬μ© κ°λ₯
* μ΄ λ, selfλ μΈμ€ν΄μ€κ° μλ νμ μμ μ μλ―Έ

</br>
</br> 

```toc
```


