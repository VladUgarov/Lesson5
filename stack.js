class Stack{
    constructor(maxSize) {
        this.maxSize = maxSize
        if(this.maxSize === undefined){
            this.maxSize = 10
            this.storage = new Array(this.maxSize);

        }

        else if(typeof this.maxSize !== "number" ||  !isFinite(this.maxSize)){
            throw new Error("Введенное число невалидно")
        }
        else{
            this.maxSize = maxSize
            this.storage = new Array(this.maxSize)
        }
        this.current = 0;

    }

    [Symbol.iterator]() {
        this.current = this.from
        return this
    }
    next(){

    }

    push = (elem) => {
        if(this.current >= this.maxSize){
            throw new Error("Cтек переполнен")
        }
        this.storage[this.current] = elem
        this.current++
    }
    pop = () => {
        if(this.current === 0){
            throw new Error("Стек пуст")
        }
        this.current--
        delete this.storage[this.current]
    }
    peek = () => {
        if(this.current === 0){
            return null
        }
        return this.storage[this.current-1]
    }
    isEmpty = () => {
        if(this.current ===0){
            return true
        }else{
            return false
        }
    }
    toArray = () => {
        let array = []
        while (this.current >0) {
            array.push(this.peek())
            this.pop()
        }
        array.reverse()
        for (let i = 0; i < array.length; i++){
            this.push(array[i])
        }
        return array
    }
     fromIterable(iterable){
        let iterStackCurrent = this.current
        let arr =  iterable.toArray()
        let iterStack = new Stack(iterStackCurrent)
         for (let i = 0; i < iterStackCurrent; i++){
             iterStack.push(arr[i])
         }
         iterStack.current = this.current
        return iterStack
    }
}

module.exports = { Stack };
