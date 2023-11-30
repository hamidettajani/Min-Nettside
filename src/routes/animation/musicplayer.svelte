<script lang="ts">
    import { onMount } from "svelte";
    import lottie from 'lottie-web'

    let animationContainer

    onMount(()=>{
        lottie.loadAnimation({
            container: animationContainer,
            path: 'https://lottie.host/2b5a6e78-782c-4dcb-881c-3a822040a095/aQ5fYS0uRy.json'
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