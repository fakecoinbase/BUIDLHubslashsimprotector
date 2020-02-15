
export const tryCall = (fn, ...args) => {
    if(typeof fn === 'function') {
        fn(...args);
    }
}