<template>
  <div class=" dark bg-black/70">
    <div class="mx-auto container  lg:mb-16 mb-8 pt-20 text-center">
    <center><img :src="channelLogo" class="w-32" /></center>
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        {{ channelTitle }}
      </h2>
        <div class="font-light text-gray-500 sm:text-xl dark:text-gray-400 w-3/4">
          {{ channelDescription }}
        </div>
        
    </div>
    <div v-if="videos" class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      <a :href="`https://youtube.com/watch?v=${item.id.videoId}`" v-for="(item, i) in videos">
        <UCard class="dark h-full hover:shadow-2xl hover:scale-95 duration-300 dark:bg-white/5">
          <template #header class="m-0 p-0">
          <img
              :src="item.snippet.thumbnails.high.url"
              class="w-full h-auto object-cover"
            />
          </template>

            <h3 v-html="item.snippet.title" class="text-xl  font-black dark:text-white"></h3>
          <p class="dark:text-white">{{ item.snippet.description }}</p>

          

          <template #footer>
            <pre>{{ item.snippet.publishTime }}</pre>
          </template>
        </UCard>
      </a>
    </div>
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
