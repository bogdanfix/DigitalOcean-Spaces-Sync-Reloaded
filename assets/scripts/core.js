
const dos_loader = jQuery('.dos__loader')
const dos_message = jQuery('.dos__message')
const dos_test_connection = jQuery('.dos__test__connection')
const dos_migrate = jQuery('.dos__migrate')
const dos_migrate_status = jQuery('.dos__migrate_status')
const dos_progress = jQuery('.dos__progress')
const dos_progress_bar = jQuery('.dos__progress_bar')
const dos_n = jQuery('.dos__n')

jQuery( function () {

  // check connection button
  dos_test_connection.on( 'click', function () {

    console.log( 'Testing connection to DigitalOcean Spaces Container' )

    const data = {
      dos_key: jQuery('input[name=dos_key]').val(),
      dos_secret: jQuery('input[name=dos_secret]').val(),
      dos_endpoint: jQuery('input[name=dos_endpoint]').val(),
      dos_container: jQuery('input[name=dos_container]').val(),
      action: 'dos_test_connection'
    }

    dos_loader.hide()

    jQuery.ajax({
      type: 'POST',
      url: ajaxurl,
      data: data,
      dataType: 'html'
    }).done( function ( result ) {
      dos_message.show()
      dos_message.html( '<br/>' + result )
      dos_loader.hide()
      jQuery('html,body').animate({ scrollTop: 0 }, 1000)
    })

  });

  var attachment_ids = [];
  var progress_counter = 0;
  var percent = 0;
  var retry_counter = 0;

  // start migration button
  dos_migrate.on( 'click', function () {

    console.log( 'Start migration to DigitalOcean Spaces Container' );

    progress_counter = 0;
    retry_counter = 0;

    const data = {
      _ajax_nonce: dos_n.val(),
      step: 1,
      id: 1,
      action: 'dos_migrate'
    };

    dos_loader.hide();

    dos_migrate.prop( 'disabled', true ).text( 'Migration in progress...' );

    dos_migrate_status.find( '.text' ).text( 'Fetching total image count...' );

    jQuery.ajax({
      type: 'POST',
      url: ajaxurl,
      data: data,
      dataType: 'json',
      success: function ( response ) {

        console.log( 'step1', response );

        if(
          typeof response.result !== 'undefined' && response.result === 'success' && 
          typeof response.response !== 'undefined' && jQuery.isArray( response.response )
        )
        {
          attachment_ids = response.response;

          percent = 100 / attachment_ids.length;

          dos_migrate_status.find( '.count' ).text( '0 / ' + attachment_ids.length );

          dos_upload_attachments( attachment_ids );
        }
        else
        {
          dos_migrate_status.find( '.text' ).text( 'AJAX error. Please, reload the page and try again.' );
        }
      },
      error: function ( jqxhr, status, error ) {

        console.log( jqxhr, status, error );

        dos_migrate_status.find( '.text' ).text( 'AJAX error. Please, reload the page and try again.' );
      }
    });

    function dos_upload_attachments( attachment_ids )
    {
      console.log( progress_counter, attachment_ids.length );

      if( progress_counter < attachment_ids.length )
      {
        console.log( 'current', attachment_ids[ progress_counter ] );

        if( attachment_ids[ progress_counter ] )
        {
          dos_migrate_status.find( '.text' ).text( 'Uploading image...' );

          const data = {
            _ajax_nonce: dos_n.val(),
            step: 2,
            id: attachment_ids[ progress_counter ],
            action: 'dos_migrate'
          }

          jQuery.ajax({
            type: 'POST',
            url: ajaxurl,
            data: data,
            dataType: 'json',
            success: function ( response ) {

              console.log( 'step2', response );

              if(
                typeof response.result !== 'undefined' && response.result === 'success' && 
                typeof response.response !== 'undefined'
              )
              {
                progress_counter++;

                dos_progress_bar.css({ 'width': parseFloat( progress_counter * percent ) + "%" });

                dos_migrate_status.find( '.count' ).text( progress_counter + ' / ' + attachment_ids.length );

                dos_migrate_status.find( '.text' ).text( 'Success...' );

                var timer = setTimeout( function(){ dos_upload_attachments( attachment_ids ); }, 2000 );
              }
              else
              {
                dos_migrate_status.find( '.text' ).text( 'AJAX error. Please, reload the page and try again.' );
              }
            },
            error: function ( jqxhr, status, error ) {

              console.log( jqxhr, status, error );

              console.log( 'retry_counter', retry_counter );

              dos_migrate_status.find( '.text' ).text( 'Upload failed, retrying...' );

              if( retry_counter < 5 )
              {
                console.log( 'retry_attempt' );

                var timer = setTimeout( function(){ dos_upload_attachments( attachment_ids ); }, 2000 );

                retry_counter++;
              }
              else
              {
                dos_migrate_status.find( '.text' ).text( 'AJAX error. Please, reload the page and try again.' );
              }
            }
          });
        }
      }
      else
      {
        console.log( 'finish!' );

        dos_migrate_status.find( '.count' ).text( progress_counter + ' / ' + attachment_ids.length );

        dos_migrate_status.find( '.text' ).text( 'Migration completed!' );

        dos_migrate.prop( 'disabled', false ).text( 'Start migration' );
      }
    }

  });

})