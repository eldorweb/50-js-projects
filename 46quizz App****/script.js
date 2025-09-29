const quizdata = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Makeup Language",
        c: "Hypertext Markup Logo",
        d: "Hypertext Markup List",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1995",
        b: "1996",
        c: "1994",
        d: "1993",
        correct: "a"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "Django",
        b: "Flask",
        c: "React",
        d: "Ruby on Rails",
        correct: "c"
    }
    // Add more questions as needed
];

const quiz = document.getElementById('quiz')
const asnwerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizdata[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    asnwerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
    let answer
    asnwerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id 
        }
    })
    
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizdata[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizdata.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You asnwered ${score}/${quizdata.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})