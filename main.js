//Load localstorage vars into textarea
    document.getElementById('t1').value = localStorage.t1;
    document.getElementById('t3').value = localStorage.t3;
    function myFunction(){
        var Sone = document.getElementById('t1').value;
        var Stwo = document.getElementById('t3').value;
        localStorage.t1 = Sone;
        localStorage.t3 = Stwo;

}

function searchFunction (){

	t2.innerHTML = '';

	var Sone = document.getElementById('t1').value;
    var Stwo = document.getElementById('t3').value;
    var Smarks = ",.!?-;<>[]()@#$%^&* "; 
                                        
    var ArrayWords = []; //Создаем массив для того, чтобы заносить в него слова
    var tempString = ""; 
    var counterWord = 0; //Счетчик массива ArrayWords
 


	for (var i = 0; i < Stwo.length; i++) {
         	if (Smarks.indexOf(Stwo[i])==-1) {
         	tempString += Stwo[i];     
         	} else {
         	if (tempString != '') {ArrayWords[counterWord] = tempString; counterWord++; }
            	tempString = "";
    		}	

		}


 
function uniqueWordsFromArray(value, index, self) {
    return self.indexOf(value) === index;
}
 
 
var uniqueWords = ArrayWords.filter( uniqueWordsFromArray );
 

for (var i = 0; i < uniqueWords.length; i++) {
    if (Sone.indexOf(uniqueWords[i]) === -1) {
        t2.append(uniqueWords[i] + " " );    
        }
	}

}

