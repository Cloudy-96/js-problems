# Pseudo Code Solution
<!-- the end goal is to have everything in a sentense case, therefore; if a sentece starts with a capital letter and ends in a fullstop, we leave it as is. If the capital letter or full stop is missing, then we add/change what is missing. 
eg
<!-- "hi, I'm Kat." -> capitalise 'Hi'
"hi, I'm Pooja" -> capitalise and add fullstop
"Hello, kat and Pooja." leave as is-->


condition1: first letter must be capitalised
we will index the first spot [0] to be capitalised. 
<!-- (i think if it is capitalised already then it will stay the same anyway, so we can "change" it from a capital to a capital) -->

condition 2: sentece must end in fullstop or punctuation mark
search the string for a fullstop/punctuation
if there is one already: ignore
if false: add a fullstop