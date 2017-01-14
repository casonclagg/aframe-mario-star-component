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
