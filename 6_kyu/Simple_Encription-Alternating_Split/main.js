function encrypt(text, n) {
    if (!Boolean(text) || n <= 0) return text;

    let oddStr = "", evenStr = "";

    for (let i = 0; i < text.length; i++) {
        i % 2 === 0 ? evenStr += text[i] : oddStr += text[i];
    }
    text = oddStr.concat(evenStr);
    n = n - 1;

    return n === 0 ? text : encrypt(text, n);
}

function decrypt(encryptedText, n) {
    if (!Boolean(encryptedText) || n <= 0) return encryptedText;

    const dividerPosition = encryptedText.length % 2 === 0 ? encryptedText.length / 2 : Math.floor(encryptedText.length / 2);

    let oddStr = encryptedText.slice(0, dividerPosition);
    let evenStr = encryptedText.slice(dividerPosition, encryptedText.length);

    const maxLength = Math.max(oddStr.length, evenStr.length);

    let decryptedText = "";
    for (let i = 0; i < maxLength; i++) {
        if (evenStr[i]) {
            decryptedText += evenStr[i];
        }

        if (oddStr[i]) {
            decryptedText += oddStr[i];
        }
    }
    n = n - 1;

    return n === 0 ? decryptedText : decrypt(decryptedText, n);
}