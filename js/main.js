
var quote =[{'quote' : 'Be yourself; everyone else is already taken',
'author':'Peter Drucker'},
{'quote' : 'Bring something incomprehensible into the world!',
'author':'Gilles Deleuze'},
{'quote' : 'There is nothing new except what has been forgotten.',
'author':'Marie Antoinette'},
{'quote' : 'It is only when the mind is free from the old ',
'author':' J. Krishnamurti'},
{'quote' : 'Fashion is about going ahead, not about memory.',
'author':'Karl Lagerfeld '},
{'quote' : 'Dont keep forever on the public road, going only where others have gone.',
'author':'Alexander Graham Bell'},
{'quote' : 'Change is the end of something you know ',

'author':'Kholoud Yasser'},
{'quote' : 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
'author':'Nelson Mandela'},
{'quote' : 'The way to get started is to quit talking and begin doing.',
'author':'Walt Disney'},
{'quote' : `Your time is limited, so don't waste it living someone else's life.`,
'author':'Steve Jobs'},
{'quote' : 'If life were predictable it would cease to be life, and be without flavor',
'author':'Eleanor Roosevelt'},
{'quote' : `Life is what happens when you're busy making other plans. `,
'author':'John Lennon'},

]
let btn=document.getElementById("btn")
btn.addEventListener('click',function getQuotes(){
  var num = Math.floor(Math.random()*quote.length)
  document.getElementById("#quote").innerHTML=quote[num].quote;
  document.getElementById("#author").innerHTML=quote[num].author;


  
})
getQuotes()