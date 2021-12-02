const toThousands = (numberString) => {
    const number = Number(numberString);
    // https://stackoverflow.com/a/7343013
    if (number >= 1000) return `${Math.round(number / 100) / 10}k`;
    else return numberString;
};

export default toThousands;