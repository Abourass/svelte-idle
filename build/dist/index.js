var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// _snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// _snowpack/pkg/common/index-4f6f3a34.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var flushing = false;
var seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var outroing = new Set();
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function mount_component(component, target, anchor) {
  const {fragment, on_mount, on_destroy, after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);
    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance2 ? instance2(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }
  set_current_component(parent_component);
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// dist/App.svelte.js
function create_fragment(ctx) {
  let div2;
  let header;
  let p0;
  let t0;
  let code;
  let t1;
  let t2;
  let t3;
  let p1;
  let t4;
  let t5_value = ctx[6](ctx[0]) + "";
  let t5;
  let t6;
  let p2;
  let t7;
  let t8;
  let t9_value = ctx[6](ctx[2]) + "";
  let t9;
  let t10;
  let p3;
  let t11;
  let t12_value = ctx[6](ctx[5]) + "";
  let t12;
  let t13;
  let t14;
  let div1;
  let button0;
  let t16;
  let button1;
  let t17;
  let button1_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      header = element("header");
      p0 = element("p");
      t0 = text("Page has been open for ");
      code = element("code");
      t1 = text(ctx[3]);
      t2 = text(" seconds.");
      t3 = space();
      p1 = element("p");
      t4 = text("You currently have: ");
      t5 = text(t5_value);
      t6 = space();
      p2 = element("p");
      t7 = text(ctx[1]);
      t8 = text(" building bought, next one cost ");
      t9 = text(t9_value);
      t10 = space();
      p3 = element("p");
      t11 = text("You are currently generating ");
      t12 = text(t12_value);
      t13 = text(" per tick");
      t14 = space();
      div1 = element("div");
      button0 = element("button");
      button0.innerHTML = `<div class="label-container">Add money</div>`;
      t16 = space();
      button1 = element("button");
      t17 = text("Buy Building");
      attr(code, "class", "svelte-dq3gdz");
      attr(p0, "class", "svelte-dq3gdz");
      attr(p1, "class", "svelte-dq3gdz");
      attr(p2, "class", "svelte-dq3gdz");
      attr(p3, "class", "svelte-dq3gdz");
      attr(button0, "class", "btn svelte-dq3gdz");
      button1.disabled = ctx[4];
      attr(button1, "class", button1_class_value = "" + (null_to_empty(ctx[4] ? "btn cantBuy" : "btn") + " svelte-dq3gdz"));
      attr(div1, "class", "container svelte-dq3gdz");
      attr(header, "class", "App-header svelte-dq3gdz");
      attr(div2, "class", "App svelte-dq3gdz");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, header);
      append(header, p0);
      append(p0, t0);
      append(p0, code);
      append(code, t1);
      append(p0, t2);
      append(header, t3);
      append(header, p1);
      append(p1, t4);
      append(p1, t5);
      append(header, t6);
      append(header, p2);
      append(p2, t7);
      append(p2, t8);
      append(p2, t9);
      append(header, t10);
      append(header, p3);
      append(p3, t11);
      append(p3, t12);
      append(p3, t13);
      append(header, t14);
      append(header, div1);
      append(div1, button0);
      append(div1, t16);
      append(div1, button1);
      append(button1, t17);
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[7]),
          listen(button1, "click", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 8)
        set_data(t1, ctx2[3]);
      if (dirty & 1 && t5_value !== (t5_value = ctx2[6](ctx2[0]) + ""))
        set_data(t5, t5_value);
      if (dirty & 2)
        set_data(t7, ctx2[1]);
      if (dirty & 4 && t9_value !== (t9_value = ctx2[6](ctx2[2]) + ""))
        set_data(t9, t9_value);
      if (dirty & 32 && t12_value !== (t12_value = ctx2[6](ctx2[5]) + ""))
        set_data(t12, t12_value);
      if (dirty & 16) {
        button1.disabled = ctx2[4];
      }
      if (dirty & 16 && button1_class_value !== (button1_class_value = "" + (null_to_empty(ctx2[4] ? "btn cantBuy" : "btn") + " svelte-dq3gdz"))) {
        attr(button1, "class", button1_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      run_all(dispose);
    }
  };
}
var tickSpeed = 1e3;
var buildingProduction = 1;
function instance($$self, $$props, $$invalidate) {
  let cost;
  let cantBuy;
  let productionPerTick;
  let money = 20;
  let secondsGoneBy = 0;
  let numberOfBuildings = 0;
  const moneyFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
  const usdFormat = (money2) => moneyFormatter.format(money2);
  const addMoney = () => $$invalidate(0, money += 1);
  const buyBuilding = () => {
    if (money >= cost) {
      $$invalidate(0, money -= cost);
      $$invalidate(1, numberOfBuildings++, numberOfBuildings);
    }
  };
  const income = () => {
    $$invalidate(0, money += productionPerTick);
    setTimeout(income, tickSpeed);
  };
  onMount(() => {
    const interval = setInterval(() => $$invalidate(3, secondsGoneBy++, secondsGoneBy), 1e3);
    income();
    return () => {
      clearInterval(interval);
    };
  });
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $:
        $$invalidate(2, cost = (numberOfBuildings + 1) * 5);
    }
    if ($$self.$$.dirty & 5) {
      $:
        $$invalidate(4, cantBuy = cost > money);
    }
    if ($$self.$$.dirty & 2) {
      $:
        $$invalidate(5, productionPerTick = numberOfBuildings * buildingProduction);
    }
  };
  return [
    money,
    numberOfBuildings,
    cost,
    secondsGoneBy,
    cantBuy,
    productionPerTick,
    usdFormat,
    addMoney,
    buyBuilding
  ];
}
var App = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
};
var App_svelte_default = App;

// dist/index.js
import.meta.env = env_exports;
var app = new App_svelte_default({
  target: document.body
});
var dist_default = app;
if (void 0) {
  (void 0).accept();
  (void 0).dispose(() => {
    app.$destroy();
  });
}
export {
  dist_default as default
};
