function filterByProperty(array, property, value, comparator) {
    return array.filter(item => {
        switch (comparator) {
            case '>': return item[property] > value;
            case '>=': return item[property] >= value;
            case '<': return item[property] < value;
            case '<=': return item[property] <= value;
            case '===': return item[property] === value;
            case '!==': return item[property] !== value;
            default: return false;
        }
    });
}

// Example usage:
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 27 }
];

const filteredUsers = filterByProperty(users, 'age', 25, '>');
console.log(filteredUsers);
