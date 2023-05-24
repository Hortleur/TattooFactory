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
        <div class="navbar bg-base-100">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a href="/home">Accueil</a></li>
                  <li tabindex="0">
                    <a class="justify-between">
                      Shops
                      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </a>
                    <ul class="p-2 bg-black">
                      <li><a href="/home/maison">Maisons-Alfort</a></li>
                      <li><a href="/home/brunoy">Brunoy</a></li>
                    </ul>
                  </li>
                  <li><a>Blog</a></li>
                </ul>
              </div>
              <a class="btn btn-ghost normal-case text-xl font-fondamento" href="/home">Tatto Factory</a>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li><a href="/home">Accueil</a></li>
                <li tabindex="0">
                  <a>
                    Shops
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul class="p-2 bg-black">
                    <li><a href="/home/maison">Maisons-Alfort</a></li>
                    <li><a href="/home/brunoy">Brunoy</a></li>
                  </ul>
                </li>
                <li><a>Blog</a></li>
              </ul>
            </div>
          </div>
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