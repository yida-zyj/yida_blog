<template>
  <Common  class="tags-wrapper" :sidebar="false" :style="$themeConfig.fullscreen? {
        'max-width': '2080px',
        'margin': '0 auto',
        'padding': '0'
      } : {}">
       <div v-if='$themeConfig.fullscreen' 
       :class="$themeConfig.fullscreen?'tsfullPic':''"
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
        :currentTag="currentTag"
        @getCurrentTag="tagClick"></TagList>
    </ModuleTransition>

    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <note-abstract
        v-show="recoShowModule"
        class="list"
        :data="$recoPosts"
        :currentPage="currentPage"
        :currentTag="currentTag"
        @currentTag="getCurrentTag"></note-abstract>
    </ModuleTransition>

    <!-- 分页 -->
    <ModuleTransition delay="0.16">
      <pagation
        class="pagation"
        :total="$recoPosts.length"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </ModuleTransition>
       </div>
  </Common>
</template>

<script>
import Common from '@theme/components/Common'
import TagList from '@theme/components/TagList'
import NoteAbstract from '@theme/components/NoteAbstract'
import pagination from '@theme/mixins/pagination'
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'

export default {
  mixins: [pagination, moduleTransitonMixin],
  components: { Common, NoteAbstract, TagList, ModuleTransition },
  data () {
    return {
      tags: [],
      currentTag: '',
      currentPage: 1,
      allTagName: ''
    }
  },

  created () {
    this.currentTag = this.$recoLocales.tag.all
    this.allTagName = this.$recoLocales.tag.all
    if (this.$tags.list.length > 0) {
      this.currentTag = this.$route.query.tag ? this.$route.query.tag : this.currentTag
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
    tagClick (tagInfo) {
      if (this.$route.path !== tagInfo.path) {
        this.$router.push({ path: tagInfo.path })
      }
    },

    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },

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
.tags-wrapper
  max-width: $contentWidth
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tags-wrapper
    padding: 5rem 0.6rem 0;
</style>
