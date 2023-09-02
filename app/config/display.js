function display(mes){
    console.log("request activate on ( " + mes + " )")
}

function err(res,msg = "default"){
    if (msg == "default"){
        res.json({"message":"server connection error"})
    }else{
        res.json({"message":msg})
    }
}

module.exports = { display , err }