const inputText = document.querySelector('#input-text');
const inputSubmit = document.querySelector('#input-submit');

inputSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    const submit = inputText.value;
    alert(submit);
});

const wholeWheat = document.querySelector('#wheat');
const whiteBread = document.querySelector('#white');
const ham = document.querySelector('#ham');
const turkey = document.querySelector('#turkey');
const bologna = document.querySelector('#bologna');
const americanCheese = document.querySelector('#american-cheese');
const swissCheese = document.querySelector('#swiss-cheese');
const lettuce = document.querySelector('#lettuce');
const tomato = document.querySelector('#tomato');
const mayo = document.querySelector('#mayo');

const sandwichSubmit = document.querySelector('#submit');

sandwichSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    let str = 
    'Your sandwich contains: '

    if (wholeWheat.checked) {
        str += 'wheat bread, ';
    }
    if (whiteBread.checked) {
        str += 'white bread, ';
    }
    if (ham.checked) {
        str += 'ham, ';
    }
    if (turkey.checked) {
        str += 'turkey, ';
    }
    if (bologna.checked) {
        str += 'bologna, ';
    }
    if (americanCheese.checked) {
        str += 'american cheese, ';
    }
    if (swissCheese.checked) {
        str += 'swiss cheese, ';
    }
    if (lettuce.checked) {
        str += 'lettuce, ';
    }
    if (tomato.checked) {
        str += 'tomato, ';
    }
    if (mayo.checked) {
        str += 'mayo,'
    }
    'and a bev.'

    alert(str)
});

const date = document.querySelector('#date');
const textInput2 = document.querySelector('#text-input2');
const skinFade = document.querySelector('#skin-fade');
const taperFade = document.querySelector('#taper-fade');
const hairSubmit = document.querySelector('#hair-submit');

hairSubmit.addEventListener ('click', function (event) {
    event.preventDefault();

    let str2 = 
    'Your cut is scheduled for ' + date.value + ' with ' + textInput2.value 

    if (skinFade.checked) {
        str2 += ' Skin Fade.'
    }

    if (taperFade.checked) {
        str2 += ' Taper fade.'
    }

    alert(str2);
});