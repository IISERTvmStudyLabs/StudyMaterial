## Infix to Postfix Conversion

### Expression Notations

**Infix:** Operator is between operands → `A + B`  
**Prefix:** Operator is before operands → `+ A B`  
**Postfix:** Operator is after operands → `A B +`

**Why Convert?**
- Postfix expressions don't need parentheses
- Easier to evaluate using a stack
- No operator precedence concerns

---

## Operator Precedence and Associativity

| Operator | Precedence | Associativity |
|----------|-----------|---------------|
| `^` (exponent) | Highest (3) | Right to Left |
| `*`, `/`, `%` | Medium (2) | Left to Right |
| `+`, `-` | Lowest (1) | Left to Right |
| `(`, `)` | N/A | N/A |

---

## Algorithm: Infix to Postfix

**Input:** Infix expression `E`  
**Output:** Postfix expression `P`

**Algorithm:**

```pseudocode
1:  Initialize empty stack S
2:  Initialize empty output string P
3:  for each token x in E (left to right):
4:      if x is an operand (letter/number):
5:          Append x to P
6:      else if x is '(':
7:          Push x onto S
8:      else if x is ')':
9:          while top of S is not '(':
10:             Append pop(S) to P
11:         end while
12:         Pop '(' from S (discard it)
13:     else if x is an operator:
14:         while S is not empty AND top(S) is not '(' AND
15:               precedence(top(S)) >= precedence(x):
16:             Append pop(S) to P
17:         end while
18:         Push x onto S
19:     end if
20: end for
21: while S is not empty:
22:     Append pop(S) to P
23: end while
24: return P
```

**Time Complexity:** $O(n)$ where $n$ is the length of the expression  
**Space Complexity:** $O(n)$ for the stack

---

## Example 1: Simple Expression

**Infix:** `A + B * C`

| Step | Token | Stack | Postfix Output | Action |
|------|-------|-------|----------------|--------|
| 1 | `A` | `[]` | `A` | Operand → add to output |
| 2 | `+` | `[+]` | `A` | Operator → push to stack |
| 3 | `B` | `[+]` | `AB` | Operand → add to output |
| 4 | `*` | `[+, *]` | `AB` | `*` has higher precedence → push |
| 5 | `C` | `[+, *]` | `ABC` | Operand → add to output |
| 6 | (end) | `[+]` | `ABC*` | Pop `*` to output |
| 7 | (end) | `[]` | `ABC*+` | Pop `+` to output |

**Postfix:** `ABC*+`

**Verification:** 
- `ABC*+` means: multiply B and C, then add A
- Same as `A + (B * C)` ✓

---

## Example 2: Expression with Parentheses

**Infix:** `(A + B) * C`

| Step | Token | Stack | Postfix Output | Action |
|------|-------|-------|----------------|--------|
| 1 | `(` | `[(]` | `` | Push `(` |
| 2 | `A` | `[(]` | `A` | Operand → add to output |
| 3 | `+` | `[(, +]` | `A` | Operator → push |
| 4 | `B` | `[(, +]` | `AB` | Operand → add to output |
| 5 | `)` | `[]` | `AB+` | Pop until `(`, discard `(` |
| 6 | `*` | `[*]` | `AB+` | Operator → push |
| 7 | `C` | `[*]` | `AB+C` | Operand → add to output |
| 8 | (end) | `[]` | `AB+C*` | Pop `*` to output |

**Postfix:** `AB+C*`

**Verification:** 
- `AB+C*` means: add A and B, then multiply by C
- Same as `(A + B) * C` ✓

---

## Example 3: Complex Expression

**Infix:** `A - B * (C - D + E) + F`

**Step-by-Step:**

| Step | Token | Stack | Postfix Output |
|------|-------|-------|----------------|
| 1 | `A` | `[]` | `A` |
| 2 | `-` | `[-]` | `A` |
| 3 | `B` | `[-]` | `AB` |
| 4 | `*` | `[-, *]` | `AB` |
| 5 | `(` | `[-, *, (]` | `AB` |
| 6 | `C` | `[-, *, (]` | `ABC` |
| 7 | `-` | `[-, *, (, -]` | `ABC` |
| 8 | `D` | `[-, *, (, -]` | `ABCD` |
| 9 | `+` | `[-, *, (, +]` | `ABCD-` |
| 10 | `E` | `[-, *, (, +]` | `ABCD-E` |
| 11 | `)` | `[-, *]` | `ABCD-E+` |
| 12 | `+` | `[+]` | `ABCD-E+*-` |
| 13 | `F` | `[+]` | `ABCD-E+*-F` |
| 14 | (end) | `[]` | `ABCD-E+*-F+` |

**Postfix:** `ABCD-E+*-F+`

**Verification:**
- Original: `A - B * (C - D + E) + F`
- Postfix: `ABCD-E+*-F+`
  - Compute `C - D` → `CD-`
  - Add `E` → `CD-E+`
  - Multiply by `B` → `BCD-E+*`
  - Subtract from `A` → `ABCD-E+*-`
  - Add `F` → `ABCD-E+*-F+` ✓

---

## Implementation in C

```c
#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAX 100

char stack[MAX];
int top = -1;

void push(char c) {
    if (top < MAX - 1) {
        stack[++top] = c;
    }
}

char pop() {
    if (top >= 0) {
        return stack[top--];
    }
    return '\0';
}

char peek() {
    if (top >= 0) {
        return stack[top];
    }
    return '\0';
}

int precedence(char op) {
    if (op == '^') return 3;
    if (op == '*' || op == '/' || op == '%') return 2;
    if (op == '+' || op == '-') return 1;
    return 0;
}

void infixToPostfix(char* infix, char* postfix) {
    int i = 0, j = 0;
    
    while (infix[i] != '\0') {
        char c = infix[i];
        
        // If operand, add to output
        if (isalnum(c)) {
            postfix[j++] = c;
        }
        // If '(', push to stack
        else if (c == '(') {
            push(c);
        }
        // If ')', pop until '('
        else if (c == ')') {
            while (top >= 0 && peek() != '(') {
                postfix[j++] = pop();
            }
            pop(); // Remove '('
        }
        // If operator
        else {
            while (top >= 0 && peek() != '(' && 
                   precedence(peek()) >= precedence(c)) {
                postfix[j++] = pop();
            }
            push(c);
        }
        i++;
    }
    
    // Pop remaining operators
    while (top >= 0) {
        postfix[j++] = pop();
    }
    
    postfix[j] = '\0';
}

int main() {
    char infix[] = "A+B*C";
    char postfix[MAX];
    
    infixToPostfix(infix, postfix);
    printf("Infix: %s\n", infix);
    printf("Postfix: %s\n", postfix);
    
    return 0;
}
```

---

## Key Points

1. **Operands** go directly to output
2. **Operators** are pushed to stack based on precedence
3. **Left parenthesis `(`** is always pushed to stack
4. **Right parenthesis `)`** triggers popping until matching `(`
5. Higher precedence operators are evaluated first
6. Equal precedence follows left-to-right associativity

---

## Common Mistakes to Avoid

❌ Forgetting to pop remaining operators at the end  
❌ Not handling parentheses correctly  
❌ Wrong precedence comparison (should be `>=` not `>`)  
❌ Not discarding the `(` after popping on `)`
