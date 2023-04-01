---
emoji: 🐌
title: (SwiftUI) 데이터 바인딩
date: '2023-04-01 17:53:00'
author: 박규리
tags: Swift
categories: Swift SwiftUI
---

## SwiftUI에서 데이터 바인딩이 필요한 이유

SwiftUI에서 View는 **struct(구조체)형태**이다. </br>
따라서 구조체이기에 *내부에서 프로퍼티를 변경하는 것이 불가능*하다. </br>

</br>

```swift
struct BlogUpload: View {
    var str = "A"
    
    var body: some View {
        VStack{
            Text(str)
            Button("Change") {
                str = "B"
            }
        }
    }
}
```

</br>

> 다음 코드와 같이 A로 정의된 값을 내부에서 B로 변경하려고 할 때, </br>
> *'Cannot assign to property: 'self'is immutable*과 같은 오류가 발생한다. </br>
> </br>
> 따라서 이와 같은 문제를 해결하기 위해 @State를 사용한 데이터 바인딩이 필요하다. </br>
</br>

## 💡 @State
> A property wrapper type that can read and write a value managed by SwiftUI

</br>
</br>



## 💡 @Binding

</br>
</br>

```toc
```