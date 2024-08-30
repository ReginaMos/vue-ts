<template>
    <div>
        <div class="graphic-content pl-4">
            <div class="graphic">
                <h2>Sales overview</h2>
                <canvas ref="canvas" id="c" height="400" width="600"></canvas>
            </div>
            <div class="slider">
                <h2>Slider</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class YourClass extends Vue {
  mounted () {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
      this.drawPiecewiseLinearGraph(ctx)
    }
  }

  drawPiecewiseLinearGraph (ctx: CanvasRenderingContext2D) {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Define piecewise linear segments
    const segments = [
      { x1: 50, y1: 450, x2: 150, y2: 300 },
      { x1: 150, y1: 300, x2: 250, y2: 150 },
      { x1: 250, y1: 150, x2: 350, y2: 200 }
    ]

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(40, 20)
    ctx.lineTo(40, height - 40)
    ctx.lineTo(width - 20, height - 40)
    ctx.stroke()

    // Draw piecewise segments
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 2
    ctx.beginPath()
    for (const segment of segments) {
      ctx.moveTo(segment.x1, height - segment.y1)
      ctx.lineTo(segment.x2, height - segment.y2)
    }
    ctx.stroke()
  }
}

</script>

<style scoped lang="sass">

    .graphic-content
        display: flex

</style>
