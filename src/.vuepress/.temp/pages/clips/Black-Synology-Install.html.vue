<template><div><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作：</span></a></h2>
<p>1、引导U盘1个≥4G ；（建议用品牌U盘）（注：U盘以后要一直插在群晖设备上）</p>
<p>引导盘推荐用U盘，灵活方便。(当前支持 SATA/SCSI/NVME/MMC/IDE or USB 设备, 且要大于2GB推荐4G）不用U盘，用其它类型盘当作引导看这个：
<a href="https://zhuanlan.zhihu.com/p/675182987" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/675182987<ExternalLinkIcon/></a></p>
<p>2、工作电脑1台；</p>
<p>要求和群晖设备在同一个局域网，建议用有线连接，WiFi可能不稳定。</p>
<p>3、准备装群晖的设备1台。(至少1块SATA接口硬盘，内存: 需要≥ 4GB.）</p>
<p>设备插好网线(路由器开启DHCP)、鼠标、键盘、显示器、硬盘备用。</p>
<details class="hint-container details"><summary>黑群晖一般只支持机械硬盘。制作全固态/全闪存NAS方法</summary>
<p>暂时只能 新版U盘引导+SA6400 才能支持NVMe盘做系统盘。</p>
<p>方法：开机 &gt; 选择中文 &gt; 选择型号 (SA6400) &gt; 选择版本 DSM7.2 &gt; 添加插件 (HDDdb、NvmeSystem、NvmeVolume) &gt; 填入洗白码 (可选) &gt; 编译群晖引导。</p>
</details>
<div class="hint-container warning">
<p class="hint-container-title">安装前注意事项：</p>
<p>DT的型号目前不支持HBA扩展卡(较新版本的RR引导 SA6400 支持).</p>
<p>NVME的PCIPATH有两种格式, 单层路径的兼容 DT 的型号, 多层路径的兼容 DS918+ 等型号.</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">安装中注意事项：</p>
<p>安装后注意事项：<br>
1、不要拔掉U盘，需要一直插着U盘。<br>
2、不要点升级。不要点升级。不要点升级，因为是黑群hui。</p>
<p><img src="https://www.nas50.cn/zb_users/upload/2024/04/202404271714192284175459.png" alt="image.png" loading="lazy"><br>
3、不懂就不要随意删除“任务计划”里面的任务。</p>
<figure><img src="https://www.nas50.cn/zb_users/upload/2024/04/202404271714192030238092.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<figure><img src="https://www.nas50.cn/zb_users/upload/2024/04/202404271714191961334233.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
</div>
<h2 id="一、群辉引导u盘制作、系统安装" tabindex="-1"><a class="header-anchor" href="#一、群辉引导u盘制作、系统安装"><span>一、群辉引导U盘制作、系统安装</span></a></h2>
<h3 id="_1-下载基本文件" tabindex="-1"><a class="header-anchor" href="#_1-下载基本文件"><span>1. 下载基本文件</span></a></h3>
<p>进入网站下载arpl巴西大佬群晖引导：<a href="https://github.com/RROrg/rr/releases" target="_blank" rel="noopener noreferrer">RROrg/rr: Redpill Recovery (arpl-i18n)<ExternalLinkIcon/></a></p>
<p>下翻并选择后缀为 .img.zip 的文件，点击下载。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080452810.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>得到文件使用解压缩软件进行解压缩，得到文件：<code v-pre>rr.img</code> 。</p>
<p>下载Rufus写盘工具：<a href="https://rufus.ie/zh/" target="_blank" rel="noopener noreferrer">Rufus - 轻松创建 USB 启动盘<ExternalLinkIcon/></a></p>
<p>下拉并找到下载选项，点击下载Windows版本文件。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080445788.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>下载后点击应用程序文件进行安装，并将作为群辉引导的U盘接入电脑。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>U盘以后要一直插在群晖设备上，且写入系统时会被格式化！请妥善备份该U盘中的文件！</p>
</div>
<h3 id="_2-将黑群晖系统写入u盘" tabindex="-1"><a class="header-anchor" href="#_2-将黑群晖系统写入u盘"><span>2. 将黑群晖系统写入U盘</span></a></h3>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080501796.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>之后一路点击 “确定” 开启硬盘写入。</p>
<p>当状态栏显示 “准备就绪” 就成功了。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407080504409.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>引导制作完成，将该U盘拔出电脑，插入NAS机器中。同时接上键鼠、显示器、网线。</p>
<p>准备完成后点击开机键开机，开机同时不断按 ‘Delete’ 键进入 BIOS 界面。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082152873.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>点击 ’→‘ 到 “Boot” 选项，点击 ’↓‘ 到 “Boot Option #1” 选项，点击 ‘Enter’ 后在弹出的对话框选择刚刚引导的U盘。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082153446.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>选择 “Save Changes and Exit”，在弹出的对话框中选择 ‘Yes’ 。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082153567.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>之后屏幕会跑一阵时间代码，最终会显示一个内网ip地址，以7681端口为结尾。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407082159456.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h3 id="_3-群辉系统引导编译" tabindex="-1"><a class="header-anchor" href="#_3-群辉系统引导编译"><span>3. 群辉系统引导编译</span></a></h3>
<p>用另一台电脑（连接同一内网）登录该地址，进入自编译界面。此处按 ’↑‘ 键和 ’↓‘ 键可选中不同选项，按 ’Enter‘ 键进入设置。</p>
<p>选中 “choose a language” 可选择语言，如更换为中文。此处保持英文。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092207326.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>选中 “choose a model” 以选择型号。一般选择918，在某些不支持的固件上可能不显示该选项，此时可以改选其他引导，如3615。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092006535.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>选中 “Choose a version” 以选择系统版本。可直接选择最新版本并回车。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092201658.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>在弹出的版本页面，点击URL下载当前引导的系统文件。下载好的系统文件后缀为pat，然后回车确认。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092203057.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>选中 “Build the loader” 以编译引导。PR会自动完成引导的编译。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092205196.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>编译好引导后会自动跳转到主菜单的启动选项，直接点击 “Boot the loader” 启动即可。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092215244.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>系统自动启动，等待1-2分钟后使用页面弹出的ip地址访问即可进入到系统安装步骤</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092216920.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>步骤12中的ip地址不一定正确，可以在 http://find.synology.com/ 搜索安装。（软件已经放在网盘中），双击进入系统安装步骤。</p>
</div>
<h3 id="_4-群辉系统安装" tabindex="-1"><a class="header-anchor" href="#_4-群辉系统安装"><span>4. 群辉系统安装</span></a></h3>
<p>浏览器输入刚刚获得的ip地址，进入系统安装页面，点击安装。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092223868.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>选择从计算机手动上传 .pat 文件，文件为选择系统版本时下载的文件，点击下一步</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092223785.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>之后会安装系统，持续几分钟。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092230164.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>等待倒计时归零</p>
<figure><img src="https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202407092231330.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<h2 id="二、群辉nas初上手" tabindex="-1"><a class="header-anchor" href="#二、群辉nas初上手"><span>二、群辉NAS初上手</span></a></h2>
<h2 id="三、群辉nas进阶玩法" tabindex="-1"><a class="header-anchor" href="#三、群辉nas进阶玩法"><span>三、群辉NAS进阶玩法</span></a></h2>
<h2 id="四、注意事项-补充" tabindex="-1"><a class="header-anchor" href="#四、注意事项-补充"><span>四、注意事项+补充</span></a></h2>
</div></template>


