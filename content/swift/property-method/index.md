---
emoji: 🧩
title: 프로퍼티(Property)와 메서드(Method)
date: '2023-02-20 22:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

# 💡 프로퍼티 (Property)

✨ 프로퍼티는 **클래스, 구조체, 열거형**과 관련한 값 </br>
✨ 프로퍼티의 종류에는 *저장 프로퍼티(Stored Property)*와 *계산된 프로퍼티(Computed Property)*가 있다. </br>

</br>

## 저장 프로퍼티 (Stored Property)

> 단순히 값을 저장하고 있는 프로퍼티 </br>
> **let**을 사용해 상수 또는 **var**를 사용해 변수로 선언해 사용 가능 </br>

</br>

```swift
struct FixedLengthRange {
    var firstValue: Int
    let length: Int
}

var rangeOfThreeItems = FixedLengthRange(firstValue: 0, length: 3)
// -> 범위 값은 0, 1, 2 

rangeOfThreeItems.firstValue = 6
// -> 범위 값은 6, 7, 8 
```
</br>
</br>

### 1. 상수 구조체 인스턴스의 저장 프로퍼티 

* 구조체를 상수(let)로 선언하면 구조체 인스턴스의 프로퍼티 변경 불가능
* 클래스 인스턴스는 let으로 선언하더라도 프로퍼티 변경 가능

```swift
let rangeOfFourItems = FixedLengRange(firstValue: 0, length: 4)
// -> 범위 값은 0, 1, 2, 3

rangeOfFourItems.firstValue = 6
// ❌ error code ❌
```

</br>
</br>

### 2. 지연 저장 프로퍼티 (Lazy Stored Property)

* 값이 처음으로 사용되기 전에는 계산되지 않는 프로퍼티
* **lazy** 키워드 사용
* 요소가 끝나기 전에 적절한 값을 알지 못하는 경우에 유용
* 실제 사용되기 전에는 실행되지 않으므로 인스턴스의 초기화 시점에 복잡한 계산 회피 가능

> 📝 </br>
> 지연 프로퍼티는 반드시 변수(var)로 선언 </br>
> 상수(let) = 초기화 되기 전에 항상 값을 갖는 프로퍼티 </br>
> BUT, 지연 프로퍼티는 처음 사용되기 전에는 값을 갖지 않음

</br>
</br>

```swift
// 외부 파일에서 데이터를 가져오는 클래스 생성
// 초기화하는데 매우 많은 시간이 소요된다고 가정 

class DataImporter {
    var filename = "data.txt"
}

// 데이터 관리 기능 클래스 선언 가정
class DataManager {
    lazy var importer = DataImporter()
    var data = [String]()
}

let manager = Datamanager()
manager.data.append("Some data")
manager.data.append("Some more data")
// ⭐️ DataImporter 인스턴스는 이 시점에 생성돼 있지 않다.
```
* DataManager 클래스는 DataImport클래스를 가지고 있지만 지연 프로퍼티로 선언하였으므로 DataManager의 인스턴스 manager를 만들고 data를 추가시키는 동안 DataImporter인스턴스는 생성되지 않는다.

</br>
</br>

```swift
print(manager.importer.filename)
// 다음과 같이 importer 프로퍼티에 처음 접근할 때 importer 인스턴스는 생성
```


## 계산된 프로퍼티 (Computed Property)



