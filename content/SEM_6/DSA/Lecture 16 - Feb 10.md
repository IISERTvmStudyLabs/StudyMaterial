## Stack

A **stack** is a linear data structure that follows a specific order for operations.

### Characteristics

- **LIFO (Last In First Out):** The last element added is the first one removed
- **FILO (First In Last Out):** The first element added is the last one removed
- Both terms describe the same behavior from different perspectives

**Visual Representation:**
```
    Top
     ↓
   ┌───┐
   │ 5 │ ← Last pushed (will be first popped)
   ├───┤
   │ 3 │
   ├───┤
   │ 7 │
   ├───┤
   │ 2 │ ← First pushed (will be last popped)
   └───┘
```

---

## Stack Operations

### Basic Operations

1. **Push:** Add an element to the top of the stack
2. **Pop:** Remove and return the top element
3. **Peek (or Top):** View the top element without removing it
4. **isEmpty:** Check if the stack is empty
5. **isFull:** Check if the stack is full (for fixed-size arrays)

---

## Implementation (Array-Based)

### Stack Structure

```c
#define MAX_SIZE 100

struct Stack {
    int arr[MAX_SIZE];
    int top;           // Index of top element
};
```

**Convention:** 
- `top = -1` indicates an empty stack
- `top = MAX_SIZE - 1` indicates a full stack

---

### 1. Initialize Stack

```c
void initStack(struct Stack *S) {
    S->top = -1;      // Stack is initially empty
}
```

---

### 2. Check if Stack is Empty

```c
bool isEmpty(struct Stack *S) {
    return (S->top == -1);
}
```

**Time Complexity:** $O(1)$

---

### 3. Check if Stack is Full

```c
bool isFull(struct Stack *S) {
    return (S->top == MAX_SIZE - 1);
}
```

**Time Complexity:** $O(1)$

---

### 4. Push Operation

**Algorithm:**

```pseudocode
Push(S, x):
    if top >= MAX_SIZE - 1:
        print "Stack Overflow"
        return
    else:
        top = top + 1
        S[top] = x
```

**Implementation in C:**

```c
void push(struct Stack *S, int x) {
    if (isFull(S)) {
        printf("Stack Overflow: Cannot push %d\n", x);
        return;
    }
    S->top = S->top + 1;
    S->arr[S->top] = x;
}
```

**Time Complexity:** $O(1)$

**Example:**
```
Before: top = 2          After: top = 3
   ┌───┐                    ┌───┐
   │ 5 │ ← top              │ 9 │ ← top (new element)
   ├───┤                    ├───┤
   │ 3 │                    │ 5 │
   ├───┤                    ├───┤
   │ 7 │                    │ 3 │
   └───┘                    ├───┤
                            │ 7 │
                            └───┘
   Push(S, 9)
```

---

### 5. Pop Operation

**Algorithm:**

```pseudocode
Pop(S):
    if top == -1:
        print "Stack Underflow"
        return NULL
    else:
        x = S[top]
        top = top - 1
        return x
```

**Implementation in C:**

```c
int pop(struct Stack *S) {
    if (isEmpty(S)) {
        printf("Stack Underflow: Cannot pop from empty stack\n");
        return -1;  // Error value
    }
    int x = S->arr[S->top];
    S->top = S->top - 1;
    return x;
}
```

**Time Complexity:** $O(1)$

**Example:**
```
Before: top = 3          After: top = 2
   ┌───┐                    ┌───┐
   │ 9 │ ← top (removed)    │ 5 │ ← top
   ├───┤                    ├───┤
   │ 5 │                    │ 3 │
   ├───┤                    ├───┤
   │ 3 │                    │ 7 │
   ├───┤                    └───┘
   │ 7 │
   └───┘
   x = Pop(S)  // x = 9
```

---

### 6. Peek Operation

**Algorithm:**

```pseudocode
Peek(S):
    if top == -1:
        print "Stack is empty"
        return NULL
    else:
        return S[top]
```

**Implementation in C:**

```c
int peek(struct Stack *S) {
    if (isEmpty(S)) {
        printf("Stack is empty\n");
        return -1;  // Error value
    }
    return S->arr[S->top];
}
```

**Time Complexity:** $O(1)$

---

## Applications of Stack

### 1. Expression Evaluation

Stacks are used to convert and evaluate expressions:
- **Infix:** `A + B` (operator between operands)
- **Prefix:** `+ A B` (operator before operands)
- **Postfix:** `A B +` (operator after operands)

### 2. Function Call Management

- Function calls are stored in a call stack
- Local variables and return addresses are pushed/popped

### 3. Undo/Redo Operations

- Text editors use stacks to track changes

### 4. Backtracking

- Maze solving, game moves, etc.

### 5. Parenthesis Matching

- Check balanced brackets: `{[()]}` ✓ vs `{[(])}` ✗

---

## Complexity Summary

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Push | $O(1)$ | $O(1)$ |
| Pop | $O(1)$ | $O(1)$ |
| Peek | $O(1)$ | $O(1)$ |
| isEmpty | $O(1)$ | $O(1)$ |
| isFull | $O(1)$ | $O(1)$ |

**Overall Space:** $O(n)$ where $n$ is the maximum stack size

---

## Key Takeaways

- Stack follows **LIFO/FILO** principle
- All basic operations are $O(1)$
- **Stack Overflow:** Trying to push onto a full stack
- **Stack Underflow:** Trying to pop from an empty stack
- Stacks are fundamental for recursion, expression evaluation, and backtracking
