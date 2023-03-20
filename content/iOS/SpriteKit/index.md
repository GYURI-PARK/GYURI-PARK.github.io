---
emoji: 🎮
title: (SpriteKit) 테트리스 게임 만들기로 알아본 SpriteKit
date: '2023-03-19 01:57:00'
author: 박규리
tags: iOS 
categories: iOS
---

## 🎮 SpriteKit 특징

> The SpriteKit framework makes it easy to create high-performance, battery-efficient 2D games. </br>
> With support for custom OpenGL ES shaders and lighting, integration with SceneKit, and advanced new physics effects and animations, you can add force fields, detect collisions, and generate new lighting effects in your games. </br>

</br>

* lower-level 2D 애니메이션을 위해 디자인
* OpenGL과 같은 graphics API를 필요로 하지 않음
* SceneKit와 함께 사용해 배경이나 전경의 오버레이로 활용 가능


## 🧩 SpriteKit 구성요소

1. SKView

- SpriteKit의 기본 뷰
- 각 장면 컨텐츠를 렌더링하여 표시하는 역할로 UIView를 서브클래싱해 만들어진다.

</br>

2. SKScene

- 앞서 설명한 뷰는 장면들을 전환하여 보여줄 수 있는데 SKScene이 각 장면에 해당하는 클래스
- 장면은 화면에 등장하는 컨텐츠 구성요소인 Node들을 관리

</br>

3. SKNode

- 장면 내의 배경, 캐릭터, UI요소 등은 모두 SKNode로 표현
- 각각의 노드는 SKAction을 실행해 애니메이팅

</br>

### 🔎 간단한 예제 코드

```swift
// 왼쪽으로 이동
let action = SKAction.moveBy(x: -100, y: 0, duration: 1)
for bricks in Variables.nodeGroup{
    for item in bricks{
        item.run(action)
    }
}
```

```swift
class Button {
    let btn = SKSpriteNode()
    init() {
        btn.name = "button1"
        btn.size = CGSize(width: 50, height: 50)
        Variables.scene.addChild(btn)
    }
    func anim(){
        var textures- = Array<SKTexture>()
        let action = SKAction.animate(with: textures, timePerFrame: 0.03)
        btn.run(action)
    }
    func brickMove(){
        if isMovale(){
            anim()
        }
    }
}
```

</br>
</br>

## Essentials

* SpriteKit으로 보여지는 모든 것들은 SKScene의 인스턴스인 scene 객체를 통해 수행

Scene 생성 </br>

```swift
let scene = SKScene(size: skView.bounds.size)
scene.anchorPoint = CGPoint(x: 0.5, y: 0.5)
// 다음과 같이 anchorPoint를 (0.5,0.5)로 설정하게 되면 중심이 (0,0)이 된다.
```

</br>

Scene 위에 이미지 표시 </br>

```swift
let image = SKSpriteNode(imageNamed: "myImage.png")
scene.addChild(image)
```

</br>

View 내부에 Scene 표시 </br>

```swift
if let skView = self.view as? SKView { 
    skView.presentScene(scene)
}
// presentScene 함수 사용
```
</br>
</br> 

## Scene Renderers

## Textures

## Animation

</br>
</br>

```toc
```