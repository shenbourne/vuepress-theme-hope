import comp from "F:/Git/Github Clone/vuepress-theme-hope/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"demo/page.md\",\"excerpt\":\"\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
