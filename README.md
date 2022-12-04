# Assignment-3

Meeting Notes

Meeting 1: ( 25th November 2022 )

We built the GitHub repositoy during the first phase of our project (Software Testing), and also provide access to every participant so that we could work mutually and in efficient way. We also analyzed the different tools to perform unit testing and performance testing for our assignment.  

Meeting 2: ( 30th November 2022 )

We installed specific tools which are required to complete our Assignment-03. e.g Jest for Unit Testing, Jmeter for Performance Testing

Meeting 3: ( 2nd Decemeber 2022 )

We explored the areas of SAST and Linter in order to complete our TASK-03. We also select a topic of our Project last phase and the topic which we selected to explore is "Test Automation in ML and AI in DeepCheck"

Meeting 4: ( 4th Decemeber 2022 ) 

At this point in Time, we all mutually decided to also done the Bonus task mentioned in our Project last phase which are basically to post on LinkedIn regarding our experience and things which we learned in Software Testing and also to make a presentation on a topic which we mentioned above.


# Task-3

# SAST

Static Application Security Testing (SAST) is a popular Application Security tool that checks the source, binary,
or byte code of an application. SAST solutions examine an application from the "inside out" and do not require
a functioning system to scan it.SAST decreases application security risks by giving developers with fast feedback 
on vulnerabilities brought into code during development. It assists developers in learning about security while 
they work by offering real-time access to suggestions and line-of-code navigation, allowing for speedier vulnerability 
detection and collaborative auditing. As a result, developers may write more code that is less vulnerable to compromise, 
resulting in a more secure programme.

## SAST Advantages

1. Scans source code for flaws that lead to vulnerabilities.
2. Real-time reporting is available.
3. Languages used by developers are covered.

## SAST's Disadvantages
1. Inability to detect vulnerabilities in dynamic contexts
2. There is a high risk of reporting false positives.
3. Because the report is static, it quickly becomes out of date.

## Why is SAST a critical security activity?
Developers far outnumber security personnel. It might be difficult for a company to locate the resources to do code reviews
on even a subset of its apps. The ability to analyse the whole codebase is a fundamental capability of SAST tools. Furthermore,
they are significantly faster than human-performed manual secure code reviews. These programmes can scan millions of lines of
code in seconds. SAST technologies reliably detect important vulnerabilities like as buffer overflows, SQL injection, cross-site 
scripting, and others. Thus, including static analysis into the SDLC can have a significant impact on the overall quality of the 
code created.

## How does SAST function?
SAST employs a Static Code Analysis tool, which may be compared to a building's security guard. A Static Code
Analyzer examines the source code to seek for coding and design faults that might allow malicious code injection, 
similar to a security guard checking for unlocked doors and open windows that could allow an intruder entrance. 
SQL Injections, Command Injections, and Server-Side Injections are some instances of malicious assaults, according
to OWASP.

# LINTER

In a nutshell, a linter is a tool that can assist you improve your code. The notion of a linter is not exclusive 
to JavaScript. Nonetheless, I believe that the bulk of individuals learning about linters are interested in those 
that target JavaScript.

## Advantages of Linting
1. fewer manufacturing faults
2. Code that is more readable, manageable, and consistent.
3. During code reviews, there are less conversations concerning code style and aesthetic decisions.
4. Code quality may be measured objectively.
5. Code that is more secure and performant
6. More developers are being educated about code quality.

## Disadvantages of linting

1. Code checks are restricted to a single programming language.
2. Variable Functionality Provides A Narrow Perspective On Code Quality.
3. Difficulty in dealing with complex rules.
4. Positives that aren't true.
5. Only reporting on basic metrics.
6. Learnings are limited.
7. Hidden costs


## LINTER && SAST
Linters inspect code for stylistic flaws, errors, and dangerous memory leaks.

Static code analysis tools are any tools that examine source code without requiring it to be executed. Linters are frequently static code analysis tools, although they can also be of various forms. For example, searching for dependencies or computing metrics.
