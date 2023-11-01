<script lang="ts">
    import { onMount } from "svelte";
    import lottie from 'lottie-web'

    let animationContainer: HTMLElement

    onMount(()=>{
        lottie.loadAnimation({
            container: animationContainer,
            path: 'https://lottie.host/3e9f3155-aba4-4ee8-b790-4324feaaea9d/FL9lctCjmW.json'
        })
    })

    let isVisible = false;
  
    // Trigger the animation when the component mounts
    onMount(() => {
      isVisible = true;
    });
</script>
  

  <div class="{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-transform duration-300">
    <!-- Your content goes here -->
    <div class="" bind:this={animationContainer}/>
  </div>