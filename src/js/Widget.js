export default class Widget {
  constructor(popover) {
    this.popover = popover;
    this.btn = document.querySelector('.btn');
  }

  init() {
    this.btn.addEventListener('click', this.onClick.bind(this));
  }

  onClick(e) {
    e.preventDefault();

    if (!this.popover.element) {
      this.popover.show();
    } else {
      this.popover.remove();
    }
  }
}
