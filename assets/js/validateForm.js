const nameEl = document.querySelector('#name');
const phoneEl = document.querySelector('#phone');
const addressEl = document.querySelector('#address');
const companyEl = document.querySelector('#company');
const emailEl = document.querySelector('#email');
const interestedEl = document.querySelector('#interested');
const form = document.querySelector('#submit');

const checkName = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

const checkAddress = () => {
    let valid = false;

    const address = addressEl.value.trim();

    if (!isRequired(address)) {
        showError(addressEl, 'address cannot be blank.');
    } else {
        showSuccess(addressEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;

    const phone = phoneEl.value.trim();

    if (!isRequired(phone)) {
        showError(phoneEl, 'Phone number cannot be blank.');
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl, 'Phone number is not valid.');
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

const isPhoneValid = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
};

const checkCompany = () => {
    let valid = false;

    const min = 5,
        max = 40;

    const company = companyEl.value.trim();

    if (!isRequired(company)) {
        showError(companyEl, 'Company cannot be blank.');
    } else if (!isBetween(company.length, min, max)) {
        showError(companyEl, `Company must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(companyEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkInterested = () => {
    let valid = false;
    const min = 5,
        max = 30;
    const interested = interestedEl.value.trim();

    if (!isRequired(interested)) {
        showError(interestedEl, 'Interested cannot be blank.');
    } else if (!isBetween(interested.length, min, max)) {
        showError(interestedEl, `Interested must be between ${min} and ${max} characters.`);
    } else {
        showSuccess(interestedEl);
        valid = true;
    }
    return valid;
};

const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) => (length < min || length > max ? false : true);

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isCompany = checkCompany(),
        isInterested = checkInterested(),
        isPhoneValid = checkPhone(),
        isAddress = checkAddress();

    let isFormValid = isNameValid && isEmailValid && isCompany && isInterested && isPhoneValid && isAddress;

    if (isFormValid) {
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
};

form.addEventListener(
    'input',
    debounce(function (e) {
        switch (e.target.id) {
            case 'name':
                checkName();
                break;
            case 'email':
                checkEmail();
                break;
            case 'company':
                checkCompany();
                break;
            case 'phone':
                checkPhone();
                break;
            case 'address':
                checkAddress();
                break;
            case 'interested':
                checkInterested();
                break;
        }
    }),
);
