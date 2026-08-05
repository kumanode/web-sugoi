---
title: Contribute
description: Discover how to contribute to Sugoi app codebase, documentation, and translations.
---

# Contributing to Sugoi

Sugoi is an open-source project and welcomes contributions from developers, designers, translators, and community members.

::: tip Welcome Contributors
Whether you want to fix a bug, add a new feature, improve documentation, or translate Sugoi into your native language, your help is greatly appreciated!
:::

---

## Code Contributions

If you know how to code and want to help build Sugoi, check out our official repositories on GitHub:

<div style="display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.5rem 0;">
  <a href="https://github.com/kumanode/sugoi" target="_blank" rel="noopener" style="text-decoration: none;">
    <img
      class="only-light"
      src="https://github-readme-stats.vercel.app/api/pin/?username=kumanode&repo=sugoi&bg_color=f6f6f7&title_color=54759e&icon_color=54759e&border_radius=8&hide_border=false"
      alt="kumanode/sugoi - GitHub"
      width="380"
      height="120"
      loading="lazy"
    />
    <img
      class="only-dark"
      src="https://github-readme-stats.vercel.app/api/pin/?username=kumanode&repo=sugoi&bg_color=181825&text_color=c9d1d9&title_color=54759e&icon_color=54759e&border_radius=8&hide_border=true"
      alt="kumanode/sugoi - GitHub"
      width="380"
      height="120"
      loading="lazy"
    />
  </a>

  <a href="https://github.com/kumanode/web-sugoi" target="_blank" rel="noopener" style="text-decoration: none;">
    <img
      class="only-light"
      src="https://github-readme-stats.vercel.app/api/pin/?username=kumanode&repo=web-sugoi&bg_color=f6f6f7&title_color=54759e&icon_color=54759e&border_radius=8&hide_border=false"
      alt="kumanode/web-sugoi - GitHub"
      width="380"
      height="120"
      loading="lazy"
    />
    <img
      class="only-dark"
      src="https://github-readme-stats.vercel.app/api/pin/?username=kumanode&repo=web-sugoi&bg_color=181825&text_color=c9d1d9&title_color=54759e&icon_color=54759e&border_radius=8&hide_border=true"
      alt="kumanode/web-sugoi - GitHub"
      width="380"
      height="120"
      loading="lazy"
    />
  </a>
</div>

### Getting Started with App Development

1. **Prerequisites**:
   - JDK 17 or higher
   - Android Studio Ladybug or newer
   - Android SDK 36 (Android 15)

2. **Setup**:
   ```bash
   git clone https://github.com/kumanode/sugoi.git
   cd sugoi
   ```

3. **Build Debug APK**:
   ```bash
   ./gradlew assembleStandardDebug
   ```

---

## Submitting Pull Requests

Before submitting a Pull Request:
- Ensure your code follows existing Kotlin / Android conventions.
- Use conventional commit messages (e.g., `feat:`, `fix:`, `refactor:`, `docs:`).
- Verify that your code compiles cleanly without build errors or broken tests.

---

## Translations

Help us localize **Sugoi** so users around the world can read manga in their native language.

Want to help translate the app to your language? You can easily contribute using **Weblate**.

> View translation project [here on Weblate](https://hosted.weblate.org/engage/mihon/).

### Useful Translation Guides
* [Translators Guide](https://docs.weblate.org/en/latest/user/translating.html)
* [Secondary Languages Setup](https://docs.weblate.org/en/latest/user/profile.html#secondary-languages)
* [Weblate Subscriptions & Notifications](https://docs.weblate.org/en/latest/user/profile.html#subscriptions)
* [Glossary & Terminology](https://docs.weblate.org/en/latest/user/translating.html#glossary)
