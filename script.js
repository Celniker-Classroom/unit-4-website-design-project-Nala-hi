
var i = 0;
var txt = 'Around 1.5 trillion eggs are consumed worlwide each year! Eggs are super versatile, there are hundreds if not thousands of egg dishes from all over the world. They are a nutrient packed super food, with all sorts of vitamins and high quality protein. To appreciate eggs and satisfy your stomach, try these three delicious methods to cook eggs. Learn these recipes by simply clicking on the images below. Have an egg-tastic day and bon appetit!';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("introduction").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}