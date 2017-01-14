## aframe-mario-star-component

A Mario Star Texture component for [A-Frame](https://aframe.io).

### API

| Property  | Description                    | Default Value |
| --------- | ------------------------------ | ------------- |
| waitTicks | ticks before next color change | 4             |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/casonclagg/aframe-mario-star-component/master/dist/aframe-mario-star-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-box width="1" height="1" depth="1" width="0 0 -2" mario-star="waitTicks: 4"></a-box>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-mario-star-component
```

Then register and use.

```js
require('aframe');
require('aframe-mario-star-component');
```
