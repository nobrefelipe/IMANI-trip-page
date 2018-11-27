<template lang="html">

  <!-- TODO: make it dynamic, use props to get the user profile  -->

  <section class="instagram-profile">

    <figure><img src="https://scontent-ort2-1.cdninstagram.com/vp/8511901dda8a4ca21f513fd1f03de5ae/5C861FB4/t51.2885-19/s150x150/39312833_824670504590615_8643238520577589248_n.jpg" alt="Estevam pelo mundo" class="full-width-img"></figure>

    <span>

      <h5>Lucas Estevam</h5>

      <a href="https://www.instagram.com/estevampelomundo/" title="estevampelomundo" target="_blank">@estevampelomundo</a>

    </span>

  </section>

</template>


<script lang="js">
  export default  {

    name: 'instagram-profile',

    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>


<style scoped lang="scss">

  .instagram-profile {

    display: flex;

    align-content: center;

    margin: 20px 0;

    figure{

      width: 50px;

      height: 50px;

      border-radius: 50%;

      overflow: hidden;

    }

    span{

      display: flex;

      flex-direction: column;

      justify-content: center;

      margin-left: 10px;

      h5{

        margin: 0;

      }

      a{

        margin-top: 2px;

        color: #D9534F;

        font-size: 13px;

      }

    }

  }

</style>
