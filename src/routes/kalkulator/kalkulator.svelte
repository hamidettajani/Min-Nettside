<script>
  let regnestykke = ""; // Oppretter en variabel for å midlertidig lagre brukerens regnestykke
  let resultat = ""; // Oppretter en variabel for å midlertidig lagre svaret

  function løsregnestykke() {
    // Funksjon for å løse ligningen når "Regn ut" knappen trykkes
    const regnestykkeArray = regnestykke.split("");
    if (regnestykkeArray.length !== 3) {
      // Skjekker om arrayen har for mange elementer (mer enn 3)
      resultat = "Ugyldig input"; // Feilmelding til for mange inputs
      return;
    }

    const [tall1, operatør, tall2] = regnestykkeArray; // Deler opp arrayen til riktg komponenter

    const num1 = parseFloat(tall1); // Gjør om tallene til floating-point tall 
    const num2 = parseFloat(tall2);

    if (isNaN(num1) || isNaN(num2)) {
      // Skjekker om enten tall1 eller tall2 er ugyldig
      resultat = "Ugyldig input"; // Feilmelding til ugyldig tall
      return;
    }

    switch (operatør) {
      case "+":
        resultat = num1 + num2; // addisjon
        break;
      case "-":
        resultat = num1 - num2; // subtraksjon
        break;
      case "*":
        resultat = num1 * num2; // multiplikasjon
        break;
      case "/": 
        if (num2 === 0) { 
          // Skjekker for divisjon med 0
          resultat = "Kan ikke dele på 0..."; // Feilmelding for divisjon med 0
        } else {
          resultat = num1 / num2; // divisjon
        }
        break;
      default:
        resultat = "Ugyldig operatør"; // Feilmelding for ugyldig operatør
        break;
    }
  }
</script>

<div class="w-1/4 mx-auto p-4">
  <h1 class="text-2xl font-semibold">Kalkulator</h1>

  <div class="flex justify-center mt-5">
    <input class="p-4 w-64 bg-gray-200 text-black" type="text" 
    placeholder="Skriv inn et regnestykke"
    bind:value={regnestykke}
    />

    <button class="w-1/2 p-4 bg-purple-600 text-white hover:bg-purple-700" on:click={løsregnestykke}>
      Regn ut
    </button>
    
  </div>
  <p class="text-lg font-bold mt-4">
    Resultat: {resultat}
  </p>
</div>