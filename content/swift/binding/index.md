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

![사진](./binding1.png)

</br>

> 다음 코드와 같이 A로 정의된 값을 내부에서 B로 변경하려고 할 때, </br>
> *'Cannot assign to property: 'self'is immutable*과 같은 오류가 발생한다. </br>
> </br>
> 따라서 이와 같은 문제를 해결하기 위해 @State를 사용한 데이터 바인딩이 필요하다. </br>
</br>

## 💡 @State
> A property wrapper type that can read and write a value managed by SwiftUI </br>
</br>
</br>

사용법 </br>
> 변수 앞에 @State 붙이기만 하면 됨 </br>

```swift
@State var str = "A"
```

</br>
</br>

* Property Wrapper : 변화가 생기면 해당 변수의 값을 읽거나 새로 쓸 수 있다.
* State value 값이 변경되면 뷰는 해당 value의 apperance를 무효화 하고 새롭게 body 값을 계산
* State 변수값이 변경되면 view를 다시 랜더링하기 때문에 항상 최신 값을 가짐
* State 인스턴스는 그 자체로 값이 아닌, 값을 읽고 쓰는 것을 의미
* @State 속성으로 어떤 프로퍼티의 초기값을 지정했다면, 다른 값으로 재할당 불가능 -> **@Binding** 변수를 통해서만 가능  
* @State는 **private**이고 다른 View와 공유되지 않음
* SwiftUI는 state로 선언된 property들의 저장소를 관리 -> Property Wrapper로 감싼 변수는 View가 소유하고 있지 않는다.

</br>
</br>

```swift
struct BlogUpload: View {
    @State var str = "A"
    
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

> 앞선 코드를 @State를 사용해 정의해주게 되면 더이상 오류가 발생 하지 않는다. </br>

![사진](./binding2.png)

</br>
</br>

## 💡 @Binding

> A property wrapper type that can read and write a value owned by a source of truth </br>
> </br>
> @State로 선언된 속성을 다른 뷰에서 사용하려 할 때 @Bindging 사용 </br>

</br>

사용법 </br>
> 변수 앞에 **$(달러)**을 붙여 바인딩 변수임을 나타냄 </br>

```swift
struct BlogUpload: View {
    @State var toggle = false
    
    var body: some View {
        VStack{
            Toggle("토글버튼", isOn: $toggle)
            
        }
    }
}
```

</br>

* 외부에서 접근해야 하기 때문에 private X

</br>
</br>

## 👀 예시

```swift
import SwiftUI

struct BlogUpload: View {
    @State var num : Int = 160
    @State var isShowingModal: Bool = false
    
    var body: some View {
        VStack{
            Text("Now, the number is \(num)")
                .font(.system(size: 30))
                .bold()
                .padding(.bottom, 40)
            
            Button(action:
                    {self.num += 1},
                   label: {Text("Add number")
                    .frame(width: 200, height: 50)
                    .background(Color.black)
                    .cornerRadius(15)
                    .foregroundColor(.white)
                    .font(.system(size: 20))
            })
            .padding(.bottom, 40)
            
            Button(action:
                    {isShowingModal = true},
                   label: {Text("Show Modal")
                    .frame(width: 200, height: 50)
                    .background()
                    .shadow(radius: 10)
                    .foregroundColor(.black)
            }) .sheet(isPresented: $isShowingModal){
                ZStack{
                    Color.black.ignoresSafeArea()
                    Text("Check the number : \(num)")
                        .font(.system(size: 30))
                        .foregroundColor(.white)
                    
                }
            }
            
        }
    }
}
```
</br>
</br>

![사진](./binding3.png)
![사진](./binding4.png)

</br>
</br>

```toc
```