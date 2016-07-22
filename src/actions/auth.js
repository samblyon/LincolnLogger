module.exports = {
  login(user){
    console.log(user);
    fetch('http://lincoln-logger-api.herokuapp.com/api/session', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  },
  signup(user){
    console.log(user);
    fetch('http://lincoln-logger-api.herokuapp.com/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  },
  logout(user){ //NOTE: need to add session token as VARIABLE!!!!!
    console.log(user);
    fetch('http://lincoln-logger-api.herokuapp.com/api/session', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'session_token': 'bhj0XtYQ7SA04RFBA86HRg'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }
}
