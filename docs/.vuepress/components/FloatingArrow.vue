<template>
<div class="main" v-if="isShow">
<h4 class="scroll-down" @click="onClick"></h4>
</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      scrollTop: 0,
    };
  },
  watch: {
    scrollTop(nv) {
      if (nv === 0) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    onClick() {
      this.$emit("onClick");
      this.isShow = false;
    },
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  overflow: hidden;
  background: #000;

  .scroll-down {
    position: fixed;
    z-index: 500;
    -webkit-transition: -webkit-transform 0.5s 1.5s, opacity 0.3s 1.7s,
      z-index 0.5s 1.5s;
    transition: transform 0.5s 1.5s, opacity 0.3s 1.7s, z-index 0.5s 1.5s;
    font-size: 3rem;
    font-family: ptsans-regular;
    text-transform: uppercase;
    bottom: 8rem;
    left: calc(50% - 15rem);
    color: #fff;
    width: 30rem;
    text-align: center;
    cursor: pointer;
  }
  .scroll-down.removed {
    -webkit-transform: translateY(-20rem);
    -ms-transform: translateY(-20rem);
    transform: translateY(-20rem);
    opacity: 0;
    z-index: -10;
    -webkit-transition: -webkit-transform 0.5s, opacity 0.3s 0.2s, z-index 0.5s;
    transition: transform 0.5s, opacity 0.3s 0.2s, z-index 0.5s;
  }
  .scroll-down:after {
    content: "";
    position: absolute;
    display: block;
    bottom: -5 rem;
    left: calc(50% - 1.5rem);
    width: 1.5rem;
    height: 1.5rem;
    border: 0.25rem solid #fff;
    border-left: none;
    border-top: none;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: arrowMove 1.2s infinite;
    animation: arrowMove 1.2s infinite;
  }
  @-webkit-keyframes arrowMove {
    from {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    to {
      -webkit-transform: rotate(45deg) translateY(2rem) translateX(2rem);
      transform: rotate(45deg) translateY(2rem) translateX(2rem);
      opacity: 0;
    }
  }
  @keyframes arrowMove {
    from {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    to {
      -webkit-transform: rotate(45deg) translateY(2rem) translateX(2rem);
      transform: rotate(45deg) translateY(2rem) translateX(2rem);
      opacity: 0;
    }
  }
  @-webkit-keyframes navArrowMove {
    to {
      -webkit-transform: translateX(2rem);
      transform: translateX(2rem);
      opacity: 0;
    }
  }
  @keyframes navArrowMove {
    to {
      -webkit-transform: translateX(2rem);
      transform: translateX(2rem);
      opacity: 0;
    }
  }
}
</style>
