<script lang='ts'>
  import {onMount} from 'svelte';
  import {money, corpse} from './stores/playerStore';
  import {
    hotDogStandsOwned,
    hotDogStandsBought,
    tacoTrucksOwned,
    tacoTrucksBought,
    burgerShacksOwned,
    burgerShacksBought,
    mortuariesOwned,
    mortuariesBought,
    tacoFranchiseOwned,
    tacoFranchiseBought
  } from './stores/buildingStore';
  import {firstRowUpgrades, secondRowUpgrades, hotDogBunsBought} from './stores/upgradeStore';
  import Building from './components/Building.svelte';
  import usdFormat, {plural} from './modules/formatter';
  import Upgrade from './components/Upgrade.svelte';

  // Variables
  let secondsGoneBy: number = 0;
  let firstRowBonusPerBuilding = 0.25;
  let secondRowBonusPerBuilding = 1;

  // Reactive declarations
  $: firstRowBuildingsBought = $hotDogBunsBought + $tacoTrucksBought + $burgerShacksBought;
  $: secondRowBuildingsBought = $mortuariesBought + $tacoFranchiseBought;
  $: firstRowBonus = (firstRowBuildingsBought * firstRowBonusPerBuilding) * $firstRowUpgrades;
  $: secondRowBonus = (secondRowBuildingsBought * secondRowBonusPerBuilding) * $secondRowUpgrades;

  // Game Fn
  const addMoney = () => $money += 1;

  // Time Fn
  onMount(() => {
    const interval = setInterval(() => secondsGoneBy++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .App {
    text-align: center;
  }
  .App code {
    background: #0002;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .App p {
    margin: 0.4rem;
  }
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  @keyframes App-logo-pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
  .container {
    width: 550px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f2f2f2;
    transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 -6px 10px white, 0 4px 15px rgba(0, 0, 0, 0.15);
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
    box-shadow: inset 0 -2px 5px white, inset 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  button {
    border: 0;
  }

  button:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }
</style>

<div class="App">
  <header class="App-header">
    <p>Page has been open for <code>{secondsGoneBy}</code> seconds</p>
    <p>You currently have: {usdFormat($money)}</p>
    {#if $corpse > 0}
      <p>You currently have: {$corpse} {plural('corpse', $corpse)}</p>
    {/if}

    <div class="container">
      <button on:click={addMoney} class="btn"> Add money </button>

      <Building
        name="Hot Dog Stand"
        buildings={hotDogStandsOwned}
        buildingsBought={hotDogStandsBought}
        tierBonus={firstRowBonus}
        upgradeBonus={hotDogBunsBought}
      />

      <Building
        name="Taco Truck"
        buildings={tacoTrucksOwned}
        buildingsBought={tacoTrucksBought}
        buildingProduction="3"
        costMultiplier="22.5"
        tierBonus={firstRowBonus}
      />

      <Building
        name="Burger Shack"
        buildings={burgerShacksOwned}
        buildingsBought={burgerShacksBought}
        buildingProduction="17"
        costMultiplier="25"
        costPerBuildingSum="2"
        tierBonus={firstRowBonus}
      />
    </div>

    <div class="container">
      <Building
        name="Mortuary"
        buildings={mortuariesOwned}
        buildingsBought={mortuariesBought}
        currencyProduced={corpse}
        costMultiplier="50"
        tickSpeed="15000"
        formatProduction="{(amount) => `${amount} ${plural('corpse', amount)}`}"
        tierBonus={secondRowBonus}
      />

      <Building
        name="Taco Franchise"
        buildings={tacoFranchiseOwned}
        buildingsBought={tacoFranchiseBought}
        currencyProduced={tacoTrucksOwned}
        costMultiplier="1000"
        costPerBuildingSum="5"
        formatProduction="{(amount) => `${amount} ${plural('taco truck', amount)}`}"
        tierBonus={secondRowBonus}
      />
    </div>

    <div class="container">
      <Upgrade
        name="Condiment Supplier"
        numberOfUpgradeBought={firstRowUpgrades}
        description="Now you don't need to make the 'Mayo' yourself!"
        initialCost="100"
      />

      <Upgrade
        name="Hot Dog Buns"
        numberOfUpgradeBought={hotDogBunsBought}
        description="No more forcing customers to hold the dog in their hands!"
        initialCost="15"
      />
    </div>
  </header>
</div>
