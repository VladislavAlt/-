// retrieve a collection



  const routes = {
    '/home' : home,
    '/about' : about
  };

  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];

  if (window.location.pathname === '/home'){
    const db = firebase.firestore();
    db.collection('rooms')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => {
            console.log(doc.id)
            console.log(doc.data())
            document.querySelector('#message').innerHTML += `<a href="https://app-game-mafia.web.app/?id=${doc.id}"> ${doc.id}</a>`
        })
        // do something with documents
      })
  }