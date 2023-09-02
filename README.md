<style>
    p{
        font-size:15px;
    }
    red{
        color:green;
    }
</style>

<p>api ini difungsikan untuk penggunaan website saya <a href="">hanzsoft-websites</a></p>

# PUBLIC API ( hanzsoft - websites)
penggunaan api ini "Sebenarnya" digunakan untuk website saya pribadi , yaitu <a href="">hanzsoft-websites</a>. Namun kalian juga bisa pakai untuk metode belajar atau ingin clone dan modifikasi sendiri untuk sebagai referensi.

dibikin menggunakan [Node JS] [Express JS]

### | Penggunaan

##### listen on

    https://hanzsoft-data-api.vercel.app/api

<red> gunakan "/api" jangan hanya menggunakan domainya ok <red> :ok_hand:

## | Method

### GET METHOD

method get menghasilkan 2 hasil dengan berbeda parameter.

---
get tanpa parameter akan menampilkan semua data software tanpa terkecuali

contoh:

### GET

    https://hanzsoft-data-api.vercel.app/api

hasil

```json
{
    "message": "Query All Data ~ Result",
    "data": [
        {
            "isi data"
        },
        {
            "isi data 2"
        },
            "isi data 3"
    ]
}
```
---
get dengan parameter action **find** akan mengaktifkan pencarian

penggunaan

| Parameter | Values | kebutuhan
| --- | --- | --- |
| `action` | **find** | wajib "require"
|`find` | **nama software** | optional

---
**Contoh** :
    
    https://hanzsoft-data-api.vercel.app/api?action=find&find=corel

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

## End

sebenarnya masih terdapat banyak fungsi namun masih di tahap pengembangan

follow my github & stay creative :blush:
