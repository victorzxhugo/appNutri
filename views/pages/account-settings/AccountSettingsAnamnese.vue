<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png';

const accountData = {
  
}

const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}


</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Anamnese">
        

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <VCol
                md="13"
                cols="12"
              >
              <b for="">Objetivo da consulta</b>  
              <VTextField
                  label="Motivo específico que levou o paciente a consulta"
                />
              </VCol>              
              <VCol
                md="13"
                cols="12"
              >
              <b for="">Historico Alimentar</b>  
              <VTextarea
                  label="Forma de alimentação nos ultimos anos"
                />
              </VCol>
              <VCol
                md="13"
                cols="12"
              >
                <b for="">Alergias</b>
                <VTextarea
                  label="Alergias ou complicações geradas por determinados alimentos"
                />
              </VCol>

              <VCol
                md="13"
                cols="12"
              >
              <b for="">Rotina de alimentação</b>
                <VTextarea
                  label="Número de refeições por dia e horários"
                />
              </VCol>

              
              <VCol
                md="13"
                cols="12"
              >
              <b>Rotina de atividade física</b>
                <VTextarea
                  label="Atividades físicas exercidas, intensidade e periodicidade"
                />
              </VCol>

              <VCol
                md="13"
                cols="12"
              >
              <b for="">Preferencias e restrições</b>
                <VTextarea
                  label="Preferencias por alimentos e alimentos que não gosta ou não consegue consumir"
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
