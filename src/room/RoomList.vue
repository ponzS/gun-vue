<script setup>
import { useRooms } from '#composables';
import { reactive, ref, computed } from 'vue'
import { RoomCard, PostActionReact } from '../components'

defineEmits(['browse'])

const rooms = useRooms()


</script>

<template lang="pug">
.flex.flex-col
  .flex.flex-wrap.gap-4.my-4
    room-card( 
      v-for="(authors, pub) in rooms"
      :key="pub" 
      style="flex: 1 1 200px"
      :pub="pub"
      @click="$emit('browse', pub)"
      )
      post-action-react(
        :authors="authors" 
        :hash="pub" 
        tag="rooms"
        )
  
</template>