const toggle = (type) => {
    const matches = document.getElementsByClassName(type)
    for (element of matches){
      if (element.style.display = 'none'){
        element.style.display = "block"
      } else {
        element.style.display = "none"
      }
    }
   }