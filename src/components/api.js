const reqURL = "https://api.rss2json.com/v1/api.json?rss_url="

const Api = {
  GET: path => fetch(`${reqURL}${path}`, { method: "GET" }),
}

export const mainVid = query =>
  Api.GET(`https://www.youtube.com/feeds/videos.xml?channel_id=${query}`)
