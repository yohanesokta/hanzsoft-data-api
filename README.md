hanzsoft database API on public , project api untuk menangani database dari backend website saya
 | <a href='http:://hanzsoft.fast-page.org'>hanzsoft-websites</a>

## API DATABASE Websites (Laravel) :elephant:
api ini berisi database software beserta link download yang bisa dipakai untuk website downloader software ( tidak original )

api ini berada dalam url

    http://hanzsoft-resource.wuaze.com/api/data

dalam routes <a href='http://hanzsoft-resource.wuaze.com/api/data'>/api/data</a> tersebut akan menghasilkan list semua aplikasi yang terdapat dalam database <a href='http:://hanzsoft.fast-page.org'>hanzsoft</a>

Perlu di ingat bahwa api ini mewajibkan pemakaian API KEY untuk penggunaanya dalam parameter ( api_key )

###  API Key public :
    310205

anda dapat menggunakan api key tersebut secara bebas, ( untuk penggunaan postman atur api_key di variable)

contoh penggunaan

    http://hanzsoft-resource.wuaze.com/api/data?api_key=310205

contoh response :

    {
        {
    "data": [
        {
            "id": 1,
            "nama_id": "corel draw x7",
            "nama": "Corel Draw x7",
            "icon": "none",
            "kategori": "desain",
            "size": "1.0",
            "versi": "none",
            "deskripsi": "none",
            "tentang": "none",
            "requirement": "Work On All Pc ",
            "link": "none"
        },
        {
            "id": 2,
            "nama_id": "adobe premiere pro",
            "nama": "Adobe Premiere Pro",
            "icon": "none",
            "kategori": "video",
            "size": "1.0",
            "versi": "none",
            "deskripsi": "none",
            "tentang": "none",
            "requirement": "Work On All Pc ",
            "link": "none"
        },
    } ...


#
### Paramaeter ( *Cari* )

dengan route yang sama kalian bisa melakukan searching database di dalam api ini dengan parameter ( cari )

contoh penggunaan

    http://hanzsoft-resource.wuaze.com/api/data?api_key=310205&cari={ cari sesuatu di sini }

contoh response

    {
    "data": [
        {
            "id": 1,
            "nama_id": "corel draw x7",
            "nama": "Corel Draw x7",
            "icon": "none",
            "kategori": "desain",
            "size": "1.0",
            "versi": "none",
            "deskripsi": "none",
            "tentang": "none",
            "requirement": "Work On All Pc ",
            "link": "none"
        }
    ]
}

hasil pencarian bisa lebih dari satu jika ada