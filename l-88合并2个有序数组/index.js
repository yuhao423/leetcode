/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1
    let len2 = n - 1;
    let len = m + n - 1;

    while(len2 >= 0){
        console.log(len,len1,len2,'yu');
        if(len1 < 0){
            nums1[len--] = nums2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]  //循环比较

        /**
         * 思想很巧妙啊
         * i++ 与 ++i 的区别 
         * 我的天，循环还是动态的，牛逼啊
         */
    }
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log('ssseeff'.split('e').join(''));
// console.log(merge([0],0,[1],3));


var remerge = function(nums1, m, nums2, n){


    
    let len1 = 0;
    let len2 = 0;
    let len = 0;

    while(len2 <= n - 1){


        if(len1 > m - 1){  //len1 > 2
            //就不需要继续走下面的了
            console.log(len,len2);
            nums1[len++] = nums2[len2++]
            continue;
        }
        nums1[len++] = nums1[len1] <= nums2[len2] ? nums1[len1++] : nums2[len2++];
        // console.log(len,len1,len2,  nums1,'3');
    }
    console.log(len,len1,len2,  nums1,'3');
}
// console.log(remerge([1,2,3,0,0,0],3,[2,5,6],3));  //有一点点的小问题
//1
//1 2 
//1 2 2 


const test = (nums1, m, nums2, n)=>{

    //使用双指针来解决这个问题
    let len1 = m - 1;  //nums1中 m 的索引
    let len2 = n - 1;  //nums2中 最后一个的索引
    let len = m + n - 1; // nums1中数组中最后一个的索引

    while(len2 >= 0){  //写whlie循环一定要考虑的是 什么条件能打破循环

        if(len1 < 0){
            //这时候无需再进行下面的比较了，因为 nums2 是有序的，直接插进入数组就行了
            nums1[len--] = nums2[len2--]
            continue;  //不是打破循环，打破循环用的是 break ，这里的 continue 是终止下面的语句，直接进行下一轮循环
        }

        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]  //依次确定最大的

    }
    console.log(nums1);
}   
console.log(test([1,2,3,0,0,0],3,[2,5,6],3));
