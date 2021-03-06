class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
// Creating a new node object with the value provided
        let new_node = new Node(val);
// Checking to see if the current list does not have a head node (if the list is empty)
// If the list is empty, place the new node as the head 
        if(!this.head) {
            this.head = new_node;
            return this;
        }
// If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
        new_node.next = this.head;
// Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
        this.head = new_node;
        return this;
    }

    removeFront(){
        if(!this.head){
            return null;
        }
        this.head = this.head.next;
    }

    front(){
        if(!this.head){
            return null;
        }
        let val = this.head.data;
        return val;
    }

    findSum() {
        let runner=this.head
        let sum=0
        while(runner !== null){
            sum+=runner.data
            runner=runner.next
        }
        return sum
    }

    contains(value) {
        let runner=this.head
        while(runner !== null){
            if(runner.data == value){
                return true;
            }
            runner=runner.next
        }
        return false;
    }

    length() {
        let runner = this.head
        let sum = 0
        while(runner!==null){
            sum+=1
            runner=runner.next
        }
        return sum;
    }
}
SLL1 = new LinkedList()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
console.log(SLL1)
console.log(SLL1.contains(5))
console.log(SLL1.length())
SLL1.removeFront()
console.log(SLL1.length())
SLL1.removeFront()
console.log(SLL1.length())
console.log(SLL1)
console.log(SLL1.front())
console.log(SLL1.removeFront())
console.log(SLL1.front())
console.log(SLL1.contains(5))