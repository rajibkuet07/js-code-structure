'use strict'
// start using namespaces so your code does not conflict
// with other libraries

const APP = {
    // use 'APP' instead of 'this' keyword, because its safe

    today: new Date(),
    KEY: 'jhj3245gj23h42j34',
    init: function () {
        //function to start things off
        console.log(APP.today.toLocaleDateString());
        //add some event listeners
        APP.addListeners(); // can use 'this' keyword instead of 'APP'
        //make a call to an API with a callback
        let url = `https://jsonplaceholder.typicode.com/posts?key=${APP.KEY}`; // can use 'this' keyword instead of 'APP'
        APP.getData(url, APP.afterFetch); // can use 'this' keyword instead of 'APP'
    },
    addListeners: function () {
        console.log('adding listeners to the page');
    },
    abc: () => {
        console.log('abc');
    },
    getData(url, cb) {
        //do fetch call
        fetch(url)
            .then((res) => res.json())
            .then((content) => {
                // call function to add content
                // call the callback
                if (cb) {
                    cb();
                }
            })
            .catch((err) => console.error);
    },
    afterFetch() {
        console.log('data fetch completed');
    },
};

// now call the init method of the APP when document is fully loaded
document.addEventListener('DOMContentLoaded', APP.init); // But here 'APP' is must, because its out of the APP

// Some other namespaces from others
const CONTACT = {};

const CART = {};

const MAPPING = {};