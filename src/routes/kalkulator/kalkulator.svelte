<script>
  var queue = []; // Array som lagrer veridene som skal regnes ut
  var svar = 0; // Variabel som lagrer det nåværende svaret på utregningen

  // Funksjon som regner ut queuen
  function regnutQueue(verdi){
    if (svar !==0) {
      svar = parseFloat(svar);
      leggTilQueue(svar);
    }

    var resultat = verdi[0]; // Setter den første verdien av arrayen til resultatet
    var deltpåNull = 0; // Definerer variabelen jeg skal bruke for å skjekke etter deling på 0

    // Loop for å iterere gjennom verdiene og utføre operasjonene
    for (  var i = 2; i < verdi.length; i= i+2) {
      switch (queue[i-1]) {
        case '+':
          resultat+= verdi[i];
          break;
        case '-':
          resultat-= verdi[i];
          break;
        case '/': if (verdi[i] === 0)   deltpåNull = 1; // Skjekker om delt på null
          else resultat = resultat / verdi[i];
          break;
        case'*': resultat = resultat * verdi[i];
          break;
      }
    }

    resultat = resultat.toFixed(10); // Runder opp svaret til 10 desimaler
    resultat = parseFloat(resultat); // Gjør om resultatet til en floating-point verdi

    // Definerer hva som skal skje vis delt på 0
    if ( deltpåNull === 1) { 
        nullstill(); // Nullstiller kalkulatoren
        document.getElementById("resultat").innerHTML =  "Kan ikke dele på 0";
    } else {
        document.getElementById("resultat").innerHTML =  resultat ;
        svar = resultat; // Setter det nåværende utregningsverdien til resultatet
        queue = []; // Nullstiller queuen
    }
  }

  // Funksjon for å legge til en verdi i queuen
  function leggTilQueue(svar){
    queue.push(svar);
  }

  // Funksjon for å resette kalkulatoren
  function nullstill() {
    queue = [];
    svar = 0;
    document.getElementById("resultat").innerHTML = "0";
  }

  // Funksjon for å håndtere inntastingene
  function tall(arg){
    if (document.getElementById("resultat").innerHTML ===  "ERROR" || (document.getElementById("resultat").innerHTML == "0" && arg != ".")){
      document.getElementById("resultat").innerHTML = ""; 
    }

    if (!(arg === ".") || !svar.match(/[.]/)) {
        svar += arg;
        document.getElementById("resultat").innerHTML += arg;
    }
  }

  // Funksjon for operatørene
  function operatør(arg){
    if (svar !== 0 && svar !== "-") {
      svar = parseFloat(svar);
      leggTilQueue(svar);
      leggTilQueue(arg);
      document.getElementById("resultat").innerHTML +=arg;
      svar = 0;
    }
      
    if (arg == "-"  && isNaN(queue[0]) && svar !== "-"){
        svar ="-";
        document.getElementById("resultat").innerHTML = "-";
    }
  }
</script>

<!-- <span id="resultat" class="right- text-4xl font-bold">0</span>
<div class="">
  <input id="AC" type="button" on:click={nullstill} value="AC" class="cursor-pointer text-3xl font-bold"/>
</div> -->

<div class="flex justify-start space-x-2 my-4">
  <input id="AC" type="button" on:click={nullstill} value="AC" class="ml-56 bg-amber-600 text-white font-bold px-2.5 py-2 rounded cursor-pointer"/>
  <span id="resultat" class="text-3xl font-bold">0</span>
  <div class="flex-grow"></div>
</div>

<div class="flex justify-center space-x-2 my-4">
  <input type="button" on:click={() => tall('7')} value="7" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('8')} value="8" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('9')} value="9" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => operatør('+')} value="+" class="bg-amber-600 text-white px-3.5 py-2 rounded cursor-pointer"/>
</div>

<div class="flex justify-center space-x-2 my-4">
  <input type="button" on:click={() => tall('4')} value="4" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('5')} value="5" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('6')} value="6" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => operatør('-')} value="-" class="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer"/>
</div>

<div class="flex justify-center space-x-2 my-4">
  <input type="button" on:click={() => tall('1')} value="1" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('2')} value="2" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('3')} value="3" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => operatør('*')} value="*" class="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer"/>
</div>

<div class="flex justify-center space-x-2 my-4">
  <input type="button" on:click={() => tall('0')} value="0" class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => tall('.')} value="." class="bg-neutral-900 text-white px-4 py-2 rounded cursor-pointer"/>
  <input id="løs" type="button" on:click={() => regnutQueue(queue)} value="=" class="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer"/>
  <input type="button" on:click={() => operatør('/')} value="/" class="bg-amber-600 text-white px-4 py-2 rounded cursor-pointer"/>
</div>
