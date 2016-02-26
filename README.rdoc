<h1>Css</h1>

<h4>every other styling</h4>

li {
  background: white;
}

li:nth-child(2n){
  background: #f7f7f7;
}

<h4> hover trashcan </h4>

span {
 background: #e74c3c;
 height: 40px;
 margin-right: 20px;
 text-align: center;
 color: white;
 width: 0;
 display: inline-block;
 transition: 0.3s;
 opacity: 0;
}

li:hover span {
  width: 40px;
  opacity: 1.0;
}

<h4>website</h4>
http://uigradients.com/

<h1>javascript</h1>

getAttribute
setAttribute(“href”, “”)
querySelect
textContent
var.style.background =“”
var.textContent

element.addEventListener(“", function () {} )

<h1>jQuery</h1>

<h4>stopPropagation</h4>

$("sapn").click(function(event){
  //function
  event.stopPropagation();
})

<h4>fade out and remvoe example</h4>

$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(600,function(){
    $(this).remove();
  });
  event.stopPropagation();
})

<h4>example input text with enter button</h4>

$('input[type="text"').keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li>' + todoText + '</li>')
  }
});
