// dependencies
import ko from 'knockout';
// primary class
import Terrarium from './terrarium';

window.ko = ko;
ko.options.useOnlyNativeEvents = true;

ko.applyBindings(new Terrarium());
