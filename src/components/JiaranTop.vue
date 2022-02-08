<script setup lang="ts">
import { ref, onMounted } from "vue";
import topUrl from "../assets/top.gif";
import middleUrl from "../assets/middle.png";
import bodyUrl from "../assets/body.gif";

const st_height = ref(0);
const init_height = ref(0);
const grow_height = ref(0);
const np = "勇敢牛牛 不怕困难";
const mua = ref("偷偷mua然然一下");
const st_show = ref(false);
const egg = ref(false);
const doc = document.documentElement;
var diana_body: HTMLElement | null;
var factor = 1;

onMounted(() => {
  diana_body = document.getElementById("diana_body");
  setHeight();
  window.location.href = "#foot";
  init_height.value = 100 - grow_height.value;
  window.addEventListener("scroll", growup);
  window.addEventListener("resize", setHeight);
  window.addEventListener("load", () => {
    window.scrollTo({ top: doc.scrollHeight });
  });
  window.addEventListener("beforeunload", () => {
    window.scrollTo({ top: doc.scrollHeight });
  });
});

//初生
function setHeight() {
  var body_Width = diana_body!.clientWidth;
  if (body_Width < 310) {
    factor = body_Width / 310;
  }
  doc.style.fontSize = 16 * factor + "px";
  if (doc.clientHeight < 730 * factor) {
    st_height.value = doc.clientHeight - 80 * factor;
  } else {
    st_height.value = 650 * factor;
  }
  var height = (doc.clientHeight - 500 * factor) / (50 * factor);
  for (let index = grow_height.value; index < height; index++) {
    growup();
  }
}
//长高
function growup() {
  if (
    doc.scrollTop < 100 * factor &&
    (egg.value || grow_height.value + init_height.value < 180)
  ) {
    grow_height.value++;
    doc.scrollTop += 50 * factor;
  }
  if (diana_body!.getBoundingClientRect().top < 150 * factor) {
    st_show.value = false;
  } else {
    st_show.value = true;
  }
}
//触摸草莓
function touchStrawberry() {
  if (doc.scrollHeight - doc.scrollTop - doc.clientHeight < 10) {
    location.reload();
  } else {
    window.scrollTo({ top: doc.scrollHeight, behavior: "smooth" });
  }
}
//触摸呆毛
function touchTop() {
  var len = mua.value.length;
  if (len < 9) {
    mua.value = mua.value + np[len];
  } else if (mua.value != np) {
    mua.value = "";
  } else if (mua.value == np) {
    egg.value = true;
    growup();
    window.scrollTo({ top: 100 });
  }
}
</script>

<template>
  <div
    id="stature"
    v-show="st_show"
    :style="{ bottom: st_height + 'px' }"
    @click="touchStrawberry()"
  >
    🍓:{{ grow_height + init_height }}cm
  </div>
  <div class="diana">
    <img
      alt="Diana top"
      style="cursor: pointer"
      @click="touchTop()"
      :src="grow_height + init_height == 180 ? topUrl : middleUrl"
    />
  </div>
  <div class="diana" v-for="index of grow_height">
    <img alt="Diana middle" :src="middleUrl" />
  </div>
  <div class="diana" id="diana_body">
    <img alt="Diana body" :src="bodyUrl" />
  </div>
  <div
    id="foot"
    style="color: #ffffff; font-size: 2rem; font-weight: 700"
    :class="{ niu: egg }"
  >
    {{ mua }}
  </div>
</template>

<style scoped>
.diana {
  line-height: 0;
}
.diana img {
  height: auto;
  max-width: 100%;
}
.niu {
  background-image: linear-gradient(to bottom, #e799b0, #db7d74);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#stature {
  right: 0;
  left: 10rem;
  width: 7rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
  margin: auto;
  cursor: pointer;
  position: fixed;
  z-index: 1;
}
</style>
