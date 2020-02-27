'use strict';

class ProgressBar{
    constructor (option = {}) {
        const {
            startPoint = 0,
            endPoint = 20,
            background = 'red',
            height = 20,
            textColor = 'black',
            border = '1px solid black',
        } = option;

        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.background = background;
        this.height = height;
        this.textColor = textColor;
        this.border = border;
    }

    init(selector) {
        document.querySelector(selector);
    }

    createProgressBar(){
        const progressBar = document.createElement('div');
    }

    createBar() {
        const bar = document.createElement('div');
        bar.style.cssText = `
            text-align: center;
            background-color: ${this.background};
        `;
    }
}


