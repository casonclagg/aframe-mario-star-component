/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/* global AFRAME */

	if (typeof AFRAME === 'undefined') {
	    throw new Error('Component attempted to register before AFRAME was available.');
	}

	AFRAME.registerComponent('mario-star', {
	    schema: {
	        waitTicks: {
	            type: 'int',
	            default: 4
	        }
	    },

	    multiple: false,

	    init: function() {

	        // TODO - Let user pass this in
	        this.colors = [
	            "#AAFF00",
	            "#FFAA00",
	            "#FF00AA",
	            "#FF0",
	            "#AA00FF",
	            "#00AAFF"
	        ]
	        if (!this.canvas) {
	            this.canvas = document.createElement("canvas")
	        }
	        this.tickCount = 0
	        this.colorIndex = 0
	        this.canvas.width = 1
	        this.canvas.height = 1
	        this.ctx = this.canvas.getContext("2d")
	        this.texture = new THREE.Texture(this.canvas)
	        this.material = new THREE.MeshBasicMaterial({map: this.texture, transparent: true})
	        this.el.object3D.children[0].material = this.material

	    },

	    getNextColor: function() {
	        this.colorIndex++
	        return this.colors[this.colorIndex % this.colors.length]
	    },

	    tick: function() {
	        this.tickCount++
	        if (this.tickCount >= this.data.waitTicks) {
	            this.tickCount = 0
	            this.ctx.fillStyle = this.getNextColor()
	            this.ctx.fillRect(0, 0, 1, 1)
	            this.texture.needsUpdate = true
	        }
	    }
	});


/***/ }
/******/ ]);