# Tauri

This template helps the developer with Tauri in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Vue

I do not know if the app will work without vue, but I'm aiming for that because I built my bamboo project file without it.

References to Vue have been removed from the vite.config.js file. The import near the beginning and the plugin reference with the function:

line 2  import vue from "@vitejs/plugin-vue";

line 7  plugins: [vue()],

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Bamboo Project

The app was originally created as the Tauri first project app that one makes upon first installing Tauri. Now I've modified it to be the Bamboo Project app.