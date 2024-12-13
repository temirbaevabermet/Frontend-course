// Function to generate a random password
function generatePassword() {
    // Get user preferences
    const length = document.getElementById('length').value; // Password length
    const includeUppercase = document.getElementById('uppercase').checked; // Include uppercase letters
    const includeLowercase = document.getElementById('lowercase').checked; // Include lowercase letters
    const includeNumbers = document.getElementById('numbers').checked; // Include numbers
    const includeSymbols = document.getElementById('symbols').checked; // Include symbols

    // Character pools for password generation
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?/';

    let allChars = '';

    // Build the character pool based on user preferences
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    // Validate that at least one character type is selected
    if (allChars === '') {
        document.getElementById('output').textContent = 'Please select at least one character type.';
        return;
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        // Select a random character from the pool
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Display the generated password
    document.getElementById('output').textContent = password;
}

// Function to copy the generated password to the clipboard
function copyToClipboard() {
    const output = document.getElementById('output').textContent;
    if (output === 'Your password will appear here.' || output === 'Please select at least one character type.') {
        alert('No valid password to copy!');
        return;
    }

    // Create a temporary input element to copy text to clipboard
    const tempInput = document.createElement('input');
    tempInput.value = output;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Password copied to clipboard!');
}