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
        let stackLength = this.current
        while (stackLength >0){
            array.unshift(this.storage[stackLength-1])
            stackLength--
        }

        return array
    }

}

let stack = new Stack(3)
stack.push(2)
stack.push(3)



module.exports = {Stack}