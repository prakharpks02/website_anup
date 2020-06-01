var mail = document.getElementById('mail'),
    input = document.getElementById('input'),
    sendText = document.querySelectorAll('.send'),
    send = document.getElementById('send'),
    tick = document.getElementById('p2'),
    p1 = document.getElementById('p1');

send.addEventListener('click', function() {
  sendText[0].textContent = "Sent";
  p1.style.opacity = 0;
  tick.style.opacity = 1;
});


input.addEventListener('keydown', function() {
  var email = this.value;
  openMail();
  if(validateEmail(email)) {
    closeMail();
  }
});

function openMail() {
  mail.setAttribute('points', "2.6,55.9 60.8,5.3 118.9,56.3");
  mail.setAttribute('transform', 'translate(0,-53)');
}

function closeMail() {
  mail.setAttribute('points', "2.6,3.1 60.8,48.8 118.9,3.6");
  mail.setAttribute('transform', 'translate(0,0)');
}

function validateEmail(email) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}











var mail2 = document.getElementById('mail2'),
    input2 = document.getElementById('input2'),
    sendText2 = document.querySelectorAll('.send2'),
    send2 = document.getElementById('send2'),
    tick2 = document.getElementById('p22'),
    p12 = document.getElementById('p12');

send2.addEventListener('click', function() {
  sendText2[0].textContent = "Sent";
  p12.style.opacity = 0;
  tick2.style.opacity = 1;
});


input.addEventListener('keydown', function() {
  var email2 = this.value;
  openMail();
  if(validateEmail(email2)) {
    closeMail();
  }
});

function openMail() {
  mail2.setAttribute('points', "2.6,55.9 60.8,5.3 118.9,56.3");
  mail2.setAttribute('transform', 'translate(0,-53)');
}

function closeMail() {
  mail2.setAttribute('points', "2.6,3.1 60.8,48.8 118.9,3.6");
  mail2.setAttribute('transform', 'translate(0,0)');
}

function validateEmail(email2) {
    var ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email2);
}