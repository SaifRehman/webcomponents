class Myweb extends HTMLElement {

    constructor(){
        super();
        this.tooltipcontainer;
        this.tooltiptext;
        this.attachShadow({mode: "open"})
        const template = document.querySelector("#custom")
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.tooltiptext = 'dummy'
        if(this.hasAttribute('text'))
        {
            this.tooltiptext = this.getAttribute('text')
        }
        // const tooltip = document.createElement('span')
        const tooltip = this.shadowRoot.querySelector('span')
        tooltip.textContent = '(?)'
        tooltip.addEventListener('mouseenter', this._mouseenter.bind(this))
        tooltip.addEventListener('mouseleave', this._mouseleave.bind(this))
        this.shadowRoot.appendChild(tooltip);
    }
    _mouseenter(){
        this.tooltipcontainer = document.createElement('div')
        this.tooltipcontainer.textContent = this.tooltiptext 
        this.shadowRoot.appendChild(this.tooltipcontainer);
    }
    _mouseleave(){
        this.shadowRoot.removeChild(this.tooltipcontainer);
    }
}
customElements.define('my-custom', Myweb);