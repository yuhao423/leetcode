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


    //按
    let len1 = 0 ;
    let 


}
