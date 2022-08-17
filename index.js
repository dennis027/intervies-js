let a = function repeatorNumber(array){
    return array.sort((a,b) =>
          array.filter(v => v===a).length - array.filter(v => v===b).length
    ).pop();
   
}





console.log(a([1, 1, 3,3,3, 6,7,1,3,3])); 