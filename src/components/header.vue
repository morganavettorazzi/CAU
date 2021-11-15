<template>
  <div class="q-pa-md">
    <q-header elevated class="degrade">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Olá Morgana</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="200"
      :breakpoint="500"
      bordered
      class="bg-deep-purple-1"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Chamados">
            <q-item-section avatar>
              <q-icon name="comment" />
            </q-item-section>

            <q-item-section>
              Chamados
            </q-item-section>
          </q-item>
          
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>
<style scoped>
.degrade{
  background: rgb(17,27,109);
  background: linear-gradient(90deg, rgba(17,27,109,1) 0%, rgba(59,24,92,1) 0%, rgba(35,18,65,1) 100%);
}
</style>
