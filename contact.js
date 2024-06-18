var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "მესიჯი მიღებულია | Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "დაფიქსირდა შეცდომა. Oops! There was a problem"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "დაფიქსირდა შეცდომა. Oops! There was a problem"
  });
}
form.addEventListener("submit", handleSubmit)


