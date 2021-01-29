<script lang="ts">
  import { onMount } from 'svelte';
  import {money} from '../playerStore'
  import usdFormat from '../modules/formatter';

  // Props
  export let name: string;
  export let currencyProduced = money;
  export let currencyRequired = money;
  export let tickSpeed: number = 1000;
  export let buildingProduction: number = 1;
  export let formatProduction = usdFormat;

  // Variables
  let numberOfBuildings: number = 0;

  // Reactive Declarations
  $: cost = (numberOfBuildings + 1) * 5;
  $: cantBuy = cost > $currencyRequired;
  $: productionPerTick = numberOfBuildings * buildingProduction;

  // Game Fn
  const buyBuilding = (): void => {
    if ($currencyRequired >= cost){
      currencyRequired.update(val => val - cost);
      numberOfBuildings++;
    }
  }
  const generateIncome = (): void => {
    currencyProduced.update(val => val + productionPerTick);
    setTimeout(generateIncome, tickSpeed);
  }

  // Time Fn
  onMount(() => {
    generateIncome()
  });
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
  <button on:click={buyBuilding} disabled={cantBuy} class="{cantBuy ? 'btn cantBuy' : 'btn'}">Buy {name}</button>
  <div class="button-flag">
    <h3>{name}</h3>
    <p>{numberOfBuildings} {(numberOfBuildings > 1) ? 'buildings' : 'building'} bought, next one cost {usdFormat(cost)}</p>
    <p>You are currently generating {formatProduction ? formatProduction(productionPerTick) : productionPerTick} per tick</p>
  </div>
</div>
