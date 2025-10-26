const makeChange = (c) => {
    c = parseInt(c);

    // Values in cents
    let q = Math.floor(c / 25);
    c = c % 25;

    let d = Math.floor(c / 10);
    c = c % 10;

    let n = Math.floor(c / 5);
    c = c % 5;

    let p = c;

    return { q, d, n, p };
};