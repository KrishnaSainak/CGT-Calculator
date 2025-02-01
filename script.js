document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.querySelector('button[type="submit"]');

    calculateButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Gather input values
        const assetType = document.getElementById('asset').value;
        const costPrize = parseFloat(document.getElementById('costPrize').value) || 0;
        const soldPrize = parseFloat(document.getElementById('soldPrize').value) || 0;
        const stampValue = parseFloat(document.getElementById('stampValue').value) || 0;
        const brokerValue = parseFloat(document.getElementById('brokerValue').value) || 0;
        const constructionCost = parseFloat(document.getElementById('costConstruction').value) || 0;
        const improvementCost = parseFloat(document.getElementById('costImprovement').value) || 0;
        const investment = parseFloat(document.getElementById('investment').value) || 0;

        // Calculate capital gains
        const totalCost = costPrize + stampValue + brokerValue + constructionCost + improvementCost;
        const capitalGains = soldPrize - totalCost - investment;

        // Display results
        const resultText = `Capital Gains: ${capitalGains.toFixed(2)}`;
        alert(resultText); // You can change this to display in a specific HTML element if needed
    });
});
