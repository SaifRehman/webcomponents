class Myweb extends HTMLElement {

    constructor(){
        super();
    }
    connectedCallback(){
        const tooltip = document.createElement('span')
        tooltip.textContent = '(?)'
        this.appendChild(tooltip);
    }
}
customElements.define('my-custom', Myweb);