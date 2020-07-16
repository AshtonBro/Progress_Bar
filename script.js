"use strict";

//* ProgressBar you can apply to any element
class ProgressBar {
  constructor(option = {}) {
    const {
      startPoint = 0,
      endPoint = 100,
      background = "black",
      height = "70",
      textColor = "white",
      border = "5px solid blue",
    } = option;

    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.background = background;
    this.height = height;
    this.textColor = textColor;
    this.border = border;
  }

  init(selector) {
    document.querySelector(selector).append(this.createProgressBar());
  }

  createProgressBar() {
    const progressBar = document.createElement("div");
    const bar = this.createBar();
    progressBar.append(bar);
    progressBar.style.width = "100%";
    progressBar.style.border = this.border;
    this.animateBar(bar);
    return progressBar;
  }

  createBar() {
    const bar = document.createElement("div");
    bar.style.cssText = `
            text-align: center;
            background-color: ${this.background};
            height: ${this.height}px;
            line-height: ${this.height}px;
            color: ${this.textColor};
        `;
    this.stateProgress(bar);
    return bar;
  }

  stateProgress(elem) {
    elem.style.width = `${this.startPoint}%`;
    elem.textContent = `${this.startPoint}%`;
  }

  animateBar(elem) {
    const animate = () => {
      if (this.startPoint < this.endPoint) {
        this.startPoint++;
        this.stateProgress(elem);
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}

class RoundedProgressBar extends ProgressBar {
  constructor(option = {}) {
    super(option);
    const { rounded = "25px" } = option;
    this.rounded = rounded;
  }

  createProgressBar() {
    const progressBar = super.createProgressBar();
    this.roundedBar(progressBar);
    return progressBar;
  }

  roundedBar(elem) {
    elem.style.borderRadius = this.rounded;
    elem.firstChild.style.borderRadius = this.rounded;
  }
}
