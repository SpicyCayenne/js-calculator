class Calculator {
    constructor(_displayLocation) {
        this.displayLocation = _displayLocation;
        this.expression = 0;
        this.updateDisplay();
    }

    buildCalc() {
        // the numbers
        for (let i = 0; i < 10; i++) {
            new Button(i);
        }
        // the other buttons
        let operators = ['C', 'eq', 'add', 'sub', 'mult', 'divide']
        for (let i = 0; i < operators.length; i++) {
            new Button(operators[i]);
        }
        let btns = document.querySelectorAll('.numBtn')
        btns.forEach(button => {
            button.addEventListener('click', () => {
                this.numPress(button)
            })
            /*
            button.addEventListener('keyup', (e) => {
                this.numPress(button, e)
            }) */
        })
        btns = document.querySelectorAll('.opBtn')
        btns.forEach(button => {
            button.addEventListener('click', () => {
                this.opPress(button)
            })
            /*
            button.addEventListener('keyup', (e) => {
                this.opPress(button, e)
            })
            */
        })
    }

    numPress(button) {
        if (document.getElementById('answer').innerText !== '0'){
            this.resetAnswer();
        }
        if (this.expression === 0) {
            this.expression = ''
        }
        this.expression += button.innerText;
        this.updateDisplay();
        
    }

    opPress(button) {
        if (this.expression === 0) {
            return;
        }
        if (button.id === 'eq') {
            this.evaluate(this.expression);
            this.expression += "=";
            this.updateDisplay();
            return;
        }
        if (button.id === 'C') {
            this.expression = 0;
            this.updateDisplay();
            this.resetAnswer();
            return;
        }
        if (this.expression[this.expression.length - 1] === '=') {
            this.expression = document.getElementById('answer').innerText;
            this.updateDisplay();
        }
        this.expression += button.innerText;
        this.updateDisplay(); 
    }
    updateDisplay() {
        this.displayLocation.innerText = this.expression;
    }

    /* to stop the display from constantly resizing whenever the answer is shown, the font color of the answer is set to the background color until the user
    presses equals, then it changes to black. The clear button reverts it to the background color */
    showAnswer(result) {
        document.getElementById('answer').innerText = result;
        document.getElementById('answer').style.color = 'black';
    }
    resetAnswer() {
        document.getElementById('answer').innerText = 0;
        document.getElementById('answer').style.color = '#f8f0fb';
        this.expression = 0;
        this.updateDisplay();
    }

    evaluate(expression) {
        if (expression === "43110" || expression === "43770") {
            return this.showAnswer('howdy, stranger');
        }
        if (expression === '80085') {
            return this.showAnswer('ha, boobs');
        }
        return this.showAnswer(eval(expression))
    }
}

