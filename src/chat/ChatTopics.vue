<script setup lang="ts">
import { ref } from 'vue'
import { useMediaQuery, onClickOutside } from '@vueuse/core'
import { useChat } from './composables';
import { AccountAvatar } from '../components'
import { useUser, currentRoom } from '#composables';

defineProps({
  title: { type: String, default: 'Topics' },
  topic: { type: String, default: 'general' }
})

defineEmits(['topic'])

const { user } = useUser()

const { addChat, chats, removeChat } = useChat()

const newChat = ref('')
const adding = ref(false)
const chatsPanel = ref()
const panelOpen = ref(true)
const isLarge = useMediaQuery('(min-width: 640px)')

onClickOutside(chatsPanel, () => !isLarge.value ? panelOpen.value = false : null)


</script>

<template lang="pug">
button.button.fixed.z-2000.top-16.left-4(v-if="(!panelOpen && !isLarge)" @click="panelOpen = true")
  | {{ title }}
transition(name="fade" mode="out-in" appear)
  .px-1.py-2.flex.flex-col.bg-dark-50.dark-bg-dark-400.bg-opacity-95.gap-2.overflow-y-scroll.scroll-smooth.absolute.sm-static.z-20000.min-w-260px.max-w-full.text-light-900.backdrop-filter.backdrop-blur-xl.pb-8(v-if="isLarge || (panelOpen && !isLarge)" ref="chatsPanel" style="flex: 0 1 320px")
    .flex.flex-wrap
      .text-xl.font-bold.p-2 {{ title }}
      .flex-1
      .cursor-pointer.self-center.text-2xl.p-2(@click="adding = !adding" v-if="user.is")
        transition(name="fade" mode="out-in")
          .i-la-plus(v-if="!adding")
          .i-la-times(v-else)
    .flex.flex-wrap(v-if="adding")
      input.p-2.m-2.w-full.rounded-xl.text-dark-800(v-model="newChat" placeholder="New chat" @keyup.enter="addChat(newChat); newChat = ''; adding = false")
    .flex.flex-col.p-2.gap-2.h-full
      .font-bold.bg-light-100.bg-opacity-10.rounded-xl.px-2.cursor-pointer.flex.items-center.gap-1(v-for="chat in chats" :key="chat.title" @click="$emit('topic', chat.title); panelOpen = false")
        .flex-1 {{ chat.title }}
        button(v-if="user.is && chat.my < 1" @click="addChat(chat.title)")
          .i-la-plus
        .font-normal.font-mono.text-xs {{ chat.rating }}
        button(v-if="user.is && chat.my > -1" @click="removeChat(chat.title)")
          .i-la-times
</template>