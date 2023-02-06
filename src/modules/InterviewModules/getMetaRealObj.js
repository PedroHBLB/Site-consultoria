export { getMetaRealObj }

var getMetaRealObj = (MRO, meta, real, obj) =>{
    if(MRO != undefined){
        for(var j = 0; j < MRO.children.length;j++){
            if(MRO.children[j].getAttribute("mode") === "meta"){
                MRO.children[j].children[1].value = meta
            }else if(MRO.children[j].getAttribute("mode") === "real"){
                MRO.children[j].children[1].value = real
            }else if(MRO.children[j].getAttribute("mode") === "obj"){
                MRO.children[j].children[1].value = obj
            }
        }
    }
}