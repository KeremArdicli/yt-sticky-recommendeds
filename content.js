function adjustSidebar() {
  const primary = document.querySelector("#primary");
  const secondary = document.querySelector("#secondary");
  const secondaryInner = document.querySelector("#secondary-inner");
  const player = document.querySelector("#player");
  const title = document.querySelector("#title");
  const topRow = document.querySelector("#top-row");
  const itemsContainer = document.querySelector("#items ytd-item-section-renderer");

  if (player && title && topRow && itemsContainer) {
    const totalHeight = player.offsetHeight + title.offsetHeight + topRow.offsetHeight;

    secondary.style.height = primary.offsetHeight + "px";

    itemsContainer.style.maxHeight = totalHeight + "px";
    itemsContainer.style.overflowY = "auto";
    itemsContainer.style.overflowX = "clip";
    secondaryInner.style.position = "sticky";
    secondaryInner.style.top = "72px";
  }
}

// İlk yüklemede
window.addEventListener("load", adjustSidebar);

// SPA navigasyon için gözlemci
const observer = new MutationObserver(adjustSidebar);
observer.observe(document.body, { childList: true, subtree: true });
