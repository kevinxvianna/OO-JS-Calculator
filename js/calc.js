
window.onload = function(){
    document.getElementById('screen').value = operations.v1;
}

var operations = new Object();

operations = {
    v1: 0,
    v2: 0,
    op: null,
    sop: null,
    res: '',

    plus() {
        this.res = parseFloat(this.v1 + this.v2);
    },

    minus() {
        this.res = parseFloat(this.v1 - this.v2);
    },

    mult() {
        this.res = parseFloat(this.v1 * this.v2);
    },

    div() {
        this.res = parseFloat(this.v1 / this.v2);
    },

    sqrt() {
        this.res = parseFloat(Math.sqrt(this.v1));
    },

    pow() {
        this.res = parseFloat(Math.pow(this.v1, this.v2));
    },

    percent() {
        this.res = parseFloat(this.v1 / 100);
    }
}

function insertOp(op){
    operations.op = op;
    operations.v1 = parseFloat(document.getElementById('screen').value);
    document.getElementById('screen').value = '';
}

function insertSop(sop){
    operations.sop = sop;
    operations.v1 = parseFloat(document.getElementById('screen').value);
    document.getElementById('screen').value = '';
    singleClick();
}

function insert(n){
    if(document.getElementById('screen').value == 0){
        document.getElementById('screen').value = '';    
    }
    document.getElementById('screen').value += n;
    
}
function clearEverything(){
    operations.v1 = 0,
    operations.v2 = 0,
    operations.op = null,
    operations.sop = null,
    operations.res = 0;

    document.getElementById('screen').value = operations.v1;
}
function singleClick(){
    switch(operations.sop){
        case 'sqrt':
            operations.sqrt();
            document.getElementById('screen').value = operations.res;
            break;

        case '%':
            operations.percent();
            document.getElementById('screen').value = operations.res;
            break;

        default:
            window.alert('Invalid operator!');
    }
}

function equals(){
    switch(operations.op){
        case '+':
            operations.v2 = parseFloat(document.getElementById('screen').value);
            operations.plus();
            document.getElementById('screen').value = operations.res;
            break;

        case '-':
            operations.v2 = parseFloat(document.getElementById('screen').value);
            operations.minus();
            document.getElementById('screen').value = operations.res;
            break;

        case '/':
            operations.v2 = parseFloat(document.getElementById('screen').value);
            operations.div();
            document.getElementById('screen').value = operations.res;
            break;
        
        case 'x':
            operations.v2 = parseFloat(document.getElementById('screen').value);
            operations.mult();
            document.getElementById('screen').value = operations.res;
            break;

        case 'p':
            operations.v2 = parseFloat(document.getElementById('screen').value);
            operations.pow();
            document.getElementById('screen').value = operations.res;
            break;

        default:
            window.alert('Invalid operator!');
    }
}



