import comp from "D:/Shenb/vuepress-theme-hope/blogs/src/.vuepress/.temp/pages/posts/OpenWrt-Install.html.vue"
const data = JSON.parse("{\"path\":\"/posts/OpenWrt-Install.html\",\"title\":\"OpenWrt 安装教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenWrt 安装教程\",\"icon\":\"fab fa-markdown\",\"order\":2,\"category\":[\"安装教程\"],\"tag\":[\"OpenWrt\"],\"description\":\"原视频地址： 1 准备u盘 准备u盘（后续会被完全擦除），打开wePE（一种常用的WinPE ^1安装工具，其中还包括了许多常用工具）微PE官网 点击“安装到U盘” [[科普/assets/OpenWrt安装教程-assets/95a4c7ba5aac14a4099bf7e6d0095f0b_MD5.jpeg|Open: OpenWrt安装教程-ima...\"},\"headers\":[{\"level\":2,\"title\":\"1 准备u盘\",\"slug\":\"_1-准备u盘\",\"link\":\"#_1-准备u盘\",\"children\":[]},{\"level\":2,\"title\":\"2 写入OpenWrt\",\"slug\":\"_2-写入openwrt\",\"link\":\"#_2-写入openwrt\",\"children\":[{\"level\":3,\"title\":\"WinPE安装\",\"slug\":\"winpe安装\",\"link\":\"#winpe安装\",\"children\":[]},{\"level\":3,\"title\":\"写入镜像\",\"slug\":\"写入镜像\",\"link\":\"#写入镜像\",\"children\":[]}]},{\"level\":2,\"title\":\"3 初始配置OpenWrt\",\"slug\":\"_3-初始配置openwrt\",\"link\":\"#_3-初始配置openwrt\",\"children\":[{\"level\":3,\"title\":\"设置密码\",\"slug\":\"设置密码\",\"link\":\"#设置密码\",\"children\":[]},{\"level\":3,\"title\":\"配置软路由网络和端口\",\"slug\":\"配置软路由网络和端口\",\"link\":\"#配置软路由网络和端口\",\"children\":[]},{\"level\":3,\"title\":\"进入OpenWrt面板\",\"slug\":\"进入openwrt面板\",\"link\":\"#进入openwrt面板\",\"children\":[]}]},{\"level\":2,\"title\":\"3.1 OpenWrt的主路由设置\",\"slug\":\"_3-1-openwrt的主路由设置\",\"link\":\"#_3-1-openwrt的主路由设置\",\"children\":[]},{\"level\":2,\"title\":\"3.2 OpenWrt的旁路由设置\",\"slug\":\"_3-2-openwrt的旁路由设置\",\"link\":\"#_3-2-openwrt的旁路由设置\",\"children\":[{\"level\":3,\"title\":\"旁路由上的设置\",\"slug\":\"旁路由上的设置\",\"link\":\"#旁路由上的设置\",\"children\":[]},{\"level\":3,\"title\":\"所有流量都经过旁路由的设置\",\"slug\":\"所有流量都经过旁路由的设置\",\"link\":\"#所有流量都经过旁路由的设置\",\"children\":[]},{\"level\":3,\"title\":\"个别机器流量经过旁路由的设置\",\"slug\":\"个别机器流量经过旁路由的设置\",\"link\":\"#个别机器流量经过旁路由的设置\",\"children\":[]},{\"level\":3,\"title\":\"后话\",\"slug\":\"后话\",\"link\":\"#后话\",\"children\":[]}]},{\"level\":2,\"title\":\"4 获取IPv6地址\",\"slug\":\"_4-获取ipv6地址\",\"link\":\"#_4-获取ipv6地址\",\"children\":[{\"level\":3,\"title\":\"软路由获取IPv6地址\",\"slug\":\"软路由获取ipv6地址\",\"link\":\"#软路由获取ipv6地址\",\"children\":[]},{\"level\":3,\"title\":\"下游设备分配IPv6地址和局域网IPv4地址\",\"slug\":\"下游设备分配ipv6地址和局域网ipv4地址\",\"link\":\"#下游设备分配ipv6地址和局域网ipv4地址\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.51,\"words\":2553},\"filePathRelative\":\"posts/OpenWrt-Install.md\",\"excerpt\":\"<p>原视频地址：</p>\\n<div class=\\\"language-cardlink\\\" data-ext=\\\"cardlink\\\" data-title=\\\"cardlink\\\"><pre class=\\\"language-cardlink\\\"><code>url: https://www.bilibili.com/video/av959605152\\ntitle: \\\"【看番教程】软路由入门保姆教程，最详细的OpenWrt安装教程（物理机安装教程）_哔哩哔哩_bilibili\\\"\\ndescription: \\\"需要用到的工具与资源链接：https://pan.baidu.com/s/1xMvUvm1r3r7K3W_zFnKpXw?pwd=DDDD&nbsp; 提取码：DDDD&nbsp;哈喽，观众老爷大家好，欢迎来到看番教程的第二十一期。从这期开始呢，我们就要从头开始来教大家使用软路由了。如果是不知道软路由是什么或者不知道软路由是做什么用的的话，可以先去看看上一期的视频。, 视频播放量 165149、弹幕量 370、点赞数 5374、投硬币枚数 2375、收藏人数 8393、转发人数 368, 视频作者 大河李斯特视频工作室, 作者简介 前学而思老师，同济大学物理系毕业生，音游社老社长。视频每周五更新，游戏、科技类合作私信或v: torres-zhb。，相关视频：入门软路由？一篇就够了！真正给小白看的软路由入门指南，50元的二手小米路由器，刷成OpenWrt系统，真香，【直播】软路由｜OpenWrt｜恩山论坛版本安装、设置、调试【1】，几十块钱打造超流畅软路由——用极路由4刷OpenWrt，OpenWrt详细安装教程—J4125软路由直接安装OpenWrt，PVE8.0保姆级安装教程ikuai+op+群晖nas+docker+unlockvgpu+win10云游戏+私人流媒体教程(01)，【建议收藏】2023多网口迷你电脑新年选购辅助指南！今年买啥软路由？年更！每年在春节前后更新！，【保姆及教学】如何使用软路由安装网易UU给你的PS5 XSX Switch使用主机uu加速器 OpenWrt，如何让分身帐号IP都不一样【教学】软路由一线多拨多开多IP，PVE虚拟机部署OpenWrt+群晖NAS+Windows系统，打造一台全能主机，Proxmox VE系统超详细安装\\\"\\nhost: www.bilibili.com\\nimage: https://i0.hdslb.com/bfs/archive/b03566233f3f3a7c9c89f817c7c76412b24a02e5.jpg@100w_100h_1c.png\\n</code></pre></div>\",\"autoDesc\":true}")
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
