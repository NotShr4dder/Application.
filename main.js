document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var feedback = document.getElementById('feedback').value;
    fetch('https://discord.com/api/webhooks/1171575879260975125/pilNbN0901EBjJeZErIzvWE4T6jj2mpXFMB3_Cq2pHl9SPZEDbWmp92j0RVoCMh09tJR', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: feedback })
    });
});
