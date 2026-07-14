const arr = [12,34,67,34,89,90];
let max1 = arr[0];
let min1 = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > max1){
        max1 = arr[i];
    } 
    if(arr[i] < min1){
        min1 = arr[i];
    }
}

console.log(max1,min1);
