
let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input'); // Optional: you can give input an ID to be safer

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string); // ⚠️ Be careful with eval in real apps
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});