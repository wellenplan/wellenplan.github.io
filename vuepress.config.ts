import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  title: "Wellenplan",
  description: "Broadcast Management",
  dest: "dist",
  theme: defaultTheme({
    repo: "wellenplan/wellenplan",
    docsRepo: "wellenplan/docs",
    docsDir: "docs",
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/",
        children: [
          { text: "Introduction", link: "/guide/", activeMatch: "^/guide/$" },
          { text: "Getting Started", link: "/guide/getting-started.html" },
        ],
      },
      { text: "Getting Started", link: "/guide/getting-started.html" },
    ],
  }),
  plugins: [searchPlugin({})],
});
