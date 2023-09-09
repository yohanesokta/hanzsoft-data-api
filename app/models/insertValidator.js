
function main(req,res){

   var data = {
        "nama" : req.query.nama,
        "nama_query":req.query.namatoLowerCase(),
        "kategori" : req.query.kategori,
        "description" : req.query.description,
        "info" : req.query.info || req.query.description,
        "icon" : req.query.icon,
        "download" : req.query.download,
        "ver" : req.query.ver,
        "prev" : req.query.prev,
        "req" : req.query.req
    }
    if (
        data.nama == undefined ||
        data.kategori == undefined ||
        data.icon == undefined ||
        data.download == undefined ||
        data.description == undefined ||
        data.download == undefined ||
        data.ver == undefined ||
        data.prev == undefined ||
        data.req == undefined
        ) {
            res.json({'Message':'validation failed','request':data})
            return {
                "valid":false,
                "data" : undefined
            }
        }else{
            res.json({'Message': 'Adding Succsessfull','request':data})
            return {
                "valid":true,
                "data":data
            }
        }
}

module.exports = {main}
