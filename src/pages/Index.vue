<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <header-principal>
      </header-principal>
      
      <div class="row" style="margin-top: 50px; margin-bottom: 50px;">
        <div class="col-6">

        </div>
        <div class="col-5">

          <q-input outlined bottom-slots v-model="text" label="Pesquisar..." :dense="dense">
            <template v-slot:append>
              <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
              <q-icon name="search" />
            </template>
          </q-input>

        </div>
      </div>

      <div class="row justify-center" style="margin-bottom: 51px;">
        <box-dashboard class="box-dashboard"></box-dashboard>
        <box-dashboard class="box-dashboard"></box-dashboard>
        <box-dashboard class="box-dashboard"></box-dashboard>
        <box-dashboard class="box-dashboard"></box-dashboard>
      </div>

      <div class="row">

        <div class="col-8 box-chamados justify-center" style="margin-bottom: 50px;">
          <box-chamados></box-chamados>
        </div>

        <div class="col-4">
          <box-atualizacoes></box-atualizacoes>

        </div>
      </div>
    </q-layout>
  </div>


</template>

<script>
import Header from '../components/header.vue'
import boxDashboard from '../components/boxDashboard.vue'
import boxChamados from '../components/boxChamados.vue'
import boxAtualizacoes from '../components/boxAtualizacoes.vue'

export default {
  data () {
    return {

    }
  },

  components: {
    "header-principal": Header,
    "box-dashBoard": boxDashboard,
    "box-chamados": boxChamados,
    "box-atualizacoes": boxAtualizacoes
}
}

</script>

<style scoped>
  .box-dashboard {
    margin-left: 55px;
  }

  .box-chamados {
    margin-left: auto;
    margin-right: auto;
  }
</style>