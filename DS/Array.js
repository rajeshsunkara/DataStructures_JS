//Array
//Array Implementation
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length]=item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastitem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.lenght--;
    return lastitem;
  }

  delete(index){
    const item = this.data[index];
    this.shitItems(index);
  }

  shitItems(index){
    for(let i=index;i<this.length-1;i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  //1st try 
  reverse(str){
    for(let i=0;i<str.length-1;i++){
      if(i != str.length-i){
      
        let firstElement = this.data[i];
        let lastElement = this.data[str.length-(i+1)];
        this.data[i]=lastElement;
        this.data[str.length-(i+1)]=firstElement;
      }
      else
        break;
    }
    return str;
  }
}

const newArray = new MyArray();
//newArray.push('H');
//newArray.push('Hello');
//newArray.push('!');
//console.log(newArray);
//newArray.pop()
//newArray.delete(1);
newArray.push('R');
newArray.push('A');
newArray.push('J');
newArray.push('E');
newArray.push('S');
newArray.push('H');
//console.log(newArray);
//newArray.reverse(newArray);

//Reverse using 2 variables
function reverse(str)
{
  if(!str || str.length <2){
    return 'HMM';
  }
    const backward=[];
    const totalItems = str.length-1;
    for(let i=totalItems;i>=0;i--){
      backward.push(str[i]);
    }
    console.log(backward);
    return backward.join('');

}
//reverse('Hello Rajesh here');
//Reverse using OOB function
function reverse2(str){
  return str.split('').reverse().join('');
}

reverse2('Hello Rajesh Here');

//Reverse in ES6 syntax
const reverse3 = str => str.split('').reverse().join('');

reverse3('reverse in ES6');

//Merge sorted arrays
function mergeSortedArrays2(arr1,arr2){
  const mergedArray =[];

  let array1Item= arr1[0];
  let array2Item = arr2[0];
  let i=1;
  let j=1;
  //Initial Checks
  if(arr1.length == 0){
    return arr2;
  }
  if(arr2.lenght == 0){
    return arr1;
  }
  while(array1Item || array2Item){
    console.log(arr2);
    if(!array2Item || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item=arr1[i]
      i++; 
    }
    else{
      mergedArray.push(array2Item);
      array2Item=arr2[j];
      j++;
    }
  }

  return mergedArray;
}
//mergeSortedArrays2([1,2,3],[4,5,6]);

