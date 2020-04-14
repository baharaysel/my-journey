document.addEventListener('DOMContentLoaded', function(){
var head1 = document.getElementsByTagName('h1');
head1[0].addEventListener('mouseenter', function(event) {
    console.log(event);
    console.log(event.target);
    event.target.style.color = "purple";
});
});


