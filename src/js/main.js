"use strict";
import './slider';
import modals from './modules/modals';
import timer from './modules/timer';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};

    changeModalState(modalState);

    modals(modalState);
    timer(".timer", "2020-09-30");
    tabs();
    forms(modalState);
    images();
});


