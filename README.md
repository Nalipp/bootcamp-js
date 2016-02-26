<h1>Css</h1>

<h4>every other styling</h4>

li {<br>
  background: white;<br>
}<br>

li:nth-child(2n){<br>
  background: #f7f7f7;<br>
}<br>

<h4> hover trashcan </h4>

span {<br>
 background: #e74c3c;<br>
 height: 40px;<br>
 margin-right: 20px;<br>
 text-align: center;<br>
 color: white;<br>
 width: 0;<br>
 display: inline-block;<br>
 transition: 0.3s;<br>
 opacity: 0;<br>
}

li:hover span {<br>
  width: 40px;<br>
  opacity: 1.0;<br>
}

<h4>website</h4>
http://uigradients.com/

<h1>javascript</h1>

getAttribute<br>
setAttribute(“href”, “”)<br>
querySelect<br>
textContent<br>
var.style.background =“”<br>
var.textContent<br>

element.addEventListener(“", function () {} )<br>

<h1>jQuery</h1>

<h4>stopPropagation</h4>

$("sapn").click(function(event){<br>
  //function<br>
  event.stopPropagation();<br>
})

<h4>fade out and remvoe example</h4><br>

$('ul').on('click', 'span', function(event){<br>
  $(this).parent().fadeOut(600,function(){<br>
    $(this).remove();<br>
  });<br>
  event.stopPropagation();<br>
})

<h4>example input text with enter button</h4>

$('input[type="text"').keypress(function(event){<br>
  if(event.which === 13){<br>
    var todoText = $(this).val();<br>
    $(this).val('');<br>
    '''$('ul').append('<li>' + todoText + '</li>')<br>'''
  }<br>
});<br>
