<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <header-principal>
      </header-principal>

      <div class="row titulo">
        <q-icon name="email" flat size="30px"></q-icon>
        <p class="titulo-text"> Eduardo Almeida - Dúvida</p>
      </div>

      <div class="row" style="margin-left: 120px;">
        <p> Mensagem:</p>
      </div>
      <div class="row" style="margin-left: 120px;">
        <q-input
          v-model="text"
          filled
          type="textarea"
          class="text-msg"
        />
      </div>

      <div class="row" style="margin-left: 120px; margin-top: 10px;">
        <q-btn style="margin-right: 10px;">Responder</q-btn>
        <q-btn class="" >Fechar</q-btn>
      </div>

      
    </q-layout>
  </div>

</template>

<script>
import Header from '../components/header.vue'


export default {
  components: {
    'header-principal': Header
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  .titulo {
    margin-top: 80px;
    margin-left: 120px
  }

  .titulo-text {
    margin-left: 20px;
    width: 331px;
    height: 29px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }

  .text-msg {
    width: 1139px;
  }
  

</style>