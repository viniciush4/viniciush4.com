<template>
  <q-layout view="lHh Lpr lFf" style="background-image: url('back2.jpg'); background-repeat:no-repeat; background-size:cover;">
<!--    <q-header elevated class="flex justify-center bg-transparent">-->
<!--      <div class="q-py-xl full-width glass">-->
<!--      </div>-->
<!--    </q-header>-->
    <q-page-container>
      <q-page class="flex justify-center items-center">
        <q-card class="shadow-20 q-pa-lg q-ma-lg glass" style="max-width: 350px; width: 100%;">
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
              <q-btn flat color="primary" label="Projetos" />
            </p>
            <p>
              <q-btn round flat color="grey-8" icon="fab fa-github-alt" type="a" href="https://github.com/viniciush4" target="_blank" />
              <q-btn round flat color="grey-8" icon="fab fa-instagram" type="a" href="https://www.instagram.com/bergervinicius/" target="_blank" />
              <q-btn round flat color="grey-8" icon="fab fa-linkedin-in" type="a" href="https://www.linkedin.com/in/vinicius-berger-aa2609186/" target="_blank" />
            </p>
          </q-card-section>
        </q-card>
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
export default {
  data () {
    return {
      repositorios: []
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
