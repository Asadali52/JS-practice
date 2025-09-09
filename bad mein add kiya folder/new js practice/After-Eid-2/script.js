// Ek string ke andar har word ke first letter ko uppercase karo.
{
    let string = 'i love javascript';
    let array = string.split(' ');
    let capitlizedWords = [];
    for (let i = 0; i < array.length; i++) {
        let capitlized = array[i][0].toUpperCase() + array[i].slice(1);
        capitlizedWords.push(capitlized);
    }
    console.log(capitlizedWords.join(' '));
}
{
    let string = 'i love javascript';
    let newString = string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    console.log(newString)
}


// Ek number ke andar kitne digits even hain, woh count karo.
{
    let nums = 123456788;
    let numStr = nums.toString();
    let evenCounts = 0;
    for (let i = 0; i < numStr.length; i++) {
        let digits = parseInt(numStr[i])
        if (digits % 2 === 0) {
            evenCounts++
        }
    }
    console.log(evenCounts);
}


// Ek sentence ke har word ko reverse karo, lekin sentence ka order same rakho.
{
    let sentence = "hello world";
    let arr = sentence.split(" ");
    let revSentence = '';

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let reversedWord = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        revSentence += reversedWord;
        if (i < arr.length - 1) { // is condition ki smj ni arhi 
            revSentence += ' ';
        }
    }

    console.log(revSentence);
}