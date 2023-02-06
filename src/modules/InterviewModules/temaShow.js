export {temaShow}

var temaShow = (temaContent, path, file, cont)=>{
    if(file[1] === "embed"){
        let embed = document.createElement("embed");
        temaContent.appendChild(embed)
        embed.src = "/Temas/"+path+"/"+file[0];
        embed.width = "90%";
        embed.height = "90%";
        embed.type = "application/pdf"
        embed.setAttribute("num",cont)
        if(cont != 1){
            embed.style.display = "none"
        }
    }else if(file[1] === "img"){
        let img = document.createElement("img")
        temaContent.appendChild(img)
        img.src = "/Temas/"+path+"/"+file[0]
        img.className = "show_temas"
        img.setAttribute("num",cont)
        if(cont != 1){
            img.style.display = "none"
        }
    }else if(file[1] === "video"){
        let video = document.createElement("video")
        let source = document.createElement("source")
        temaContent.appendChild(video)
        video.appendChild(source)
        video.className = "show_temas"
        video.controls = true
        source.src = "/Temas/"+path+"/"+file[0]
        source.type = "video/mp4"
        video.setAttribute("num",cont)
        if(cont != 1){
            video.style.display = "none"
        }
    }
}