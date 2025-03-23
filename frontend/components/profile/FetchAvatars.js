fetch('/avatars/starting-avatars.json')
  .then(response => response.json())
  .then(data => {
    // Access the avatars array
    const avatars = data.avatars;
    // Use the avatars in your application
  });