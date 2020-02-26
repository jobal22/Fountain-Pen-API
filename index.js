'use strict';

const etsyApiKey = 'zlz871aunsfnzwupy482id1z';
const searchEtsyURL = 'https://openapi.etsy.com/v2/listings/active';

const googleApiKey = 'AIzaSyAop8x0uttiuQ-azRPZbR1K07SdFRFZnyg';
const searchGoogleURL = 'https://www.googleapis.com/customsearch/v1';

const youtubeApiKey = 'AIzaSyBmKz0IYHWnKb5ztZXPEIYHGLlzxQ9ff-0';
const searchYoutubeURL = 'https://www.googleapis.com/youtube/v3/search';
        

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function getEtsyPens(query, maxResults) {
    const params = {
        key: etsyApiKey,
        title: query,
    };
    const queryString = formatQueryParams(params)
    const url = searchEtsyURL + '?' + queryString;

    console.log(url);

    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      })
}

//youtube works!!

/*function displayResults(responseJson) {
    console.log(responseJson);
    $('#youtubeResults-list').empty();
    for (let i = 0; i < responseJson.items.length; i++){
      $('#youtubeResults-list').append(
        `<li><h3>${responseJson.items[i].snippet.title}</h3>
        <p>${responseJson.items[i].snippet.description}</p>
        <img src='${responseJson.items[i].snippet.thumbnails.default.url}'>
        </li>`
      )};
    //display the results section  
    //$('#youtubeResults-list').removeClass('hidden');
  };

function getYoutubePens(query, maxResults) {
    const params = {
        key: youtubeApiKey,
        q: query + '%fountain' + '%pen' + '%review',
        part: 'snippet',
        maxResults,
        type: 'video'
    };
    const queryString = formatQueryParams(params)
    const url = searchYoutubeURL + '?' + queryString;

    console.log(url);

    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      })
}*/

function watchForm () {
    $('form').submit(event => {
        event.preventDefault();
        const searchTerm = $('#js-search-term').val();
        const maxResults = 4;
        getEtsyPens(searchTerm, maxResults);
        //getYoutubePens(searchTerm, maxResults);
        // didnt work!!! getGooglePens(searchTerm, maxResults);
    });
}

$(watchForm);

//the google stuff did not work
/*unction getGooglePens(query, maxResults) {
    const params = {
        key: googleApiKey,
        list: query,
    };

    const queryString = formatQueryParams(params)
    const url = searchGoogleURL + '?' + queryString;

    console.log(url);

    fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      })
}*/
