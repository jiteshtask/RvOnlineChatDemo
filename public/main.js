const socket = io.connect(location.href);

  // dom
const message = document.querySelector('#message'),
      //handle = document.querySelector('#name'),
      btn = document.querySelector('#send'),
      output = document.querySelector('#output'),
      feedback = document.querySelector('#feedback'),
      clean = document.querySelector('#clean');
      messages = document.querySelector('#messages');
      var handles = prompt('Please tell me your name');
      // event

      socket.emit('username', handles);
         socket.on('is_online', handles => {
          output.innerHTML += `<p><strong>${handles}`;
        });

      btn.addEventListener('click', () => {
        if (message.value != '' && handles != '') {
          socket.emit('chat', {
            message: message.value,
            handle: handles
          });

         

        } else {
          alert('All fields are required!');
        }
        message.value = '';
      });
      

      message.addEventListener('keypress', () => {
        socket.emit('typing', handles);
      });


      socket.on('chat', data => {
        console.log(data)
        output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
      });


      let timer = setTimeout(makeNoTypingState, 1000);
      socket.on('typing', data => {
        feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
        clearTimeout(timer);
        timer = setTimeout(makeNoTypingState, 1000);
      });
      function makeNoTypingState() {
        feedback.innerHTML = "";
      }
