<script setup lang="ts">
import { useFirebaseAuth } from '@/composable/useFirebaseAuth';
import logo from '@images/logo.svg?raw';
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png';
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png';
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';
import { z } from 'zod';

const { $swal } = useNuxtApp()

const vuetifyTheme = useTheme();

const isPasswordVisible = ref(false);

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight
    : authV1MaskDark;
});
const { register } = useFirebaseAuth();

const schema = z.object({
  email: z.string().email({ message: 'Endereço de email inválido' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
});

const form = ref({
  email: '',
  password: '',
});

const errors = ref({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  try {
    const result = schema.safeParse(form.value);
    if (!result.success) {
      errors.value = {
        email: result.error.errors.find(e => e.path[0] === 'email')?.message || '',
        password: result.error.errors.find(e => e.path[0] === 'password')?.message || ''
      };
      return;
    }
    errors.value = { email: '', password: '' };
    await register(form.value.email, form.value.password);
    $swal.fire({
      icon: 'success',
      title: 'Registro realizado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.log(error);
  }
};

definePageMeta({ layout: 'blank' });
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Registrar 
        </VCardTitle>
      </VCardItem>

      <!-- <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Adventure starts here 🚀
        </h5>
        <p class="mb-0">
          Make your app management easy and fun!
        </p>
      </VCardText> -->

      <VCardText>
        <VForm @submit.prevent="handleSubmit">
          <VRow>

            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                :error-messages="errors.email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                :error-messages="errors.password"
              />
            </VCol>

            <!-- sign up button -->
            <VCol cols="12">
              <VBtn block type="submit">
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol cols="12" class="text-center text-base">
              <span>Já tem uma conta?</span>
              <NuxtLink class="text-primary ms-2" to="login">
                Entrar
              </NuxtLink>
            </VCol>
<!-- 
            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol> -->

            <!-- auth providers -->
            <!-- <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol> -->
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";

.v-text-field--error {
  .v-input__control {
    border-color: red !important;
  }
  .v-input__details {
    color: red !important;
  }
}
</style>
