<template>
  <div class="font-vazir">
    <ui-list-videos :videos="videos" v-if="videos" />
  </div>
</template>
<script setup>
const {
  load,
  search,
  videos,
  channelTitle,
  channelDescription,
  channelLogo,
} = useYouTubeAPI();
await load();
await search();
</script>
