// JavaScript equivalent of your C program

function typeOfWebsite(type) {
    switch (type.toLowerCase()) {
        case "dynamic":
            return 10;
        case "static":
            return 7;
        case "bootstrap":
            return 5;
        case "wordpress":
            return 3;
        default:
            alert("Please select a valid website type.");
            return 0;
    }
}

function domain(domainExtension) {
    const nameOfDomain = [".in", ".com", ".net", ".pk"];
    const priceOfDomain = [4000, 40000, 400, 40];

    const index = nameOfDomain.indexOf(domainExtension);
    return index !== -1 ? priceOfDomain[index] : 0;
}

function additionalFunction(func) {
    const additionalFunctions = ["Payment Gateway", "Chat", "Social Login", "Maps", "Translation"];
    const priceOfFunction = [1000, 2000, 3000, 4000, 5000];

    const index = additionalFunctions.indexOf(func);
    return index !== -1 ? priceOfFunction[index] : 0;
}


function serverCost(load, ease) {
    const serverLoad = [50, 500, 5000, 50000];
    const serverLoadHigh = [1000, 10000, 20000, 30000];
    const serverLoadLow = [500, 5000, 10000, 15000];

    const index = serverLoad.indexOf(load);
    if (index !== -1) {
        return ease === "ease" ? serverLoadLow[index] : serverLoadHigh[index];
    }
    return 0;
}

function calculateFinalPrice(type, ease, domainExt, additionalFunc, serverLoad) {
    return (
        domain(domainExt) +
        additionalFunction(additionalFunc) +
        serverCost(serverLoad, ease)
    ) * typeOfWebsite(type);
}

// Event Listener for Calculate Price Button
document.querySelector(".left").addEventListener("click", () => {
    const type = document.querySelector(".type-of-website input").value;
    const domainExt = document.querySelector(".choose-domain input:nth-child(2)").value;
    const additionalFunc = document.querySelector(".additional-functions input").value;
    const serverLoad = parseInt(
        document.querySelector(".server-required input").value || "0"
    );
    const ease = document.querySelector(".right").textContent.trim().toLowerCase();

    const finalPrice = calculateFinalPrice(type, ease, domainExt, additionalFunc, serverLoad);

    document.querySelector(".final-display").textContent = `$${finalPrice}`;
};
