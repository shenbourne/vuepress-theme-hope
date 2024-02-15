import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,f as o}from"./app-ix_RB9jx.js";const i={},r=o('<p>OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！</p><p><strong>打开<code>系统 &gt; 磁盘管理</code></strong></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>选择对应磁盘，点击“修改进入修改界面”</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452446.png" alt="f5be80847444639c6b86876b11c40c8.png" tabindex="0" loading="lazy"><figcaption>f5be80847444639c6b86876b11c40c8.png</figcaption></figure><p>找到对应磁盘，Free Space 新建，再格式化剩余空间</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452750.png" alt="7c439467833109158c46cd0c699ab53.png" tabindex="0" loading="lazy"><figcaption>7c439467833109158c46cd0c699ab53.png</figcaption></figure><p>分区格式选择：ext4</p><p><strong>打开<code>系统 &gt; 挂载点</code></strong></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151453997.png" alt="f3a93224294591beade5c502add99f1.png" tabindex="0" loading="lazy"><figcaption>f3a93224294591beade5c502add99f1.png</figcaption></figure><p>下拉到”挂载点“，点击最下方的“添加”</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151455436.png" alt="3f8cca62a75884e864a4f75e96f725a.png" tabindex="0" loading="lazy"><figcaption>3f8cca62a75884e864a4f75e96f725a.png</figcaption></figure><p>“启用此挂载点”打勾，“UUID”选择对应磁盘，“挂载点”选择“作为 Docker 数据分区使用”，点击“保存&amp;应用”</p><p><strong>最后重启 OpenWrt 系统</strong></p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151458165.png" alt="fc9f94d330a7bd2247c467aceeb6c44.png" tabindex="0" loading="lazy"><figcaption>fc9f94d330a7bd2247c467aceeb6c44.png</figcaption></figure><p>重启后来到<code>Docker &gt; 概览</code>，此时可以看到 Docker 扩容已经成功</p>',16),a=[r];function c(g,p){return t(),n("div",null,a)}const d=e(i,[["render",c],["__file","OpenWrt-Docker-Expansion.html.vue"]]),l=JSON.parse('{"path":"/notes/OpenWrt-Docker-Expansion.html","title":"OpenWrt软路由为Docker扩容","lang":"zh-CN","frontmatter":{"title":"OpenWrt软路由为Docker扩容","icon":"expansion","order":-1,"category":["配置教程"],"tag":["OpenWrt","Docker"],"description":"OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！ 打开系统 > 磁盘管理 image.pngimage.png 选择对应磁盘，点击“修改进入修改界面” f5be80847444639c6b86876b11c40c8.pngf5be808...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/notes/OpenWrt-Docker-Expansion.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"OpenWrt软路由为Docker扩容"}],["meta",{"property":"og:description","content":"OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！ 打开系统 > 磁盘管理 image.pngimage.png 选择对应磁盘，点击“修改进入修改界面” f5be80847444639c6b86876b11c40c8.pngf5be808..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-15T07:06:04.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"OpenWrt软路由为Docker扩容"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"OpenWrt"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-02-15T07:06:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenWrt软路由为Docker扩容\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452446.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151452750.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151453997.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151455436.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151458165.png\\"],\\"dateModified\\":\\"2024-02-15T07:06:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1707980764000,"updatedTime":1707980764000,"contributors":[{"name":"Shenb","email":"shenbourne@163.com","commits":1}]},"readingTime":{"minutes":0.74,"words":221},"filePathRelative":"notes/OpenWrt-Docker-Expansion.md","localizedDate":"2024年2月15日","excerpt":"<p>OpenWrt 默认只给 Docker 约 200 MB 的空间，完全不够折腾的，一拉取镜像就提示 “no space left on device” 。必须要扩容！</p>\\n<p><strong>打开<code>系统 &gt; 磁盘管理</code></strong></p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402151450335.png\\" alt=\\"image.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image.png</figcaption></figure>","autoDesc":true}');export{d as comp,l as data};
