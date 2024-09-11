<template>
    <div>
        <div class="graphic-content pl-4">
            <div class="graphic">
                <h2>Sales overview</h2>
                <canvas ref="canvas" id="c" height="400" width="600"></canvas>
            </div>
            <div class="slider">
                <h2>Slider</h2>
                <div class="slider-content">
                  <img :src="images[sliderIndex]">
                  <div class="arrow-parts">
                    <i class="fa-solid fa-chevron-left arrow" @click="leftSlider"></i>
                    <i class="fa-solid fa-chevron-right arrow" @click="rightSlider"></i>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator'
import tablePoints from '@/mixins/tabledata'

@Component
export default class YourClass extends Mixins(tablePoints) {
  mixins: [tablePoints]

  mounted () {
    const canvas = this.$refs.canvas as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
      this.drawPiecewiseLinearGraph(ctx)
    }
  }

  sliderIndex = 0

  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0j9BRl8uRQJIS5sGgpassT-Zesu2iAfls8w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2szJOtzkkG6aqNhxUux9PEusfLCTuXzVOw&s',
    'https://images.squarespace-cdn.com/content/v1/63744df06d8633737c23eb62/1668760207424-U0911K35L3PV60K11T9A/overview-philippine-banking.jpg'
  ]

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

  leftSlider (): void {
    if (this.sliderIndex !== 0) this.sliderIndex -= 1
    else this.sliderIndex = this.images.length - 1
  }

  rightSlider (): void {
    if (this.sliderIndex !== this.images.length - 1) this.sliderIndex += 1
    else this.sliderIndex = 0
  }
}

</script>

<style scoped lang="sass">

    .graphic-content
        display: flex
        align-items: center
        gap: 50px
        margin-right: 50px
        width: 100%

    .arrow
      padding: 15px
      border-radius: 50%
      border: 2px solid #000
      cursor: pointer

    .arrow:hover
      background-color: #c9c1c1

    .slider-content img
      width: 500px
      height: 400px
      margin-bottom: 10px

    .arrow-parts
      display: flex
      gap: 20px
</style>
