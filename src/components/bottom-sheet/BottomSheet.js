import { LitElement, html } from 'lit';

 class BottomSheet extends LitElement {

     static properties = {
         isOpen: { type: Boolean },
     };

     constructor() {
         super();
         this.isOpen = true;
     }



     handleClose() {
        this.dispatchEvent(new CustomEvent('onClose'));
    }


    handleMouseDown(e) {
        const startY = e.clientY;

        const handleMouseMove = (e) => {
            const delta = startY - e.clientY;
            const newHeight = Math.max(50, Math.min(100, 50 + delta / window.innerHeight * 100));
            this.style.height = `${newHeight}vh`;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }


    render() {
        return this.isOpen
            ? html`
              <div class=${`bottom-sheet ${this.open ? 'show' : ''}`}>
                <div class="sheet-overlay" @click=${this.handleClose}></div>
                <div class="content" @mousedown=${this.handleMouseDown}>
                  <slot #content></slot>
                </div>
              </div>
    ` : html``
    }
}

customElements.define('bottom-sheet', BottomSheet);
