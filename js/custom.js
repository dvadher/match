$(document).ready(function() {


            $('.count').each(function() {

                $(this).prop('counter', 0).animate({
            
                counter: $(this).text()
            
                }, {
            
                duration: 10000,
            
                easing: 'swing',
            
                step: function(now) {
            
                    $(this).text(Math.ceil(now));
                }
                });
            });


                /*====================== web slider ====================== */

    
                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                            $('#imagePreview').hide();
                            $('#imagePreview').fadeIn(650);
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $("#imageUpload").change(function() {
                    readURL(this);
                });

}); /*====================== all js end ====================== */