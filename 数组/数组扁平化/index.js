


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


//编写⼀个函数计算多个数组的交集
const jiaojiByManyArr = (...array)=>{

    if(array.length === 0){
        return []
    }
    if(array.length === 1){
        return array[0]
    }
    //还是需要包一层的，因为 pre 可能会有重复的，需要去重
    return new Set(...[array.reduce((pre,cur)=>{
        return pre.filter((item,_)=>cur.includes(item))
    })])
}