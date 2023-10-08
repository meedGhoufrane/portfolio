let section =  document.querySelector(".skills");

let spans = document.querySelectorAll(".progress span");


 window.onscroll=function(){
     if(window.scrollY>=section.offsetTop - 200){
        //  console.log('gggggggg');

        spans.forEach((span) => {
         
            span.style.width = span.dataset.width;
        });

     }
 };