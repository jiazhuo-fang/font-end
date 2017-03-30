<template>
  <div>
    <v-header></v-header>
    <div class="tab mini-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      data() {
        return {
          seller: {}
        };
      },
      created() {
        this
          .$http
            .get('/api/seller').then((res) => {
              const result = res.json();
              if (result.IsSuccess) {
                console.log(result);
              };
            });
      },
      'v-header': header
    }
  };
</script>

<style>
  .tab{
    display:flex;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
  }

  .tab-item{
    flex: 1;
    text-align: center;
    line-height: 40px;
  }

  .tab-item > a{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }

  .tab-item > a.active{
    color: rgb(240,20,20);
  }
</style>
