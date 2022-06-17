console.log(1);
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

// if (list1.length === 0 && list2.length === 0) {
//     return [];
// } else if (list2.length === 0) {
//     return list1;
// } else if (list1.length === 0) {
//     return list2;
// } else {
//     const list = Array.from(list1).concat(Array.from(list2));
//     function quickSort(arr){
//         if(arr.length<=1){return arr}
//         const base = arr.shift();
//         const left =[] 
//         const right = []
//         for(let i = 0; i < arr.length; i++) {
//             if(arr[i]<base){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return quickSort(left).concat(base,quickSort(right))
//     }
//     return quickSort(list)
// }