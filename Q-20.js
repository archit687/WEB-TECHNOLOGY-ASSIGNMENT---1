function countVowels(word){
    let count = 0;
    let word1 = word.toLowerCase();
    let len = word1.length;
    console.log("Lenght:",len)
    // let vowels = ['a','e','i','o','u',];
    for(let i = 0;i < len;i++){

        if(word1[i] == 'a'){
            count++;
        }
        else if(word1[i] == 'e'){
            count++;

        }
        else if(word1[i] == 'i'){
            count++;

        }
        else if(word1[i] == 'o'){
            count++;

        }
        else if(word1[i] == 'u'){
            count++;

        }

    }
    return count;
    
}

// let word = prompt("Enter a word to find out Vowels");
let word = "Archit";
let vowel = countVowels(word);

document.write("No Of Vowels In ", word," Are =>",vowel);
console.log(vowel);




