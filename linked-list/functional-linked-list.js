function LinkedList() {
    let length = 0;
    let head = null;

    function Node(element) {
        this.element = element;
        this.next = null;
    }

    this.head = function () {
        return head;
    };

    this.length = function () {
        return length;
    };

    this.add = function (element) {
        let newNode = new Node(element);
        if (head === null) {
            head = newNode;
        } else {
            let cur = head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        length++;
    };

    this.remove = function (element) {
        if (!head) {
            return "The list is empty! Nothing to remove!";
        } else {
            let cur = head;
            if (cur.element === element) {
                head = cur.next;
                length--;
                return head;
            } else {
                while (cur.next) {
                    if (cur.next.element === element) {
                        cur.next = cur.next.next;
                        length--;
                        return head;
                    }
                    cur = cur.next;
                }
            }
        }
    };

    this.find = function (element) {
        let cur = head;
        let position = 1;
        if (!head) {
            return "The list is empty! Nothing to find!";
        } else {
            if (cur.element === element) {
                return position;
            } else {
                while (cur.element !== element) {
                    cur = cur.next;
                    position++;
                }
                if (cur.element === element) {
                    return position;
                } else {
                    return -1;
                }
            }
        }
    };
}

let newLinkedList = new LinkedList();
newLinkedList.add(1);
newLinkedList.add(2);
newLinkedList.add(3);
newLinkedList.add(4);
newLinkedList.remove(4);
console.log(newLinkedList.length());
console.log(newLinkedList.find(1));
