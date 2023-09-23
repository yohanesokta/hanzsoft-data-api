<p>api ini difungsikan untuk penggunaan website saya <a href="https://github.com/yohanesokta/hanzsoft-websites">hanzsoft-websites</a></p>

# :globe_with_meridians:  PUBLIC API ( hanzsoft - websites)

penggunaan api ini "Sebenarnya" digunakan untuk website saya pribadi , yaitu <a href="https://github.com/yohanesokta/hanzsoft-websites">hanzsoft-websites</a>. Namun kalian juga bisa pakai untuk metode belajar atau ingin clone dan modifikasi sendiri untuk sebagai referensi.


![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## BUILD
build sendiri dari data source github <br>

install package telebih dahulu

    $ npm install

atau pakai yarn

    $ yarn install
<br>

    mv .env.example .env

edit *.env* | isi dengan URI Mongo DB kalian sendiri, bisa bikin di <a href="https://cloud.mongodb.com/">cloud mongodb</a>

runing 

    npm start || npm run dev

selain run sendiri kalian juga bisa menggunakan api yang sudah di deploy

### | Penggunaan 

##### :zap: listen on

    https://hanzsoft-data-api.vercel.app/api

gunakan "/api"!, jangan hanya menggunakan domainya ok  :ok_hand:
## Perubahan v1.2
semua berubah di versi 1.2 , perubahan pada response api dan perubahan routes menjadi lebih banyak dan mungkin akan mencakup banyak perubahan

## | Method

### GET METHOD
method ini akan menampilkan hasil yang kalian berikan pada request

method get pada '(url)/api' akan menampilkan semua data tanpa terkecuali 

`data pertama ` : data item <br>
`data kedua `   : data kategori

contoh:

### :page_with_curl: GET

    https://hanzsoft-data-api.vercel.app/api

hasil

```json
{
    "status": {
        "code": 200,
        "type": "success"
    },
    "response": {
        "message": "",
        "count": 1,
        "data": {
            "items": [
                {
                    "_id": "64f490c3c85850613f5c9d29",
                    "nama": "Nama Item",
                    "nama_query": "nama yang digunakan untuk query (pencarian)",
                    "kategori": "kategori",
                    "description": "deskripsi item lebih panjang dari info",
                    "info": "mungkin slogan item atau fungsi item",
                    "icon": "icon image (link)",
                    "download": "download (link)",
                    "ver": "version item",
                    "prev": "preview image(link)",
                    "req": "balum digunakan"
                }
            ],
            "kategori": [
                {
                    "_id": "64f36af16d1389ea75b22f89",
                    "jenis": "Kategori 1",
                    "image": "image (link)"
                },
                {
                    "_id": "64f36b206d1389ea75b22f8a",
                    "jenis": "Kategori 2",
                    "image": "image (link)"
                }
            ]
        }
    }
}
```


## :mag: GET FIND
get find akan menampilkan data sesuai query yang kalian berikan pada url setelah find !

penggunaan

hanzsoft-data-api.vercel.app/api/find/{ query untuk nama software }

**Contoh** :
    
    https://hanzsoft-data-api.vercel.app/api/find/{ nama software }

contoh untuk find corel
    
    https://hanzsoft-data-api.vercel.app/api/find/corel



hasil

```json
{
    "status": {
        "code": 200,
        "type": "success"
    },
    "response": {
        "message": "finder data from database by params",
        "count": 1,
        "data": [
            {
                "_id": "64f490c3c85850613f5c9d29",
                "nama": "Corel Draw",
                "nama_query": "corel draw",
                "kategori": "Desain",
                "description": "Corel Draw merupakan salah satu perangkat lunak desain grafis berbasis vektor. Perangkat lunak ini biasanya digunakan oleh seorang desainer grafis untuk mengerjakan pekerjaannya memproduksi berbagai hasil desain dengan basis vektor. Berdiri sejak tahun 1985, terhitung sudah lebih dari 90 juta pengguna menggunakan Corel Draw untuk memenuhi kebutuhan desainnya",
                "info": "populer editing vektor",
                "icon": "https://res.cloudinary.com/dgxbyse13/image/upload/f_auto,q_auto,c_limit,w_200/v1/icon/corel",
                "download": "https://www.mediafire.com/file/id5wbcyaqx5fd8t/Corel_Draw_x7_hanzsoft_data.zip/file",
                "ver": "x7",
                "prev": "https://res.cloudinary.com/dgxbyse13/image/upload/f_auto,q_auto/v1/preview/corel",
                "req": "corel.md"
            }
        ]
    }
}
```

## GET (/api/put)

hampir sama seperti (get find) namun sekarang berada di route (url)/api/put/{nama software spesifik}


**Contoh :**

    https://hanzsoft-data-api.vercel.app/api/put/Corel Draw


harus spesifik karena finder dilakukan pada field nama

**Hasil :**
```json
    {
    "status": {
        "code": 200,
        "type": "success"
    },
    "response": {
        "message": "cari data dengan spesifik",
        "count": 1,
        "data": [
            {
                "_id": "64f490c3c85850613f5c9d29",
                "nama": "Corel Draw",
                "nama_query": "corel draw",
                "kategori": "Desain",
                "description": "Corel Draw merupakan salah satu perangkat lunak desain grafis berbasis vektor. Perangkat lunak ini biasanya digunakan oleh seorang desainer grafis untuk mengerjakan pekerjaannya memproduksi berbagai hasil desain dengan basis vektor. Berdiri sejak tahun 1985, terhitung sudah lebih dari 90 juta pengguna menggunakan Corel Draw untuk memenuhi kebutuhan desainnya",
                "info": "populer editing vektor",
                "icon": "https://res.cloudinary.com/dgxbyse13/image/upload/f_auto,q_auto,c_limit,w_200/v1/icon/corel",
                "download": "https://www.mediafire.com/file/id5wbcyaqx5fd8t/Corel_Draw_x7_hanzsoft_data.zip/file",
                "ver": "x7",
                "prev": "https://res.cloudinary.com/dgxbyse13/image/upload/f_auto,q_auto/v1/preview/corel",
                "req": "corel.md"
            }
        ]
    }
}
```

## Penambahan Software Secara Private

penambahan tersedia pada endpoint api namun dalam method **POST**

    https://hanzsoft-data-api.vercel.app/api
_Requires Validation_ kalau mau  menambahkan list software
| request parameter| type |
|--|--|
|`nama`| *string*|
|`kategori`| *string*|
|`description`| *string*|
|`info`|*string* & **short**|
|`icon`|*image link*|
|`download`|**download link**|
|`ver`|*version number*|
|`prev`| *image link*|
|`req`| *system requirements*

info akan direplace dengan description kalau tidak di isi

## :anchor: Penutup

Saya **YohanesOktanio** mengharapkan kalian sebagai para developer ikut berkontribusi atau pun mengoreksi project saya ini

sebenarnya masih terdapat banyak fungsi namun masih di tahap pengembangan

Saya YohanesOktanio , follow my github & stay creative :blush:







