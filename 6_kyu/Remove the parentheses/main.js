function removeParentheses(s) {
    if (/\(([^()]+)\)/.exec(s)) {
        let updtStr = s.replace(/\(([^()]+)\)/.exec(s)[0], '');
        return removeParentheses(updtStr);
    }
    return s;
}

// const result = removeParentheses('example(unwanted thing)example');
// const result = removeParentheses('example (unwanted thing) example');
// const result = removeParentheses('example (unwanted thing) example');
// const result = removeParentheses('(first group) (second group) (third group)');
const result = removeParentheses('hello example (words(more words) here) something');
console.log(result);