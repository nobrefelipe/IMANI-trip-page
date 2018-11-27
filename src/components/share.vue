<template lang="html">

  <section class="share">

      <span>compartilhe:</span>

      <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + CurrentURL" target="_blank" title="Compartilhe no Facebook"><Facebook></Facebook></a>
      <a :href="'https://twitter.com/home?status=' + CurrentURL" target="_blank" title="Compartilhe no Twitter"><Twitter></Twitter></a>

  </section>

</template>

<script lang="js">

import Facebook from '../assets/svg/facebook.svg';
import Twitter from '../assets/svg/twitter.svg';
export default  {
  name: 'share',

  components:{ Facebook, Twitter},

  computed: {

    CurrentURL(){

      return window.location.href

    }

  }

}
</script>

<style scoped lang="scss">
  .share{

    float: left;

    display: flex;

    align-items: center;

    span{

      font-size: 14px;

      opacity: 0.3;

    }

    a{

      width: 60px;

      height: 60px;

      padding: 0 5px;

      svg{

        width: 100%;

        height: 100%;

        path{transition: all.3s ease;}

      }

      &:hover{

        svg{

          path{
            fill: #00A3E2;

          }

        }

      }


    }

  }
</style>
