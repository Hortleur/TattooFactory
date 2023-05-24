<script>
    import { slide } from "svelte/transition";

    /**
     * @type {boolean}
    */
   let showTeam = false

   /**
    * @type {boolean}
    */
   let showPres = false
</script>

<svelte:head>
    <title>Tattoo Factory-Maisons-Alfort</title>
</svelte:head>

<main>
    <div>
        <h2 class=" font-fondamento text-lg ml-5 font-semibold" on:click={()=>{showPres = !showPres}} on:keypress>
            Présentation
            {#if !showPres} 
            <i class="fa-solid fa-chevron-down"></i>
            {:else}
            <i class="fa-solid fa-chevron-up"></i>
            {/if}
        </h2>
        {#if showPres}    
            <p class=" ml-2" in:slide out:slide>Implantée en plein coeur de la ville de Brunoy, le studio Sarah Tattoo Factory a pignon sur rue et ne désemplit pas. Sarah, la tatoueuse est expérimentée et habituée des conventions et des pièces de toutes tailles. Au passage, elle participe cette année au Girl Ink Show: Une rafraichissante touche de féminité dans ce paysage. Dans son studio de Brunoy, Sarah, exerce son art avec passion. Une excellente adresse dans la région qui a su mêler profesionnalisme et convivialité.</p>
        {/if}
    </div>
    <div class=" divider mx-auto w-11/12"></div>
    <div>
        <h2 class=" font-fondamento text-lg ml-5 font-semibold" on:click={()=>{showTeam = !showTeam}} on:keypress>
            Equipe
            {#if !showTeam} 
            <i class="fa-solid fa-chevron-down"></i>
            {:else}
            <i class="fa-solid fa-chevron-up"></i>
            {/if}
        </h2>
    </div>
    <div class="divider mx-auto w-11/12"></div>
</main>