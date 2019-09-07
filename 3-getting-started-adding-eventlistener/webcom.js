class Myweb extends HTMLElement {

    constructor(){
        super();
        this.tooltipcontainer;
    }
    connectedCallback(){
        const tooltip = document.createElement('span')
        tooltip.textContent = '(?)'
        tooltip.addEventListener('mouseenter', this._mouseenter.bind(this))
        tooltip.addEventListener('mouseleave', this._mouseleave.bind(this))
        this.appendChild(tooltip);
    }
    _mouseenter(){
        this.tooltipcontainer = document.createElement('div')
        this.tooltipcontainer.textContent = 'hovered over '
        this.appendChild(this.tooltipcontainer);
    }
    _mouseleave(){
        this.removeChild(this.tooltipcontainer);
    }
}
customElements.define('my-custom', Myweb);