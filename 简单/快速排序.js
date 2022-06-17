function quickSort(arr){
    if(arr.length <=1 ){return arr}
    const base = arr.shift();
    const left =[] 
    const right = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]<base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(base,quickSort(right))
}
console.log(quickSort([1,2,4,1,3,4]));
