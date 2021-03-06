<script lang="ts">
  import {onMount} from 'svelte';
  import {money} from '../stores/playerStore'
  import usdFormat from '../modules/formatter';
  import {writable} from 'svelte/store';

  // Props
  export let name: string;
  export let tierBonus = writable(0);
  export let upgradeBonus = writable(0);
  export let currencyProduced = money;
  export let currencyRequired = money;
  export let buildings = writable(0);
  export let buildingsBought = writable(0);
  export let costMultiplier: number = 5
  export let costPerBuildingSum: number = 1;
  export let tickSpeed: number = 1000;
  export let buildingProduces: number = 1;
  export let formatProduction = usdFormat;

  // Reactive Declarations
  $: cost = ($buildingsBought + costPerBuildingSum) * costMultiplier;
  $: cantBuy = cost > $currencyRequired;
  $: buildingProduction = buildingProduces + Math.floor(tierBonus + $upgradeBonus);
  $: productionPerTick = $buildings * buildingProduction;
  $: usd = usdFormat(currencyProduced)
  $: formattedPerTick = formatProduction(productionPerTick)

  console.log(name, buildingProduces + Math.floor(tierBonus + $upgradeBonus), $upgradeBonus)

  // Game Fn
  const buyBuilding = (): void => {
    if ($currencyRequired >= cost){
      currencyRequired.update(val => val - cost);
      buildings.update(val => val + 1)
      buildingsBought.update(val => val + 1)
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
  <button on:click={buyBuilding} class="{cantBuy ? 'btn cantBuy' : 'btn'}" disabled={cantBuy} >Buy {name}</button>
  <div class="button-flag">
    <h3>{name}</h3>
    <p>{$buildings} {($buildings > 1) ? 'buildings' : 'building'} ({$buildingsBought} bought), next one cost {usdFormat(cost)}</p>
    <p>You are currently generating {formattedPerTick} per tick (<small>+{formatProduction(buildingProduction)}/{tickSpeed} ms</small>)</p>
  </div>
</div>
