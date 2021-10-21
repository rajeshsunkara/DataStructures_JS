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
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('Hello');
newArray.push('!');
console.log(newArray);
//newArray.pop()
newArray.delete(1);
console.log(newArray);
