const repeatString = function(str, n) {
    let result = '';
    if(n < 0){
        return 'ERROR'
    }
    for(let i =1; i <= n; i++){
        result += str; 
    }
    return result;
}

module.exports = repeatString
