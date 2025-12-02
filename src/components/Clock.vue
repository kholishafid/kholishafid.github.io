<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from "vue";

const secondHand = useTemplateRef("seconds");
const minuteHand = useTemplateRef("minutes");
const hourHand = useTemplateRef("hours");

let timeoutInterval: NodeJS.Timeout;

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondRotation = (360 / 60) * seconds;

  console.log({ hours, minutes, seconds });
  if (secondHand.value) {
    secondHand.value.style.rotate = `${secondRotation}deg`;
    secondHand.value.style.transform = `translateZ(0px)`;
  }
  if (minuteHand.value) {
    minuteHand.value.style.rotate = `${minuteRotation}deg`;
    minuteHand.value.style.transform = `translateZ(0px)`;
  }
  if (hourHand.value) {
    hourHand.value.style.rotate = `${hourRotation}deg`;
    hourHand.value.style.transform = `translateZ(0px)`;
  }

  timeoutInterval = setTimeout(updateClock, 1000);
}

onMounted(() => {
  updateClock();
});

onUnmounted(() => {
  clearTimeout(timeoutInterval);
});
</script>

<template>
  <section class="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      class="analog-clock analog-clock--light size-16"
    >
      <g>
        <g class="analog-clock__marker analog-clock__marker-hour" stroke="#fff">
          <path d="M60.016 1.016v3"></path>
          <path d="M60.016 116.016v3"></path>
          <path d="M89.516 8.92l-1.5 2.598"></path>
          <path d="M32.016 108.513l-1.5 2.598"></path>
          <path d="M111.111 30.516l-2.598 1.5"></path>
          <path d="M11.518 88.016l-2.598 1.5"></path>
          <path d="M119.016 60.016h-3"></path>
          <path d="M4.016 60.016h-3"></path>
          <path d="M111.111 89.516l-2.598-1.5"></path>
          <path d="M11.518 32.016l-2.598-1.5"></path>
          <path d="M89.516 111.111l-1.5-2.598"></path>
          <path d="M32.016 11.518l-1.5-2.598"></path>
        </g>
        <g
          class="analog-clock__marker analog-clock__marker-second"
          stroke="#aaa"
        >
          <path d="M66.183 1.339l-.21 1.989"></path>
          <path d="M54.057 116.703l-.209 1.989"></path>
          <path d="M72.282 2.305l-.415 1.956"></path>
          <path d="M48.165 115.77l-.416 1.956"></path>
          <path d="M78.248 3.903l-.618 1.902"></path>
          <path d="M42.402 114.226l-.618 1.902"></path>
          <path d="M84.013 6.117L83.2 7.944"></path>
          <path d="M36.832 112.088l-.814 1.827"></path>
          <path d="M84.013 113.915l-.813-1.827"></path>
          <path d="M36.832 7.944l-.814-1.827"></path>
          <path d="M78.248 116.128l-.618-1.902"></path>
          <path d="M42.402 5.805l-.618-1.902"></path>
          <path d="M72.282 117.726l-.415-1.956"></path>
          <path d="M48.165 4.261l-.416-1.956"></path>
          <path d="M66.183 118.692l-.21-1.989"></path>
          <path d="M54.057 3.328l-.209-1.99"></path>
          <path d="M107.748 94.695l-1.618-1.176"></path>
          <path d="M13.902 26.512l-1.618-1.176"></path>
          <path d="M103.861 99.494l-1.486-1.338"></path>
          <path d="M17.656 21.875l-1.486-1.338"></path>
          <path d="M99.494 103.861l-1.338-1.486"></path>
          <path d="M21.875 17.656l-1.338-1.486"></path>
          <path d="M94.695 107.748l-1.176-1.618"></path>
          <path d="M26.512 13.902l-1.176-1.618"></path>
          <path d="M118.692 66.183l-1.989-.21"></path>
          <path d="M3.328 54.057l-1.99-.209"></path>
          <path d="M117.726 72.282l-1.956-.415"></path>
          <path d="M4.261 48.165l-1.956-.416"></path>
          <path d="M116.128 78.248l-1.902-.618"></path>
          <path d="M5.805 42.402l-1.902-.618"></path>
          <path d="M113.915 84.013l-1.827-.813"></path>
          <path d="M7.943 36.832l-1.827-.814"></path>
          <path d="M113.915 36.018l-1.827.814"></path>
          <path d="M7.944 83.2l-1.828.813"></path>
          <path d="M116.128 41.784l-1.902.618"></path>
          <path d="M5.805 77.63l-1.902.618"></path>
          <path d="M117.726 47.749l-1.956.416"></path>
          <path d="M4.261 71.867l-1.956.415"></path>
          <path d="M118.692 53.849l-1.989.209"></path>
          <path d="M3.328 65.974l-1.99.209"></path>
          <path d="M94.695 12.284l-1.176 1.618"></path>
          <path d="M26.512 106.13l-1.176 1.618"></path>
          <path d="M99.494 16.17l-1.338 1.486"></path>
          <path d="M21.875 102.375l-1.338 1.486"></path>
          <path d="M103.861 20.537l-1.486 1.338"></path>
          <path d="M17.656 98.156l-1.486 1.338"></path>
          <path d="M107.748 25.336l-1.618 1.176"></path>
          <path d="M13.902 93.52l-1.618 1.175"></path>
        </g>
        <g class="analog-clock__numbers analog-clock__numbers--major">
          <text
            x="60"
            y="15"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            12
          </text>
          <text
            x="105"
            y="60"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            3
          </text>
          <text
            x="60"
            y="105"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            6
          </text>
          <text
            x="15"
            y="60"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            9
          </text>
        </g>
        <g class="analog-clock__numbers analog-clock__numbers--minor">
          <text
            x="82"
            y="21"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            1
          </text>
          <text
            x="99"
            y="37"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            2
          </text>
          <text
            x="99"
            y="82"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            4
          </text>
          <text
            x="82"
            y="99"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            5
          </text>
          <text
            x="38"
            y="99"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            7
          </text>
          <text
            x="21"
            y="82"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            8
          </text>
          <text
            x="21"
            y="38"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            10
          </text>
          <text
            x="37"
            y="21"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="12"
          >
            11
          </text>
        </g>
        <g class="analog-clock__hands" transform="translate(60, 60)">
          <path
            d="M 0 0 L 0 -50"
            class="analog-clock__hand analog-clock__hand--minute"
            data-analogclock-type="minute"
            ref="minutes"
          ></path>
          <path
            d="M 0 0 L 0 -40"
            class="analog-clock__hand analog-clock__hand--hour"
            data-analogclock-type="hour"
            ref="hours"
          ></path>
          <path
            d="M3 0 a3 3 0 11-6 0 3 3 0 016 0z"
            class="analog-clock__pin"
          ></path>
          <path
            d="M1 00 a1 1 0 10-2 0 1 1 0 002 0z"
            class="analog-clock__pin-inner"
          ></path>
          <path
            d="M 0 0 L 0 -50"
            class="analog-clock__hand analog-clock__hand--seconds"
            data-analogclock-type="seconds"
            ref="seconds"
          ></path>
        </g>
      </g>
    </svg>
  </section>
</template>

<style scoped>
.analog-clock__hand {
  transform-origin: bottom left;
  transform-box: fill-box;
  stroke: white;
  stroke-width: 2;
}

.analog-clock__hand--seconds {
  stroke: red;
}

.analog-clock__numbers {
  fill: white;
}

.analog-clock__pin {
  fill: white;
}

.analog-clock__pin-inner {
  fill: #333;
}
</style>
