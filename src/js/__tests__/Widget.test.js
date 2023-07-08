import Widget from '../Widget';
import Popover from '../Popover';

describe(
  'Widget should:',
  () => {
    document.body.innerHTML = '<button class="btn">Click to toogle popover</button>';

    const popover = new Popover('title', 'content');
    const widget = new Widget(popover);

    widget.init();
    widget.btn.click();

    const el = document.querySelector('.popover');

    it(
      'create and position popover element',
      () => {
        expect(document.body.firstElementChild === el).toBe(true);
      },
    );

    it(
      'create popover element whith given title',
      () => {
        expect(widget.popover.title).toBe('title');
      },
    );

    it(
      'remove popover element, if it exists',
      () => {
        widget.btn.click();
        expect(document.body.firstChild === el).toBe(false);
      },
    );
  },
);
