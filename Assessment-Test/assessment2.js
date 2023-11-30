let x = [
    { id: 1, type: "a" },
    { id: 2, type: "b" },
    { id: 3, type: "b" },
    { id: 4, type: "c" },
    { id: 5, type: "a" },
];

function convertToGoal(arr) {
    let goal = {};

    arr.forEach(item => {
        if (!goal[item.type]) {
            goal[item.type] = [];
        }
        goal[item.type].push({id:item.id, type:item.type});
    });
    return goal;
}

let result = convertToGoal(x);
console.log(result);