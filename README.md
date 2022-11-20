# LexicalAnalyzer

# Lexical Rules

1) The code must begin with the word "begin" and end with the word "end". Everything in between these two words will be considered the statement input.
2) Each lexeme/token must clearly separate multiple statements with a space.
3) Each integer literal has a memory stored in 1 byte, 2 byte, 4 byte, or 8 byte. Naming convention shown below.
4) Variables should have the ability to be declared on separate lines from the assignment of the variable.
5) Variable names have a maximum of 8 letters and a minimum of 6 letters. Underscores allowed, but numbers not allowed.
6) Handles keywords for loops, data type declaration, and selection statements. Keywords created below.

# Statements

* Assignment
* Condition
* Declaration
* Loop

# Token Dictionary

**Keyword Indicators**

    'start': "BEGIN",

    'finish': "END",

    'cond': "cond",

    'repeat': "repeat"

**Arithmetic Order of Operations**

    'plus': '+',

    'minus': "-",

    'multiply': "*",

    'divide': "/"

**Inequality/Equality Symbols**

    'greater': ">",

    'greaterE': ">=",

    'less': "<",

    'lessE': "<=",

    'equal': "==",

    'notE': "!="

    'assign': "="

**Miscellaneous**

    'left': "(",

    'right': ")",

    'blockOpen': "{",

    'blockClose': "}",

    'mod': "%",

    'FLRDIV': "$"

**Data Types**

    SMALL (1 byte) -> -128 to 127

    MEDIUM (2 byte) -> -32,768 to 32,767

    LARGE (4 byte) -> -2,147,483,648 to 2,147,483,647

    GARGANTUAN (8 byte) -> -9,223,372,036,854,775,808 to 9,223,372,036,854,775,808

# Test Cases

    4 total test cases:

    2 Passed

    1 fail test containing lexical errors: failed2_lexical_error has => incorrect data type size (line 5,7,13), number starting variable (line 7,13), illegal character     (line 10). Atleast 5 lexical errors.

    1 fail test containing syntax errors: failed1_syntax_error has => 2 semi colons (line 3), no space separating + and 5 (line 4), an additional space (line 6), no        semicolon (line 4,7,10,11). Atleast 5 syntax errors.
    
# Order of Operations Priority

(), +, -, *, /

# Production Rules
    <Program> --> Begin <stmt_list> End    
    <stmt_list> --> {<stmt> `;`}    
    <stmt> --> <if_stmt> | <while_stmt> | <as_s>  | <declaration>   
    <if_stmt> --> cond <bool> `{` { <stmt> ';'} `}`  
    <while_stmt> --> repeat `{` <bool> { <stmt> ';' } `}` 
    <as_s> --> <var> = <expression> `;`
    <declaration> --> <datatype> <var> `;`
    <datatype> --> (SMALL|MEDIUM|LARGE|GARGANTUAN)    
    <var> -->  [a-zA-Z_]{6,8}   
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
    
    The production rule set conforms to the standard of an LL Grammar and is not ambiguous. It should be read from left to right.


