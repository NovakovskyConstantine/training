export class LinkedListClass {
    length;
    first;

    constructor() {
        this.length = 0;
    }

    add(value) {
        const node = {
            value,
            index: this.length,
        }
        if (this.first) {
            node.next = this.first;
        }
        
        this.first = node;
        this.length++;
    }

    search(value) {
        let node = this.first;
        for (let i = 0; i < this.length; i++) {
            node;
            if (node.value === value) {
                return node;
            }
        }
    }

    delete(value) {
        let node = this.first, prev;
        for (let i = 0; i < this.length; i++) {
            node;
            debugger
            if (node.next.value === value) {
                prev = node;
                if (node.next.next) {
                    prev.next = node.next.next;
                } else {
                    delete prev.next;
                }
                this.length--;
                break;
            }
        }
    }
}

module.exports = LinkedListClass;