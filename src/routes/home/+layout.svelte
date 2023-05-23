<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores"

    /**
     * @type {string}
     */

     let activePage

    const goToMaison = async () => {
        await goto('/home/maison')
        activePage = $page.url.pathname.split('/')[2]
    } 

    const goToBrunoy = async () => {
        await goto('/home/brunoy')
        activePage = $page.url.pathname.split('/')[2]
    }
    

</script>

<main>
    <header>
        <nav class="flex flex-row flex-nowrap">
            <div class=" w-1/2 text-center py-3 border-b-2 hover:cursor-pointer hover:shadow-lg hover:border-emerald-700 peer-hover:border-none text-xl font-semibold font-fondamento {activePage === "maison" ? "active" : ""}" on:click={goToMaison} on:keypress>Maisons-Alfort</div>
            <div class=" w-1/2 text-center py-3 border-b-2 hover:cursor-pointer peer-hover:border-none hover:shadow-lg hover:border-emerald-700 text-xl font-semibold font-fondamento {activePage === "brunoy" ? "active" : ""}" on:click={goToBrunoy} on:keypress>Brunoy</div>
        </nav>
    </header>
    <slot/>
</main>

<style lang="postcss">
    .active {
        background-color: black;
        color: goldenrod;
        --tw-border-opacity: 1;
        border-color: rgb(4 120 87 / var(--tw-border-opacity));
    }
</style>