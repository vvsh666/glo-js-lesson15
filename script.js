const DomElement = function (selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;

    this.createEl = function () {
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
        document.body.append(element)
    }
}

const newElement1 = new DomElement('.class-element', '200px', '400px', 'red', '24px', 'Это блочный элемент DIV');
const newElement2 = new DomElement('#id-element', '200px', '600px', 'blue', '40px', 'Это параграф');
newElement1.text = 'Это новый текст для блочного элемента DIV'
newElement1.createEl();
newElement2.createEl()