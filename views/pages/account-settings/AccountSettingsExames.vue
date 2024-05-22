<script setup lang="ts">

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
      <VCard title="Exames">
        
        <VCardText>
          <VRow>
          <VCol 
            md="3"
            cols="20"
          >
            <VTextField
            label= "Colesterol HDL"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="3"
            cols="20"
          >
            <VTextField
            label= "Colesterol LDL"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="3"
            cols="20"
          >
            <VTextField
            label= "Colesterol Total"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="3"
            cols="20"
          >
            <VTextField
            label= "Pressão Arterial Diastólica"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="3"
            cols="20"
          >
            <VTextField
            label= "Pressão Arterial Sistólica"
            >
              
            </VTextField>
          </VCol>
          <VCol
            md="3"
            cols="20"
          >
            <VTextField
            label= "Triglecerídios"
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
