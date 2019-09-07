class Myweb extends HTMLElement {

    constructor(){
        super();
        console.log('this works')
    }
}
customElements.define('my-custom', Myweb);