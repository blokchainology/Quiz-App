let time = document.querySelector('.time');
let quizContainer = document.querySelector('.main-container');
let nextBtn = document.querySelector('.next-button');
let countOfQuestion = document.querySelector('.number-question');
let Container = document.querySelector('.container');
let scoreContainer = document.querySelector('.score-container');
let restart = document.querySelector('.restart');
let userScore = document.querySelector('.user-score');
let startScreen = document.querySelector('.start');
let startButton = document.querySelector('.start-button');
let questionCount=0;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options 

let quizArray = [
  {
    id: "0",
    question: "Which type of JavaScript language is _____?",
    options: ["Object-oriented", "Object-based", "Functional programming", "All of the above"],
    correct: "Object-based",
  },
  {
    id: "1",
    question: "Which symbol is used separate JavaScript statements?",
    options: ["Comma (,)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"],
    correct: "Semicolon (;)",
  },
  {
    id: "2",
    question: "JavaScript ignores?",
    options: ["newlines", "tabs", "spaces", "All of the above"],
    correct: "All of the above",
  },
  {
    id: "3",
    question: "Which JavaScript method is used to write on browser's console?",
    options: ["console.write()", "console.output()", "console.log()", "console.writeHTML()"],
    correct: "console.log()",
  },
  {
    id: "4",
    question: "Which JavaScript method is used to write into an alert box?",
    options: ["window.alertHTML()", "window.alert()", "window.alertBox()", "window.alertContent()"],
    correct: "window.alert()",
  },
    
];

window.onload=function(){
  Container.classList.add('hide');
  startScreen.classList.remove('hide');
};

startButton.addEventListener('click',()=>{
  quizContainer.innerHTML=''
  questionCount=0;
  count=11;
  scoreCount=0;
  clearInterval(countdown);
  timer();
  createQuize();
  quizDisplay(questionCount);
});

nextBtn.addEventListener('click',()=>{
  displayNext();
});


restart.addEventListener('click',()=>{
quizContainer.innerHTML='';
questionCount=0;
count=11;
scoreCount=0;
clearInterval(countdown);
timer();
createQuize();
quizDisplay(questionCount);

Container.style.display='block';
scoreContainer.style.display='none';
});

function quizDisplay(questionCount){
  let questionCart=document.querySelectorAll('.main-container__btn');

  questionCart.forEach((cart)=>{
      cart.classList.add('hide');
  });
  questionCart[questionCount].classList.remove('hide');
};


function createQuize(){
  Container.style.display='block';
    startScreen.style.display='none';
    quizArray.forEach((item)=>{
        let divElem=document.createElement('div');
        divElem.className='main-container__btn hide';

        countOfQuestion.innerHTML=1+' of '+ quizArray.length+' Question';

        let pElem=document.createElement('p');
        pElem.classList.add('question');
        pElem.innerHTML=item.question;
        divElem.appendChild(pElem);
        
        divElem.innerHTML += `
        <button class="option" onclick="result(this)">${item.options[0]}</button>
        <button class="option" onclick="result(this)">${item.options[1]}</button>
        <button class="option" onclick="result(this)">${item.options[2]}</button>
        <button class="option" onclick="result(this)">${item.options[3]}</button>
        `;

        quizContainer.append(divElem);
    });
};

function displayNext(){
  questionCount+=1;

    if(questionCount == quizArray.length){
        Container.style.display='none';
        scoreContainer.style.display='flex';
        userScore.innerHTML ='Your score is ' + scoreCount + ' out of ' + questionCount;
    }else{
      countOfQuestion.innerHTML=questionCount+ 1+' of '+ quizArray.length+' Question';
      quizDisplay(questionCount);
      count=11;
      clearInterval(countdown);
      timer();
    };
};

function timer(){
  countdown= setInterval(function(){
  count--;
  time.innerHTML=`${count}s`
  if(count==0){
    clearInterval(countdown);
    displayNext();
  }
},1000);
};


function result(options){

let questionAll=document.getElementsByClassName('main-container__btn')[questionCount];
let userOptin=questionAll.querySelectorAll('.option');
if(options.innerHTML===quizArray[questionCount].correct){
  options.classList.add('correct');
  scoreCount++;
}else{
  options.classList.add('incorrect');
  userOptin.forEach((item)=>{
    if(item.innerHTML==quizArray[questionCount].correct){
      item.classList.add('correct');
    };
  });
};

clearInterval(countdown);
userOptin.forEach((item)=>{
  item.disabled=true;
});

};