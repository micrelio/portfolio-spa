class miContacto extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = 
`
<section class="">
  

	

<img src="/src/assets/images/constructor.png">

</section>
`;

  }
}
customElements.define("mi-contacto", miContacto);

