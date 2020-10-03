const palindromes = function(str) {
    const planeStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = planeStr.split('').reverse().join('');
    return planeStr === reversed;
}

module.exports = palindromes
