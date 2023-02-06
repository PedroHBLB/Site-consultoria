export { setMetaRealObj }

var setMetaRealObj = (meta, real, obj, e)=>{
    let pai2 = e.target.parentNode.parentNode
    if(pai2.children.length === 3){
        let MROContainer = pai2.children[2]

        for(var j = 0; j < MROContainer.children.length;j++){
            if(MROContainer.children[j].getAttribute("mode") === "meta"){
                meta = MROContainer.children[j].children[1].value
            }else if(MROContainer.children[j].getAttribute("mode") === "real"){
                real = MROContainer.children[j].children[1].value
            }else if(MROContainer.children[j].getAttribute("mode") === "obj"){
                obj = MROContainer.children[j].children[1].value
            }
        }
        return [meta, real, obj];
    }else{
        return ["","",""];
    }
}