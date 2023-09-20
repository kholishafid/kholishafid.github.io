<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
const secondHand = ref()
const minuteHand = ref()
const hourHand = ref()
const timeNow = ref<string>('12:00:00')

let timeoutInterval: number;

function zeroPadding(num: number, digit: number = 1):string {
    const limit = Math.pow(10, digit)
  
    return limit > num ? `0${num}` : num.toString()
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  timeNow.value = `${zeroPadding(hours)}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`

  const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60) - 90;
  const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60) - 90;
  const secondRotation = (360 / 60) * seconds;


  if (secondHand.value) {
    secondHand.value.style.transform = `rotateZ(${secondRotation}deg)`;
  }
  if (minuteHand.value) {
    minuteHand.value.style.transform = `rotateZ(${minuteRotation}deg)`
  }
  if (hourHand.value) {
    hourHand.value.style.transform = `rotateZ(${hourRotation}deg)`
  }

  timeoutInterval = setTimeout(updateClock, 1000);
}

onMounted(() => {
  updateClock();
})

onUnmounted(() => {
  clearTimeout(timeoutInterval)
})
</script>

<template>
  <section class="flex items-center gap-2">
    <div class="w-5 h-5 aspect-square rounded-full border-[1.5px] border-white relative bg-white/[0.08]">
      <div
        ref="hourHand"
        class="absolute inset-0 grid place-items-center"
      >
        <span
          class="hand hand--hour w-1/2 h-[1px] rounded"
        />
      </div>
      <div
        ref="minuteHand"
        class="absolute inset-0 grid place-items-center"
      >
        <span
          class="hand hand--minute w-[80%] h-[1px] rounded"
        />
      </div>
      <div
        ref="secondHand"
        class="absolute inset-0 grid place-items-center"
      >
        <span
          class="hand hand--seconds w-full h-[1px]"
        />
      </div>
      <div class="absolute inset-0 grid place-items-center">
        <span class="bg-white rounded-full h-[2px] w-[2px]" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hand--seconds {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, rgba(130,171,89,1) 50%);
}

.hand--minute, .hand--hour {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 50%);
}

.hand {
  transform: rotate(-90deg);
}
</style>
