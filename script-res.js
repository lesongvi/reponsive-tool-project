jQuery( document ).ready( function( $ ){ 
	var custom_timeout_function = ( function() {
 		var timers = {};
 		return function ( callback, ms, uniqueId ) {
	 		if ( !uniqueId ){ uniqueId = "Don't call this twice without a uniqueId"; }
			if ( timers[uniqueId] ){ clearTimeout ( timers[uniqueId] ); }
			timers[uniqueId] = setTimeout( callback, ms );
		};
	})();  
	$( '#devices a' ).on( 'click', function( e ){ 
		$( '#devices .devices' ).removeClass( 'device-active' );
		$( this ).parent().parent().addClass( 'device-active' );
	  	e.preventDefault();
		var d_width = $( this ).attr( 'width' );
		var d_height = $( this ).attr( 'height' );
	 	$( '#width' ).attr( 'value', d_width );
	 	$( '#height' ).attr( 'value', d_height );
		$( '#responsive' ).attr({ 
			'width': d_width,
			'height': d_height
		});
	}); 
	// ON PASTE FUNCTION 
	$( '#url' ).bind( 'paste', function( event ){
		var cacheParamValue = (new Date()).getTime() + Math.floor(Math.random() * 1000000);
		//var url = "?random=" + cacheParamValue;
		var url = "?exp&#038;test=test&#038&random=" + cacheParamValue;




		var iframe = $( 'iframe' );
		var site_url = $( this );  
        setTimeout( function() {
			jQuery( 'input' ).removeClass( 'error' );
            iframe.addClass( 'loading-image' );
            iframe.attr( 'src', site_url.val()+url );
        }, 100);
		iframe.load( function(){
			iframe.removeClass( 'loading-image' );
		});
    }).keypress( function( event ){
		var cacheParamValue = (new Date()).getTime() + Math.floor(Math.random() * 1000000);
		//var url = "?random=" + cacheParamValue;
		var url = "?exp&#038;test=test&#038&random=" + cacheParamValue;
		var iframe = jQuery( 'iframe' );
		var site_url = jQuery( this ); 
		var loading = jQuery( '.loading' );
		if( event.which == '13' ){  
			if( site_url.val() == '' ){
	 			$( 'input' ).removeClass( 'error' );
				site_url.addClass( 'error' );
			}else{
				setTimeout( function() {
	 				$( 'input' ).removeClass( 'error' );	
					loading.addClass( 'loading-image' );
            		iframe.attr( 'src', site_url.val()+url );	
				}, 100);
				iframe.load( function(){
					loading.removeClass( 'loading-image' );
				});
			}
		}else{
			$( document ).removeClass( 'error' ); 
		}
	}); 
	// ON SUBMIT FUNCTION 
	$( '#submit' ).on( 'click', function(){
		var cacheParamValue = (new Date()).getTime() + Math.floor(Math.random() * 1000000);
		//var url = "?random=" + cacheParamValue;
		var url = "?exp&#038;test=test&#038&random=" + cacheParamValue;
		var iframe = jQuery( 'iframe' );
		var site_url = jQuery( '#url' ); 
		var loading = jQuery( '.loading' );
			if( site_url.val() == '' ){
				site_url.addClass( 'error' );
			}else{
				setTimeout( function() {	
	 				jQuery( 'input' ).removeClass( 'error' );
					loading.addClass( 'loading-image' );
            		iframe.attr( 'src', site_url.val()+url );	
				}, 100);
				iframe.load( function(){
					loading.removeClass( 'loading-image' );
				});
			} 
	});
	$( '#screen-option' ).on( 'click', function(){  
	  	$( '#devices' ).slideToggle();
		$( this ).toggleClass( 'active-btn' );
	});  
	$( '#submit' ).mouseenter( function(){  
	  	$( this ).attr( 'src', 'images/view-hover.jpg' );
	}).mouseleave( function(){  
	  	$( this ).attr( 'src', 'images/view.jpg' );
	}); 
	var width = $( '#width' ).attr( 'value' );
	var height = $( '#height' ).attr( 'value' );
	$( '#rotate' ).on( 'click', function(){
		custom_timeout_function( function(){
			width = $( '#width' ).attr( 'value' );
			height = $( '#height' ).attr( 'value' );
			$( '#width' ).val( height );
			$( '#height' ).val( width );
			$( '#width' ).attr( 'value', height );
			$( '#height' ).attr( 'value', width );
			$( '#responsive' ).attr({ 
				'width': $( '#width' ).attr( 'value' ), 
				'height': $( '#height' ).attr( 'value' ) 
			});
		}, 100 );
	}); 
	$( '#reset' ).on( 'click', function(){    
	 	$( '#width' ).attr( 'value', '1024' );
	 	$( '#height' ).attr( 'value', '600' );
		$( '#width' ).val( 1024 );
		$( '#height' ).val( 600 );
		$( '#responsive' ).attr({ 'width': '1024', 'height': '600' });
	}); 
	$( '.rotate-wh' ).keyup( function( event ){ 
		custom_timeout_function( function(){
			iframe_resizer();
		}, 500 );
	});
});
jQuery( window ).bind( 'load', function(){
	setTimeout( function(){
	var width = 0;
	var width2 = 1;
	$( '#devices .devices' ).each( function(){   
		width = parseInt( width ) + parseInt( $( this ).outerWidth() );
		$( this ).attr( 'd', $( this ).outerWidth());
		width2++;
	});
	$( '#devices .device-wrap' ).css({ 
			'width': width+5
	});
	$( '#devices' ).css({ 
			'position' : '',
			'top' : '',
			'display' : 'none'
	});
	}, 200 );
});
function iframe_resizer() { 
	jQuery( '#width' ).attr( 'value', jQuery( '#width' ).val() );
 	jQuery( '#height' ).attr( 'value', jQuery( '#height' ).val() );
	jQuery( '#responsive' ).attr({ 
		'width': jQuery( '#width' ).val(),
		'height': jQuery( '#height' ).val()
	});
}
function validate(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9]|\./;
	if( !regex.test(key) ) {
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
	}
}
