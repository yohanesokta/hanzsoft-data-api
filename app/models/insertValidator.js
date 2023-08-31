
function main(req){

    valid = true

    let nama = req.query.nama
    let kategori = req.query.kategori
    let description = req.query.description
    let info = req.query.info || req.query.description
    let icon = req.query.icon
    let download = req.query.download
    let ver = req.query.ver

    // Set nama query ke huruf kecil semua

    if (req.query.nama !== undefined){
        let nama_query = req.query.nama.toLowerCase()
    }

    // Validasi semua schema agar tidak ada yang kosong ( require )

    if ([nama,kategori,description,info,icon,download,ver].includes(undefined) || [nama,kategori,description,info,icon,download,ver].includes(null) ){
        console.log('Penambahan Gagal')
        return undefined
    }else{
        console.log('Penambahan berhasil')
        return [nama,kategori,description,info,icon,download,ver]
    }
}

module.exports = {main}