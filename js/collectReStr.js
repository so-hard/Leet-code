let collectReStr = (str) => {
    let map = new Map();
    for (const list of str) {
        map.has(list) ? map.set(list, map.get(list) + 1) : map.set(list, 1)
    }
    return [].concat(...map).join("")
}

console.log(collectReStr("asdfsasf"))
