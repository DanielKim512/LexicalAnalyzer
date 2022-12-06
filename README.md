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

(), +, -, *, /, % (PASMDM) Note: Enforced a non PEMDAS (BODMAS) order of operation with 6 levels of precedence.

**Loop, Variable, and Selection Keywords**

Code does not contain the following keywords: while, for, do, if, int, short, long

**Structure of the language** 

**LL Grammar (Top-Down Parsing): Remove left recursion using algorithm to avoid infinite recursion. **

    <Start> --> begin <stmt> end      
    <stmt> --> <if_stmt> | <while_stmt> | <assign_stmt>  | <dec_stmt>   
    <if_stmt> --> cond <bool> { { <stmt> } } 
    <while_stmt> --> refresh { <bool> { <stmt> } } 
    <assign_stmt> --> <variable> = F
    <dec_stmt> --> <dtype> <variable> = <int_literal> 
    <bool> --> E <inequality>
    <inequality> --> ( <= | >= | < | > | != ) 
    <variable> --> Σ           Note: Σ = [a-zA-Z_]
    <dtype> --> ( SMALL | MEDIUM  | LARGE  | GARGANTUAN )    
    <int_literal> --> num        Note: Δ = [0-9]

    <E> => <T> <E'> 
    <E'> => + <T> <E'> | - <T> <E'> | Ɛ
    <T> => <F> <T'>
    <T'> => * <F> <T'> | / <F> <T'> | Ɛ
    <F> => + <F> | - <F> | ( <E> ) | Σ | num
    
**Pairwise Disjoint Test: The rules pass the pairwise disjointness test. Therfore, it can be parsed in top-down fashion satisfying it being LL Grammar.**
    
**YAY! TEST PASS JUST LIKE THIS TEST 2**

![image](https://user-images.githubusercontent.com/97625923/205796943-148b714f-9f05-4a75-bf98-6163dcb3f254.png)


**Are the Production Rules ambiguous?**

NO! The production rules have unambiguous grammar. This means that every output is unique with no 2 or more parse trees producing the same output!

# LR Parse Tables: Showing 4 tables, 4 traces, and the rules listed:

**First showing the LR(1) grammar rules input**

![image](https://user-images.githubusercontent.com/97625923/205797890-6c98871b-4326-4d84-9ae7-fcea913ff221.png)


![image](https://user-images.githubusercontent.com/97625923/205798026-d0eeeefc-4a70-4734-ae0e-e90925feafd3.png)

**Now the LR Table is quite huge so currently the picture only shows state 0 to 42. Let me know if you want to see it all**

![image](https://user-images.githubusercontent.com/97625923/205799280-3e74ac6a-a8d3-47f6-8663-fa06cb19c34f.png)


**Okay, time for 2 correct token inputs with atleast 6 tokens**

#1 Start with a good ol' "begin cond num > { { Σ = num } } end"   Note: This is 12 tokens long

Trace:

![image](https://user-images.githubusercontent.com/97625923/205802317-c114c6ce-1a98-4bb6-8ded-4dfdf45af4f0.png)

Beautiful looking Parse Tree:

![image](https://user-images.githubusercontent.com/97625923/205801189-4ff14406-ae61-4e2c-953b-4ab11a890f4c.png)

#2 6 Token long Correct version: "begin SMALL Σ = num end"

![image](https://user-images.githubusercontent.com/97625923/205802120-b6b74067-2e22-4f33-b76a-7a955cbd5a89.png)


   


