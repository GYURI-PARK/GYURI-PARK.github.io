---
emoji: 🍩
title: Swift 기초 다지기 (3)
date: '2023-02-11 15:00:00'
author: 박규리
tags: Swift 
categories: Swift
---

## 💡 조건문

### if-else

if condition { </br>
        statements </br>
}   else if condition { </br>
        statements </br>
}   else { </br>
        statements </br>
} 

</br>
</br>

* condition(조건) 소괄호 생략 가능
* Swift 조건은 항상 Bool 타입이 들어와야한다.

🎯 예제 코드
```bash
import Swift
let someInteger = 100

if someInteger < 100 {
    print("100미만")
} else if someInteger > 100 {
    print("100초과")
} else {
    print("100")
}
```

</br>
</br>

### switch

switch value { </br>
case pattern: </br>
    code </br>
default: </br>
    code </br>
}

</br>
</br>

* 범위 연산자를 활용하면 유용

#### 💭 범위 연산자

```toc
```
