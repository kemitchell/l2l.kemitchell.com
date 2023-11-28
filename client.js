function expandDetails () {
  document.querySelectorAll('details').forEach(details => details.setAttribute('open', ''))
}

window.addEventListener('beforeprint', expandDetails)

if (window.matchMedia && window.matchMedia('print')) expandDetails()
