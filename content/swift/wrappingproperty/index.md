---
emoji: 🌃
title: @ObservedOject와 @EnvironmentObject
date: '2023-05-14 16:00:00'
author: 박규리
tags: SwiftUI
categories: SwiftUI
---

## 👀 Property Wrapper란? 

> @ObservedObject와 @EnvironmentObject 모두 @State와 @Binding과 마찬가지로 property wrapper 입니다 ! </br>

* Property wrapper란 속성 감싸기를 통해 코드를 더욱 간결하고 읽기 쉽게 만드는 데 사용되는 기능입니다.
* 이를 통해 코드를 더욱 직관적이고 명확하게 작성할 수 있습니다. 

</br>
</br>

## 💡 @ObservedObject

SwiftUI View가 관찰해야 하는 `외부 객체`가 있을 때 사용됩니다. </br>
@ObservedObject는 `ObservableObject 프로토콜`을 채택하여 SwiftUI View와 상호작용할 수 있도록 만들어집니다. </br>
</br>

### 📝 Docs

<img width="70%" height="70%" alt="image" src="https://github.com/GYURI-PARK/UIKit_Archive/assets/93391058/9a157eb0-35a2-496e-9387-e6824c1b9a5a">

</br>

@ObservedObject 래퍼는 `SwiftUI 뷰와 ObservableObject 객체 간의 연결을 설정`하는 데 사용됩니다. </br>
ObservableObject 객체가 변경될 때마다 뷰는 알림을 받고 업데이트된 값을 사용하여 다시 렌더링됩니다. </br>
이러한 래퍼는 뷰와 관찰 대상 객체 간에 바인딩을 생성하여, 관찰 대상 객체가 변경되면 해당 `변경 사항이 자동으로 뷰에 업데이트`되도록 합니다.
</br>

```swift
class DataModel: ObservableObject {
    @Published var name = "Some Name"
    @Published var isEnabled = false
}

struct MyView: View {
    @StateObject private var model = DataModel()

    var body: some View {
        Text(model.name)
        MySubView(model: model)
    }
}

struct MySubView: View {
    @ObservedObject var model: DataModel

    var body: some View {
        Toggle("Enabled", isOn: $model.isEnabled)
    }
}
```
</br>

@ObservedObject 속성을 사용하여 SwiftUI 뷰의 매개변수로 `ObservableObject 인스턴스를 전달`하고, 해당 객체의 `@Published 프로퍼티가 변경될 때 뷰를 업데이트`할 수 있습니다. </br>
이는 주로 StateObject를 서브뷰로 전달할 때 사용됩니다. </br>

위의 예제는 데이터 모델을 `ObservableObject`로 정의하고, 해당 모델을 뷰에서 `StateObject로 인스턴스화`한 다음, 서브뷰에 전달하기 위해 @ObservedObject 속성을 사용하는 방법을 보여줍니다. </br>

따라서 사용자가 `name`이나 `isEnabled`값을 업데이트 하면, DataModel객체의 `@Published 프로퍼티`가 변경되고, 이를 의존하고 있는 `MySubView`가 자동으로 업데이트 됩니다. </br>

또한 `서브뷰에서 모델 프로퍼티를 업데이트`할 수 있으며, 예를 들어 위의 예제에서처럼 토글을 사용하여 다른 뷰 계층 구조에 있는 관찰자들에게 전파할 수 있습니다. </br>
</br>

### ⭐️ 정리 

* @ObservedObject 속성을 사용할 때, 해당 객체를 `뷰의 입력으로 사용`하는 경우에만 사용해야 합니다. 
> 즉, 객체를 뷰 내부에서만 사용하는 경우에는 다른 속성(`@StateObject`, `@EnvironmentObject`)들을 사용하는 것이 좋습니다. </br>

* ObservableObject 객체를 구독하고, 객체의 `@Published 프로퍼티가 변경될 때` 뷰를 업데이트할 수 있습니다. 

* 하지만 @ObservedObject 속성에 `기본값이나 초기값을 지정하는 것`은 권장되지 않습니다. ❌
> 만약 객체를 초기화하거나, 뷰 내부에서 사용하는 경우에는 `@StateObject`나 `@EnvironmentObject` 등의 속성을 사용하는 것이 좋습니다.</br>

