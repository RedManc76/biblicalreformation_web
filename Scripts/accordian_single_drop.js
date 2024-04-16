document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){
        
        var acc = $(".accordion")
        
        var i;
        var j;
        
        for (i = 0; i < acc.length; i++) {
            acc[i].nextElementSibling.style.display = "none";
            acc[i].addEventListener("click", function() {
                if (this.nextElementSibling.style.display === "none"){
                    closeAllAcc();
                    openAcc(this); 
                }else{
                    closeAcc(this)
                }
            });
        }    

        function closeAllAcc(){
            for (j = 0; j < acc.length; j++) {
                if (acc[j].nextElementSibling.style.display === "block") {
                    closeAcc(acc[j]);
                }
            }
        }
        
        function closeAcc(elem){
            elem.classList.remove("active");
            elem.nextElementSibling.style.display = "none";
        }
        
        function openAcc(elem){
            elem.classList.add("active");
            elem.nextElementSibling.style.display = "block";
            scrollToResponse(elem);
        }
        
        function scrollToResponse(elem){
            let rect = elem.getBoundingClientRect();
            let scrollTotal = rect.top - 100;
            window.scrollBy({top: scrollTotal, left: 0, behavior: "smooth"})
        }

    });
    
});    
