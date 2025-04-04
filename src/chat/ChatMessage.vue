<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { selectedUser, useUser, getFirstEmoji, useMd } from '../composables';
import { AccountBadge, TorrentDownload } from '../components'

const props = defineProps({
  index: { type: Number, default: 0 },
  source: {
    type: Object,
    default: () => ({
      author: '',
      timestamp: '',
      text: 'empty'
    })
  }
})

const md = useMd()

const dateTime = computed(() => {
  return formatDate(Number(props.source.timestamp))
})

const { user } = useUser()

const isMe = computed(() => props.source.author == user.pub)

function formatDate(timestamp: number) {
  if (!timestamp) return
  const theDate = new Date(timestamp)
  const date = theDate.toLocaleDateString('en-CA')
  const time = theDate.toLocaleTimeString('ru-RU')
  return {
    full: date + ' ' + time,
    date,
    time,
    // ms: ms(Date.now() - theDate.getTime()),
  }
}

const fresh = ref(true)

onMounted(() => {
  if (props.index > 1) {
    const prevPub = document.getElementById(`chat-${props.index - 1}`)?.dataset?.pub
    if (prevPub == props.source.author) {
      fresh.value = false
    }
  }
})



</script>

<template lang="pug">
.px-1.py-2px.flex.flex-col.w-full.gap-1(
  :style="{ alignItems: isMe ? 'end' : 'start' }"
  )
  .flex.items-center.w-full.mt-2.gap-2(
    v-show="fresh"
    :id="`chat-${index}`"
    :style="{ flexDirection: isMe ? 'row-reverse' : 'row' }"
    :data-pub="source.author"
    )
    account-badge.opacity-50.hover-opacity-90.transition(
      :pub="source.author" 
      :show-name="true" 
      :size="20" 
      @click="selectedUser.pub = source.author"
      )
    .ml-2.text-sm.opacity-60.hover-opacity-80.transition.cursor-default.text-black.dark-text-light-400  {{ dateTime?.time }}
    .flex-1
    .ml-2.text-sm.opacity-60.hover-opacity-80.transition.cursor-default.text-black.dark-text-light-400 {{ dateTime?.date }} 
  .px-2.py-1.bg-light-300.dark-bg-dark-200.dark-bg-opacity-80.bg-opacity-80.rounded-b-xl.max-w-max.break-all.overflow-hidden(:style="{ borderTopLeftRadius: isMe ? '12px' : '0px', borderTopRightRadius: isMe ? '0px' : '12px', fontSize: `${source?.text}` == getFirstEmoji(`${source?.text}`) ? '6em' : '1em' }")
    .text-8xl(v-if="source?.text == getFirstEmoji(`${source?.text}`)") {{ source?.text }}
    TorrentDownload(v-else-if="source?.text?.split?.('#/files/')[1]" :id="source?.text?.split?.('#/files/')[1].slice(0, 40)") 
    .markdown-body(
      v-else-if="source?.text" 
      v-html="md.render(`${source?.text}`)"
      )
</template>

<style scoped lang="postcss">
.prose.condensed p {
  margin: 0;
}
</style>