import React from 'react'

const Header = () => {
  //   $(".panel").click(function() {
  //   	$('.panel').removeClass("active");
  //   	$(this).toggleClass("active");
  // });

  // $(".panel.active").click(function() {  	$(this).removeClass("active");
  // });

  // $(document).ready(function( $ ) {
  //   $( ".home" ).first().addClass( "active" );
  // });
  return (
    <div class='outer'>
      <div class='home panel'>
        <p>About</p>
      </div>

      <div class='one panel'>
        <p>Food</p>
        <p>ONE</p>
        <p>ONE</p>
      </div>

      <div class='two panel'>
        <p>Communiy</p>
      </div>

      <div class='three panel'>
        <p>Retail</p>
      </div>
    </div>
  )
}

export default Header
