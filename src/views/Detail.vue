<template>
  <div :style="{minHeight: Height + 'px'}">
    <div class="container main">
      <div class="header text-center mt-3">
        <h1>JavaScript 游戏开发 - 物理碰撞引擎实现</h1>
        <p>2021-03-04 23:29:00</p>
        <div class="label">
          <span class="iconfont icon">&#xe65d;</span>
          <div class="tags">
            <span class="tag">JavaScript</span>
            <span class="tag">Node</span>
          </div>
        </div>
      </div>
      <div class="content mt-4">
        内容
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export interface DetailProps {
  _id: string;
}

export default defineComponent({
  name: 'Detail'
})
</script>

<style lang="scss" scoped>
.main {
  .header {
    font-weight: 600;
    .label {
      display: flex;
      align-content: center;
      justify-content: center;
      font-weight: 600;
      .icon {
        font-size: 20px;
        color: #DEA123;
      }
      .tags {
        .tag {
          color: #fff;
          background: #006DFE;
          border-radius: 4px;
          margin: 0px 10px;
          padding: 5px 12px;
          text-align: center;
        }
      }
    }
  }
  .content {
    background: #DEA123;
  }
}
</style>
