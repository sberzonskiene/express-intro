export function randomString(size=20) {
    const abc = "0123456789abcdefghiyjklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = '';

    for (let i = 0; i < size; i++) {
        str += abc[Math.floor(Math.random() * abc.length)];
    }

    return str;
}
