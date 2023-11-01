<script lang="">
    import Cat from "./animation/cat.svelte";
    import Musicplayer from "./animation/musicplayer.svelte";
    import Musicnotes from "./animation/musicnotes.svelte";
    import Quizanimation from "./animation/quizanimation.svelte";
    import Noobworkmp3 from "./musikk/noobworkmp3.svelte";
</script>
<!--Banner på toppen-->
<div class="bg-purple-700 py-10 w-full">
    <div class="container mx-auto flex justify-center">
        <!--Spinnende katt og tekst-->
        <div class="absolute h-32 w-32 top-1 left-40">
          <Cat />
        </div>
        <p class="text-white text-6xl font-bold">Hamids Laboratorium</p>
        <div class="absolute h-32 w-32 top-1 right-40">
          <Cat /> </div>
    </div>
</div>
<div class="flex flex-nowrap ml-16 mt-10">

  <a href="musikk">
    <div class="flex group">
    <div class="h- w-32">
      <Musicplayer />
    </div>
    <p class="text-5xl font-bold ml-5 mt-9">Musikk</p>
    <div class="hidden group-hover:block transition h-32 w-32 absolute ml-72 top-24">
      <Musicnotes />
    </div>
  </div>
  </a>
  <a href="quiz" class="ml-10">
    <div class="flex group">
    <div class="h- w-32">
      <Quizanimation />
    </div>
    <p class="text-5xl font-bold mt-9">Quiz</p>
    </div>
  </a>
</div>



<main>
  <h1>Noobwork intro</h1>
  <Noobworkmp3 />
</main>

