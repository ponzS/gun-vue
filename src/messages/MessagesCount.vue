<script setup lang="ts">
import { useMessagesCount } from './useMessages'

const props = defineProps({
  pub: {
    default: '',
    type: String
  }
})

defineEmits(['chat'])

const { count, available } = useMessagesCount(props.pub)

</script>

<template lang="pug">
.pl-2.flex.items-center.bg-light-200.dark-bg-dark-600.rounded-xl.cursor-pointer(
  :style="{ opacity: available ? 1 : 0.1 }"
  @click="$emit('chat')"
  )
  .i-ph-chats-light.text-xl
  .font-bold.text-lg.mx-2 {{ count }}
</template>