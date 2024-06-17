function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }

function showErrorNotification(message) {
  const notification = documenr.createElement('div');
  notification.className = 'error-notification';    
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
      }, 3000);
  }



