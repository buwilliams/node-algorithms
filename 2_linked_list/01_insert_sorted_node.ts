import test from '../test';

interface ItemInterface {
    data: number;
    next: Item | null;
}

class Item implements ItemInterface {
    data: number;
    next: Item | null;

    constructor(val: number) {
        this.data = val;
        this.next = null;
    }
}

function sortedInsert(newItem: Item) {
    if(head == null || head.data > newItem.data) {
        newItem.next = head;
        head = newItem;
    } else {
        let current: Item = head;

        while(current.next != null && current.next.data < newItem.data)
            current = current.next;

        newItem.next = current.next;
        current.next = newItem;
    }
}

function traverseLinkedList(current: Item | null) {
    let data = []
    while (current != null) {
        data.push(current.data)
        current = current.next;
    }
    return data;
}

let head:Item | null = null;

test([
    {
        input: null,
        expected: [1, 2, 3, 4, 5],
        fn: () => {
            head = null;
            sortedInsert(new Item(3));
            sortedInsert(new Item(5));
            sortedInsert(new Item(1));
            sortedInsert(new Item(2));
            sortedInsert(new Item(4));
            return traverseLinkedList(head)
        }
    },
    {
        input: null,
        expected: [1, 2, 3],
        fn: () => {
            head = null;
            sortedInsert(new Item(3));
            sortedInsert(new Item(2));
            sortedInsert(new Item(1));
            return traverseLinkedList(head)
        }
    },
    {
        input: null,
        expected: [1],
        fn: () => {
            head = null;
            sortedInsert(new Item(1));
            return traverseLinkedList(head)
        }
    }
])