<template>
    <q-page class="flex flex-center" padding>
    <q-card class="full-width" style="max-width: 450px">
      <q-card-section style="font-size: 1.3em" class="text-center">
        Login
      </q-card-section>
      <q-card-section>
        <q-input filled v-model="form.email" label="Email" class="q-mb-md" />
        <q-input
          filled
          label="Password"
          v-model="form.password"
          class="q-mb-md"
          type="password"
        />
      </q-card-section>
      <q-btn class="full-width" label="Login" @click="login" color="primary" />
    </q-card>
  </q-page>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AuthentificationServices from '../services/AuthentificationServices';
export default defineComponent({
  name: 'IndexPage',
  setup () {

        const form = ref({
      email: '',
      password: '',
    });

    return { form };   
  
  },
  methods:{
        // eslint-disable-next-line vue/no-dupe-keys
       async login() {
      // console.log('donia');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await AuthentificationServices.register({
        amail:this.form,
        password:this.form
      })
      console.log(response.data);
    }
  }
});
</script>
