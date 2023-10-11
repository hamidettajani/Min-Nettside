<script lang="">
    import Cat from "./animation/cat.svelte";

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
