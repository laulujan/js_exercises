const removeFromArray = function(...args) {
    const arr = args[0];
    return  arr.filter(element => !args.includes(element));
    
}

module.exports = removeFromArray
