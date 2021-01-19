
let theme = localStorage.getItem('theme')
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
  
let themeDots= document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('mouseover' , function(){
    let mode = this.dataset.mode
   
    setTheme(mode)

  }

    )
}    

}



function setTheme(mode){
  if( mode == 'light'){
    
    
  	document.getElementById('theme-style').href = 'default.css'

  }
  if( mode == 'blue'){
    console.log(mode)
  	document.getElementById('theme-style').href = 'blue.css'

  }
  if( mode == 'green'){
    
  	document.getElementById('theme-style').href = 'green.css'

  }
  if( mode == 'purple'){
    
  	document.getElementById('theme-style').href = 'purple.css'

  }

  localStorage.getItem('theme' , mode)
}