# Vue-CSS.gg 👋

VueJS wrapper for [css.gg](https://css.gg) icons

[![NPM version](https://img.shields.io/npm/v/vue-css.gg.svg?style=flat)](https://npmjs.com/package/vue-css.gg) [![NPM downloads](https://img.shields.io/npm/dm/vue-css.gg.svg?style=flat)](https://npmjs.com/package/vue-css.gg)


<br>

## Installation 👨‍💻

```bash
// NPM
npm i vue-css.gg

// Yarn
yarn add vue-css.gg
```
<br>

## Usage 💃🕺

```javascript
// register the plugin on vue
import GGIcons from 'vue-css.gg';

Vue.use(GGIcons)
```

```javascript
// you can call it like this in your template
<GGIcons name="boy" size="48" color="#4572C9" rotate="0"/>

<GGIcons name="software-download" size="96" color="red" rotate="30"/>
```
<br>

## Icons 🔗

👉 [https://css.gg/app](https://css.gg/app)<br/>
👉 [https://vue-cssgg.isuru.info](https://vue-cssgg.isuru.info)



<br>

## Props ⚙️

|  Name | Description | Type | Default | Accepted values |
|---|---|--- | --- | --- |
|`name`  | String  | `String` | `null`  | - |
|  `size` | Icon size  | `String`, `Number` | `24` | - |
| `fill` | Color of icon | `String` | `black` | `rgb()`/`rgba()`/`#000`/`html colors` |
| `rotate` | Icon rotation | `Number` | `null` | `0` to `360` |
