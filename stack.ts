export class Stack <T> {
    container : T[]=[];
    constructor() {
    }
    push(data : T){
        return this.container.push(data)
    }
    pop(){
        return this.container.pop()
    }
    size(){
        return this.container.length
    }
}