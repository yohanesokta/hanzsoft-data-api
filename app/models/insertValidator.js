
function main(req){

    valid = true

    let nama = req.query.nama
    let kategori = req.query.kategori
    let description = req.query.description
    let info = req.query.info || req.query.description
    let icon = req.query.icon
    let download = req.query.download
    let ver = req.query.ver
    let preview = req.query.preview
    let requires = req.query.req
     // Set nama query ke huruf kecil semua
    

    // Validasi semua schema agar tidak ada yang kosong ( require )

    if ([nama,kategori,description,info,icon,download,ver,preview,requires].includes(undefined) || [nama,kategori,description,info,icon,download,ver,preview,requires].includes(null) ){
        console.log('Penambahan Gagal')
        return undefined
    }else{
        console.log('Penambahan berhasil')
        return [nama,kategori,description,info,icon,download,ver,preview,requires]
    }
}

module.exports = {main}