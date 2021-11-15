<template>
  <div>

    <div class="row justify-center" style="margin-top: 100px">
      <p class="titulo">
        Central de Atendimento
      </p>
    </div>

    <div class="row">
      <div class="col-6">
        <img src="images/img-entrada.png" style="margin-left: 120px;">
      </div>

      <div class="col-6">
        <div class="q-pa-md" style="max-width: 400px">

          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              label="Assunto"
              lazy-rules
            />

            <q-input
              filled
              label="Nome"
              lazy-rules
            />

            <q-input
              filled
              label="E-mail"
              lazy-rules
            />

            <q-input
              filled
              label="Mensagem"
              lazy-rules
            />

            <div>
              <q-btn label="Enviar" type="submit" color="primary"/>
            </div>
          </q-form>

        </div>

      </div>
    </div>
    
  </div>

</template>

<script>



export default {
  components: {
    
  }
}

</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  .titulo {
    width: 927px;
    height: 88px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 88px;
    /* identical to box height */


    color: #242B6B;
  }

  

</style>