/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), ">
    <div class="hero__inner">
        <h1 class="hero__title">FYS, For Your Stomach</h1>
        <p class="hero__tagline">Find the Best Place to fill up your stomach</p>
    </div>
</div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
