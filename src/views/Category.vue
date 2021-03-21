<template>
  <div class="container">
    <div class="row">
      <div class="col-4 mb-4 pb-4 mt-5 main-col" v-for="item in list" :key="item._id">
        <div class="card h-100">
          <div class="card-body text-center" style="max-height: 36rem">
            <img
              :src="`${item.img}`"
              class="rounded-circle img-fluid border border-light my-3 rounded w-75"
            >
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-desc text-left">{{ item.desc }}</p>
            <!-- 去文章列表页 -->
            <router-link :to="`/articles/${item._id}`" class="btn btn-outline-primary">进入专栏</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export interface ColumnsProps {
  _id: string;
  title: string;
  img: string;
  desc: string;
}

export default defineComponent({
  name: 'ColumnList',
  setup () {
    const list = reactive<ColumnsProps[]>([
      {
        _id: '1',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: 'JavaScript',
        desc: '平时令以及一些d'
      },
      {
        _id: '2',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: 'ECMAScript',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些d'
      },
      {
        _id: '3',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: 'Git',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些d'
      },
      {
        _id: '4',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: 'Node',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些d'
      },
      {
        _id: '5',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: 'Vue',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些d'
      }
    ])
    return {
      list
    }
  }
})
</script>

<style lang="scss" scoped>
.slide-hide-enter-active {
  transition: all 0.8s ease-out;
}
/* 显示时的位置变化 20px --> 0px */
.slide-hide-enter-from {
  transform: translateY(200px);
  opacity: 0;
}
.container {
  min-height: 700px;
  .main-col {
    transition: all .3s;
    .card {
      position: relative;
      padding-bottom: 35px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 0 6px rgba(0, 0, 0, .04);
      .card-title {
        max-height: 48px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .card-desc {
        max-height: 96px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
      .btn {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .main-col:hover {
    transform: translateY(-20px);
  }
}
</style>
