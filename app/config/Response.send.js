/*
    CONFIG JSON BY YOHANES OKTANIO
    ---------------- ++ -------------------
    disinilah data akan di tampilkan dalam 
    format yang baik , file ini menjadi 
    kesatuan config sebelum response 
    ditampilkan
*/

function sendResponse(data,count = null,message = '',type = 'success',code = 200){
    var make = {
        'status':{
            'code':code,
            'type':type,

        },
        'response':{
            'message': message,
            'count': count,
            'data': data
        }
    }
    return make
}

module.exports = { sendResponse }