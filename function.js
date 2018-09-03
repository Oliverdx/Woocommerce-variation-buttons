var variations_label = jQuery('.variations .label').text();
var variations_length = jQuery('.variations select');
var variations_active = jQuery('.variations .value select').val();

 jQuery(variations_length).css('display', 'none');

for(var x=0; x <= variations_length[0].length - 1; x++){
    if( variations_length[0][x].value != "" ){
        if( variations_length[0][x].innerHTML == variations_active ){
            jQuery('.variations .value').append('<button class="active" data-val=' + variations_length[0][x].innerHTML + '>' + variations_length[0][x].innerHTML + '</button>');
        }else{
            jQuery('.variations .value').append('<button data-val=' + variations_length[0][x].innerHTML + '>' + variations_length[0][x].innerHTML + '</button>');
        }
    }
}

jQuery('.variations .value button').each(function(){
    jQuery(this).click(function(e){
        e.preventDefault();
        jQuery(this).parent().find('select').val(jQuery(this).attr('data-val')).change();
        jQuery(this).addClass('active').siblings().removeClass('active');
    });
});
