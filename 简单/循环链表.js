console.log(1);
// function ListNode(value) {
//     this.val = {};
//     for(let i = 0; i < value.length; i++){
//         this.val[value[i]].val = i;
//         if(i===value.length-1){
//             this.val[value[i]].next = value[0];
//         }else{
//             this.val[value[i]].next = value[i+1];
//         }
//     }
// }
var hasCycle = function (head,cache) {
    if(!cache){
        const cache ={};
    }
    cache[head]=0
    if (head.next) {
        // console.log('递',head.next);
        if(head.next in cache) return true;
        return hasCycle(head.next,cache)
        // console.log('归',head.next);
    }else{
        return false;
    }
};
// const linked = new ListNode([1,2,3,4,5])
// console.log(linked);
