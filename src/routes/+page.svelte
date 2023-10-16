<script lang="">
    import Cat from "./animation/cat.svelte";
    import Musicplayer from "./animation/musicplayer.svelte";
    import Musicnotes from "./animation/musicnotes.svelte";
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
<div>

  <a href="musikk">
    <div class="flex group ml-16 mt-10">
    <div class="h- w-32">
      <Musicplayer />
    </div>
    <p class="text-5xl font-bold ml-5 mt-9">Musikk</p>
    <div class="hidden group-hover:block transition h-32 w-32 absolute ml-72 top-24">
      <Musicnotes />
    </div>
  </div>
</a>
<a href="quiz">
  <div class="font-bold text-5xl flex flex-nowrap">
    Quiz
  </div>
</a>
</div>
