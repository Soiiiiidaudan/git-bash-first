// define new scope with limited lifetime

const lo_nuong ={
    nuong: (hon_hop_thit) => {
       var tmp = "" 
       hon_hop_thit.forEach(element => {
           tmp = tmp + element + " "
       });
       tmp = tmp + "nuong"
       console.log(tmp)
    }
}

var hon_hop_thit = require('./meat').meats

lo_nuong.nuong(hon_hop_thit)
