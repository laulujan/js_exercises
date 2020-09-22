const sumAll = function(x, y) {
    if( typeof x !== "number" || typeof y !== "number"){
        return 'ERROR';
    }
    if (x < 0 || y < 0){
        return 'ERROR';
    }
    if (x > y){
        x = x + y;
        y = x - y;
        x = x - y;
    }    
    
    let result = 0;
    for(let i = x; i <= y; i++){
        result += i;
    }
    return result;

}

module.exports = sumAll
