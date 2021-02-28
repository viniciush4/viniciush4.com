<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #fafafa">
    <q-header class="flex justify-center bg-transparent">
      <div class="q-py-xl full-width glass">
        <q-img
          src="foto.jpeg"
          :ratio="1"
          style="max-width: 100px; border-radius: 50%; position: absolute; top: 30px; left: calc(50% - 50px);"
        />
      </div>
    </q-header>
    <q-page-container>
      <q-page class="flex justify-center bg-transparent">
        <div class="q-col-gutter-md row q-py-xl" style="max-width: 700px">
          <div class="col-4" v-for="repositorio in repositorios" :key="repositorio.id">
            <q-card class="full-height shadow-5">
              <q-card-section>
                <div class="text-overline text-orange-9">
                  {{repositorio.language}}
<!--                  {{repositorio.updated_at}}-->
<!--                  {{repositorio.stargazers_count}}-->
<!--                  {{repositorio.watchers_count}}-->
<!--                  <q-chip>-->
<!--                    <q-avatar>-->
<!--                      <img :src="repositorio.owner.avatar_url">-->
<!--                    </q-avatar>-->
<!--                    {{repositorio.owner.login}}-->
<!--                  </q-chip>-->
                </div>
                <div class="text-h5 q-mt-sm q-mb-xs">{{repositorio.name}}</div>
                <div class="text-caption text-grey">
                  {{repositorio.description}}
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn flat color="primary" label="Ir para o repositório" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
  .glass {
    background-color: rgba(250, 250, 250, 0.3);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
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
