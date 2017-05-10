var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'U8dqeKAECXkURURfCBlrAhiMW',
  consumer_secret: 'Bh9w7mif2LcqyoZRmU7XbvIFKwjWFKBlGeV16XEfsStb2DW9PC',
  access_token_key: '81451848-qZ8DIIN2p2F4dxl9BW9E57xpoOrpMx604Kx99QTYK',
  access_token_secret: 'bl7WAeoUaNboNcnSLAcy4SFULdZ6ZO55M2aazzhJTBNeZ' 

});
//get 
 client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
}); 


//post a tweet
  client.post('statuses/update', {status: 'TWITTER IS A WONDERFUL APP!'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});
