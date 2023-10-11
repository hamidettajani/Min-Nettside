<script lang="ts">
    import { onMount } from "svelte";
    import lottie from 'lottie-web'

    let animationContainer: HTMLElement

    onMount(()=>{
        lottie.loadAnimation({
            container: animationContainer,
            path: 'https://lottie.host/2365a0e2-5d4f-4fa0-be4c-4e2ddca6ecae/VqqsC73zis.json'
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