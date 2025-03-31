document.getElementById("submit").onclick = function() {
    let time = Number(document.getElementById("time").value);
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("interestrate").value);

    let total = principal * Math.pow((1 + rate / 100), time);

    // Format number into a shorter version if it exceeds 1000
    let formattedTotal = formatNumber(total);

    document.getElementById("total").textContent = `The total is ${total.toFixed(2)} (${formattedTotal}) after ${time} years`;
};

// Function to shorten large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + ' million';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + ' thousand';
    } else {
        return num.toFixed(2);
    }
}
