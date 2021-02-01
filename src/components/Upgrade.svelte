// https://www.julienrouse.com/blog/tutorial-for-idle-game-svelte-part3/


<script>
  // import declarations
  import { money } from './store.js';
  import { currencyToString } from './utils.js'

  // props declarations
  export let name;
  export let numberOfUpgradeBought;

  // reactive declarations
  $: cantBuy = cost > $money;
  $: cost = ($numberOfUpgradeBought + 1) * 5;

  // function declarations

  // update the value of `currencyProduced` to the store, adding `n` to it.
  function updateMoney(n){
    money.update(m => m + n);
  }

  // update the values of `currencyProduced` and `numberBuildings`
  function updateNumbers(){
    updateMoney(-cost);
    numberOfUpgradeBought.update(n => n + 1);
  }
</script>

<style>
  button {
    outline: 1px solid black;
    background: aquamarine;
    cursor: pointer;
  }

  button.cantbuy {
    background: #555;
    color: #DDD;
    cursor: default;
  }
</style>

<button on:click={updateNumbers} class:cantbuy={cantBuy} disabled={cantBuy}>
  <h3>{name}</h3>
  <p>costs {cost}$.</p>
  <p>Owned:{$numberOfUpgradeBought}</p>
</button>
