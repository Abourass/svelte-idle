<script lang="ts">
  // import declarations
  import {money} from '../stores/playerStore';
  import usdFormat from '../modules/formatter';

  // props declarations
  export let name: string;
  export let upgradesBought;
  export let initialCost: number;
  export let description: string;
  export let formatProduction = usdFormat;

  // reactive declarations
  $: cantBuy = cost > $money;
  $: cost = initialCost * Math.pow(100, $upgradesBought);

  // function declarations

  // update the values of `currencyProduced` and `numberBuildings`
  function updateNumbers(){
    money.update(m => m - cost);
    upgradesBought.update(u => u + 1);
  }
</script>

<style>
  .btn {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f2f2f2;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    color: #696969;
    font-weight: 300;
  }
  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
  }
  .btn:active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
  }
  .btn:active:after {
    box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  }
  button {
    border: 0;
  }

  .cantBuy {
    background: #555 !important;
    color: #736d66 !important;
    cursor: default;
  }
  button:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }

  .btn-wrapper:hover .button-flag {
    display: block;
  }

  .button-flag {
    padding: 10px;
    position: absolute;
    width: auto;
    white-space: nowrap;
    box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    background: #f2f2f2;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    transform-style: preserve-3d;
    z-index: 200;
    font-size: 0.9em;
    display: none;
    color: #696969;
  }
</style>

<div class="btn-wrapper">
<button on:click={updateNumbers} class="{cantBuy ? 'btn cantBuy' : 'btn'}" disabled="{cantBuy}">
  {name}
</button>
  <div class="button-flag">
    <h3>{name}</h3>
    <p>Costs {formatProduction(cost)}.</p>
    <p>Owned:{$upgradesBought}</p>
    <small class="italic">{description}</small>
  </div>
</div>
