<script lang="ts" setup>
import AccountSettingsAnamnese from '@/views/pages/account-settings/AccountSettingsAnamnese.vue';
import AccountSettingsAvaliacao from '@/views/pages/account-settings/AccountSettingsAvaliacao.vue';
import AccountSettingsComposicaoCorporal from '@/views/pages/account-settings/AccountSettingsComposicaoCorporal.vue';
import AccountSettingsExames from '@/views/pages/account-settings/AccountSettingsExames.vue';
import AccountSettingsPaciente from '@/views/pages/account-settings/AccountSettingsPaciente.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Paciente', icon: 'ri-id-card-line', tab: 'paciente' },
  { title: 'Anamnese', icon: 'ri-file-list-line', tab: 'anamnese' },
  { title: 'Avaliação', icon: 'ri-ruler-line', tab: 'avaliacao' },
  { title: 'Exames', icon: 'ri-dossier-line', tab: 'exames' },
  { title: 'Composição Corporal', icon: 'ri-body-scan-line', tab: 'composicaoCorporal' }
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="paciente">
        <AccountSettingsPaciente />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="anamnese">
        <AccountSettingsAnamnese />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="avaliacao">
        <AccountSettingsAvaliacao />
      </VWindowItem>
      
      <VWindowItem value="exames">
        <AccountSettingsExames />
      </VWindowItem>

      <VWindowItem value="composicaoCorporal">
        <AccountSettingsComposicaoCorporal />
      </VWindowItem>
    </VWindow>
  </div>
</template>
