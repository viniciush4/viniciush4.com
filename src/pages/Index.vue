<template>
  <q-layout view="lHh Lpr lFf" style="background-image: url('back2.jpg'); background-repeat:no-repeat; background-size:cover;">
    <q-page-container>
      <q-page class="flex justify-center items-center">
<!--        <q-btn flat color="primary" label="Projetos" @click="dialogProjetos = !dialogProjetos" />-->
        <transition name="slide-fade" mode="out-in">
          <q-card v-if="cardApresentacao" class="shadow-20 q-pa-lg q-ma-lg glass" style="max-width: 350px; width: 100%;">
            <q-card-section class="text-center">
              <q-img
                src="foto.jpeg"
                :ratio="1"
                style="max-width: 100px; border-radius: 50%;"
              />
            </q-card-section>
            <q-card-section class="text-center">
              <p class="text-h5 text-uppercase font-raleway" style="letter-spacing: 2px">Vinícius Berger</p>
              <p class="text-uppercase">Full stack developer</p>
              <p>
                <q-btn flat color="primary" label="Projetos" @click="dialogProjetos = !dialogProjetos" />
              </p>
              <p>
                <q-btn round flat color="grey-8" icon="fab fa-github-alt" type="a" href="https://github.com/viniciush4" target="_blank" />
                <q-btn round flat color="grey-8" icon="fab fa-instagram" type="a" href="https://www.instagram.com/bergervinicius/" target="_blank" />
                <q-btn round flat color="grey-8" icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/vinicius-berger-aa2609186/" target="_blank" />
              </p>
            </q-card-section>
          </q-card>
        </transition>
        <q-dialog
          v-model="dialogProjetos"
          seamless
          :maximized="true"
          transition-show="slide-up"
          transition-hide="slide-down"
          @hide="cardApresentacao = true"
          @before-show="cardApresentacao = false"
        >
          <q-layout view="Lhh lpR fff" container>
            <q-header class="bg-transparent">
              <q-toolbar>
                <q-btn flat v-close-popup round dense icon="close" />
              </q-toolbar>
            </q-header>
            <q-page-container>
              <q-page>
                <splide
                  class="flex justify-center"
                  :options="{
                    rewind: true,
                    width: '100%',
                    height: '30%',
                    perMove: 1,
                    perPage: 1,
                    arrows: false,
                    pagination: true,
                    gap: '30px',
                    padding: {
                      left : '10%',
                      right: '10%',
                    }
                  }"
                >
                  <splide-slide v-for="n in 5" :key="n" class="q-py-md flex justify-center items center">
                    <q-card class="full-width bg-white">
                      <q-card-section>
                        Projeto {{n}}
                      </q-card-section>
                      <!--                <q-card-section horizontal>-->
                      <!--                  <q-img-->
                      <!--                    class="col-5"-->
                      <!--                    src="https://cdn.quasar.dev/img/parallax1.jpg"-->
                      <!--                  />-->

                      <!--                  <q-card-section>-->
                      <!--                    teste-->
                      <!--                  </q-card-section>-->
                      <!--                </q-card-section>-->

                      <!--                <q-separator />-->

                      <!--                <q-card-actions>-->
                      <!--                  <q-btn flat round icon="event" />-->
                      <!--                  <q-btn flat>-->
                      <!--                    5:30PM-->
                      <!--                  </q-btn>-->
                      <!--                  <q-btn flat>-->
                      <!--                    7:00PM-->
                      <!--                  </q-btn>-->
                      <!--                  <q-btn flat color="primary">-->
                      <!--                    Reserve-->
                      <!--                  </q-btn>-->
                      <!--                </q-card-actions>-->
                    </q-card>
                  </splide-slide>
                </splide>
              </q-page>
            </q-page-container>
          </q-layout>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .glass {
    background-color: rgba(250, 250, 250, 0.5);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      repositorios: [],
      dialogProjetos: false,
      cardApresentacao: true
    }
  },
  created () {
    this.$axios.get('https://api.github.com/users/viniciush4/repos')
      .then(response => {
        this.repositorios = response.data
      })
  }
}
</script>
