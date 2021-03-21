<template>
  <div class="main" :style="{height: Height + 'px'}">
    <div class="main-content">
      <transition name="slide-title">
        <h1 class="title" v-if="show"><span class="font">Hello!</span> 我是<span class="name">{{name}}</span></h1>
      </transition>
      <transition name="slide-content">
        <div class="content" v-if="isShow">
          <p>在这里，有 B站视频教程合集和配套文本、系统教程、编程博客、前端资源导航、以及UP主的想法和生活点滴。致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。</p>
          <a
            href="https://github.com/844944333"
            target="_blank"
            class="btn btn-primary mt-3 btn-lg my-btn font"
          >Go GitHub</a>
        </div>
      </transition>
    </div>
    <img src="../assets/hero_main.svg" class="img-svg" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'HomeContent',
  setup () {
    const show = ref(false)
    const isShow = ref(false)
    const name = ref('时光')
    onMounted(() => {
      show.value = true
      isShow.value = true
    })
    return {
      name,
      show,
      isShow
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 0 100px;
  .main-content {
    width: 650px;
    min-height: 700px;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .title {
      font-size: calc(1.8em + 1.2vw);
      font-weight: 600;
      .name {
        color: #006DFE;
      }
    }
    .content {
      margin-top: 26px;
      color: #8C99AB;
      font-size: 20px;
      .my-btn {
        font-weight: 600;
        color: #eee;
      }
    }
  }
  .img-svg {
    flex: 1;
  }
}

.slide-title-enter-active {
  transition: all 0.8s ease-out;
}
/* 显示时的位置变化 20px --> 0px */
.slide-title-enter-from {
  transform: translateX(200px);
  opacity: 0;
}

.slide-content-enter-active {
  transition: all .5s ease-out;
}
/* 显示时的位置变化 20px --> 0px */
.slide-content-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

</style>
