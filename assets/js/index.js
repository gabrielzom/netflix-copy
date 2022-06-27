window.addEventListener('scroll', () => {
  let header = document.getElementById('header')
  if (this.scrollY < 50) {
    header.style.background = '#000'
    header.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8491771708683473) 20%, rgba(0,0,0,0.5942752100840336) 50%, rgba(0,0,0,0) 100%)'

  } else {
    header.style.background = '#000'
  }
})
