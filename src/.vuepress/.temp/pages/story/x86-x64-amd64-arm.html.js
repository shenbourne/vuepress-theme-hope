import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/story/x86-x64-amd64-arm.html.vue"
const data = JSON.parse("{\"path\":\"/story/x86-x64-amd64-arm.html\",\"title\":\"x64、amd64、arm之争\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"x64、amd64、arm之争\",\"icon\":\"Apache\",\"order\":2,\"category\":[\"故事\"],\"tag\":[\"ISA\"],\"description\":\"x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。 在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向...\"},\"headers\":[],\"readingTime\":{\"minutes\":1.91,\"words\":573},\"filePathRelative\":\"story/x86-x64-amd64-arm.md\",\"excerpt\":\"<p>x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。</p>\\n<p>在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。</p>\\n<p>在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。</p>\",\"autoDesc\":true}")
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
