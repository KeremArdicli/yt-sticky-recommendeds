# YouTube Sticky Suggestions

A simple Chrome Extension.  
It improves the usability of the **recommended videos panel** on YouTube watch pages:

- Matches the right panel’s height to the combined height of the video player, title, and top row.  
- Adds **scrolling** to the suggestions panel.  
- Makes the right panel **sticky**, so it stays visible when scrolling the main content on the left.  

This way you can browse suggestions without losing sight of the video. 🎥➡️

---

## 🚀 Installation (Developer Mode)

1. Download this repository or clone it with `git clone`.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the project folder.

---

## 🛠️ How It Works

- Collects the heights of `#player`, `#title`, and `#top-row`.
- Applies this height to the right-side suggestion list container (`#items ytd-item-section-renderer`).
- Adds `overflow-y: auto` for scrolling.
- Makes `#secondary-inner` sticky to remain visible while scrolling.
- Uses a `MutationObserver` to keep working when YouTube navigates between videos (SPA behavior).

---

## 📸 Screenshot

![ScreenShot](/ss.png)

---

## ⚖️ License

MIT
