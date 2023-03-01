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

</br>

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
> </br>
> </br>
> ✨ 따라서 View의 위치를 나타낼 때 CGPoint를 사용한다.</br>
> 그러나 꼭 View의 위치를 나타낼 때만 쓰는  것이 아니라 x, y 를 나타내야 할 때 언제든 사용 가능하다.

</br>
</br>

```swift
let pos: CGPoint = .init(x: 100, y: 200)
```

</br>
</br>

```swift
// 내가 사용한 예
let scene = GameScene(size: view.frame.size)

scene.anchorPoint = CGPoint(x: 0, y: 1)
// 원점을 왼쪽 상단으로 설정
```

</br>
</br>

## CGSize

> A structure that contains width and height values

</br>

* 너비와 높이 값을 포함하는 구조체
* 사각형을 의미하는 것이 아님

</br>

```swift
public struct CGSize {
    
    public var width: CGFloat

    public var height: CGFloat

    public init()

    public init(width: CGFloat, height: CGFloat)
}
```

</br>

> 다음과 같이 CGFloat 타입의 width, height 값을 가지는 구조체이다.
> </br>
> </br>
> View의 사이즈를 나타낼 때 CGSize를 사용할 수 있다.</br>

</br>

```swift
let size: CGSize = .init(width: 150, height: 200)
```

</br>
</br>

## CGRect

> A structure that contains the location and dimensions of a rectangle

</br>

* **사각형**의 위치와 크기를 포함하는 구조체

</br>

```swift
public struct CGRect {

    public var origin: CGPoint

    public var size: CGSize

    public init()

    public init(origin: CGpoint, size: CGSize)
}
```

</br>

> 위 코드에서 보이듯 CGRect는 **CGPoint 타입의 origin**과 **ㅊㅎ냨ㄷ**

</br>
</br>

```toc
```