---
emoji: 🕊
title: Swift 기초 다지기(2)
date: '2023-01-12 14:00:00'
author: 박규리
tags: swift 
categories: Swift
---

</br>
</br>

## 💡 컬렉션 타입

* 컬렉션 타입 : 여러 값들을 묶어서 하나의 변수로 표현

</br>

### 1. Array
* Array : 순서가 있는 list 컬렉션

#### Array 생성

🎯 빈 Int Array 생성

```bash
var integers: Array<Int> = Array<Int>()
```

</br>

🎯 빈 Double Array 생성

```bash
var doubles: Array<Double> = [Double]()
```

</br>

🎯 빈 String Array 생성

```bash
var strings: [String] = [String]()
```

</br>

🎯 빈 Character Array 생성

```bash
var characters: [Character] = []
```

</br>

⭐️ let을 사용해 Array 선언 시 Array 원소 변경 불가능

```bash
let immutableArray = [1,2,3]
```

* immutableArray.append(4) 또는 immuntableArray.removeAll()과 같은 명령어 사용 불가능 

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

2. removeLast()
* 마지막 값 삭제 후 값 반환

```bash
integers.removeLast()
```
</br>
📎 결과 </br>
100

</br>

3. removeAll()
* 모두 삭제

```bash
integers.removeAll()
```

</br>

cf) count
* 몇개의 원소가 있는지 확인 

```bash
integers.count
```

</br>
</br>

### 2. Dictionary
* Dictionary : 키와 값의 쌍으로 이루어진 컬렉션

</br>
</br>

### 3. Set
* Set : 순서가 없고, 멤버가 유일한 컬렉션

</br>
</br>



```toc
```