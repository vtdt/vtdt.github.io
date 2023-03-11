var secret_clicks = 0;

function myFunction() {
  if(secret_clicks == 5){
    location.href = 'https://lmoboy.github.io';
  }
  secret_clicks = secret_clicks+1;  
  var copyText = "smarrtie#4552";
  navigator.clipboard.writeText(copyText);
}