export default function () {
    const config = useRuntimeConfig();
    const channelId = config.public.channelId
    const apiKey = config.public.apiKey
    const videos = ref(false)
    const channelTitle = useState("title")
    const channelUrl = useState("url")
    const channelDescription = useState("description")
    const channelLogo = useState("logo")

    async function load () {
        const { data, pending, error, refresh } = await useFetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`, {
            lazy: true,
            server: false,
            transform: (data) => {
                if (data && data.items) {
                    channelTitle.value = data.items[0].snippet.title ?? "undefined"
                    channelDescription.value = data.items[0].snippet.description ?? "undefined"
                    channelLogo.value = data.items[0].snippet.thumbnails.high.url
                }
            }
        });
    }

    async function search () {
        const { data, error, loading } = await useFetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`, {
            lazy: true,
            server: false,
            transform: (data) => {
                console.log("^^^", data.items)
                videos.value = data.items
            }
        });
    }

    return { load, search, videos, channelTitle, channelDescription, channelLogo }
}
