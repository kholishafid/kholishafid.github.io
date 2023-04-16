---
title: "3 Cara buat Centering <div />."
description: "Oke kali ini kita bahas tentang cara centering div atau element block lain, dimana topik ini sempat jadi meme loh 🤣."
thumbnail: "/blog-thumbnail/nengahindiv.svg"
date: "13 April 2023"
contentIndex: 2
---

Sebenarnya ini bukanlah masalah yang begitu besar karena kalaupun kita lupa atau tak tahupun tinggal kita search di google trus tinggal baca baca dikit beres ato kalo pengen yang lebih gampang tanya ke ChatGPT copy paste beres hahaha. Oke langsung aja

## Position

Yang pertama untuk membuat element div menengah mengikuti parent nya kita bisa memanfaatkan css position dan translation, kurang lebih codenya akan seperti ini:

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

Dengan mengeset `top: 50%` dan `translateY(-50%)` maka `.child` akan menengah secara vertical, Sedangkan `left: 50%` dan `translateX(-50%)` akan membuat `.child` menengah secara horizontal.

Yang harus diingat adalah property position dari element `.parent` valuenya adalah relative. Kamu juga bisa menyingkat value dari property transform menjadi seperti ini `transform: translate(-50%,-50%);`

## Flexbox

Teknik ini saya rasa merupakan teknik paling populer untuk saat ini. Untuk centering div menggunakan flexbox cukuplah mudah dan hanya menggunakan 3 line kode css lebih hemat daripada menggunakan teknik position 😁, berikut kode nya :

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Saya asumsikan bahwa kamu sudah menerapkan rule lain seperti width, height dengan begitu kamu hanya perlu menambah 3 line kode di element `.parent` dan boom maka element `.child` akan ada ditengah tengah element parentnya.

Singkatnya `justify-content: center;` membuat element menengah secara horizontal dan `align-items: center;` menengah secara vertical. Kedua rule tersebut tidak berguna jika diterapkan pada element dengan display bukan flex. Detail tentang flex ada disini: :externalLink{href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"}

## Grid

Yang terakhir dan yang paling simple yaitu dengan memanfaatkan grid, Oke langsung aja begini kodenya :

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  display: grid;
  place-items: center;
}
```

Gimana teknik terakhir ini cuma 2 line aja loh, Property `place-items` sebenarnya merupakan shorthand dari property `align-items` dan `justify-items`, align-items menengahkan secara vertikal dan justify-items secara horizontal.

align-items ? mirip di teknik flex dong ? iya tapi justify-items tidak dapat diterapkan di flexbox sehingga jika kita menggunakan property place-items dengan value center di flexbox maka child nya hanya akan menengah secara vertikal.

## Outro

Udah sampai akhir nih, gimana menurutmu paling efektif teknik yang mana nih ?

Oh ya saya rasa cukup sekian makasih gan/sis udah mau mampir dan baca. Kapan kapan mampir lagi, aku tunggu.
Sampai jumpa lagi 👋😃.
