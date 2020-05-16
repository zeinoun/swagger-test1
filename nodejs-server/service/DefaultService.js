'use strict';


/**
 * Get list of artists
 * Returns a list of artists
 *
 * offset Integer page number (optional)
 * limit Integer amount of information on the page (optional)
 * returns ArtistsArray
 **/
exports.artistsGET = function(offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "albumsRecorded" : 0,
  "artistName" : "artistName",
  "artistGenre" : "artistGenre",
  "username" : "username"
}, {
  "albumsRecorded" : 0,
  "artistName" : "artistName",
  "artistGenre" : "artistGenre",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create an artist
 * Post a new artist to the service
 *
 * body Artist Request body for creating new artist (optional)
 * no response value expected for this operation
 **/
exports.artistsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get artist
 * Get artist based on username
 *
 * username String 
 * returns Artist
 **/
exports.artistsUsernameGET = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "albumsRecorded" : 0,
  "artistName" : "artistName",
  "artistGenre" : "artistGenre",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

