## Linked List - Definition

A **linked list** is a linear data structure where elements are stored in nodes. Unlike arrays:
- Elements are **not stored in contiguous memory locations**
- Each element points to the next element using pointers
- Ideal for **dynamic sets** with frequent insertions and deletions

---

## Basic Structure

### Node Components

Each node in a linked list contains:
1. **Data:** The actual value stored
2. **Pointer(s):** Reference to the next node (and previous node in doubly linked lists)

**Singly Linked List:**
```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│data│next│───→│data│next│───→│data│next│───→│data│NULL│
└────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘
```

---

## Types of Linked Lists

### 1. Singly Linked List

Each node has:
- One data field
- One `next` pointer (to successor)

**Structure in C:**
```c
struct node {
    int data;           // Data field
    struct node *next;  // Pointer to next node
};
```

### 2. Doubly Linked List

Each node has:
- One data field
- Two pointers: `next` (successor) and `prev` (predecessor)

**Structure in C:**
```c
struct node {
    int data;           // Data field
    struct node *prev;  // Pointer to previous node
    struct node *next;  // Pointer to next node
};
```

**Visualization:**
```
head                                                     tail
 │                                                        │
 ▼                                                        ▼
┌────┬────┬────┐    ┌────┬────┬────┐    ┌────┬────┬────┐
│NULL│data│next│⇄   │prev│data│next│⇄   │prev│data│NULL│
└────┴────┴────┘    └────┴────┴────┘    └────┴────┴────┘
```

**Special Cases:**
- If `prev = NULL` → node is the **head** (first element)
- If `next = NULL` → node is the **tail** (last element)
- If `L.head = NULL` → list is **empty**

### 3. Circular Linked List

In a circular linked list:
- The `next` pointer of the **tail** points back to the **head**
- In doubly circular lists, the `prev` pointer of the **head** points to the **tail**

**Singly Circular:**
```
        ┌────────────────────────────────────┐
        │                                    │
        ▼                                    │
     ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
head │data│next│───→│data│next│───→│data│next│
     └────┴────┘    └────┴────┘    └────┴────┘
```

**Doubly Circular:**
```
     ┌──────────────────────────────────────────┐
     │                                          │
     │    ┌────┬────┬────┐    ┌────┬────┬────┐  │
     └──→ │prev│data│next│⇄   │prev│data│next│ ─┘
          └────┴────┴────┘    └────┴────┴────┘
```

---

## Classification

Linked lists can be classified by:

| Criterion | Types |
|-----------|-------|
| **Direction** | Singly linked, Doubly linked |
| **Order** | Sorted, Unsorted |
| **Structure** | Linear, Circular |

---

## Implementation in C

### Node Structure

```c
struct node {
    int data;           // Data field (can be any data type)
    struct node *next;  // Pointer to next node
};
```

---

### Creating a New Node

**Function to create and initialize a node:**

```c
struct node* createNode(int value) {
    // Allocate memory for new node
    struct node *newNode = (struct node*)malloc(sizeof(struct node));
    
    // Check if memory allocation was successful
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        return NULL;
    }
    
    // Initialize the node
    newNode->data = value;
    newNode->next = NULL;
    
    return newNode;
}
```

**Explanation:**
1. `malloc(sizeof(struct node))` - Allocates memory for one node
2. Type cast to `(struct node*)` - Converts void pointer to node pointer
3. Check for `NULL` - Memory allocation can fail if no memory available
4. Initialize `data` with the value
5. Set `next` to `NULL` - Node initially points to nothing
6. Return pointer to the new node

---

## Advantages of Linked Lists

✓ **Dynamic Size:** Can grow or shrink at runtime  
✓ **Efficient Insertions/Deletions:** $O(1)$ at the beginning  
✓ **No Contiguous Memory Required:** Nodes can be scattered in memory  
✓ **No Memory Waste:** Allocate only what you need  

---

## Disadvantages of Linked Lists

✗ **No Random Access:** Must traverse from head to access elements - $O(n)$  
✗ **Extra Memory:** Each node requires additional space for pointer(s)  
✗ **Not Cache Friendly:** Nodes scattered in memory hurt cache performance  
✗ **Cannot Traverse Backwards:** (in singly linked lists)  

---

## Key Takeaways

1. Linked lists provide **dynamic memory allocation**
2. Each node contains **data** and **pointer(s)** to other nodes
3. **Doubly linked lists** allow bidirectional traversal
4. **Circular linked lists** have no NULL endpoints - last node points to first
5. Trade-off: **Flexible insertions/deletions** vs **slower random access**
