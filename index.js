run = "npm start"
//HashTable

class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

_hash(key){
  let hash=0;
  for(let i=0;i < key.length;i++){
    hash=(hash + key.charCodeAt(i) * i) % this.data.length;
    }
  return hash;
  }

  set(key,value){
    let address= this._hash(key);
    //console.log(address);
    if(!this.data[address]){
      this.data[address] = [];     
    }
    this.data[address].push([key,value]);
    console.log(this.data);
    return this.data;
  }

  get(key){
    let address= this._hash(key);
    //console.log(address);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i=0;i<currentBucket.length;i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;   
  }
  // returning keys without collision
  keys(){
    const keysArray=[];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
  // returning keys with collision O(n^2)
  keys1(){
    const keysArray=[];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i]){
      console.log(this.data[i].length);
      if(this.data[i].length >1){
        for(let j=0;j<this.data[i].length;j++){
          keysArray.push(this.data[i][j][0]);
        }
      }
      else{
        keysArray.push(this.data[i][0][0]);
      }
      }
    }
    return keysArray;
  }
}

const myhashTable = new HashTable(2);
myhashTable.set('grapes',1000);
//myhashTable.set('oranges',10000);
myhashTable.set('apples',100);
//console.log(myhashTable);
//myhashTable.get('apples');
myhashTable.keys1();
