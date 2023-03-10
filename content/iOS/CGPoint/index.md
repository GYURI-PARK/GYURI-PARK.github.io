---
emoji: ๐ชก
title: CGPoint, CGSize, CGRect
date: '2023-02-24 18:00:00'
author: ๋ฐ๊ท๋ฆฌ
tags: iOS
categories: iOS
---

## ๐ง  Why?

> iOS์์ View๋ฅผ ๊ทธ๋ฆฌ๊ธฐ ์ํด์  ๋ค์๊ณผ ๊ฐ์ ๊ฒ๋ค์ด ํ์ํ๋ค.

</br>

1. View์ ์์ ์์น๋ฅผ ์๊ธฐ์ํ **x,y ์ขํ** </br>

(์ด ์ขํ๋ iOS ๋ทฐ ๊ธฐ์ค์ ์ธ **์ผ์ชฝ ๊ผญ๋๊ธฐ (0,0)**์ผ๋ก๋ถํฐ ์์) </br>

2. ์์์ง์ ๋ถํฐ ์ด๋ ํฌ๊ธฐ๋งํผ ๊ทธ๋ฆด ๊ฑด์ง์ ๋ํ **width, height** </br>

</br>
</br>

## CGPoint

> A structure that contains a point in a two-dimensional coordinate system

</br>

* 2์ฐจ์ ์ขํ๊ณ์ ์ ์ ํฌํจํ๋ ๊ตฌ์กฐ์ฒด

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

> ๋ค์๊ณผ ๊ฐ์ด CGFloat ํ์์ x, y ๊ฐ์ ๊ฐ์ง๋ ๊ตฌ์กฐ์ฒด์ด๋ค.
> </br>
> </br>
> โจ ๋ฐ๋ผ์ View์ ์์น๋ฅผ ๋ํ๋ผ ๋ CGPoint๋ฅผ ์ฌ์ฉํ๋ค.</br>
> ๊ทธ๋ฌ๋ ๊ผญ View์ ์์น๋ฅผ ๋ํ๋ผ ๋๋ง ์ฐ๋  ๊ฒ์ด ์๋๋ผ x, y ๋ฅผ ๋ํ๋ด์ผ ํ  ๋ ์ธ์ ๋  ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.

</br>
</br>

```swift
let pos: CGPoint = .init(x: 100, y: 200)
```

</br>
</br>

```swift
// ๋ด๊ฐ ์ฌ์ฉํ ์
let scene = GameScene(size: view.frame.size)

scene.anchorPoint = CGPoint(x: 0, y: 1)
// ์์ ์ ์ผ์ชฝ ์๋จ์ผ๋ก ์ค์ 
```

</br>
</br>

## CGSize

> A structure that contains width and height values

</br>

* ๋๋น์ ๋์ด ๊ฐ์ ํฌํจํ๋ ๊ตฌ์กฐ์ฒด
* ์ฌ๊ฐํ์ ์๋ฏธํ๋ ๊ฒ์ด ์๋

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

> ๋ค์๊ณผ ๊ฐ์ด CGFloat ํ์์ width, height ๊ฐ์ ๊ฐ์ง๋ ๊ตฌ์กฐ์ฒด์ด๋ค.
> </br>
> </br>
> View์ ์ฌ์ด์ฆ๋ฅผ ๋ํ๋ผ ๋ CGSize๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.</br>

</br>

```swift
let size: CGSize = .init(width: 150, height: 200)
```

</br>
</br>

## CGRect

> A structure that contains the location and dimensions of a rectangle

</br>

* **์ฌ๊ฐํ**์ ์์น์ ํฌ๊ธฐ๋ฅผ ํฌํจํ๋ ๊ตฌ์กฐ์ฒด
* ์ค์  UIView๋ฅผ ๊ตฌํํ  ๋ frame์ ํ๋ผ๋ฏธํฐ๋ก CGRect๊ฐ ์ฌ์ฉ๋๋ค.

```swift
let myView: UIView = .init(frame: CGRect)
```

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

> ์ ์ฝ๋์์ ๋ณด์ด๋ฏ CGRect๋ **CGPoint ํ์์ origin**๊ณผ **CGSize ํ์์ size**๋ฅผ ํฌํจํ๊ณ  ์๋ค. </br>
> ์ฆ, View๋ฅผ ๋ํ๋ผ ๋ origin์ **x,y ์ขํ**๋ฅผ size๋ **width, height**๋ฅผ ๋ํ๋ธ๋ค๊ณ  ์๊ฐํ๋ฉด ๋๋ค.

</br>
</br>

์ค์  View์ frame์ ์ ๊ทผํ๋ ๋ฒ
</br>

```swift
let rect: CGRect = .init(origin: CGPoint(x: 100, y: 200), size: CGSize(width: 150, height: 200))
```
</br>
</br>

๊ฐ๋จํ๊ฒ ํํ </br>

```swift
let rect: CGRect = .init(x: 100, y: 200, width: 150, height: 200)
```

</br>
</br>

์ค์  View ์ ์ </br>

```swift
let rect: CGRect = .init(x: 100, y: 200, width: 150, height: 200)
let myView: UIView = .init(frame: rect)

myView.backgroundColor = .blue
self.view.addSubview(myView)
```

</br>
</br>

```toc
```