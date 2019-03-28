// This lesson illustrated how to use the ternary conditional operator with multiple conditions.
function checkSign(num) {
    return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

checkSign(10);
