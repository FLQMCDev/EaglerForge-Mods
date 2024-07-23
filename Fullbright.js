ModAPI.require("settings", function(settings) {
  class Fullbright {
    constructor() {
      this.enabled = false;
      this.toggle();
    }

    toggle() {
      this.enabled = !this.enabled;
      if (this.enabled) {
        settings.setBrightness(100); // Maximum brightness
      } else {
        settings.setBrightness(settings.defaultBrightness); // Restore default brightness
      }
    }
  }

  const fullbright = new Fullbright();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'b') { // Press 'b' to toggle Fullbright
      fullbright.toggle();
    }
  });
});
