<template>
  <q-page padding>
    <q-toolbar-title class="text-h5">Cliquer pour augmenter</q-toolbar-title>
    <!-- content -->
    <!-- INFO Page -->
    <q-label v-model="loadData">{{ data }} no data</q-label>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'PageName'
  setup() {
    const $q = useQuasar();
    const data = ref(null);

    function loadData() {
      api
        .get('/api/backend')
        .then((response: { data: null }) => {
          data.value = response.data;
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        });
    }
    return { data, loadData };
  },
});
</script>
