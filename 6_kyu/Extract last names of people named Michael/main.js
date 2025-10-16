function getMichaelLastName(inputText) {
    return inputText.match(/(Michael\s[A-Z]\w+)/g).map(fullName => fullName.split(' ')[1]);
}