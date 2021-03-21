<template>
  <div class="container d-flex justify-content-center main mt-5">
    <div class="article">
      <div class="dots">
        <span class="mac b1"></span>
        <span class="mac b2"></span>
        <span class="mac b3"></span>
      </div>
      <div class="article-absolute">
        <div class="content">
          <img class="img" src="../assets/-father.jpg" alt="">
          <div class="article-content">
            <h1 class="title">{{ article.title }}</h1>
            <p class="desc">{{ article.desc }}</p>
            <div class="label">
              <span class="iconfont icon">&#xe65d;</span>
              <div class="tags" v-for="item in article.tags" :key="item._id">
                <span class="tag">{{ item.tag }}</span>
              </div>
            </div>
            <p class="info">
              <span class="iconfont icon">
                &#xe608;
                <span class="browse">{{ article.info.browse }}</span>
              </span>
              <span class="time">{{ article.info.time }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface TagsProps {
  _id: string;
  tag: string;
}
export interface InfoProps {
  browse: string;
  time: string;
}
export interface ArticlesProps {
  _id: string;
  img: string;
  title: string;
  desc: string;
  tags: TagsProps[];
  info: InfoProps;
}

export default defineComponent({
  name: 'ArticleList',
  props: {
    article: {
      type: Object as PropType<ArticlesProps>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  .article {
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    border: 1px solid rgba(0, 0, 0, .1);
    position: relative;
    width: 100%;
    align-self: center;
    background: #fff;
    border-radius: 8px;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    .dots {
      position: absolute;
      left: 15px;
      top: 12px;
      .mac {
        display: inline-block;
        margin-right: 10px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        &.b1 {
          background: #E0443E;
        }
        &.b2 {
          background: #DEA123;
        }
        &.b3 {
          background: #1AAB29;
        }
      }
    }
    .article-absolute {
      margin-top: 50px;
      .content {
        display: flex;
        .img {
          margin-right: 25px;
          flex-shrink: 0;
          width: 450px;
          height: 280px;
          border-radius: 4px;
          overflow: hidden;
        }
        .article-content {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title {
            color: #006DFE;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .desc {
            margin-top: 10px;
            font-size: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
          .label {
            display: flex;
            align-content: center;
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
                &:first-child {
                  margin-left: 20px;
                }
              }
            }
          }
          .info {
            color: #006DFE;
            font-weight: 600;
            margin-top: 10px;
            .icon {
              .browse {
                margin-left: 4px;
              }
            }
            .time {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
