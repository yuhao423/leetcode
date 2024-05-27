


/**
     *  已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
        编写⼀个程序将数组扁平化去并除其中᯿复部分数据，最终得到⼀个升序且不᯿复的数组
 */



        const flatDeepArr = (array)=>array.flat(Infinity)  //node 12 以上可用

        const sortArr = (array)=>array.sort((a,b)=>a-b) //升序排序

        const filterArr = (array)=>Array.from(new Set(array)) // es6 可用


        const compose = (...funcs)=>{
            return funcs.reduce((pre,cur)=>{
                return (...args)=>{
                    return pre((cur(args)))
                }
            })
        }   

        compose(sortArr,filterArr,flatDeepArr)
//循环
//loop1 : pre：sortArr函数 cur: filterArr函数  return: return1 = (...args)=>sortArr(filerArr(...args))

//loop2 :  pre: return1 cur: flatDeepArr函数  return: (...args)=>return1(flatDeepArr(...args)),即(...args)=>sortArr(filterArr(flatDeepArr(...args)))


        compose(sortArr,filterArr,filterArr)([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10])
