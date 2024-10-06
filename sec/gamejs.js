// Quiz questions related to environmental issues and GLOBE protocols
const questions = [
    {
        question: 'Which of the following is a primary contributor to air pollution in urban areas?',
        answers: [
            { text: 'Vehicle emissions', correct: true },
            { text: 'Ocean waves', correct: false },
            { text: 'Tree leaves', correct: false },
            { text: 'Mountain air', correct: false }
        ]
    },
    {
        question: 'What is a common indicator of water pollution?',
        answers: [
            { text: 'Low pH levels', correct: true },
            { text: 'High oxygen levels', correct: false },
            { text: 'Crystal clear water', correct: false },
            { text: 'High biodiversity', correct: false }
        ]
    },
    {
        question: 'What tool is used in GLOBE protocols to measure air temperature?',
        answers: [
            { text: 'Thermometer', correct: true },
            { text: 'Barometer', correct: false },
            { text: 'Hygrometer', correct: false },
            { text: 'Anemometer', correct: false }
        ]
    },
    {
        question: 'Which of the following is a major cause of global climate change?',
        answers: [
            { text: 'Greenhouse gas emissions', correct: true },
            { text: 'Sunspot activity', correct: false },
            { text: 'Volcanic eruptions', correct: false },
            { text: 'Tectonic plate movements', correct: false }
        ]
    },
    {
        question: 'What effect does deforestation have on the environment?',
        answers: [
            { text: 'Increases CO2 levels', correct: true },
            { text: 'Decreases soil erosion', correct: false },
            { text: 'Improves air quality', correct: false },
            { text: 'Reduces biodiversity loss', correct: false }
        ]
    },
    {
        question: 'What is the primary purpose of a rain gauge in environmental data collection?',
        answers: [
            { text: 'To measure the amount of precipitation', correct: true },
            { text: 'To measure wind speed', correct: false },
            { text: 'To measure air pressure', correct: false },
            { text: 'To measure humidity', correct: false }
        ]
    },
    {
        question: 'Which layer of the atmosphere is most affected by human activities such as pollution?',
        answers: [
            { text: 'Troposphere', correct: true },
            { text: 'Stratosphere', correct: false },
            { text: 'Mesosphere', correct: false },
            { text: 'Thermosphere', correct: false }
        ]
    },
    {
        question: 'How does urbanization contribute to flooding in cities?',
        answers: [
            { text: 'Increases impermeable surfaces', correct: true },
            { text: 'Decreases the rate of rain', correct: false },
            { text: 'Increases water absorption in soil', correct: false },
            { text: 'Improves natural drainage', correct: false }
        ]
    },
    {
        question: 'What is the purpose of a GLOBE hydrology protocol?',
        answers: [
            { text: 'To monitor and assess the quality of water bodies', correct: true },
            { text: 'To measure carbon dioxide levels', correct: false },
            { text: 'To track bird migration patterns', correct: false },
            { text: 'To study soil composition', correct: false }
        ]
    },
    {
        question: 'Which of the following gases is considered a major greenhouse gas contributing to global warming?',
        answers: [
            { text: 'Carbon dioxide (CO2)', correct: true },
            { text: 'Oxygen (O2)', correct: false },
            { text: 'Nitrogen (N2)', correct: false },
            { text: 'Argon (Ar)', correct: false }
        ]
    },
    {
        question: 'Why is biodiversity important to ecosystem stability?',
        answers: [
            { text: 'It helps ecosystems recover from disruptions', correct: true },
            { text: 'It increases the size of animals', correct: false },
            { text: 'It decreases the need for water in ecosystems', correct: false },
            { text: 'It prevents all forms of pollution', correct: false }
        ]
    },
    {
        question: 'Which GLOBE protocol is most appropriate for measuring soil moisture content?',
        answers: [
            { text: 'Soil moisture protocol', correct: true },
            { text: 'Water transparency protocol', correct: false },
            { text: 'Temperature measurement protocol', correct: false },
            { text: 'Atmospheric pressure protocol', correct: false }
        ]
    },
    {
        question: 'What happens to ocean water as it absorbs more CO2 from the atmosphere?',
        answers: [
            { text: 'It becomes more acidic', correct: true },
            { text: 'It becomes more alkaline', correct: false },
            { text: 'Its salinity decreases', correct: false },
            { text: 'Its temperature drops significantly', correct: false }
        ]
    },
    {
        question: 'What is the main source of excess nutrients in water bodies leading to algal blooms?',
        answers: [
            { text: 'Agricultural runoff', correct: true },
            { text: 'Mountain snowmelt', correct: false },
            { text: 'Urban traffic', correct: false },
            { text: 'Forest growth', correct: false }
        ]
    },
    {
        question: 'Which factor is most directly responsible for rising sea levels?',
        answers: [
            { text: 'Melting polar ice and glaciers', correct: true },
            { text: 'Increased evaporation from oceans', correct: false },
            { text: 'More volcanic eruptions', correct: false },
            { text: 'Changing wind patterns', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

// Function to show a question
function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

// Function to handle answer selection
function selectAnswer(isCorrect) {
    if (isCorrect) {
        score += 10;
        alert('Correct!');
    } else {
        alert('Wrong! Try again.');
    }
    scoreDisplay.innerText = `Score: ${score}`;
    nextButton.classList.remove('hidden');
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert('Quiz completed! Your final score is ' + score);
        startQuiz();  // Reset the quiz
    }
    nextButton.classList.add('hidden');
}

// Start the quiz immediately
startQuiz();

nextButton.addEventListener('click', nextQuestion);
