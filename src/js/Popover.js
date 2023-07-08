export default class Popover {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  static get markup() {
    return `   
      <div class="popover">
        <div class="popover-header"></div>
        <div class="popover-body"></div>
        <div class="arrow"></div>
      </div>
    `;
  }

  show() {
    this.nextEl = document.querySelector('.btn');
    this.nextEl.insertAdjacentHTML('beforebegin', Popover.markup);

    document.querySelector('.popover-header').textContent = this.title;
    document.querySelector('.popover-body').textContent = this.content;

    this.element = document.querySelector('.popover');

    this.getPosition();
  }

  getPosition() {
    const { left } = this.nextEl.getBoundingClientRect();
    const arrow = document.querySelector('.arrow');
    const widthDifference = this.element.offsetWidth - this.nextEl.offsetWidth;

    this.element.style.left = `${left - widthDifference / 2}px`;
    arrow.style.left = `${(this.element.offsetWidth / 2) - arrow.offsetWidth}px`;
  }

  remove() {
    document.body.removeChild(this.element);
    this.element = null;
  }
}
