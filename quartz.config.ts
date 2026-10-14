import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "StudyLabs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "iisertvmstudylabs.github.io/StudyMaterial/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
    colors: {
        lightMode: {
          light: "#e1e2e7",
          lightgray: "#cfc9c2",
          gray: "#a8aecb",
          darkgray: "#343b58",
          dark: "#0f0f14",
          secondary: "#34548a",
          tertiary: "#006a83",
          highlight: "rgba(52, 84, 138, 0.15)",
          textHighlight: "#b15c0088",
        },
        darkMode: {
          light: "#1a1b26",       // Page background
          lightgray: "#24283b",   // Borders
          gray: "#565f89",        // Muted text & graph lines
          darkgray: "#a9b1d6",    // Body text
          dark: "#c0caf5",        // Headers & icons
          secondary: "#7aa2f7",   // Link color & active node
          tertiary: "#7dcfff",    // Hover states & visited links
          highlight: "rgba(122, 162, 247, 0.15)", // Internal link highlights
          textHighlight: "#e0af6888", // Markdown text highlight (==text==)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "tokyo-night",
          dark: "tokyo-night",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "mathjax" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
