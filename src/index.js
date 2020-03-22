const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayLetters = expr.match( /[\d \*]{10}/g );
    
    for (let i = 0; i < arrayLetters.length; i++){
        arrayLetters[i] = arrayLetters[i].replace(/00/g, '')
                                         .replace(/10/g, '.')
                                         .replace(/11/g, '-')
                                         .replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ')
    for (let key in MORSE_TABLE){
        if ( key === arrayLetters[i]){
            arrayLetters[i] = MORSE_TABLE[key]
            }
        }
    }

    return arrayLetters.join('');
}

module.exports = {
    decode
}