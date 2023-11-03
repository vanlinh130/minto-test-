function Validator(formSelector) {
    var _this = this;
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì return 'error Message'
     * - Nếu không có lỗi thì return 'undefiend'
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Please complete this field.';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please enter a valid email address.';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min
                    ? undefined
                    : `
                Please enter at least ${min} characters`;
            };
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Please enter a maximum of ${max} characters`;
            };
        },
    };

    // Lấy ra form element trong Dom theo 'formSelector'
    var formElement = document.querySelector(formSelector);

    // Chỉ Xử lý khi có element trong Dom
    if (formElement) {
        var inputs = document.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            // 1.
            var rules = input.getAttribute('rules').split('|'); // tách ra required và email
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':'); // tách min vs 6 ra

                    rule = ruleInfo[0]; // chỉ còn lại min thui
                    // console.log(validatorRules[rule](ruleInfo[1]))
                }

                var ruleFunc = validatorRules[rule];
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]); // nó sẽ gán sô 6 vào
                }

                if (Array.isArray(formRules[input.name])) {
                    // Kiểm tra có phải array ko
                    formRules[input.name].push(ruleFunc);
                } else {
                    // console.log(rule)
                    formRules[input.name] = [ruleFunc];
                }
            }

            // 2. Lắng nghe sự kiện để validate (blur, change ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        // Hàm thực hiên Validate
        function handleValidate(event) {
            var rules = formRules[event.target.name]; //  Lấy ra các rule của form
            var errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }

            // Nếu có lỗi hiển thị message lỗi ra UI
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        // Hàm clea message lỗi
        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');

                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }

        // Xử lý hành vi submit form
        formElement.onsubmit = function (event) {
            event.preventDefault();

            var inputs = formElement.querySelectorAll('[name][rules]');
            var isValid = true;

            for (var input of inputs) {
                if (!handleValidate({ target: input })) {
                    isValid = false;
                }
            }

            // Khi không có lỗi thì submit form
            if (isValid) {
                if (typeof _this.onSubmit === 'function') {
                    var enableInput = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInput).reduce(function (values, input) {
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked',
                                ).value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                } // nếu người dùng click vào vào checkbox thì chạy cái ko chạy

                                if (!Array.isArray(values[input.name])) {
                                    // Kiểm tra nếu nó ko phải là array
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);

                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});

                    // Gọi lại hàm onSubmit và trả về kèm giá trị của form
                    _this.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }
        };
    }
}
