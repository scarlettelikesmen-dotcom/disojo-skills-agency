/* https://yodezeen.com/workers/image-worker.js */
self.addEventListener(
  "message",
  async function(e) {
      const urls = e.data
      const chunkSize = 8
      let counter = 0

      for (let i = 0; i < urls.length; i += chunkSize) {
        const chunk = urls.slice(i, i + chunkSize)
        const res = await Promise.all(
          chunk.map(async (url) => {
            const idx = counter++
            const response = await fetch(url, {
              priority: "low"
            })
            const fileBlob = await response.blob()

            return {
              id: idx,
              url: URL.createObjectURL(fileBlob)
            }
          })
        )

        self.postMessage(res)
      }
    },
    false
)