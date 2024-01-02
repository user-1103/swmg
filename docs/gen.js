const num_targets = 5;

const targets = [
    "target 2",
    "target 3",
    "target 4",
    "target 5",
    "target 6",
    "target 7",
    "target 8",
    "target 9",
    "target 10",
    "target 11",
    "target 12",
    "target 13",
    "target 14",
];

function gen_targets() {
    // Generates targets and adds them to the page
    for (let x = 0; x < num_targets; x++) {
        var index = Math.floor(Math.random() * targets.length);
        var cost = Math.floor(Math.random() * targets.length);
        var target = targets[index];
        var tag = document.createElement("li");
        var text = document.createTextNode(`${target} - ${cost} points`);
        tag.appendChild(text);
        var element = document.getElementById("targs");
        element.appendChild(tag);
    }
}

gen_targets()
