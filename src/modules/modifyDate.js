var modifyData = (date)=>{
    let temp_date = ''
    let date_part = ''
    for(var i = 0; i < date.length;i++){
        if(date[i] === '-'){
            if(temp_date === ''){
                temp_date = date_part
            }else{
                temp_date = date_part+"/"+temp_date
            }
            date_part = ''
        }else{
            date_part = date_part + date[i]
            if(date[i+1] == null){
                temp_date = date_part+"/"+temp_date
            }
        }
    }
    return  temp_date
}

export { modifyData }