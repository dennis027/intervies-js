let a = function repeatorNumber(array){
    return array.sort((a,b) =>
          array.filter(v => v===a).length - array.filter(v => v===b).length
    ).pop();
   
}

function dominator(a){

    console.log(a)
 
    let count = 0;

    array.forEach(element => {
      if (element === 3) {
        count += 1;
      }
    });
    
    console.log(count);
}



console.log(a([1, 1, 3,3,3, 6,7,1,3,3])); 