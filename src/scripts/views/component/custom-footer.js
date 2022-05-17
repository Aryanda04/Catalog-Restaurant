/* eslint-disable require-jsdoc */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p class="footer-text">Copyright &#169 2022 - For Your Stomach</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
