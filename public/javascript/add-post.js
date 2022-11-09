var quill = new Quill('#editor', {
  theme: 'snow'
});

async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const description = quill.root.innerHTML;;
    const age = document.querySelector('input[name="age"]').value;
    const personality = document.querySelector('input[name="personality"]').value;
    const status = document.querySelector('input[name="status"]').value;
    const image_url = document.querySelector('#image_url_input').value;

    const response = await fetch(`/api/cats`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        age,
        personality,
        status,
        image_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);