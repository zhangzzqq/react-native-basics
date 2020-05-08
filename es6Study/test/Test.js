
// let a = undefined? '12':'34';
// let a = null? '12':'34';

// console.log(a);

// const runes = require('runes');
// const usaText = "A🇺🇸Z";
// // runes.substr(usaText, 0, 2); // "A🇺🇸"
// console.log(runes.substr(usaText, 0, 2));


// let a ='qq';
// console.log(a>0);

function ArrayIsEqual(arr1,arr2){//判断2个数组是否相等
    if(arr1===arr2){//如果2个数组对应的指针相同，那么肯定相等，同时也对比一下类型
        return true;
    }else{
        if(arr1.length!=arr2.length){
            return false;
        }else{//长度相同
            for(let i in arr1){//循环遍历对比每个位置的元素
                if(arr1[i]!=arr2[i]){//只要出现一次不相等，那么2个数组就不相等
                    return false;
                }
            }//for循环完成，没有出现不相等的情况，那么2个数组相等
            return true;
        }
    }
}

var s = ArrayIsEqual([1, '2', 3], [1, 2, 3]);
var t = ArrayIsEqual([1, 2, 4,3], [1, 2, 3,8,9]);

console.log(s);
console.log(t);

