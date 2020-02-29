'use strict';

const etsyApiKey = 'zlz871aunsfnzwupy482id1z';
const searchEtsyURL = 'https://openapi.etsy.com/v2/users/etsystore/listings/active.js';

//controls jumper button when clicked
  $(".jumper").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top - 122
    }, 600);
    
});