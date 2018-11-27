<!--

  CUSTOM DROP DOWN COMPONENT
  Receives a DATA prop with the options for the dropdown

  @param Label -> the text displayed
  @param Value -> the value returned when a option is selected

-->

<template lang="html">

  <div class="custom-dropdrown"  ref="custom-dropdrown" style="--total-dates: 3;" @click="onSelect">

    <ul>

      <li class="option"  v-for="(option, index) in data"  :data-index="index" :class="{ selected: index == selected }" >{{option.label}}</li>

    </ul>

  </div>

</template>

<script lang="js">

  // BUS
  import Bus from '../bus';

  export default  {

    name: 'custom-dropdown',

    props: {

      data: { type: Array, required: true }

    },

    data() {
      return {

        selected: 0,

        isOpened: false,

      }
    },

    methods: {

      onSelect(e){

        const DROPDOWN = this.$refs['custom-dropdrown'];

        DROPDOWN.classList.toggle("opened");

        let target = e.target;

        // USE EVENT DELEGATION SO WE ONLY LISTEN TO CLICKS ON THE PARENT ELEMENT INSTEAD OF EVERY CHILD
        if (target.classList.contains("option")){

          this.selected = target.dataset.index;

          DROPDOWN.classList.remove("opened");

          // WILL EMIT THE SELECTED TRIP SO WE CAN GET THE RIGHT LINK FOR THE BUTTON
          Bus.$emit('dropdown-changed', this.data[this.selected]);


        }

      },


    }
}
</script>
