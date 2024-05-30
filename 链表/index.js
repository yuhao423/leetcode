

class Node {

    constructor(data,next){
        this.data = data ? data : null
        this.next = next ? next : null
    }
}


class NodeList {

    constructor(){
        this.head = null
    }


    //加到链表的最后一个
    append(data){

        if(!this.head){
            this.head = new Node(data)
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = new Node(data)
        }
    }

    //加到最前面一个
    shift(data){
        if(!this.head){
            this.head = new Node(data)
            return 
        }
       let newNode = new Node(data,this.head)
       this.head = newNode
    }


    //增加到指定的位置中
    insert(position,data){
        
        if(position === 0){
            this.shift(data)
            return
        }
        if(position < 0 ){
            return null
        }
        let current = this.head 
        let precious = null
        let index = 0;

        while(current && index < position){
            precious = current
            current = current.next
            index++;
        }

        if(precious){
            //有值的
            let newNode = new Node(data,current)
            precious.next = newNode
        }else{
            // this.append(data)
            //这里就是没有值了，就是 position 太长了，是边界条件，直接返回 null
            return null
        }
    }

    //删除某一个节点
    remove(node){
        let current = this.head
        if(!this.head){
            return null
        }

        let precious = this.head
       
        while(current){

            if(current.data === node){
                current = current.next
                precious.next = current
            }else{
                precious = current
                current = current.next
            }
        }
    }


    //查找某一个节点的值
    search(data){
        let current = this.head
        if(!current) return false

        while(current){
            if(current.data === data){
                return true
            }
            current =current.next
        }
        return false
    }


    log(){
        ///工资太低了，养活不起人
        let current = this.head
        let out = ''
        //不清楚就举例
        // head -> 3->null
        console.log(current,'current');
        while(current){
            out  =  out + current.data + '->'
            current = current.next
        }
            out = out + null
        console.log(out);
    }


}

const l1 = new NodeList()
l1.append('ss')
l1.append('bb')
console.log(l1);
l1.log()

//shift
l1.shift('yu')
l1.log()

l1.insert(99,'lyyss')
l1.log()




const requestList = []

for(let i = 0;i<100;i++){
    requestList.push(
        ()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                   
                    if(i === 58){
                        reject(new Error('出错了呢',i))
                    }else{
                        resolve(i)
                    }
                }, 1000 * Math.random());
            })
        }
    )
}

const parallelRun = async max => {
    const requestSliceList = [];
    //一组一组的来的
    for (let i = 0; i < requestList.length; i += max) {
      requestSliceList.push(requestList.slice(i, i + max));
    }
  
    for (let i = 0; i < requestSliceList.length; i++) {
      const group = requestSliceList[i];
      try {
        const res = await Promise.all(group.map(fn => fn()));
        console.log('接口返回值为：', res);
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  parallelRun(5)
