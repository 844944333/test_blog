<template>
  <HomeContent></HomeContent>
  <div class="container text-center article mt-5">
    <h1 class="title-blog">
      <span class="newest-blog">最新博客</span>
      <span class="iconfont icon">&#xe838;</span>
    </h1>
  </div>
  <!-- 去文章详情页 -->
  <router-link :to="`/detail/${item._id}`" v-for="(item, index) in articles" :key="index">
    <HomeArticleList :article="item"></HomeArticleList>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HomeContent from '@/components/HomeContent.vue'
import HomeArticleList, { ArticlesProps } from '@/components/HomeArticleList.vue'
export default defineComponent({
  name: 'Home',
  components: {
    HomeContent,
    HomeArticleList
  },
  setup () {
    const articles = reactive<ArticlesProps[]>([
      {
        _id: '1',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: '常用命令总结常用Gi用Git命令',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
        tags: [
          {
            _id: '1',
            tag: 'JavaScript'
          },
          {
            _id: '2',
            tag: 'Es6'
          },
          {
            _id: '3',
            tag: 'Git'
          }
        ],
        info: {
          browse: '999',
          time: '2021-03-03 16:41:00'
        }
      },
      {
        _id: '2',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: '常用命令总结常用Git命令总结常用G令总结常用G令总结常用Git命令',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
        tags: [
          {
            _id: '1',
            tag: 'JavaScript'
          },
          {
            _id: '2',
            tag: 'Node'
          }
        ],
        info: {
          browse: '999',
          time: '2021-03-03 16:41:00'
        }
      },
      {
        _id: '3',
        img: 'https://tpc.googlesyndication.com/simgad/2702161413361427111/downsize_200k_v1?sqp=4sqPyQSHAUKEAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MgswsAw4sAxFAACAPw&rs=AOga4qk-XvZp6tE6r4VXDY3Ety5UCE4xEg',
        title: '常用命令总结常用Git命令总结常用G令总结常用G令Git命令总结常用G令总结常用G令总结常用Git命令',
        desc: '平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias平时用 sourcetree 和 vscode 操作 git 比较多，但是难免有时会用到命令，这里记录一下常用的命令以及一些 alias',
        tags: [
          {
            _id: '1',
            tag: 'JavaScript'
          },
          {
            _id: '2',
            tag: 'Node'
          }
        ],
        info: {
          browse: '999',
          time: '2021-03-03 16:41:00'
        }
      }
    ])
    return {
      articles
    }
  }
})
</script>

<style lang="scss" scoped>
.article {
  .title-blog {
    display: flex;
    align-content: center;
    justify-content: center;
    color: #233A57;
    .newest-blog {
      font-size: 45px;
    }
    .icon {
      margin-left: 15px;
      align-self: center;
      font-size: 32px;
      color: #006DFE;
    }
  }
}
a {
  text-decoration: none;
}
</style>
