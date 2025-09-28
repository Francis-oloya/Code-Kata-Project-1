



const myWord=document.getElementById ("Word");
const mySubmit=document.getElementById ("submit");
const myReset=document.getElementById ("reset");
const myResult=document.getElementById ("result");

const vowels=["a","e","i","o","u"];

mySubmit.onclick=function(){
  let countVowel=0; /* Making the vowel count to start from 0 for every click*/
const inputValue=myWord.value.toLowerCase(); /*converting my input text to lowercase*/

for (let i = 0; i < inputValue.length; i++) {
  const char=inputValue[i] 
  if (vowels.includes(char)) { /*Should the vowels include the char(character) inputed, then increment by 1 for every char available */
  countVowel++; 
 }
  if (countVowel==1) {
   myResult.textContent=`There is ${countVowel} vowel`;
}else if (countVowel==0){
myResult.textContent="There is no vowel"; 
}else
 myResult.textContent=`There are ${countVowel} vowels`; 
 
}

}

myReset.onclick=function(){

 myResult.textContent="Enter new words and submit"; 
 myWord.value=""; 
 
}
