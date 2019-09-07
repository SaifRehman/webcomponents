class Buttomcomponent extends HTMLElement {
    constructor() {
        super();
        this.buttonidtext = '';
        this.infoboxtext = '';
        this.isHidden = true;
        this.infoboxtextelem;
        this.buttonelem;

        this.attachShadow({
            mode: "open"
        })
        this.shadowRoot.innerHTML =
        `
            <style>
                #info-box {
                display: none;
            }
            </style>
            <button id="buttonid"></button>
            <p id="info-box"></p>
        `
    }
    connectedCallback() {
        if(this.hasAttribute('buttonidtext')){
            this.buttonidtext = this.getAttribute('buttonidtext')
        }
         this.buttonelem = this.shadowRoot.querySelector('#buttonid')
        this.buttonelem.textContent = this.buttonidtext;

        if(this.hasAttribute('infoboxtext')){
            this.infoboxtext = this.getAttribute('infoboxtext')
            console.log(this.infoboxtext);
        }
         this.infoboxtextelem = this.shadowRoot.querySelector('#info-box')
        this.infoboxtextelem.textContent = this.infoboxtext;
        this.buttonelem.addEventListener('click', this._mouseclick.bind(this))
    }
    _mouseclick(){
        if (this.isHidden) {
            this.infoboxtextelem.style.display = 'block';
            this.buttonelem.textContent = 'Hide';
            this.isHidden = false;
          } else {
            this.infoboxtextelem.style.display = 'none';
            this.buttonelem.textContent = 'Show';
            this.isHidden = true;
          }
    }
}

customElements.define('my-button', Buttomcomponent);