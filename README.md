# LexicalAnalyzer

# Lexical Rules

1) The code must begin with the word "START" and end with the word "FINISH". Everything in between these two words will be considered the statement input.
2) Each lexeme/token must be clearly separated with a space.

# Statements

"ACDL" aka Assignment, Condition, Declaration, and Loop

# Token Dictionary

**Keyword Indicators**

'START': "START",

'FINISH': "FINISH",

'COND': "COND",

'REFRESH': "REFRESH"

**Arithmetic Order of Operations**

'ADDITION': '+',

'SUBTRACTION': "-",

'MULTIPLICATION': "*",

'DIVISION': "/"

**Inequality/Equality Symbols**

'greater': ">",

'greaterE': ">=",

'less': "<",

'lessE': "<=",

'equal': "==",

'notE': "!="

'ASSIGNMENT': "="

**Miscellaneous**

'LEFTPAREN': "(",

'RIGHTPAREN': ")",

'BLOCKSTART': "{",

'BLOCKEND': "}",

'MODULE': "%",

'FLOORDVSON': "$"

**Data Types**

small (8-bits) -> -128 to 127

medium (16-bits) -> -32,768 to 32,767

large (32-bits) -> -2,147,483,648 to 2,147,483,647

gargantuan (64-bits) -> -9,223,372,036,854,775,808 to 9,223,372,036,854,775,808


**Production Rules**

<Program> --> Begin <stmt_list> End
<stmt_list> --> {<stmt> `;`}
<stmt> --> <if_stmt> | <while_stmt> | <as_s>  | <declaration>
<if_stmt> --> cond <bool> `{` { <stmt> ';'} `}`
<while_stmt> --> repeat `{` <bool> { <stmt> ';' } `}`
<as_s> --> <var> = <expression> `;`
<declaration> --> <datatype> <var> `;`

<datatype> --> (SHORT|TALL|GRANDE|VENTI)
<var> -->  [a-zA-Z_]{6,8} // our variable rule
<expression> --> <term> { (`*`|`\` ) <term> }
<term> --> <term> { (`+`|`-`) <term> }
<factor> --> [0-9]+ | <var>  | `(` <expression> `)`
<bool> --> <expression> (`<=`|`>=` | `<` | `>`) <expression>

E --> E + T             Expression + Term
E --> E - T             Expression - Term
E --> T                 Some expression can be a term
T --> T * F             Term * Factor
T --> T / F             Term / Factor
F --> -F                Unary Minus
F --> +F                Unary Plus
E --> a                 Factor can be a constant
E --> (e)               Factor can be an expression in parentheses


