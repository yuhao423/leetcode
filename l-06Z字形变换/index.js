



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    if(!s || !numRows) return 
    
    let len = s.length

    if(len<=numRows || numRows === 1){
        return s
    }else{

    let lie = len / numRows
    let random = 2 * numRows - 2
    let rows = new Array(numRows).fill('')  //申请一个长度为 numRows 的快数组，里面每一项按索引成为每一行的数据
        /**  2         3            4
         * a   c    a     e     a
         * b   d    b  d    
         *          c
         */         

        for(let i = 0;i<s.length;i++){

            //random = 4
            const x = i % random
            let min = Math.min(x,random-x)  //确保每一项应该添加到的相应行
            console.log(min);
            rows[Math.min(x,random - x)] += s[i]
            console.log(rows);
        }
    }
};
convert('sudguwef',3)