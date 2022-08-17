
let A = function repeatorNumber(array){
    return array.sort((a,b) =>
          array.filter(v => v===a).length - array.filter(v => v===b).length
    ).pop();
   
}
function dominator(A) {
    const array = []
    for (let i=0; i<A.length; i++){
      if (!array[A[i]])
        array[A[i]] = 1
        
      else
        array[A[i]]++
      if (array[A[i]] > A.length/2)
      return A.sort((a,b) =>
      A.filter(v => v===a).length - A.filter(v => v===b).length
).pop();


        
    }
    return -1
}




console.log(dominator([1, 1, 3,3,3,3, 6,7,1,3,3])); 