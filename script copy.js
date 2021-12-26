const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('answer-buttons')

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener ('click,startGame')
console.log ('started game')



function startGame (){
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestion = questions.sort (() => Math.random() - .5)
    setNextQuestion()


}


function setNextQuestion(){
    showQuestion(shuffledQuestion[currentQuestionIndex] )

}

function showQuestion(question) {
    questionElement.innerText = question.question 
}

function selectAnswer () {



}

const questions = [
{
question: "what is 2+2",
answers: [ 
    { text: '4' , correct: true} ,
    { text: '22' , correct: false}
  ] 
 }
]



