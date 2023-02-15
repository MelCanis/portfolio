export function _() { 
    for (let i of [...arguments]) console.log(i); 
}
export function $() {
    if (Array.isArray([...arguments][0]))
    return [...document.querySelectorAll([...arguments][0][0])];
    return document.querySelector([...arguments][0]);
}