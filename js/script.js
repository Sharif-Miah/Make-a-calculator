let outPut = document.getElementById('out-put');
const buttons = Array.from(document.getElementsByClassName('button'));



buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                outPut.innerText = '';
                break;
            case 'DEL':
                outPut.innerText = outPut.innerText.slice(0, -1);
                break;

            default: outPut.innerText += e.target.innerText;
        }

    })
})

