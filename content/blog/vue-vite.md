---
title: "Setup Vue 3 + Vite "
description: "Begini cara setup vue 3 dengan vite."
thumbnail: "/blog-thumbnail/vuevite.svg"
date: "23 Juli 2023"
contentIndex: 3
---

## Instalasi Vue dengan Vite

Oke langsung aja tanpa basa basi

Pastikan di komputer mu sudah terpasang nodejs dan package manager(kita akan gunakan npm).

Pergi ke direktori yang kamu inginkan, buka terminal dan jalankan perintah ini

```bash
npm create vite@latest  
```

Kemudian kalian akan disuruh memassukkan nama project disini terserah mau dikasih nama apa, jika selesai menamai kemudian klik enter
![nama](/blog/3/project-name.png)

Kemudian pilih framework yang akan digunakan, kali ini kita akan menggunakan vue, gunakan arrow keys di keyboard mu untuk mengganti pilihan, jika sudah klik enter
![framework](/blog/3/vue.png)

Jika sudah akan muncul pilihan lagi, silahkan pilih javascript atau typescript,
di artikel ini kita akan menggunakan javascript saja, klik enter
![languange](/blog/3/variant.png)

Proses inisialisasi project akan berjalan jika sudah kalian akan disuruh untuk pindah ke direktori project kalian

Misal karena namain folder project nya vue jadi ya gini 

```bash
cd vue
```

Jika sudah silahkan install dependensi dengan perintah

```bash
npm install
```

Setelah proses instalasi selesai maka kalian telah selesai melakukan instalasi vue dengan vite
untuk menjalankan development server silahkan jalankan perintah ini

```bash
npm run dev
```

kalian bisa melihat live preview vue kalian di http://localhost:5173/

Seperti ini :
![preview](/blog/3/preview.png)