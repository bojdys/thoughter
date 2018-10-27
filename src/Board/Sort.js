export const sortByDate = (thoughts) => {
  let thoughtsSorted = [];
  for(let i=thoughts.length-1; i>=0; i--){
    thoughtsSorted.push(thoughts[i]);
  } 
  return thoughtsSorted;
}

export const sortByLikes = (thoughts) => {
  let thoughtsSorted = [];
  let topThoughtIndex = 0;
  let i = 0; 
  while(i !== thoughts.length){
    topThoughtIndex = 0;
    while(thoughts[topThoughtIndex] === undefined)
      topThoughtIndex++;
    for(let j=0 ; j<thoughts.length; j++){
      if(thoughts[j] !== undefined){
        if(thoughts[j].likes > thoughts[topThoughtIndex].likes)
          topThoughtIndex = j;
      }
    }
    thoughtsSorted.push(thoughts[topThoughtIndex]);
    delete thoughts[topThoughtIndex];
    i++;
  }
  return thoughtsSorted;  
}