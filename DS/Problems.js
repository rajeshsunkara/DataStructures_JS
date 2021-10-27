//Find the 1st recurring character in the given array

//time - O(N^2)
//Space - O(1)
function firstRecurringCharacter(input){
  for(let i=0;i<input.length;i++){
    for(let j= i+1;j<input.length;j++){
      if(input[i] === input[j]){
        return input[i];
      }
      else if(input[j] === input[j-1]){
        return input[j];
      }
    }
  }
  return undefined;
}

//time - O(N)
//Space - O(N)
function firstRecurringCharacter2(input){
  let map = {};
  for(let i=0;i<input.length;i++){
    console.log(map)
    if(map[input[i]] !== undefined){
      return input[i]
    }
    else{
      map[input[i]]= i;
    }
  }
  return undefined;
}
//firstRecurringCharacter([3,2,4,3,3,5,7,3]);