function sendWebhook(event) {
  event.preventDefault();
  
  const webhookUrl = "https://discord.com/api/webhooks/1263255244088021012/PhlqNXm2GnT1lJYIqTHfOWQb0exmQRwHq2cozQ6Qs4az8qvx_bZW0DlLqwDDuQr5TdZr";
  const message = document.getElementById("message").value;

  if (!webhookUrl || !interval || !times) {
    alert("Missing parameters.");
    return;
  }

  if (!message && fileInput.files.length == 0) {
    alert("Missing parameters.");
    return;
  }
  
  for (let i = 0; i < times; i++) {
    const modifiedMessage = applyOption(message, option);
    const payload = {
      content: modifiedMessage
    };
    const formData = new FormData();
    formData.append("payload_json", JSON.stringify(payload));
    if (fileInput.files.length > 0) {
      formData.append("file", fileInput.files[0]);
    }
    
    setTimeout(() => {
      fetch(webhookUrl, {
        method: "POST",
        body: formData
      }).then(response => {
        console.log("Message sent successfully!");
      }).catch(error => {
        console.error("Error sending message");
      });
    }, interval);
  }
  alert(`send-ok!`);
}
