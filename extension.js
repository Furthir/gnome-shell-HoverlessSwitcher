import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as SwitcherPopup from 'resource:///org/gnome/shell/ui/switcherPopup.js';

var _disableHover;

export default class disable extends Extension {
	init() {
    	_disableHover = SwitcherPopup.SwitcherPopup.prototype._disableHover;
	}

	enable() {
    	SwitcherPopup.SwitcherPopup.prototype._disableHover = () => {};
	}

	disable() {
    	SwitcherPopup.SwitcherPopup.prototype._disableHover = _disableHover;
	}
}

