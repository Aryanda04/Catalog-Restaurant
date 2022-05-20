/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="block_navbar_menu">
    <button href="#" id="menu" class="navbar__menu">☰</button>
    <img class="logo" src="../icons/fys-1-removebg-preview.png" alt="fys-1 logo" >
</div>

<nav id="drawer" class="nav">
    <img class="logo" src="../icons/fys-1-removebg-preview.png" alt="fys-1 logo" > 


    <ul class="nav__list">


        <li class="nav__item"><a href="#">Home</a></li>
        
        <li   class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li  class="nav__item"><a target="_blank" rel="noreferrer" href="https://aryanda04.github.io/portfolio/">About Us</a></li>
    </ul>
</nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
