function handleUploadImage() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Client-ID e7aa988d38f3ed4");
  const fileElement = document.getElementById('file');
  const file = fileElement.files[0];
  var formdata = new FormData();

  formdata.append("image", file);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://api.imgur.com/3/image", requestOptions)
    .then(response => response.json())
    .then(result => {
      const link = result.data.link;

      document.getElementById('image_url_input').value = link;
      document.getElementById('display-image').src = link;
      console.log(result.data.link);
    })
    .catch(error => console.log('error', error));
    
}