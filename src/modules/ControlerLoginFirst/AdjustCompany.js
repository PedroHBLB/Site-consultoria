export { AdjustCompany };

var AdjustCompany = async (companys) => {
  for (var i = 0; i < companys.length; i++) {
    for (var j = i; j < companys.length; j++) {
        if(parseInt(companys[i][8]) > parseInt(companys[j][8])){
            let aux = companys[i]
            companys[i] = companys[j]
            companys[j] = aux
        }
    }
  }
};
