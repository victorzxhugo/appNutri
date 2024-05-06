<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'


const accountData = {
  avatarImg: avatar1,
  firstName: 'john',
  lastName: 'Doe',
  email: 'johnDoe@example.com',
  org: 'ThemeSelection',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}

const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}


</script>

<template>
  <VCard title="Avaliação Física">
  <VRow>
    
    <VCol cols="12">
      <VCard title="Medidas Antopométricas">
        

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <VCol
                md="3"
                cols="20"
              >
               
              <VTextField
                  label="Idade"
                />
              </VCol>
              <VCol
                md="3"
                cols="20"
              >
              
              <VTextField
                label="Altura"
                />
              </VCol>


              <VCol
                md="3"
                cols="20"
              >
                
                <VTextField
                  label="Peso"
                />
              </VCol>

              <VCol
                md="3"
                cols="20"
              >
              
                <VTextField
                  label="Circunferência abdominal"
                />
              </VCol>

              
              <VCol
                md="3"
                cols="20"
              >
              
                <VTextField
                  label="Circunferência cefálica"
                />
              </VCol>

              <VCol
                md="3"
                cols="20"
              >
              
                <VTextField
                 label="IMC"
                />
              </VCol>

              
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    
  </VRow>
  <VRow>
    <VCol cols="12">
      <VCard title="Dobras Cutâneas">
        

        <VCardText>
          
          <VForm class="mt-6">
            <VRow>
              
              <VCol
                md="3"
                cols="12"
              >
                
              <VTextField
                  label="Bíceps e Tríceps"
                />
              </VCol>
              <VCol
                md="3"
                cols="12"
              >
               
              <VTextField
                  label="Suprailíaca"
                />
              </VCol>


              <VCol
                md="3"
                cols="12"
              >
                
                <VTextField
                  label="Subescapular"
                />
              </VCol>

              <VCol
                md="3"
                cols="12"
              >
              
                <VTextField
                  label="Auxiliar"
                />
              </VCol>

              
              <VCol
                md="3"
                cols="12"
              >
              
                <VTextField
                  label="Abdominal"
                />
              </VCol>

              <VCol
                md="3"
                cols="12"
              >
              
                <VTextField
                  label="Coxa"
                />
              </VCol>
              <VCol
                md="3"
                cols="12"
              >
              
                <VTextField
                  label="Panturrilha"
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
                <VBtn>Save changes</VBtn>

                <VBtn
                  color="secondary"
                  variant="outlined"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
    
  </VRow>
</VCard>
</template>
