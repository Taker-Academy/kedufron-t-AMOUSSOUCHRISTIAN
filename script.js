axios.get("https://api.kedufront.juniortaker.com/item/")
.then(function(response) {
    console.log(response.data[0]);
  console.log(response);
})
.catch(function(error) {
  console.log(error);
});
