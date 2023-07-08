import Popover from './Popover';
import Widget from './Widget';

const title = 'Popover title';
const content = 'And here\'s some amazing content. It\'s very engaging. Right?';

const popover = new Popover(title, content);
const widget = new Widget(popover);

widget.init();
