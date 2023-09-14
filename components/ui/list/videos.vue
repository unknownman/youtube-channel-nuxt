<template>
  <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white" v-if="videos">
    <div
      class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
    >
      <div class="flex flex-col items-center sm:px-5 md:flex-row">
        <div
          class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2"
        >
          <div
            class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5"
          >
            <div
              class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block"
            >
              <p class="inline">
                <svg
                  class="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </p>
              <p class="inline text-xs font-medium">New</p>
            </div>
            <a class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">{{
              firstVideo.snippet.title
            }}</a>
            <p>{{ firstVideo.snippet.description }}</p>
            <div class="pt-2 pr-0 pb-0 pl-0">
              <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                {{ usePublishDate(firstVideo.snippet.publishedAt) }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="block">
            <img
              :src="firstVideo.snippet.thumbnails.high.url"
              class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
            />
          </div>
        </div>
      </div>
      <div
        v-if="otherVideo"
        class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <a
          :href="`https://youtube.com/watch?v=${item.id.videoId}`"
          v-for="(item, i) in otherVideo"
        >
          <div class="max-w-md mx-auto hover:shadow-md p-5 rounded-b-3xl hover:border-t-2">
            <div
              class="h-[236px]"
              :style="`background-image:url(${item.snippet.thumbnails.high.url});background-size:cover;background-position:center`"
            ></div>
            <div class="p-4 sm:p-6">
              <h3
                class="font-bold text-gray-700 text-[22px] font-sans font-cairo mb-1"
                v-html="item.snippet.title"
              ></h3>
              <div class="flex flex-row justify-end">
                <p class="text-sm font-jet bg-slate-100 text-black px-2 rounded-xl">
                  {{ usePublishDate(item.snippet.publishedAt) }}
                </p>
              </div>
              <div
                class="text-[#7C7C80] font-[15px] line-clamp-2 h-22 font-vazir h-24"
              >
              <span class="line-clamp-2">{{ item.snippet.description }}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videos: {
    type: [Array, Boolean],
    default: false,
  },
});
console.log(props.videos[0]);
const firstVideo = computed(() => {
  if (props && props.videos && props.videos[0]) return props.videos[0];
  return false;
});
const otherVideo = computed(() => {
  if (props && props.videos && props.videos[1]) {
    var videosItems = props.videos;
    return videosItems.slice(1);
  }
  return [];
});
</script>
