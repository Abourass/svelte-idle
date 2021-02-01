<script lang="ts">
  // import declarations
  import {money} from '../stores/playerStore';
  import usdFormat from '../modules/formatter';

  // props declarations
  export let name: string;
  export let amountBought;
  export let initialCost: number;
  export let description: string;
  export let formatProduction = usdFormat;

  // reactive declarations
  $: cantBuy = cost > $money;
  $: cost = initialCost * Math.pow(100, $amountBought);

  // function declarations

  // update the values of `currencyProduced` and `numberBuildings`
  function updateNumbers(){
    money.update(money => money - cost);
    amountBought.update(n => n + 1);
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

  .italic {
    font-style: italic;
  }
</style>

<div class="btn-wrapper">
<button on:click={updateNumbers} class="{cantBuy ? 'btn cantBuy' : 'btn'}" disabled="{cantBuy}"></button>
  <div class="button-flag">
    <h3>{name}</h3>
    <p>Costs {formatProduction(cost)}.</p>
    <p>Owned:{$amountBought}</p>
    <small class="italic">{description}</small>
  </div>
</div>
