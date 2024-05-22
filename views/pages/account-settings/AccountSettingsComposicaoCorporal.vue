<script lang="ts" setup>

const accountData = {
  
}

const refInputEl = ref<HTMLElement>()

const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}
</script>

<template>

  <VRow>
    <VCol cols="12">
      <VCard title="Composição Corporal">
        
        <VCardText>
          <VRow>
          <VCol 
            md="6"
            cols="20"
          >
            <VTextField
            label= "Massa Gorda"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="6"
            cols="20"
          >
            <VTextField
            label= "Massa Muscular"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="6"
            cols="20"
          >
            <VTextField
            label= "Porcentagem de gordura"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="6"
            cols="20"
          >
            <VTextField
            label= "Porcentagem de Músculo"
            >
              
            </VTextField>
          </VCol>
          
        </VRow>
        </VCardText>
      </VCard>
  
      
     </VCol>
     <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Salvar</VBtn>

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

