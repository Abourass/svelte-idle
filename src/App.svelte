<script lang='typescript'>
  import { onMount } from 'svelte';

  // Variables
  let money: number = 20;
  let tickSpeed: number = 1000;
  let secondsGoneBy: number = 0;
  let numberOfBuildings: number = 0;
  let buildingProduction: number = 1;

  // Reactive Declarations
  $: cost = (numberOfBuildings + 1) * 5;
  $: cantBuy = cost > money;
  $: productionPerTick = numberOfBuildings * buildingProduction;

  // Formatters
  const moneyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
  const usdFormat = (money: number): string => moneyFormatter.format(money);

  // Game Fn
  const addMoney = () => money += 1;
  const buyBuilding = (): void => {
    if (money >= cost){
      money -= cost;
      numberOfBuildings++;
    }
  }

  const income = (): void => {
    money += productionPerTick;
    setTimeout(income, tickSpeed);
  }

  // Time Fn
  onMount(() => {
    const interval = setInterval(() => secondsGoneBy++, 1000);
    income()
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f2f2f2;
  }
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
    min-height: 100vh;
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
  button {
    border: 0;
  }
  .container {
    width: 550px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .container .btn {
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
  .container .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
  }
  .container .btn:active {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
  }
  .container .btn:active:after {
    box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);
  }

  .container .cantBuy {
    background: #555 !important;
    color: #736d66 !important;
    cursor: default;
  }
  button:focus {
    border: none;
    outline: 0 !important;
    outline-style: none;
  }

</style>

<div class="App">
  <header class="App-header">
    <p>Page has been open for <code>{secondsGoneBy}</code> seconds.</p>
    <p>You currently have: {usdFormat(money)}</p>
    <p>{numberOfBuildings} building bought, next one cost {usdFormat(cost)}</p>
    <p>You are currently generating {usdFormat(productionPerTick)} per tick</p>
    <div class="container">
      <button on:click={addMoney} class="btn">
        <div class="label-container">
          Add money
        </div>
      </button>
      <button on:click={buyBuilding} disabled={cantBuy} class="{cantBuy ? 'btn cantBuy' : 'btn'}">Buy Building</button>
    </div>

  </header>
</div>
