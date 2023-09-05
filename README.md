<p>api ini difungsikan untuk penggunaan website saya <a href="">hanzsoft-websites</a></p>

# :globe_with_meridians:  PUBLIC API ( hanzsoft - websites)
penggunaan api ini "Sebenarnya" digunakan untuk website saya pribadi , yaitu <a href="">hanzsoft-websites</a>. Namun kalian juga bisa pakai untuk metode belajar atau ingin clone dan modifikasi sendiri untuk sebagai referensi.

dibikin menggunakan [Node JS] [Express JS]

### | Penggunaan

##### :zap: listen on

    https://hanzsoft-data-api.vercel.app/api

<red> gunakan "/api" jangan hanya menggunakan domainya ok <red> :ok_hand:

## | Method

### GET METHOD

method get menghasilkan 2 hasil dengan berbeda parameter.

---
get tanpa parameter akan menampilkan semua data software tanpa terkecuali

contoh:

### :page_with_curl: GET

    https://hanzsoft-data-api.vercel.app/api

hasil

```json
{
    "message": "Query All Data ~ Result",
    "sofware": [
        {
            "isi data"
        },
        {
            "isi data 2"
        },
            "isi data 3"
    ],
    "kategori":[
        {
            "kategori A"
        },
        {
            "kategori B"
        }
    ]
}
```
! update |  parameter find sekarang juga akan menampilkan kategori

## :mag: GET FIND
get dengan parameter **find** akan mengaktifkan pencarian

penggunaan

| Parameter | Values | kebutuhan
| --- | --- | --- |
|`find` | nama software | optional

---
**Contoh** :
    
    https://hanzsoft-data-api.vercel.app/api?find=corel

| Parameter | Values |
| --- | --- |
|`find`| corel


hasil

```json
{
    "message": "Find Data ~ Result",
    "data": [
        {
            "_id": "(object id)",
            "nama": "Corel Draw x7",
            "nama_query": "corel draw x7",
            "kategori": "Desain",
            "description": "software untuk editing vektor yang cukup populer",
            "info": "editing vektor fasted",
            "icon": "icon.png",
            "download": "download",
            "ver": "x7"
        }
    ]
}
```

## parameter put (*bukan method)

dengan menggunakan method **GET** dan menggunakan parameter `put` maka akan menampilkan data berdasarkan nama software secara spesifik

**Contoh :**

    https://hanzsoft-data-api.vercel.app/api?put=Corel+Draw

**Hasil :**
```json
    {
    "data": [
        {
            "_id": "(object id)",
            "nama": "Corel Draw",
            "nama_query": "corel draw",
            "kategori": "Desain",
            "description": "software untuk editing vektor yang cukup populer",
            "info": "editing vektor fasted",
            "icon": "icon.png",
            "download": "download",
            "ver": "x7"
        }
    ]
}
```

## Private add software

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

info replace with decription if not use

## :anchor: End

sebenarnya masih terdapat banyak fungsi namun masih di tahap pengembangan

Saya YohanesOktanio , follow my github & stay creative :blush:
