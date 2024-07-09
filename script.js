document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    const messageDetails = document.querySelector('.message-details .message-content');

    const messageData = {
        "JG-JIOFIB": `
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis provident accusamus incidunt
                        quia quisquam natus repudiandae sequi, molestiae facilis consequuntur ipsum deserunt sint
                        assumenda possimus dolorum eaque! Praesentium, eaque eos!Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Reiciendis provident accusamus incidunt
                        quia quisquam natus repudiandae sequi, molestiae facilis consequuntur ipsum deserunt sint
                        assumenda possimus dolorum eaque! Praesentium, eaque eos!Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Reiciendis provident accusamus incidunt
                        quia quisquam natus repudiandae sequi, molestiae facilis consequuntur ipsum deserunt sint
                        assumenda possimus dolorum eaque! Praesentium, eaque eos!
        `,
        "BP-PBURGT": `
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
        `,
    };

    messages.forEach(message => {
        message.addEventListener('click', () => {
            // Remove 'selected' class from all messages
            messages.forEach(msg => msg.classList.remove('selected'));
            // Add 'selected' class to the clicked message
            message.classList.add('selected');
            // Update the main message area with the corresponding message content
            const messageKey = message.textContent.trim().split(' ')[0];
            messageDetails.innerHTML = messageData[messageKey];
        });
    });
});
