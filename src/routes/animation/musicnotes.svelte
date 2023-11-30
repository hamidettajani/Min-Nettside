<script lang="ts">
    import { onMount } from "svelte";
    import lottie from 'lottie-web'

    let animationContainer

    onMount(()=>{
        lottie.loadAnimation({
            container: animationContainer,
            path: 'https://lottie.host/7e1ee822-06f2-469a-8cbd-8814af84a8c9/HsCAFkSXPM.json'
        })
    })

    let isVisible = false;
  
    // Start animasjonen når komponentet mounter
    onMount(() => {
      isVisible = true;
    });
</script>
  

  <div class="{isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-transform duration-300">
    <div class="" bind:this={animationContainer}/>
  </div>