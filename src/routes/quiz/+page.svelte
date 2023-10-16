<!--Banner på toppen-->
<div class="bg-purple-700 py-8 w-full">
  <a href="/">
    <div class="container mx-auto flex justify-center">
      <p class="text-white text-6xl font-bold">Hamids Laboratorium</p>
    </div>
  </a>
  </div>
  <!--Interaktiv quiz-->
<script>
    let currentQuestion = 0;
    let score = 0;
    let quizFinished = false;
  
    const questions = [
      {
        question: "Spørsmål 1: ",
        options: ["1", "2", "3"],
        correctAnswer: "1",
      },
      {
        question: "Spørsmål 2: ",
        options: ["en", "to", "tre"],
        correctAnswer: "to",
      },
      // Add more questions here...
    ];
      // Skjekk om svaret er riktig
    function checkAnswer(selectedOption) {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
      }
      nextQuestion();
    }
    // Neste spørsmål
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
      } else {
        // Quizen er ferdig
        quizFinished = true;
      }
    }
    // Funksjon til restart knappen
    function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizFinished = false;
  }
</script>
  
  <main class="p-4 text-gray-300">
    {#if !quizFinished}
      <h2 class="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
      <ul class="space-y-2">
        {#each questions[currentQuestion].options as option}
          <li>
            <button class="px-4 w-64 py-2 bg-purple-600 text-white rounded-lg hover:bg-gray-300 hover:text-purple-600 focus:outline-none" on:click={() => checkAnswer(option)}>
              {option}
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <div>
        <p class="text-xl font-semibold">Du fikk: {score}/{questions.length} riktig</p>
        <p>
            <!--Skjekker antall riktig spørsmål-->
          {#if score === questions.length}
            Wow gratulerer, du fikk ALLE riktig!
          {:else}
            Du kan klare bedre...
          {/if}
        </p>
        <!-- Restart knapp -->
        <button class="p-2 mt-3 font-bold text-sm w-24 bg-purple-700 text-white rounded hover:bg-gray-300 hover:text-purple-700 focus:outline-none" on:click={restartQuiz}>
         Prøv igjen!
        </button>
      </div>
    {/if}
  </main>