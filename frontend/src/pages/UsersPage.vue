<template>
  <q-page padding>
    <q-table :columns="columns" :rows="data">
      <template #body-cell-email="props">
        <q-td :props="props">
          <q-chip class="text-white" color="primary"
            >{{ props.row.email }}
          </q-chip></q-td
        >
      </template>
      <template #body-cell-name="props">
        <q-td :props="props">
          <q-input
            :loading="false"
            color="primary"
            v-model="props.row.name"
            borderless
            dense
          >
          </q-input
        ></q-td>
      </template>
      <template #top>
        <q-btn
          color="primary"
          round
          unelevated
          icon="add"
          @click="showDialog = true"
        >
        </q-btn>
      </template>
    </q-table>
    <q-dialog v-model="showDialog">
      <q-card class="full-width" style="max-width: 600 px">
        <q-toolbar>
          <q-toolbar-title>Create New User</q-toolbar-title>
          <q-btn v-close-popup flat icon="close" round></q-btn>
        </q-toolbar>
        <q-card-section>
          <q-input
            class="q-mb-md"
            filled
            label="name"
            v-model="createUserForm.name"
          />
          <q-input
            class="q-mb-md"
            filled
            label="email"
            v-model="createUserForm.email"
          />
        </q-card-section>
        <q-btn
          label="create"
          @click="createUser"
          class="full-width"
          color="primary"
        ></q-btn>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const createUserForm = ref({
  name: '',
  email: '',
});
function createUser() {
  showDialog.value = false;
}
const showDialog = ref(false);
const data = [
  {
    id: 1,
    name: 'lucki duck',
    email: 'lucki@gmail.com',
  },
  {
    id: 2,
    name: 'jerome duck',
    email: 'jerome@gmail.com',
  },
  {
    id: 3,
    name: 'Francki duck',
    email: 'franki@gmail.com',
  },
  {
    id: 4,
    name: 'Belandoduck',
    email: 'beland@gmail.com',
  },
  {
    id: 5,
    name: 'Franco duck',
    email: 'franck@gmail.com',
  },
];

const columns = [
  { field: 'id', name: 'id', align: 'left', label: 'ID' },
  { field: 'name', name: 'name', align: 'left', label: 'Name' },
  { field: 'email', name: 'email', align: 'left', label: 'Email' },
];
</script>
