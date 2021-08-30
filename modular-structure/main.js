import { PIE, f } from './modules/a.mjs';
import someFunc, { CAKE } from './modules/b.js';
//g will be someFunc

const APP = (function () {
    document.addEventListener('DOMContentLoaded', () => {
        console.log(PIE);
        f();
        someFunc();
        console.log(CAKE);
    });

    //rest of code just like in main-2
})();