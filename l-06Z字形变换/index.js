



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
         * a   c    a     e     a       g
         * b   d    b  d        b    f  h
         *          c           c  e 
         *                      d   
         */                     

        for(let i = 0;i<s.length;i++){

            //random = 4
            const x = i % random    //numRows 是4，那么x为（0，1，2，3，4，5）,random 6
            console.log(x);
            let min = Math.min(x,random-x)  //确保每一项应该添加到的相应行,比如 numRows 是 4，x就会是（0，1，2，3，4，5）,random 6,保证 min 不超过3，即rows的索引
            console.log(min);
            rows[Math.min(x,random - x)] += s[i]
            console.log(rows);
        }
        return rows.join('')
    }
};
console.log(convert('sudguwefwefwe',4));