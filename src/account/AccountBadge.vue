<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useGun, useColor, selectedUser, useUser, SEA, theme } from '../composables'
import { AccountAvatar } from '../components'

const props = defineProps({
  pub: { type: String, default: '' },
  showName: { type: Boolean, default: true },
  size: { type: Number, default: 30 },
  selectable: Boolean,
  vertical: Boolean
})

const name = ref('')
const petname = ref('')

const colorDeep = useColor('deep')
const colorLight = useColor('light')

const gun = useGun()
const { user } = useUser()

watchEffect(() => {
  name.value = ''
  petname.value = ''
  gun.user(props.pub).get('profile').get('name').on(d => {
    name.value = d
  })
  gun.user().get('petnames').get(props.pub).on(async d => {
    petname.value = await user.decrypt(d)
  })
});

watch(() => user.is, is => {
  if (!is) {
    name.value = ''
    petname.value = ''
  }
})

function select() {
  if (props.selectable) {
    selectedUser.pub = props.pub
  }
}


</script>

<template lang="pug">
.frame.p-2px.flex.items-center.rounded-full.bg-light-900.dark-bg-dark-200.cursor-pointer.shadow.transition.duration-400.ease-in(
  :style="{ flexDirection: vertical ? 'column' : 'row' }"
  :title="showName ? petname ? petname : pub : name"
  @click="select()"
  )
  account-avatar(
    :pub="pub" 
    :size="size"
    )
  .mx-2.font-bold.text-sm.max-w-8ch.overflow-ellipsis.overflow-hidden.whitespace-nowrap(v-if="showName && pub && name") {{ name }} 
  .tip.mx-2.font-bold.text-sm.max-w-8ch.overflow-ellipsis.overflow-hidden.whitespace-nowrap.absolute.opacity-0.hover-opacity-100.transition-all.duration-300.ease-in.text-center.transform.translate-y-2.p-1.rounded-lg(
    v-if="name && !showName"
    :style="{ transform: `translateY(${-size - 5}px) translateX(-50%)` }"
    ) {{ name }}
  slot
</template>

<style lang="postcss" scoped>
.frame:hover .tip {
  @apply opacity-100;
}
</style>