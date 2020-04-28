function countB() {
    var count = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] === "B") {
            count++;
        }
    }
    return count;
}

function countChar(ch) {
    var count = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] === ch) {
            count++;
        }
    }
    return count;
}

const val = "aBbshdBBbsdf";
const letter = "B"
console.log(countChar(letter));