export default function() {
    let emails = document.querySelectorAll('.form-group input');
    let buttons = document.querySelectorAll('.form-group button');
    let alert = document.querySelector('.alert');
    let message = document.querySelector('.alert__message');
    let closeAlert = document.querySelector('.alert__close');

    emails.forEach(email => {
        email.addEventListener('focus', e => {
            email.parentElement.style.border = 'solid 1px rgba(45, 156, 219, 1)';
        });

        email.addEventListener('blur', e => {
            email.parentElement.style.border = 'none';
        });
    });

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();

            let email = button.parentElement.querySelector('input');
            message.innerHTML = "Gotcha! We'll contact you soon." + email.value;
            alert.classList.add('opened');

            setTimeout(() => {
                alert.classList.remove('opened');
            }, 5000);

            document.querySelectorAll('form').forEach(form => {
                form.reset();
            });
        });
    });

    closeAlert.addEventListener('click', (e) => {
        alert.classList.remove('opened');
    });
}