* 따라서 @ObservedObject 속성은 주로 `뷰 간에 데이터를 전달`하거나, `외부에서 주입된 데이터를 사용하는 경우`에 사용됩니다.

* 이를 통해 SwiftUI에서 `반응적`이고 `효율적`으로 데이터를 관리할 수 있습니다.

</br>
</br>

## 💡 ObservableObject Protocol

SwiftUI에서 ObservableObject 프로토콜은 관찰 가능한(observable) 객체를 정의하기 위해 사용됩니다. </br>
ObservableObject를 준수하는 객체는 `@Published` 속성을 사용하여 해당 속성의 값이 변경될 때마다 알리는 방식으로 다른 객체들에게 변경 사항을 알릴 수 있습니다. </br>

ObservableObject를 준수하는 객체는 SwiftUI 앱의 상태를 나타내는 `모델(model) 객체`로 사용될 수 있습니다. </br> 
이 모델 객체는 뷰(view)와 분리되어, 뷰에 표시될 `데이터를 관리하고 업데이트`하는 역할을 합니다. </br> 
모델 객체를 별도로 관리함으로써, SwiftUI는 해당 객체가 변경될 때마다 뷰를 자동으로 업데이트할 수 있게 됩니다. </br>

```swift
class Counter: ObservableObject {
    @Published var count = 0
}
```
위의 예시에서, Counter 클래스는 ObservableObject 프로토콜을 준수하고, count 속성은 @Published 속성으로 정의되어 있습니다. </br>
이렇게 구현된 Counter 클래스의 객체는 변경될 때마다 관찰 가능한 객체로 동작하며, 뷰와 함께 사용할 수 있습니다. </br>

</br>

## 💡 @EnvironmentObject

SwiftUI View의 `상위 뷰에서 생성 및 관리되는 객체를 가져와 View에서 사용`할 수 있도록 합니다. </br>
@EnvironmentObject를 사용하면 View에서 이전에 생성된 객체를 다시 만들 필요가 없으므로, 코드를 더욱 간결하게 작성할 수 있습니다. <br>
</br>

### 📝 Docs

<img width="70%" height="70%" alt="image" src="https://github.com/GYURI-PARK/UIKit_Archive/assets/93391058/57726dad-e35c-49e3-8297-3cf764cbe600">
</br>

@EnvironmentObject는 주로 SwiftUI 앱의 상태를 나타내는 `전역적인 객체를 관리`하기 위해 사용됩니다. </br>

@EnvironmentObject를 사용하면, 하위 뷰에서 해당 객체를 직접 전달하지 않고도 상위 뷰에서 전달한 객체에 접근할 수 있습니다. </br>

@EnvironmentObject를 사용하기 위해서는, 다음과 같이 세 가지 단계를 거쳐야 합니다.

1. 전역적인 객체를 정의하고 ObservableObject 프로토콜을 준수하도록 구현합니다
2. 해당 객체를 앱의 root view에서 `environmentObject modifier`를 사용하여 등록합니다. 
3. 하위 뷰에서 `@EnvironmentObject` 속성을 사용해 등록된 객체에 접근합니다. 

</br>
</br>

### ⭐️ 정리 

```swift
class UserData: ObservableObject {
    @Published var name = "John Doe"
}

struct ContentView: View {
    @EnvironmentObject var userData: UserData
    
    var body: some View {
        Text("Hello, \(userData.name)!")
    }
}

struct MyApp: App {
    let userData = UserData()

    var body: some Scene {
        WindowGroup {
            ContentView().environmentObject(userData)
        }
    }
}
```
</br>

위의 예시에서, UserData 클래스는 ObservableObject 프로토콜을 준수하도록 구현되어 있습니다. </br> 
ContentView 뷰에서는 @EnvironmentObject 속성을 사용하여 userData 객체에 접근합니다. </br>
마지막으로, MyApp 앱에서는 ContentView를 environmentObject modifier를 사용하여 userData 객체를 등록합니다. </br>

* @EnvironmentObject를 사용하는 뷰에서는 해당 객체의 속성이 변경될 때마다 뷰를 업데이트하므로, 이를 통해 상위 뷰에서 관리되는 전역적인 객체를 사용할 수 있습니다. 
</br>
</br>

```toc
```