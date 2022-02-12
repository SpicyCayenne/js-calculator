class Button {
    constructor(_name) {
        this.name = _name;
        this.makeAButton();
    }

    makeAButton() {
        let location;
        let id;
        let cls;
        let display = this.name;
        if (typeof (this.name) === 'number') {
            if (this.name === 0) {
                location = 'extraBtns'
            } else {
                location = 'numbers'
            }
            id = `btn${this.name}`;
            cls = 'numBtn'
        } else if (this.name === 'C' || this.name === 'eq') {
            location = 'extraBtns'
            id = this.name;
            cls = 'opBtn'
        } else {
            location = 'operators'
            id = this.name;
            cls = 'opBtn'
        }
        switch (this.name) {
            case 'add':
                display = '+'
                break;
            case 'sub':
                display = '-'
                break;
            case 'mult':
                display = '*'
                break;
            case 'divide':
                display = '/'
                break;
            case 'eq':
                display = '='
                break;
            default:
                break;
        }
        document.getElementById(`${location}`).insertAdjacentHTML('beforeend', `<button id='${id}' class='${cls}'>${display}</button>`)
    }
}