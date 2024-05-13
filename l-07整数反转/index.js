


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
    let arr;
    let binaryX = x.toString(2)
    if(Number(binaryX)>=0){
        arr = new Array(32).fill('').map(item=>item= 0)
    }else{
        arr = new Array(32).fill('').map((item,index)=>{
             return index === 0 ? item = 1 : item = 0
           
        })
        
    }
    console.log(arr,'4r');
    console.log(binaryX,'e');

};

reverse('-332424')
