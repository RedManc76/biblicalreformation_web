document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){
        
        var acc = $(".accordion")
        var response = $(".response");
                
        var i;
        var j;
        
        for (i = 0; i < acc.length; i++) {
            acc[i].nextElementSibling.style.opacity = 0;
            acc[i].addEventListener("click", function() {
                if (this.nextElementSibling.style.opacity == 0){
                    closeAllAcc();
                    openAcc(this); 
                }else{
                    closeAcc(this)
                }
            });
        }    
        
        function closeAllAcc(){
            for (j = 0; j < acc.length; j++) {
                if (acc[j].nextElementSibling.style.opacity == 1) {
                    closeAcc(acc[j]);
                }
            }
        }
        
        
        function closeAcc(elem){
            elem.classList.remove("active");
            elem.nextElementSibling.style.opacity = 0;
            var eText = '<h2></h2><h2 style="color:black;text-align:center">Choose a Question</h2>  ';
            response.html(eText);
        }
        
        function openAcc(elem){
            elem.classList.add("active");
            elem.nextElementSibling.style.opacity = 1;
            response.html(elem.nextElementSibling.innerHTML);
            scrollToResponse();
        }
        
        function scrollToResponse(){
            let rect = response.get(0).getBoundingClientRect();
            let scrollTotal = rect.top - 100;
            window.scrollBy({top: scrollTotal, left: 0, behavior: "smooth"})     
        }
        
    });
});