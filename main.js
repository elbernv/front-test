document.getElementById('submit').addEventListener('click', ()=>{
  const name = document.getElementById('name');
  const lastName = document.getElementById('lastName');
  const file = document.getElementById('file');
  const myHeaders = new Headers();

  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidHlwZSI6IlVTRVIiLCJ0eXBlSWQiOjEsInJvbElkIjoxLCJyb2xOYW1lIjoiQURNSU4iLCJpYXQiOjE2NTI3OTYyOTcsImV4cCI6MTY1MjgyNDI5NywianRpIjoiSEhkc2xoMXQ5S2hvd1dEX0k2ZEZxIn0.Wj_mOf3xzYMue-Lgh3qRlViWm4iW1zNvevoGUheeMs8");

  const formdata = new FormData();

  formdata.append('file', file.files[0], file.files[0].name);
  formdata.append("name", name.value);
  formdata.append("lastName", lastName.value);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3010/customer-library/1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})