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

## 2. 계산된 프로퍼티 (Computed Property)



