document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.message-footer textarea');
    const sendButton = document.querySelector('.message-footer button');

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    sendButton.addEventListener('click', function() {
        const userMessage = textarea.value.trim();
        textarea.value = '';

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${padZero(currentDate.getHours())}:${padZero(currentDate.getMinutes())}:${padZero(currentDate.getSeconds())}`;

        const youMessageList = document.createElement('div');
        youMessageList.classList.add('message-list');
        youMessageList.classList.add('me'); 

        const youUserDiv = document.createElement('div');
        youUserDiv.classList.add('user');
        youUserDiv.textContent = 'You';

        const youMsgDiv = document.createElement('div');
        youMsgDiv.classList.add('msg');

        const youMsgParagraph = document.createElement('p');
        youMsgParagraph.textContent = userMessage;

        const youTimeDiv = document.createElement('div');
        youTimeDiv.classList.add('time');
        youTimeDiv.textContent = formattedDate;

        youMsgDiv.appendChild(youMsgParagraph);
        youMessageList.appendChild(youUserDiv);
        youMessageList.appendChild(youMsgDiv);
        youMessageList.appendChild(youTimeDiv);

        const messageWrap = document.querySelector('.message-wrap');
        messageWrap.appendChild(youMessageList);
        messageWrap.scrollTop = messageWrap.scrollHeight;

        //
        setTimeout(function() {
            const currentDateLater = new Date();
            const formattedDateLater = `${currentDateLater.getDate()}/${currentDateLater.getMonth() + 1}/${currentDateLater.getFullYear()} ${padZero(currentDateLater.getHours())}:${padZero(currentDateLater.getMinutes())}:${padZero(currentDateLater.getSeconds())}`;

            const jamieMessageList = document.createElement('div');
            jamieMessageList.classList.add('message-list');

            const jamieUserDiv = document.createElement('div');
            jamieUserDiv.classList.add('user');
            jamieUserDiv.textContent = 'Jamie';

            const jamieMsgDiv = document.createElement('div');
            jamieMsgDiv.classList.add('msg');

            let jamieResponse = '';
            if (userMessage.endsWith('Jamie') && userMessage.split(' ').length === 1) {
                jamieResponse = 'Can I help you?';
            } else if (userMessage === userMessage.toUpperCase() && userMessage.trim() !== '') {
                if (userMessage.endsWith('?')) {
                    jamieResponse = 'Please give me some time to resolve the issue.';
                } else {
                    jamieResponse = 'Please remain calm.';
                }
            } else if (userMessage.endsWith('?')) {
                jamieResponse = 'Yes';
            }  else {
                jamieResponse = 'Sorry, I don’t understand';
            }
            const jamieMsgParagraph = document.createElement('p');
            jamieMsgParagraph.textContent = jamieResponse;

            const jamieTimeDiv = document.createElement('div');
            jamieTimeDiv.classList.add('time');
            jamieTimeDiv.textContent = formattedDateLater;

            jamieMsgDiv.appendChild(jamieMsgParagraph);
            jamieMessageList.appendChild(jamieUserDiv);
            jamieMessageList.appendChild(jamieMsgDiv);
            jamieMessageList.appendChild(jamieTimeDiv);

            messageWrap.appendChild(jamieMessageList);
            messageWrap.scrollTop = messageWrap.scrollHeight;
        }, 1000);
    });
});  