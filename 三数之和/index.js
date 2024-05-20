



/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

    你返回所有和为 0 且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

    注意：：一般不包含重复的数组可以用set ，或者是用 sort 对数组进行排序！
 */

    /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumByFirstType = function(nums) {  //有问题的，存在重复

   let map = new Map()
   let res = []

   for(let i = 0;i<nums.length - 2 ; i++) {

    let first = nums[i]

        //固定第一个数，剩下就是两数之和的事情了
        for(let j = i + 1;j<nums.length;j++){
            //第三个数
            let three = 0 - first - nums[j]
            if(map.has(three)){
                res.push([first,nums[j],three])
            }

            map.set(nums[j],j)
        }
        map.clear()
   }

};

const  threeSumByTwoType = (nums)=>{
    //实现的暂时有问题

    let set = new Set()  //用set 比 map 更加节省内存
    nums.sort((a,b)=>a-b)
    let res =[]

    for(let i = 0;i<nums.length -2 ; i++){
        if(nums[i] === nums[i-1]){
            i++;
            continue;
        }
        let one = nums[i]
        let j = i + 1

        while(j<nums.length){

            let two = nums[j]
            let three = 0 - one - two

            if(nums[j] === nums[j-1]){
                j++ //再次
                continue;
            }
            if(set.has(three)){
                res.push([one.two,three])
            }

            j++;
            set.add(two)
        }
        set = new Set()
    }
    return res
}

const threeSumByThreeType = (nums)=>{

    /**
     * 1. 总体思路就是先固定一个数，再定义2个指针，一个是固定数的后一个，一个是数组的最后一个
     * 2. 对数组进行排序后进行循环
     */

    //排序 + 双指针 

    //1.首先进行一些边界条件的判断
    if(nums && nums.length < 3) {
        return []
    }

    //2.定义指针等
    let res = []
    let two,last
    nums.sort((a,b)=>a-b) //排序，从小到大进行排序

    //3.循环整个数组
    for(let i = 0;i<nums.length;i++){
        if(nums[i] > 0 ) break;  //都是大于0的，还比较什么，直接break跳出循环

        if(i>0 && nums[i] === nums[i-1]) continue;  //这一项的和前一项的都是一样的，重复了，比较的没有意义,跳出这次循环，进入下一次循环

        two = i + 1
        last = nums.length -1

        //循环
        while(two < last){  //需要思考，打破循环的条件是什么
            const num = nums[i] + nums[two] + nums[last]

            if(num === 0){
                res.push([nums[i],nums[two],nums[last]])

                //还是要除掉重复的，这是用 while ,而不是用 if ,是有原因的,while来循环去除重复的项
                while(last > two && nums[two] === nums[two + 1]) two++  //这段代码的意思是这个指针 是不是和 后一个数组的值是否一样，一样的话就前进一个指针，从而去掉重复的来符合题意
                while(last > two && nums[last] === nums[last - 1]) last--
                
                //找到了，指针都移动
                two++
                last--

            }else if(num > 0){
                last--
            }else if(num < 0){
                two--
            }
        }


    }
    return res
}