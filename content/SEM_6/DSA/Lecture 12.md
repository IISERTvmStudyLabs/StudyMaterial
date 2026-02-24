## Linked List Properties

### Doubly Linked List

In a doubly linked list:
- `next` points to successor
- `prev` points to the predecessor

### Special Cases

- If `prev = NIL`, the node is the **first element (head)**
- If `next = NIL`, the node is the **last element (tail)**
- The list maintains a pointer `L.head` to the first element
- If `L.head = NIL`, the list is empty

### Classification

Linked lists can be classified as:
- Singly linked / doubly linked
- Sorted / unsorted
- Linear / circular

### Circular Linked List

In a circular linked list:
- The `prev` of the head points to tail
- The `next` of the tail points to head

---

## Linked List - Definition

**Linearly ordered data structure** which contains many data types

- Node are connected by pointers
- Each node has two parts:
  - **data** - the actual value
  - **pointer/next** - a reference to the next node in the list

```
┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│data│next│───→│data│next│───→│data│NULL│
└────┴────┘    └────┴────┘    └────┴────┘
```

### Struct Node

```c
struct node {
    int data;
    struct node * ptr;
};
```

### Creating a New Node

```c
struct node *new_node
    = struct node + 
      malloc(sizeof(node))

if (new != NULL) {
    new->data = x;
    new->ptr = NULL;
}

return new;
```

### Key Properties

- A linked list is a **linear data structure** where elements are ordered using pointers, not array indices
- Unlike arrays, linked lists **do not require contiguous memory**
- Linked lists are well suited for **dynamic sets** where elements are frequently inserted and deleted

### Each Element (Node) Stores

- A key (data)
- A pointer to the next element
- In doubly linked lists, a pointer to the previous element
