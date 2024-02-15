import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Mermaid from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "D:/Shenb/vuepress-theme-hope/blogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
