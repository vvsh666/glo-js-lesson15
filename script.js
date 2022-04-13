const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
}

DomElement.prototype.createEl = function () {
    let element = '';
    if (this.selector[0] === '.') {
        element = document.createElement('div');
        element.classList.add(this.selector.slice(1))
    }
    if (this.selector[0] === '#') {
        element = document.createElement('p');
        element.id = this.selector.slice(1)
    }
    element.textContent = this.text;
    element.style.height = this.height;
    element.style.width = this.width;
    element.style.backgroundColor = this.bg;
    element.style.fontSize = this.fontSize;
    document.body.append(element);
    return element
}

const squareElement = new DomElement('.square', '100px', '100px', 'magenta')
squareElement.position = 'absolute'

document.addEventListener('DOMContentLoaded', () => {
    const element = squareElement.createEl();

    element.style.position = squareElement.position;

    document.addEventListener('keydown', (event) => {
        let left = parseInt(getComputedStyle(element).left);
        let top = parseInt(getComputedStyle(element).top);
        switch (event.key) {
            case 'ArrowUp': {
                top -= 10
                element.style.top = top + 'px'
                break;
            }
            case 'ArrowDown': {
                top += 10
                element.style.top = top + 'px'
                break;
            }
            case 'ArrowLeft': {
                left -= 10
                element.style.left = left + 'px'
                break;
            }
            case 'ArrowRight': {
                left += 10
                element.style.left = left + 'px'
                break;
            }
        }
    })
})