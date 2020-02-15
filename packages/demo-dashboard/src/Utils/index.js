
export const tryCall = (fn, ...args) => {
    if(typeof fn === 'function') {
        return fn(...args);
    }
}