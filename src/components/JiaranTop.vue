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
var doc = document.documentElement;

onMounted(() => {
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
  var height;
  var factor = 1;
  if (doc.clientWidth < 310) {
    factor = doc.clientWidth / 310;
  }
  if (doc.clientHeight < 700 * factor) {
    st_height.value = doc.clientHeight - 100;
  } else {
    st_height.value = 600;
  }
  height = (doc.clientHeight - 500 * factor) / (50 * factor);
  for (let index = grow_height.value; index < height; index++) {
    growup();
  }
}
//长高
function growup() {
  if (
    doc.scrollTop < 100 &&
    (egg.value || grow_height.value + init_height.value < 180)
  ) {
    grow_height.value++;
    doc.scrollTop += 50;
  }
  if (doc.scrollHeight - doc.scrollTop < 700) {
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
  <div class="diana" @click="touchTop()">
    <img
      alt="Diana top"
      style="cursor: pointer"
      :src="grow_height + init_height == 180 ? topUrl : middleUrl"
    />
  </div>
  <div class="diana" v-for="index of grow_height">
    <img alt="Diana middle" :src="middleUrl" />
  </div>
  <div class="diana">
    <img alt="Diana body" :src="bodyUrl" />
  </div>
  <div id="foot" style="color: #ffffff" :class="{ niu: egg }">{{ mua }}</div>
</template>

<style scoped>
.diana {
  line-height: 0;
}
.niu {
  font-size: 25px;
  font-weight: 700;
  background-image: linear-gradient(to bottom, #e799b0, #db7d74);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#stature {
  font-size: 20px;
  left: 155px;
  right: 0px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin: auto;
  cursor: pointer;
  position: fixed;
  z-index: 1;
}
</style>
