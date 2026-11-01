## Arrays vs Linked Lists

### Array Limitations

Arrays have fixed size which creates several problems:

1. **Fixed Size:** `int A[100]` - What if we need to store more than 100 elements?
2. **Resizing is Expensive:** To create a larger array `int B[150]`, we must:
   - Allocate new memory for B
   - Copy all elements from A to B (takes $O(n)$ time)
   - Delete the old array A
3. **Memory Waste:** If we only use 50 elements, 50 spaces are wasted
4. **Contiguous Memory Required:** Need a continuous block of memory, which may not be available

#### Array vs Linked List Comparison

| Feature | Array | Linked List |
|---------|-------|-------------|
| Size | Fixed | Dynamic |
| Memory Allocation | Contiguous | Non-contiguous |
| Access Time | $O(1)$ | $O(n)$ |
| Insertion (at end) | $O(1)$ | $O(n)$ to traverse |
| Insertion (at beginning) | $O(n)$ | $O(1)$ |
| Memory Overhead | None | Extra space for pointers |

---

## Linked List

A linked list is a linear data structure where elements (nodes) are stored in non-contiguous memory locations. Each node contains:
- **Data:** The value stored
- **Pointer:** Reference to the next node

---

### Structure of a Linked List

**Basic Linked List:**

```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│ 8  │  ●─┼───→│ 20 │  ●─┼───→│ 30 │  ●─┼───→│ 40 │  X │
└────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘
 data  next     data  next     data  next     data  NULL
```

- Each box represents a **node**
- Left part: **data** field
- Right part: **next** pointer (● = pointer, X = NULL)
- **head**: Pointer to the first node
- Last node's next pointer is **NULL**

---

### Insertion Operations

#### Example 1: Insert 35 between 30 and 40

**Before:**
```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│ 8  │  ●─┼───→│ 20 │  ●─┼───→│ 30 │  ●─┼───→│ 40 │  X │
└────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘
```

**After:**
```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│ 8  │  ●─┼───→│ 20 │  ●─┼───→│ 30 │  ●─┼───→│ 35 │  ●─┼───→│ 40 │  X │
└────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘
```

**Steps:**
1. Create new node with data = 35
2. Set new node's next = node with 30's next (points to 40)
3. Set node with 30's next = new node

#### Example 2: Insert 100 at the beginning

**Before:**
```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│ 8  │  ●─┼───→│ 20 │  ●─┼───→│ 30 │  X │
└────┴────┘    └────┴────┘    └────┴────┘
```

**After:**
```
head
 │
 ▼
┌────┬────┐    ┌────┬────┐    ┌────┬────┐    ┌────┬────┐
│100 │  ●─┼───→│ 8  │  ●─┼───→│ 20 │  ●─┼───→│ 30 │  X │
└────┴────┘    └────┴────┘    └────┴────┘    └────┴────┘
```

**Steps:**
1. Create new node with data = 100
2. Set new node's next = head (points to first node)
3. Update head = new node

---

## Implementation in C

### Node Structure Definition

```c
struct node {
    int data;              // Data field (can be any type)
    struct node *next;     // Pointer to next node
};
```

**Example with multiple fields:**
```c
struct student_node {
    int rollno;
    char name[20];
    int marks;
    struct student_node *next;
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

---

### Basic Operations

#### 1. Insert at Beginning

```c
struct node* insertAtBeginning(struct node *head, int value) {
    struct node *newNode = createNode(value);
    newNode->next = head;  // New node points to current head
    head = newNode;         // Update head to new node
    return head;
}
```

**Time Complexity:** $O(1)$

#### 2. Insert at End

```c
struct node* insertAtEnd(struct node *head, int value) {
    struct node *newNode = createNode(value);
    
    if (head == NULL) {
        return newNode;  // If list is empty, new node is the head
    }
    
    struct node *temp = head;
    while (temp->next != NULL) {  // Traverse to last node
        temp = temp->next;
    }
    temp->next = newNode;  // Link last node to new node
    
    return head;
}
```

**Time Complexity:** $O(n)$

#### 3. Delete a Node

```c
struct node* deleteNode(struct node *head, int value) {
    if (head == NULL) return NULL;
    
    // If head node holds the value to be deleted
    if (head->data == value) {
        struct node *temp = head;
        head = head->next;
        free(temp);
        return head;
    }
    
    // Search for the node to be deleted
    struct node *temp = head;
    while (temp->next != NULL && temp->next->data != value) {
        temp = temp->next;
    }
    
    // If value was found
    if (temp->next != NULL) {
        struct node *toDelete = temp->next;
        temp->next = temp->next->next;
        free(toDelete);
    }
    
    return head;
}
```

**Time Complexity:** $O(n)$

---

### Complexity Summary

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | $O(1)$ | $O(n)$ |
| Search | $O(n)$ | $O(n)$ |
| Insert at beginning | $O(n)$ | $O(1)$ |
| Insert at end | $O(1)$ | $O(n)$ |
| Delete at beginning | $O(n)$ | $O(1)$ |
| Delete at end | $O(1)$ | $O(n)$ |

---

## Key Takeaways

- **Linked Lists** provide dynamic memory allocation
- **No need for contiguous memory** - nodes can be scattered in memory
- **Efficient insertions/deletions** at the beginning
- **No wasted space** - allocate only what you need
- **Trade-off:** Slower random access compared to arrays
