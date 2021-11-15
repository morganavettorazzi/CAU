<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <header-principal>
      </header-principal>

      <div class="table-chamados">
        <div class="q-pa-md">
          <q-table
            title="Chamados"
            :rows="rows"
            :columns="columns"
            row-key="name"
            selection="single"
            v-model:selected="selected"
            class="size-table"
          />
        </div>
      </div>
    </q-layout>
  </div>

</template>

<script>
import Header from '../components/header.vue'
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Contato',
    align: 'center',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Assunto', align: 'center', label: 'Assunto', field: 'Assunto', sortable: true },
  { name: 'Status', align: 'center', label: 'Status', field: 'Status', sortable: true },
  { name: 'Setor', align: 'center', label: 'Setor', field: 'Setor' }
]

const rows = [
  {
    name: 'Eduardo Almeida',
    Assunto: 'Duvida',
    Status: 'Aberto',
    Setor: 'Comercial'
  }]

export default {
  components: {
    'header-principal': Header
  },

  setup () {
    return {
      selected: ref([]),
      columns,
      rows
    }
  }
}

</script>

<style>

  .table-chamados {
    margin-top: 50px;
  }

  .size-table{
    margin-left: auto;
    margin-right: auto;
    width: 1183px;
  }

</style>