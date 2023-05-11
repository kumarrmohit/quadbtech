
$.ajax({
    type: 'get',
    url: 'http://localhost:4500/quadb/data',
   
    success: function(response) {
      
      console.log(response)
      for(var i=0;i<response[i].length;i++){
        var currencyrow=`<tr><td>${response[i].name}<td><td>${response[i].last}<td><td>${response[i].buy}<td><td>${response[i].sell}<td><td>${response[i].volume}<td></tr>`
        $('#tbody').append(currencyrow)
      }
      
    
    },
    error: function(error) {
        console.log(error);
    }
});
