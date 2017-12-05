let sections = document.querySelectorAll('.article-section');
let output = document.getElementById('output-target');
let header = document.getElementById('page-title');
let input = document.getElementById('keypress-input');
let color = document.getElementById('add-color');
let gp = document.getElementById('guinea-pig');
let big = document.getElementById('make-large');
let border = document.getElementById('add-border');
let round = document.getElementById('add-rounding');
// keypress-input
for(var i=0; i<sections.length; i++){
  console.log(sections[i]);
  sections[i].addEventListener('click', function(){
   output.innerText = (`You clicked on the ${event.target.innerText} section`);
  });
}


header.addEventListener('mouseover', function(){
output.innerText = ('You moved your mouse over the header.');

});


header.addEventListener('mouseleave', function(){
  output.innerText = ('You left me!!');
});

input.addEventListener('input', function(){
  output.innerText = input.value;
});

color.addEventListener('click', function(){
  gp.classList.add('blue');
});

big.addEventListener('click', function(){
  gp.classList.add ('big');
});

border.addEventListener('click', function(){
  gp.classList.add('border');
});
round.addEventListener('click', function(){
  gp.classList.add('rounded');
})