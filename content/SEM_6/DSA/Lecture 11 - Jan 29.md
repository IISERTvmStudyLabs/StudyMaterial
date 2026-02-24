## Arrays vs Linked Lists

### Array Limitations

**int A[100]:** Array of size 100. If we want to add more than 100?

**int B[6(r)]:** Copy $A$ to $B$ → takes time

```
100  ┌──┐
     ├──┤    OS  ┌──┐ P ┌──┐ λ ┌──┐
     ├──┤        └──┘   └──┘   └──┘ ∞
     ├──┤           Memory    Can't declare
     ├──┤                     Array of 100
     └──┘
```

### Linked List

**Linked List:**

```
     ┌──┬─┐      ┌──┬─┐      ┌──┬─┐      ┌──┬─┐
head │8 │─┼──→   │20│─┼──→   │30│X│──→   │40│K│
node └──┴─┘      └──┴─┘      └──┴─┘      └──┴─┘
                              null pointer
```

**Insert 35:**

```
┌──┬─┐      ┌──┬─┐      ┌──┬─┐           ┌──┬─┐
│8 │─┼──→   │30│─┼──→   │8 │─┼───────→   │40│X│
└──┴─┘      └──┴─┘      └──┴─┘           └──┴─┘
                           ↓
                        ┌──┬─┐
                        │5 │ │
                        └──┴─┘
```

**Insert 100 after 10:**

```
┌──┬─┐      ┌──┬─┐      ┌──┬─┐           ┌──┬─┐
│8 │─┼──→   │80│─┼──→   │5 │─┼───────→   │100│?│
└──┴─┘      └──┴─┘      └──┴─┘           └──┴─┘
```

### Struct Node Definition

```c
struct node {
    int rollno
    arr name[20]
    int marks
    int(*x) *Next
}
```

### Create Node Function

**Create_node C mb:**

```c
2 struct node *C
C->data data
c->next = NULL
```

### Next Node Guess

**3rd Feb**

Topics: Recursion, Big O, Sorting
