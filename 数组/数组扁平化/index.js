


//1.实现 flatDeep 函数
function flatDeepArr (array){

    return Array.isArray(array) ? array.reduce(
        (pre,cur)=>{
            return [...pre,...flatDeepArr(cur)]
        },[]
    ) : [array]
}

//2. 实现 flat 函数
const myFlat = (array,depth = 1)=>{


   return depth > 0 ?

    array.reduce((pre,cur)=>{
        if(Array.isArray(cur)){
            return [...pre,myFlat(cur,depth - 1)]
        }else{
            //都不是数组了
            return [...pre,cur]
        }
    },[])
    :
    array

}

//函数组合
const compose = (...funcs)=>{

    if(funcs.length === 0){
        return (...args)=>args
    }
    if(funcs.length === 1){
        return funcs[0]
    }

    return funcs.reduce((pre,cur)=>{
        return (...args)=>{
            return pre((cur(...args)))
        }
    })
}