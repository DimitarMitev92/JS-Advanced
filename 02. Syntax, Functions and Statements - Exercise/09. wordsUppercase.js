function wordsUppercase(string) {
    console.log(string.match(/\w+/g).map(word => word.toUpperCase()).join(', '));
}