import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as m,c as s,d as o,w as t,f as d,a as e,b as c}from"./app-7y4BC6mm.js";const g={},u=d('<p>x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。</p><p>在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。</p><p>在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。</p><p>在2004年，Intel 推出了支持 x86 的 64 位指令集架构 x86-64（现在一般简称为x64），后英特尔将其命名为 “Intel 64”。但 Intel 在此架构中吸纳 AMD64，常常被媒体嘲笑。</p><p>ARM（英文为Advanced RISC Machine，或Acorn RISC Machine）也是一个架构，非常适用于移动通信这种低成本，高性能，低耗电的领域。常常出现在手机端等，在电脑中很少见。</p><p>苹果电脑在采用M系列芯片之前，采用的都是Intel芯片，是x86-64架构。但苹果的M系列芯片采用的是 arm 架构。</p><p>Windows电脑区分x32和x64的方法：</p><p>按下 Win+R，打开 “运行”，输入 “cmd”，按下 Enter 启动命令提示符</p><figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160407495.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>在命令提示符中输入 <code>systeminfo</code>，等待数秒。查看“系统类型”，若是 “x64-based PC”，则应分辨是哪个指令集架构。</p>',10),h=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160411994.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),x=e("p",null,"一般 AMD cpu 的 64 位 pc 是 amd64 指令集架构",-1),I=e("figure",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160409577.png",alt:"image.png",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image.png")],-1),_=e("p",null,"一般 Intel cpu 的 64 位 pc 是 x86-64 指令集架构",-1),v=e("p",null,"总结：3个指令集家族的父子关系",-1),b=e("p",null,"总结：x86家族的指令集架构分类",-1),A=e("ol",null,[e("li",null,"x86：一般没有别名，在早期的 32 位 cpu 会出现"),e("li",null,"x64：别名 x86-64、Intel 64、EM64T 等，一般会在 64 位的 Intel 处理器中出现"),e("li",null,"amd64：一般没有别名，会在 64 位的 amd 处理器中出现")],-1);function y(f,M){const r=i("Tabs"),p=i("Mermaid");return m(),s("div",null,[u,o(r,{id:"30",data:[{id:"amd64处理器实例"},{id:"x86-64处理器实例"}],active:1},{title0:t(({value:n,isActive:a})=>[c("amd64处理器实例")]),title1:t(({value:n,isActive:a})=>[c("x86-64处理器实例")]),tab0:t(({value:n,isActive:a})=>[h,x]),tab1:t(({value:n,isActive:a})=>[I,_]),_:1}),v,o(p,{id:"mermaid-51",code:"eJxLy8kvT85ILCpRCHHi4iwuTUovSizIUKiwMOPi5EzJLEpNLsnMz1NwCgFyEw2jgeKxCrq6dgqJRiC2rplJLLqEcXRibgpYPDUvBclIT0egaqBiT8doMBNDQWJRLlA6OT+vJBpEZOaVZualH9oOglC1AAdkNJg="}),b,A])}const C=l(g,[["render",y],["__file","x86-x64-amd64-arm.html.vue"]]),H=JSON.parse('{"path":"/story/x86-x64-amd64-arm.html","title":"x64、amd64、arm之争","lang":"zh-CN","frontmatter":{"title":"x64、amd64、arm之争","icon":"Apache","order":2,"category":["故事"],"tag":["ISA"],"description":"x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。 在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/story/x86-x64-amd64-arm.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"x64、amd64、arm之争"}],["meta",{"property":"og:description","content":"x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。 在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160407495.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T14:34:46.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"x64、amd64、arm之争"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:tag","content":"ISA"}],["meta",{"property":"article:modified_time","content":"2024-02-16T14:34:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"x64、amd64、arm之争\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160407495.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160411994.png\\",\\"https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160409577.png\\"],\\"dateModified\\":\\"2024-02-16T14:34:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1708030573000,"updatedTime":1708094086000,"contributors":[{"name":"Shenb","email":"shenbourne@163.com","commits":7}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"story/x86-x64-amd64-arm.md","localizedDate":"2024年2月15日","excerpt":"<p>x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。</p>\\n<p>在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。</p>\\n<p>在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。</p>","autoDesc":true}');export{C as comp,H as data};
