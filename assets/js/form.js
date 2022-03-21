export default function() {
    let emails = document.querySelectorAll('.form-group input');
    let buttons = document.querySelectorAll('.form-group button');

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

            // TODO: show an alert saying that form was submitted successfully

            document.querySelectorAll('form').forEach(form => {
                form.reset();
            });
        });
    });
}
