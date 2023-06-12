console.log("Your index.js file is loaded correctly!");
$(document).ready(function(){
    $("#projectButton").on(
        {
            mouseenter: function(){
                $("#projectButton").css("background-color", "white");
                $("#projectButton").css("border-radius", "30px");
                $("#projectButton h4").css("color", "#33bbff");
                $("#projectButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#projectButton").on(
        {
             mouseleave: function(){
                $("#projectButton").css("background-color", "transparent");
                $("#projectButton").css("border-radius", "none");
                $("#projectButton h4").css("color", "black");
                $("#projectButton").css("cursor", "default");
            }   
        }
    ),
    $("#resumeButton").on(
        {
            mouseenter: function(){
                $("#resumeButton").css("background-color", "white");
                $("#resumeButton").css("border-radius", "30px");
                $("#resumeButton h4").css("color", "#33bbff");
                $("#resumeButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#resumeButton").on(
        {
            mouseleave: function(){
                $("#resumeButton").css("background-color", "transparent");
                $("#resumeButton").css("border-radius", "none");
                $("#resumeButton h4").css("color", "black");
                $("#resumeButton").css("cursor", "default");
            }   
        }
    ),
    
    $("#contactButton").on(
        {
            mouseenter: function(){
                $("#contactButton").css("background-color", "white");
                $("#contactButton h4").css("color", "#33bbff");
                $("#contactButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#contactButton").on(
        {
            mouseleave: function(){
                $("#contactButton").css("background-color", "#33bbff");
                $("#contactButton h4").css("color", "white");
                $("#contactButton").css("cursor", "default");
            }
        }
    ),

    $("#linkedinButton").on(
        {
            mouseenter: function(){
                $("#linkedinButton").css("background-color", "white");
                $("#linkedinButton").css("border-radius", "30px");
                $("#linkedinButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#linkedinButton").on(
        {
            mouseleave: function(){
                $("#linkedinButton").css("background-color", "transparent");
                $("#linkedinButton").css("border-radius", "none");
                $("#linkedinButton").css("cursor", "default");
            }   
        }
    ),
    $("#instagramButton").on(
        {
            mouseenter: function(){
                $("#instagramButton").css("background-color", "white");
                $("#instagramButton").css("border-radius", "30px");
                $("#instagramButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#instagramButton").on(
        {
            mouseleave: function(){
                $("#instagramButton").css("background-color", "transparent");
                $("#instagramButton").css("border-radius", "none");
                $("#instagramButton").css("cursor", "default");
            }   
        }
    )
    $("#phoneButton").on(
        {
            mouseenter: function(){
                $("#phoneButton").css("background-color", "white");
                $("#phoneButton").css("border-radius", "30px");
                $("#phoneButton").css("cursor", "pointer");
            }   
        }
    ),
    $("#phoneButton").on(
        {
            mouseleave: function(){
                $("#phoneButton").css("background-color", "transparent");
                $("#phoneButton").css("border-radius", "none");
                $("#phoneButton").css("cursor", "default");
            }   
        }
    ),

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 500, function(){
        
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        }
    });
    
});
