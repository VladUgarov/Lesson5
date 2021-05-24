class Stack {
    constructor(maxSize = 10) {

        if (typeof maxSize !== "number" || !isFinite(maxSize) || maxSize <= 0) {
            throw new Error("Введенное число невалидно")
        } else {
            this.maxSize = maxSize
            this.storage = []
            this.current = 0;
        }
    }
    push(elem){
        if(this.current >= this.maxSize){
            throw new Error("Cтек переполнен")
        }
        this.storage[this.current] = elem
        this.current++
    }
    pop(){
        if(this.current === 0){
            throw new Error("Стек пуст")
        }
        this.current--
        delete this.storage[this.current]
    }
    peek(){
        if(this.current === 0){
            return null
        }
        return this.storage[this.current-1]
    }
    isEmpty(){
        if(this.current ===0){
            return true
        }else{
            return false
        }
    }
    toArray(){
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
    static fromIterable(iterable) {

        if (iterable == null || typeof iterable[Symbol.iterator] !== "function") {
            throw new Error("Сущность не итерируемая");
        }
        let iterStack = new Stack(iterable.length)
        let iterator = [...iterable][Symbol.iterator]();

        while (true) {
            let iteratorValue = iterator.next();
            if (iteratorValue.done) break;
            iterStack.storage[iterStack.current] = iteratorValue.value;
            iterStack.current++
        }
        return iterStack;
    }
}
module.exports = { Stack };


