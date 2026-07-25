---
title: Extension Tutorial
description: Step-by-step tutorial on adding extension repositories and installing manga extensions in Sugoi.
---

# Extension Tutorial & Repositories

Due to DMCA takedown notices, **Sugoi** does not come with preloaded extensions. To browse and read manga, you need to add third-party extension repositories.

::: danger Caution
Beware that third-party repositories or extensions have full access to the app and could potentially contain malware. Install them at your own risk.
:::

## Video Tutorial

Watch this step-by-step video tutorial on how to add extension repositories and install extensions in Mihon / Sugoi:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; margin: 1.5rem 0;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
    title="Extension Repository Tutorial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
  ></iframe>
</div>

---

## Available Manga Repositories

Here are the popular manga extension repositories. You can click **Install** to add them automatically on your Android device, or copy the manual repository URL.

| Repository | Sideload | Manual Repository JSON URL |
| :--- | :---: | :--- |
| **Keiyoushi** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/keiyoushi/extensions/repo/index.min.json) | `https://raw.githubusercontent.com/keiyoushi/extensions/repo/index.min.json` |
| **Yūzōnō** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/yuzono/manga-repo/repo/index.min.json) | `https://raw.githubusercontent.com/yuzono/manga-repo/repo/index.min.json` |
| **Fucked by FAKKU** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/mojuru/cursed-manga-repo/repo/index.min.json) | `https://raw.githubusercontent.com/mojuru/cursed-manga-repo/repo/index.min.json` |
| **Kavita** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/Kareadita/tach-extension/repo/index.min.json) | `https://raw.githubusercontent.com/Kareadita/tach-extension/repo/index.min.json` |
| **Suwayomi** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/Suwayomi/tachiyomi-extension/repo/index.min.json) | `https://raw.githubusercontent.com/Suwayomi/tachiyomi-extension/repo/index.min.json` |
| **copymanga-copy20** | [Install](tachiyomi://add-repo?url=https://raw.githubusercontent.com/LittleSurvival/copymanga-copy20/repo/index.min.json) | `https://raw.githubusercontent.com/LittleSurvival/copymanga-copy20/repo/index.min.json` |

---

## Step-by-Step How-to Guide

::::tabs
== 1. Adding Repository
### Automatic One-Click Addition
1. Open this website from your Android device where Sugoi is installed.
2. Click the **Install** button next to your desired repository in the table above.
3. Sugoi will automatically open and prompt: *"Add repository?"*. Tap **Add**.

### Manual Addition
1. Copy the **Manual Repository JSON URL** from the table above (e.g., `https://raw.githubusercontent.com/keiyoushi/extensions/repo/index.min.json`).
2. Open **Sugoi** app.
3. Navigate to **More** -> **Settings** -> **Browse**.
4. Tap **Extension repos** -> **Add repository** (or `+` icon).
5. Paste the copied URL into the text box and tap **Add** / **OK**.

== 2. Installing Extensions
1. After adding the repository, go to the **Browse** tab at the bottom navigation bar.
2. Tap the **Extensions** tab at the top.
3. Browse or search for your desired manga source.
4. Tap **Install** next to the extension.
5. If Android prompts you for installation permissions, enable **Allow from this source** for Sugoi.

== 3. Enabling & Trusting Extensions
1. Once installed, newly added extensions may require trust before use.
2. If an extension shows **Untrusted**, tap on the extension and select **Trust**.
3. Go back to **Browse** -> **Sources** to start searching and reading manga from the added extension.

== 4. Troubleshooting & FAQ
- **Extension shows "Obsolete":**
  - Refresh your extension repos by going to **Settings** -> **Browse** -> **Extension repos** and pulling down to refresh.
- **Extensions list is empty:**
  - Double check the Repository JSON URL. Ensure there are no typos or extra spaces.
  - Verify your device has an active internet connection.
- **Android blocks APK installation:**
  - Go to Android **Settings** -> **Apps** -> **Sugoi** -> **Install unknown apps** and set it to **Allowed**.
::::

---

*Source: [Wotaku.wiki](https://wotaku.wiki/ext/mihon)*
