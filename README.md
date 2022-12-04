# LexicalAnalyzer

# Lexical Rules

1) The code must begin with the word "begin" and end with the word "end". Everything in between these two words will be considered the statement input.
2) Each lexeme/token must clearly separate multiple statements with a space.
3) Each integer literal has a memory stored in 1 byte, 2 byte, 4 byte, or 8 byte. Naming convention shown below.
4) Variables should have the ability to be declared on separate lines from the assignment of the variable.
5) Variable names have a maximum of 8 letters and a minimum of 6 letters. Underscores allowed, but numbers not allowed.
6) Handles keywords for loops, data type declaration, and selection statements. Keywords created below.


# Token Dictionary

**Keyword Indicators**

    'start': "begin"

    'finish': "end"

    'condition': "condi"

    'refresh': "refresh"
    
    'variable' : "[a-zA-Z_]" Note: Must follow Lexical Rule Number 5.

**Arithmetic Order of Operations**

    'mod': "%"
    
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

    'notequal': "!="

    'assign': "="

**Miscellaneous**

    'leftp': "("

    'rightp': ")"

    'braceL': "{"

    'braceR': "}"


**Data Types**

    SMALL (1 byte) -> -128 to 127

    MEDIUM (2 byte) -> -32,768 to 32,767

    LARGE (4 byte) -> -2,147,483,648 to 2,147,483,647

    GARGANTUAN (8 byte) -> -9,223,372,036,854,775,808 to 9,223,372,036,854,775,808

# Test Cases

    4 total test cases:

    2 Passed

    1 fail test containing lexical errors: failed2_lexical_error has => incorrect data type size (line 5,7,13), 
    
    number starting variable (line 7,13), illegal character (line 10). Atleast 5 lexical errors.

    1 fail test containing syntax errors: failed1_syntax_error has => 2 semi colons (line 3), 
    no space separating + and 5 (line 4), an additional space (line 6), no semicolon (line 4,7,10,11). Atleast 5 syntax errors.
    

# Production Rules

**Order of Operations Priority**

(),%, +, -, *, / (PEASMD) Note: Enforced a non PEMDAS (BODMAS) order of operation with 6 levels of precedence.

**Loop, Variable, and Selection Keywords**

Code does not contain the following keywords: while, for, do, if, int, short, long

**Structure of the language**

    <Start> --> begin <stmt_list> end    
    <stmt_list> --> { <stmt> }    
    <stmt> --> <if_stmt> | <while_stmt> | <assign_stmt>  | <dec_stmt>   
    <if_stmt> --> cond <bool> { { <stmt> } } 
    <while_stmt> --> refresh { <bool> { <stmt> } } 
    <assign_stmt> --> <variable> = <expression> 
    <dec_stmt> --> <dtype> <variable>
    <dtype> --> ( SMALL | MEDIUM | LARGE | GARGANTUAN )    
    <variable> -->  [a-zA-Z_]   
    <expression> --> <term> { ( * | \ ) <term> }    
    <term> --> <term> { ( + | - ) <term> }    
    <factor> --> [0-9]+ | <variable>  | ( <expression> )   
    <bool> --> <expression> ( <= | >= | < | > | != ) <expression>
    
**LL Grammar (Top-Down Parsing): Remove left recursion using algorithm to avoid infinite recursion. Provides unambiguous grammar**
    E => TE'
    
    E' => +TE' | -TE' | Ɛ
    
    T => FT'
    
    T' => *FT' | /FT' | Ɛ
    
    F => -F | +F| (E) | id
    
**Pairwise Disjoint Test: The rules pass the pairwise disjointness test**

    FIRST(E') => {+T,-T}
    
    FIRST(T') => {*F,/F}
    
    FIRST(F) => {-F,+F,(E),id}


   


