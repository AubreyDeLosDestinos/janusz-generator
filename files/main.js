// code: Aubrey De Los Destinos
// data: https://twitter.com/Mihas_G/status/1133037745285324801

// data part
const bollocks = [
    [
        'Ja chcę powiedzieć jedną rzecz: ',
        'Trzeba powiedzieć jasno: ',
        'Jak powiedział wybitny krakowianin Stanisław Lem, ',
        'Proszę mnie dobrze zrozumieć: ',
        'Ja chciałem państwu przypomnieć, że ',
        'Niech państwo nie mają złudzeń: ',
        'Powiedzmy to wyraźnie: ',
    ],
    [
        'przedstawiciele czerwonej hołoty ',
        'ci wszyscy (tfu!) geje ',
        'funkcjonariusze reżymowej telewizji ',
        'tak zwani ekolodzy ',
        'ci wszyscy (tfu!) demokraci ',
        'agenci bezpieki ',
        'feminazistki ',
    ],
    [
        'zupełnie bezkarnie ',
        'całkowicie bezczelnie ',
        'o poglądach na lewo od komunizmu ',
        'celowo i świadomie ',
        'z premedytacją ',
        'od czasów Okrągłego Stołu ',
        'w ramach postępu ',
    ],
    [
        'nawołują do podniesienia podatków, ',
        'próbują wyrzucić kierowców z miast, ',
        'próbują skłócić Polskę z Rosją, ',
        'głoszą brednie o globalnym ociepleniu, ',
        'zakazują posiadania broni, ',
        'nie dopuszczają prawicy do władzy, ',
        'uczą dzieci homoseksualizmu, ',
    ],
    [
        'bo dzięki temu mogą kraść',
        'bo dostają za to pieniądze',
        'bo tak się uczy w państwowej szkole',
        'bo bez tego (tfu!) demokracja nie może istnieć',
        'bo głupich jest więcej niż mądrych',
        'bo chcą tworzyć raj na ziemi',
        'bo chcą niszczyć cywilizację białego człowieka',
    ],
    [
        ' przez kolejne kadencje.',
        ', o czym się nie mówi.',
        ' i właśnie dlatego Europa umiera.',
        ', ale przyjdą muzułmanie i zrobią porządek.',
        ' — tak samo zresztą jak za Hitlera.',
        ' — proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.',
        ', co lat temu sto nikomu nie przyszłoby nawet do głowy.',
    ],
];
let sentence = '';
let previous = [null, null, null, null, null, null];

const BUTTON_PRISTINE = 'Uwal kampanię wyborczą';
const FULL_CAMPAIGN_MODE = 'Uwal kampanię wyborczą jeszcze bardziej';

// ui elements
const btnGenerate = document.getElementById('generate');
const btnClear = document.getElementById('clear');
const containerGibberish = document.getElementById('gibberish');

// utils
// source: https://stackoverflow.com/a/4960020
const random = (from, to) => Math.floor(Math.random() * to) + from;

const differentThan = (value) => {
    const newValue = random(0, 5);
    return newValue == value ? differentThan(value) : newValue;
};

const generate = () => bollocks.reduce(
    (soFar, current, index) => {
        previous[index] = differentThan(previous[index]);
        return `${soFar}${current[previous[index]]}`;
    }, 
    ''
);

// side-effects
const updateGibberish = (text = '') => {
    containerGibberish.textContent = text;
};

const moreNonesense = () => {
    sentence = `${sentence} ${generate()}`
    btnGenerate.textContent = FULL_CAMPAIGN_MODE;
    updateGibberish(sentence);
};

const januszStahp = () => {
    sentence = '';
    btnGenerate.textContent = BUTTON_PRISTINE;
    updateGibberish(sentence);
};

// action binding
btnGenerate.addEventListener('click', moreNonesense);
btnClear.addEventListener('click', januszStahp);
