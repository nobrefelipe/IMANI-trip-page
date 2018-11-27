// COMPONENTS
import InstagramProfile from '../../components/instagram-profile';
import Tabs from '../../components/tabs';
import CustomDropdown from '../../components/custom-dropdown';
import Share from '../../components/share';

// BUS
import Bus from '../../bus';

// ICONS
import DirectionIcon from '../../assets/svg/direction.svg';
import ThailandIcon from '../../assets/svg/thailand-icon.svg';
import Drink from '../../assets/svg/drink.svg';
import Calendar from '../../assets/svg/calendar.svg';
import Important from '../../assets/svg/important.svg';
import Scroll from '../../assets/svg/scroll.svg';


import {directive as customPropertiesParallaxDirective} from "vue-custom-properties-parallax";

export default  {

  name: 'home',

  components: { InstagramProfile, Tabs, CustomDropdown, Share,  DirectionIcon, Drink, ThailandIcon, Calendar, Important, Scroll },

  directives: {

    'custom-properties-parallax': customPropertiesParallaxDirective

  },

  data() {
    return {

      buyDomain: "https://www.button.do/",

      availableDates:[
        {
          label: "16 Março -  6 Abril",
          value: "12345678"
        },
        {
          label: "26 Abril -  2 Maio",
          value: "98347383"
        },
        {
          label: "15 Maio  - 18 Maio",
          value: "928381019"
        }
      ],

      cityDetails: [

        {
          city: "Bangkok",
          sellsTitle: "Explore Bangkok",
          coverImage: "https://viajarjuntas.com/wp-content/uploads/2017/12/Mbk-Shopping-Viajar-Juntas.jpg",
          content: "Conhecida como “a cidade dos anjos” pelos seus habitantes, Bangkok dificilmente pode ser comparada a outros lugares do mundo. Com suas caraterísticas únicas que misturam os excessos e a espiritualidade, a capital da Tailândia tem muito a oferecer aos turistas. Será uma semana inteira dedicada aos templos budistas, às massagens profissionais, às ruas, aos passeios de Tuk Tuk, aos mercados flutuantes e muito mais.",
          days: "1-4",
          accommodation: {
            link: "https://www.airbnb.com/rooms/4228023?location=bangkok&adults=16&s=fKxx5oCn&check_in=2019-03-25&guests=16&check_out=2019-03-28",
            description: "Apartamentos com vista privilegiada da cidade e rooftop pool.",
            pictures: [
              "https://a0.muscache.com/im/pictures/bc44fa7a-d60b-436a-a8bf-3006116125ca.jpg?aki_policy=xx_large",
              "https://a0.muscache.com/im/pictures/557ead5f-33f1-4c97-a7a3-db2872f02b11.jpg?aki_policy=x_large",
              "https://a0.muscache.com/im/pictures/f299f851-eb28-4e25-9205-e10b795eb23b.jpg?aki_policy=x_large",
              "https://a0.muscache.com/im/pictures/e9ca027f-aa08-4159-ba1b-fe3b275f1d5c.jpg?aki_policy=x_large",
              "https://a0.muscache.com/im/pictures/bc44fa7a-d60b-436a-a8bf-3006116125ca.jpg?aki_policy=xx_large",
              "https://a0.muscache.com/im/pictures/48cc50d8-baae-4973-9f71-2ab2bb673256.jpg?aki_policy=x_large"
            ]
          },
          activities: [
            "Drink de recepção com direito a típica massagem Thai.",
            "Day tour aos mais famosos templos da cidade: Grand Palace, Wat Arun, Wat Pho, Wat Saket.",
            "Se aventurar na Khao San Road, a rua onde você irá encontrar mochileiros de toda parte do mundo.",
            "Explorar Bangkok pelas águas.",
            "Se encantar com os cheiros e sabores em uma das feiras noturnas mais colorida e agitada da cidade.",
            "Curtir uma das vistas mais privilegiadas de Bangkok, no Sky Bar.",
            "Apreciar e preparar os sabores da autêntica cozinha Tailandesa em uma aula de culinária."
          ],
          included: [
            "3 noites de hospedagem com café da manhã.",
            "Transporte para hotel, aeroporto e atividades citadas nos destaques.",
            "Drink e massagem de recepção.",
            "Entrada nos templos.",
            "Aula de culinária Tailandesa.",
            "Um cocktail no SkyBar."
          ]
        },

        {
          city: "Koh Samui",
          sellsTitle: "Relax e diversāo",
          coverImage: "https://laptopwarriors.com/wp-content/uploads/2017/02/silver-beach.jpg",
          content: "Koh Samui é uma das ilhas mais luxuosas da Tailândia, recheada de águas claras, montanhas, palmeiras e praias lindas. Com todo esse tamanho é preciso pelo menos 5 dias para conhecer os principais pontos e o que a ilha tem de melhor a oferecer.",
          days: "4-8",
          accommodation: {
            link: "https://www.airbnb.com/rooms/4228023?location=bangkok&adults=16&s=fKxx5oCn&check_in=2019-03-25&guests=16&check_out=2019-03-28",
            description: "Resort muito bem localizado na praia mais badalada da ilha. Com piscinas, saunas e sala de jogos.",
            pictures: [
              "https://t-ec.bstatic.com/images/hotel/max1280x900/132/132581739.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/133/133470789.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/133/133472174.jpg",
              "http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/chaweng-beach/pagePropertiesImage/chaweng.jpg.jpg",
            ]
          },
          activities: [
            "Conhecer uma feira noturna diferente a cada dia.",
            "Curtir uma das noites mais agitadas da ilha do Ark Bar, com música ao vivo e show de fogos.",
            "Explorar os jardins tropicais e cachoeiras que se escondem no interior da ilha.",
            "Visitar os templos da ilha: Big Buddha, com seus 12 metros de altura e o Plai Laem, um dos complexos mais colorido da ilha.",
            "Assistir ao Por do sol em um dos bares mais requintados de toda a ilha."
          ],
          included: [
            "4 noites de hospedagem com café da manhã.",
            "Transporte para hotel, aeroporto e atividades citadas nos destaques.",
            "3 garrafas de rum local e mixers no Ark Bar.",
          ]
        },

        {
          city: "Koh Phangan",
          sellsTitle: "Full Moon Party",
          coverImage: "https://static1.squarespace.com/static/555cbc7ee4b059e095f39179/555cc6e7e4b07d15252bb7e6/59a71d6dbe42d66c6ed07521/1504131913376/full-moon-party-thailand.jpg",
          content: "Com certeza você já ouviu falar sobre a Full Moon Party. É uma das maiores festas beira-mar do mundo que acontece em Koh Phanghan em todas as luas cheias do ano e reúne cerca de 15 mil pessoas. São milhares de turistas que chegam à ilha tailandesa em busca de diversão e dispostos a brilharem com muita tinta neon pelo corpo, e nós iremos fazer parte dessa experiência incrível. ",
          days: "8-10",
          accommodation: {
            link: "https://www.airbnb.com/rooms/4228023?location=bangkok&adults=16&s=fKxx5oCn&check_in=2019-03-25&guests=16&check_out=2019-03-28",
            description: "Villa de luxo exclusiva com piscina.",
            pictures: [
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100349733.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/100/100363095.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100332488.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/100/100344960.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100328174.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100350158.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100267616.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100338444.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/100/100344925.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/100/100328210.jpg",
              "https://homeiswhereyourbagis.com/wp-content/uploads/2018/08/Full-Moon-Party-Koh-Phangan-Feier-02.jpg",
              "http://phangancalendar.com/wp-content/uploads/2016/11/Full-Moon-Party-2016_DSC03418w-1024x564.jpg"
            ]
          },
          activities: [
            "Musica na beira da praia com pessoas do mundo todo, os famosos baldinhos com bebida, roupas coloridas e corpo pintado com neon, essa é experiencia que vai ter na full moon party",
            "Conhecer a incrível ilha de Koh Ma.",
            "Curtir o entardecer no Amsterdam Bar, onde o pôr do sol é espetacular."
          ],
          included: [
            "2 noites de hospedagem com café da manhã.",
            "Entrada para a full moon party.",
            "Transporte para hotel, aeroporto e atividades citadas acima."
          ]
        },

        {
          city: "Koh Tao",
          sellsTitle: "Mergulho",
          coverImage: "https://i2.wp.com/www.romyandco.com/wp-content/uploads/2018/04/Koh-Nang-Yuan-Island-1.jpg",
          content: "Pequena, mágica, aconchegante e conhecida como o paraíso dos mergulhadores a Tailândia.",
          days: "10-13",
          accommodation: {
            link: "https://www.airbnb.com/rooms/4228023?location=bangkok&adults=16&s=fKxx5oCn&check_in=2019-03-25&guests=16&check_out=2019-03-28",
            description: "Você vai ficar hospedado em uma super casa no coraçāo de Bangkok.",
            pictures: [
              "https://t-ec.bstatic.com/images/hotel/max1280x900/437/43719235.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/437/43719230.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/437/43716392.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/437/43719236.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/437/43719231.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/437/43718695.jpg",
              "https://t-ec.bstatic.com/images/hotel/max1280x900/437/43718559.jpg",
              "https://s-ec.bstatic.com/images/hotel/max1280x900/437/43718558.jpg",
              "https://www.theluxurysignature.com/wp-content/uploads/2015/06/5-Nearby-Islands-from-Koh-Samui-that-are-Perfect-for-a-Day-Trip-The-Luxury-Signature-1140x760.jpg",
              "https://res-1.cloudinary.com/enchanting/et-web/2015/05/asia-thailand-koh-tao-beach-people.jpg",
            ]
          },
          activities: [
            "Conhecer Sairee beach e curtir a vibe da praia ",
            "Day tour de snorkelling aos arredores de Koh Tao e Koh Nang Yuan, três pequenas ilhotas interconectadas por pontes de areia branquinhas e água azul-turquesa.",
            "Assistir ao espetacular pôr do sol no Mango Bay."
          ],
          included: [
            "3 noites de hospedagem com café da manhã.",
            "Translado para hotel, aeroporto e atividades citadas nos destaques.",
            "Day tour de snorkelling aos arredores de Koh Tao e  Koh Nang Yuan."
          ]
        }

      ]

    }
  },

  computed: {

    // Initial buy button link will be the first drop down option
    buyButtonLink(){

      return this.buyDomain + this.availableDates[0].value;

    }

  },

  mounted() {

    const BUY_BUTTON = this.$refs["buy-it-button"];

    // LISTEN TO THE DROPDOWN SELECTION
    Bus.$on('dropdown-changed', res => {

      // UPDATE BUY BUTTON LINK
      BUY_BUTTON.setAttribute("href", this.buyDomain + res.value)

    });



    // TOP BAR BOOK NOW SHOW-HIDE
    // TODO: make its own component

    let scrollpos = window.scrollY

    const header = document.querySelector(".top-bar")

    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("show")

    const remove_class_on_scroll = () => header.classList.remove("show")

    window.addEventListener('scroll', function() {

      scrollpos = window.scrollY;

      if (scrollpos >= 600) { add_class_on_scroll() }

      else { remove_class_on_scroll() }

    })
    
  },

  methods: {

    /*
      When the user clicks on a city block
      we trig a click on the tab and scroll the page to the tabs section
    */
    onClickCity(e){

      const TABS = document.getElementsByName("tabs")[0];

      let target = e.target;

      // USE EVENT DELEGATION SO WE ONLY LISTEN TO CLICKS ON THE PARENT ELEMENT INSTEAD OF EVERY CHILD
      if (target.classList.contains("block")){

        let tabIndex = target.dataset.index;

        // trigger the click on the tab element
        document.querySelectorAll(".tabs-header--tab")[tabIndex].click();

        // scroll the page to the tabs section
        window.scroll({
          left: 0,
          top: TABS.offsetTop - 60,
          behavior: "smooth"
        });

      }



    },


    /*
      TODO: make it a custom directive -> v-scroll-to:element
    */

    anchorTo(elm){

      let scrollTo = document.getElementsByName(elm)[0];



      // scroll the page to the tabs section
      window.scroll({
        left: 0,
        top: scrollTo.offsetTop - 60,
        behavior: "smooth"
      });


    }

  }

}

