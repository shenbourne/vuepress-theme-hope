import { defineClientConfig } from "vuepress/client";
import CodeTabs from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "F:/Git/Github Clone/vuepress-theme-hope/node_modules/katex/dist/katex.min.css";
import "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import MarkMap from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "F:/Git/Github Clone/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("MarkMap", MarkMap);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
