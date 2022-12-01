---
sidebar_position: 7
toc_max_heading_level: 4
---

# Formmating

## 문자열 포맷팅
### 문자열 갯수 지정해서 패딩하기
:::tip
padRight도 존재, padLeft는 왼쪽에 패딩을 하는 것을 의미함
```dart
문자열.padLeft(패딩 갯수, 패딩할 문자);
```
:::

```dart title="예시"
void main() {
  final date = DateTime( 2022,6,7,5,6);
  
  // 2022-6-7 5:6 출력
  print('${date.year}-${date.month}-${date.day} ${date.hour}:${date.minute}');
  
  // 2022-06-07 05:06 출력
  print('''${date.year}-${getTimeFormat(date.month)}-${getTimeFormat(date.day)} 
  ${getTimeFormat(date.hour)}:${getTimeFormat(date.minute)}''');
}

// 시간 데이터 포맷팅 하는 함수 
String getTimeFormat(int number) {
  return number.toString().padLeft(2, '0'); // 채울 갯수, 채울 글자
}
```

## 숫자형 포매팅
### String to Int
int.parse( `String` )

```dart
String ten = '10';
print(int.parse(ten).runtimeType); // int 출력
```

## Base64 Encoding 
```dart
// 어떻게 인코딩 할건지 정의
Codec<String, String> stringToBase64 = utf8.fuse(base64);
// 정의를 이용해서 rawString을 인코딩
String base64EncodingText = stringToBase64.encode( String );
```

### Reference
[Code Factory 중급](https://github.com/rookedsysc/Flutter-Study/blob/fd26885698cc828c6e2d8452d639b40ce1b44506/Project/lv2_actual/lib/user/view/login_screen.dart)