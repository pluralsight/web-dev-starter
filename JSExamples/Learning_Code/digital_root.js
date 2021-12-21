function digital_root(n){
    n = JSON.stringify(n)
    while(n > 9){
        var total = 0;
        for(var i = 0; i < n.length; i++){
            total += Number(n[i]);

        }
        n = JSON.stringify(total)
    }return parseInt(n)
}

console.log(digital_root(455))