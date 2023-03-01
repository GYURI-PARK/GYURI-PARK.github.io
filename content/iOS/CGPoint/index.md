---
emoji: 🪡
title: CGPoint, CGSize, CGRect
date: '2023-02-24 18:00:00'
author: 박규리
tags: iOS
categories: iOS
---

## 🧠 Why?

> iOS에서 View를 그리기 위해선 다음과 같은 것들이 필요하다.

</br>

1. View의 시작 위치를 알기위한 **x,y 좌표** </br>
(이 좌표는 iOS 뷰 기준점인 **왼쪽 꼭대기 (0,0)**으로부터 시작) </br>
2. 시작지점부터 어느 크기만큼 그릴 건지에 대한 **width, height** </br>

</br>
</br>

## CGPoint

> A structure that contains a point in a two-dimensional coordinate system

* 2차원 좌표계의 점을 포함하는 구조체

</br>

```swift
public struct CGPoint {

    public var x: CGFloat

    public var y: CGFloat

    public init()

    public init(x: CGFloat, y: CGFloat)
}
```
</br>

> 다음과 같이 CGFloat 타입의 x, y 값을 가지는 구조체이다.

</br>



</br>
</br>

```toc
```