<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png';

const accountData = {
  avatarImg: avatar1,
}

const refInputEl = ref<HTMLElement>()

const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}



</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Registrar paciente">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="ri-upload-cloud-line"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Carregar uma foto</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >

              <VBtn
                type="reset"
                color="error"
                variant="outlined"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Limpar</span>
                <VIcon
                  icon="ri-refresh-line"
                  class="d-sm-none"
                />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Permitido JPG, GIF ou PNG. Tamanho máximo de 800K
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  
                  label="Nome"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  
                  label="Sobrenome"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  
                  label="E-mail"
                  
                  type="email"
                />
              </VCol>

              

              <!-- 👉 Phone -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  
                  label="Telefone"
                  
                />
              </VCol>

              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  
                  label="Cep"
                  
                />
              </VCol>

              <VCol
                cols="12"
                md="8"
              >
                <VTextField
                  
                  label="Endereço"
                  
                />
              </VCol>

              <VCol
                cols="12"
                md="2"
              >
                <VTextField
                  
                  label="Nº"
                  
                />
              </VCol>
             
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Registrar</VBtn>

                <VBtn
                  color="secondary"
                  variant="outlined"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Limpar
                </VBtn>
              </VCol>
    
  </VRow>
</template>
