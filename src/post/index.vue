<script setup>
import { safeHash, currentRoom, selectedUser } from '#composables'
import { PostList, PostGraph } from '#components'
import { ref, computed } from 'vue'

const showGraph = ref()

</script>

<template lang="pug">
.flex.flex-col.p-2
  post-list.w-full(
    :key="currentRoom.pub"
    tag="PvRPp6Qs4F5fkSx9CnWfUsN2QkpmsIkaVxvpGf6iK18="
    :header="false" 
    @close="$router.push('/posts/')"
    @browse="$router.push(`/posts/${safeHash($event)}`)"
    @user="selectedUser.pub = $event"
    )
    button.button(
      :class="{ active: showGraph }" 
      @click="showGraph = !showGraph")
      .i-la-eye
      .ml-2 Graph
  transition(name="fade" mode="out-in" appear)
    post-graph.absolute.top-2.right-2.left-2.z-10(
      v-if="showGraph" 
      @post="$router.push(`/posts/${safeHash($event)}`)")
      button.button.fixed.top-40.right-8(
        v-if="showGraph"
        @click="showGraph = false")
        .i-la-times.text-2xl
</template>