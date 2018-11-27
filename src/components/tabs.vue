<template lang="html">

  <section class="tabs" ref="TABS">

    <ul class="tabs-header" @click="onTabChange">

      <li v-for="(item, index) in tabData" class="tabs-header--tab" :data-index="index" :class="{ active: index == currentTab }">{{ item.city }}</li>

    </ul>

    <ul class="tabs-body">

      <li v-for="(item, index) in tabData" class="tabs-body--tab" :data-index="index" :class="{ active: index == currentTab }">

        <p class="city-description">{{ item.content }}</p>

        <!-- DAYS -->
        <section>

          <Calendar></Calendar>

          <div class="is-flexy is-column">

            <h6>DIAS</h6>

            <span>{{ item.days }}</span>

          </div>

        </section>

        <!-- ACCOMMODATION -->
        <section>

          <Accommodation></Accommodation>

          <div class="is-flexy is-column">

            <h6>Acomodaçāo</h6>

            <span>{{ item.accommodation.description }}</span>

            <div class="gallery lightgallery">

              <a v-for="(picture, index) in item.accommodation.pictures" :href="picture">

                <!-- thumbnail-->
                <img v-lazy-load-image :data-src="picture" />

              </a>

            </div>

          </div>

        </section>


        <!-- ACTIVITIES -->
        <section>

          <Activities></Activities>

          <div class="is-flexy is-column">

            <h6>Destaques</h6>

            <ul><li v-for="activity in item.activities" v-html="activity"></li></ul>

          </div>

        </section>


        <!-- Included -->
        <section>

          <Included></Included>

          <div class="is-flexy is-column">

            <h6>O que inclui</h6>

            <ul><li v-for="included in item.included" v-html="included"></li></ul>

          </div>

        </section>


      </li>

    </ul>

    <ul class="tabs-header mobile-only" @click="onTabChange">

      <li v-for="(item, index) in tabData" class="tabs-header--tab" :data-index="index" :class="{ active: index == currentTab }">{{ item.city }}</li>

    </ul>

  </section>

</template>

<script lang="js">

  import Calendar from '../assets/svg/calendar.svg';
  import Accommodation from '../assets/svg/accommodation.svg';
  import Activities from '../assets/svg/activity.svg';
  import Included from '../assets/svg/check.svg';

  export default  {

    name: 'tabs',

    components: {Calendar, Accommodation, Activities, Included },

    props: {

      tabData: { type: Array, required: true}

    },

    data() {
      return {

        currentTab: 0

      }
    },

    mounted(){

      let gallery = document.querySelectorAll('.lightgallery');

      gallery.forEach( e => {
        lightGallery(e)
      })


    },


    methods: {

      onTabChange(e){

        const TABS = this.$refs["TABS"];

        let target = e.target;

        // USE EVENT DELEGATION SO WE ONLY LISTEN TO CLICKS ON THE PARENT ELEMENT INSTEAD OF EVERY CHILD
        if (target.classList.contains("tabs-header--tab")){

          this.currentTab = target.dataset.index;

          // scroll the page to the tabs section
          window.scroll({
            left: 0,
            top: TABS.offsetTop - 80,
            behavior: "smooth"
          });

        }

      }

    },



}
</script>
