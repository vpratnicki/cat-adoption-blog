async function editFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const personality = document.querySelector('input[name="personality"]').value;
    const status = document.querySelector('input[name="status"]').value;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/cats/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        description,
        age,
        personality,
        status
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  