let findTheOldest = function(arr) {
    for( let i = 0; i < arr.length; i++){
        if(!arr[i].hasOwnProperty('yearOfDeath')){
          arr[i].yearOfDeath = new Date().getFullYear();
        }
        arr.forEach(function(element){
          element.age = element.yearOfDeath - element.yearOfBirth
        })
    
      }
       let oldest = Math.max.apply(Math, arr.map(function(o) { return o.age; }))
    
       return arr.find(x => x.age === oldest)

}

module.exports = findTheOldest
