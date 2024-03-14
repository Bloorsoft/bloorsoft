window.chatwootSettings = {
  position: "right",
  type: "expanded_bubble",
  launcherTitle: "Chat with us",
  hideMessageBubble: false,
};

function loadChatwoot() {
  // Remove existing Chatwoot widget and SDK script if they exist
//   const existingWidget = document.querySelector(".woot--bubble-holder");
//   if (existingWidget) {
//     existingWidget.remove();
//   }

  const existingScript = document.getElementById("chatwoot-sdk");
  if (existingScript) {
    existingScript.remove();
  }

  // Load Chatwoot SDK script
  console.log("Chatwoot script loaded");
  const BASE_URL = "https://app.chatwoot.com";
  const g = document.createElement("script");
  const s = document.getElementsByTagName("script")[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  g.id = "chatwoot-sdk";
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: "vqSbD6KWKYWZy91kex4VnfhG",
      baseUrl: BASE_URL,
    });
  };
}

// Load Chatwoot initially
loadChatwoot();

// Reinitialize Chatwoot on every page navigation
document.addEventListener("astro:page-load", () => {
  loadChatwoot();
});
