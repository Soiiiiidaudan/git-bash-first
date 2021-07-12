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

require('./meat').meats(1, (hon_hop_thit, err)=>{
    if(err != null){
        console.log(err)
    }
    else{
        lo_nuong.nuong(hon_hop_thit)
    }
})


