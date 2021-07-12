// export a callback
exports.meats = (mode, callback) =>{
    var tmp = "69420"
    var nested_func = function(){
        // for testing only: mode 0 = normal, mode 1 = error, default = normal
        switch (mode){
            case 0:
                callback(["meo", "chuot", "cho", "chim", "lon", "ga"], null)
                break;
            case 1:
                setTimeout(()=>{
                    //By this time the outsider funcion will have stopped working
                    //Check if tmp remains
                    console.log("tmp still remains, which is " + tmp)
                    //Throw new error
                    callback(null, new Error("Ban nen an chay!"))
                }, 2000)
                
                break;
            default:
                callback(["meo", "chuot", "cho", "chim", "lon", "ga"], null)
        }
    }
    
    nested_func();
    console.log("outsider function exited")
}    
