function expandDetails () {
  document.querySelectorAll('details').forEach(details => details.setAttribute('open', ''))
}

window.addEventListener('beforeprint', expandDetails)

if (window.matchMedia) {
  const query = window.matchMedia('print')
  query.addEventListener('change', expandDetails)
}
