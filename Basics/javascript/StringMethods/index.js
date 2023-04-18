// List of String Methods

/*

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. fromCharCode()
6. includes()
7. indexOf()
8. lastIndexOf()
9. localeCompare()
10. match()
11. repeat()
12. replace()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLocaleLowerCase()
20. toLocaleUpperCase()
21. toLowerCase()
22. toString()
23. toUpperCase()
24. trim()
25. valueOf()

*/

var FullText = "Veniam et nulla veniam microsoft excepteur aute duis in microsoft consequat quis fugiat eu pariatur est enim."
var result;

// 1. charAt(position<number>) extract char from a string
result= FullText.charAt(6)

// 2. charCodeAt(position<number>

result = FullText.charCodeAt(16)

// 3. concat(Word<string>)
var t= 'Hello '
result = t.concat("world").concat(" blabla")

// 4. endsWith(<string>)
result = FullText.endsWith('hello') // false
result = FullText.endsWith('enim.') // true

// 5. startsWith(<string>)
result = FullText.startsWith('hello') // false
result = FullText.startsWith('Veniam') // true

// 6. fromCharCode(utf16<number>)
result = String.fromCharCode(86)
result = String.fromCharCode(101)
result = String.fromCharCode(86)
result = String.fromCharCode(86)

// 7. includes(SearchWord<string>)
result = FullText.includes("nulla") // true
result = FullText.includes("microsoft") // false

// 8. indexOf(word<string>)
result= FullText.indexOf("microsoft")
result= FullText.indexOf("in")

// 8bis. lastIndexOf(word or a char<srting>) last match !
result = FullText.indexOf('Veniam')
result = FullText.indexOf('intec')

// 9. substr(startPosition<number>,endPosition<number>)
result = FullText.substr(0,10)
result = FullText.substring(0,10)

// 10. toLowerCase() // A => a
result = "HELLO WORLD".toLowerCase()

// 11. toUpperCase() // a => A
result = "javascript".toUpperCase()

// 12. match()
result =FullText.match('Veniam') 
result =FullText.match('intec') 
result =FullText.match(/[a-zA-Z0-9]+/g) 
result =FullText.match(/microsoft/g) 

// 13. text.repeat()
result = FullText.repeat(3).repeat(5)
result = '#'.repeat(100)

// result = "#########################"

// 14. text.replace()
result = result.replace("#", "$")

// 15. text.replaceAll()
// result = result.replaceAll("#", "$")
result = result.replace(/#/g,"$")
result = "wwwwwwwwwmicrosoftwwwwwwwwwwwwww".replace(/[a-z]/g,"lol")

var user_email = "jimmy@microsoft.com igzukgfztgfjsekgfkhe casablanca@live.ma sgbhvzkbvhesbgkyesbgyueskg"
var myEmailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
result = [...user_email.matchAll(myEmailRegex)]

function FindAllEmails(stringData){
    return stringData.match(myEmailRegex)
}
var myStringData = "abc@intec.com admin@gmail.com"
result = FindAllEmails(user_email)
var FindEmails = "bilal@microsoft.com mohammed@gmail.com bilal@gmail.com ara@abc.be prince@brussel.be"
result = FindEmails.match(/[a-zA-Z]+@(gmail.com)/g) // only gmail.com emails

// 16. split()
result = "bilal, ahmed, ara"
result= "a1-b2-3c"
//result = result.split(',')
result = result.split('-')

// 17. trim()
result = '            jkhuh            '
result = result.trim()

// 18 search()
// result = "Microsoft Products Products".search(/Products/g) // position of the i searchfor 
result = "Products Microsoft Products Products".search("Products") // position index 

// 19. toString()
result = ['a', 'b', 'c', 'd']

console.log(result, typeof result )