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

🎯 빈 Int Array 생성

```bash
var integers: Array<Int> = Array<Int>()
```

</br>

#### append

* Int 타입으로 Array를 생성했기 때문에 Int 타입의 숫자들만 추가할 수 있다. 

```bash
integers.append(1)
integers.append(100)
```
</br>
📎 결과
[1]
[1, 100]

</br>

#### contains

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

#### remove
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