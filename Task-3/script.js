// ---------- Quiz Logic ----------
const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "What is 5 + 3?",
    answers: ["6", "8", "10"],
    correct: "8"
  },
  {
    question: "Which is a programming language?",
    answers: ["HTML", "CSS", "JavaScript"],
    correct: "JavaScript"
  }
];

let current = 0;
function loadQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = ''; // Clear previous buttons

  q.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer;

    btn.onclick = () => {
      // Remove 'selected' class from all buttons
      document.querySelectorAll('#answers button').forEach(b => b.classList.remove('selected'));
      
      // Add 'selected' class to the clicked button
      btn.classList.add('selected');

      // Provide feedback on correctness
      setTimeout(() => {
        alert(answer === q.correct ? '✅ Correct!' : '❌ Wrong!');
      }, 200); 
    };

    btn.style.display = "block"; 
    btn.style.margin = "5px 0"; // Add spacing

    answersDiv.appendChild(btn);
  });
}



function nextQuestion() {
  current = (current + 1) % questions.length;
  loadQuestion();
}

window.onload = () => {
loadQuestion();
fetchJoke();
}

// ---------- API Fetch Logic ----------
function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
      document.getElementById('joke-box').textContent = `${data.setup} 🤔 ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById('joke-box').textContent = "Oops! Couldn’t fetch a joke.";
      console.error(err);
    });
}