<template>
  <!-- 两种过度方案,1，加动画，2transition -->
  <div id="detailContrainer" class="slide-enter-active">
    <!-- <header id="header">
      <i class="iconfont icon-right"></i>
      <h1>影片详情</h1>
    </header>-->
    <Header title="影片详情">
      <i class="iconfont icon-right" @touchstart="handleToBack"></i>
      <h1>影片详情</h1>
    </Header>
    <Loading v-if="isLoading" />
    <div v-else id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img"><img :src="detailMovie.img | setWH('148.208')" alt= /></div>
          <div class="detail_list_info">
            <h2>{{ detailMovie.nm }}</h2>
            <p>{{ detailMovie.enm }}</p>
            <p>{{ detailMovie.scoreLabel }}</p>
            <p>{{ detailMovie.cat }}</p>
            <p>{{ detailMovie.src }}</p>
            <p>{{ detailMovie.pubDesc }}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{ detailMovie.dra }}</p>
      </div>
      <div class="detail_player swiper-container" ref="detail_player">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index">
            <div>
              <img :src="item | setWH('148.208')" alt />
            </div>
            <p v-for="(v,i) in detailMovie.star.split(',')" :key="i">{{ v }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Detail',
  data: function() {
    return {
      detailMovie: {},
      isLoading: true
    }
  },
  components: {
    Header
  },
  props: ['movieId'],
  methods: {
    handleToBack: function() {
      //返回上一级
      this.$router.back()
    }
  },
  mounted: async function() {
    const { data: res } = await this.axios.get(
      '/api/detailmovie?movieId=' + this.movieId
    )
    if (res.msg === 'ok') {
      this.isLoading = false
      this.detailMovie = res.data.detailMovie
      this.$nextTick(() => {
        new Swiper(this.$refs.detail_player, {
          slidesPerView: 'auto',
          freeMode: true,
          freeModeSticky: true
        })
      })
    }
  }
}
</script>

<style scoped>
#detailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
}
#detailContrainer.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: url('/images/movie_1.jpg') 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
</style>