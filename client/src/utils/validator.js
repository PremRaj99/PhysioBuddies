const validator = {
    isEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    isEmpty: function(value) {
        return value.trim() === '';
    },
    
    isLength: function(value, min, max) {
        if (min && value.length < min) {
            return false;
        }
        if (max && value.length > max) {
            return false;
        }
        return true;
    }
};

validator.isPassword = function(password) {
    // Minimum eight characters, at least one letter, one number and one special character
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};

validator.validatePassword = function(password) {
    const errors = [];
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Za-z]/.test(password)) {
        errors.push("Password must contain at least one letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }
    return errors.length > 0 ? errors : null;
};

validator.validateEmail = function(email) {
    const errors = [];
    if (validator.isEmpty(email)) {
        errors.push("Email cannot be empty.");
    }
    if (!validator.isEmail(email)) {
        errors.push("Email is not valid.");
    }
    return errors.length > 0 ? errors : null;
};

export default validator;