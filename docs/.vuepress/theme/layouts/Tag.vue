<template>
  <!-- 公共布局 -->
  <Common class="tag-wrapper" :sidebar="false" :style="$themeConfig.fullscreen? {
        'max-width': '2080px',
        'margin': '0 auto',
        'padding': '0'
      } : {}">
       <div v-if='$themeConfig.fullscreen' 
       :class="$themeConfig.fullscreen?'tfullPic':''"
      :style="$themeConfig.fullscreen? {
        'background': 'url(' + this.timestamp($themeConfig.categoryPic?$themeConfig.categoryPic:$coverRandom) +')'
      } : {}" >
      </div>
         <div :style="$themeConfig.fullscreen? {
        'max-width': '860px',
        'margin': '0 auto',
        'padding': '4.6rem 2.5rem 0'
      } : {}">
    <!-- 标签集合 -->
    <ModuleTransition>
      <TagList
        v-show="recoShowModule"
        class="tags"
        :currentTag="$currentTags.key"
        @getCurrentTag="tagClick"></TagList>
    </ModuleTransition>

    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <note-abstract
        v-show="recoShowModule"
        class="list"
        :data="posts"
        :currentPage="currentPage"
        @currentTag="$currentTags.key"></note-abstract>
    </ModuleTransition>

    <!-- 分页 -->
    <ModuleTransition delay="0.16">
      <pagation
        class="pagation"
        :total="posts.length"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </ModuleTransition>
         </div>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import NoteAbstract from '@theme/components/NoteAbstract'
import TagList from '@theme/components/TagList'
import pagination from '@theme/mixins/pagination'
import ModuleTransition from '@theme/components/ModuleTransition'
import { sortPostsByStickyAndDate, filterPosts } from '@theme/helpers/postData'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  mixins: [pagination, moduleTransitonMixin],
  components: { Common, NoteAbstract, TagList, ModuleTransition },

  data () {
    return {
      currentPage: 1,
      currentTag: '全部'
    }
  },

  computed: {
    // 时间降序后的博客列表
    posts () {
      let posts = this.$currentTags.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    }
  },

  mounted () {
    this._setPage(this._getStoragePage())
  },

  methods: {
    //新连接
    timestamp(url){
      var getTimestamp=new Date().getTime();
      if(url.indexOf("?")>-1){
        url=url+"&timestamp="+getTimestamp
      }else{
        url=url+"?timestamp="+getTimestamp
      }
      return url
    },
    // 获取当前tag
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    tagClick (tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    },
    // 获取当前页码
    getCurrentPage (page) {
      this._setPage(page)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    },
    _setPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
      this._setStoragePage(page)
    }
  },

  watch: {
    $route () {
      this._setPage(this._getStoragePage())
    }
  }
}
</script>
<style>
.tsfullPic {
  margin-top: -3.6rem !important;
  width: 100% !important;
  height: 50vh;
  background-position: 50% 50% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.tag-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 4.6rem 1rem 0;
</style>
