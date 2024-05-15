


//32位的整数反转

/**
 * 1. 首先，32 位有符号的整数的取值范围位[2^31,2^31-1]
 */


/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    //确定符号
    // let arr;
    // let binaryX = x.toString(2)  //转成2进制的啊
    // if(x>=0){
    //     arr = new Array(32).fill('').map(item=>item= 0)
    // }else{
    //     arr = new Array(32).fill('').map((item,index)=>{
    //          return index === 0 ? item = 1 : item = 0
           
    //     })
        
    // }
    // console.log(arr,'4r');
    // console.log(binaryX,'ese3');

    // //分割数组，splice slice
    // let len = binaryX.length - 1
    // let start = arr.length - 1
    // let needStr = binaryX.slice(1)
    // arr.splice(start,len,needStr)
    // console.log(arr,arr.length,'arr');


    //
    let MIN = - (2**32)
    let MAX = 2**32 - 1
    
    let y = Math.abs(parseInt((x.toString().split('').reverse().join(''))))
    if(x<0){
        y = - y
        console.log(y,MAX,MIN);
        if(y >MAX || y < MIN){
            console.log(y,MIN,MAX);
            return 0
        }else{
            return y;
        }
        return ( y >MAX || y < MIN ) ? 0 : y;
    }
};

console.log(reverse(-324));
