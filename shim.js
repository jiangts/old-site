document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="http://www.parakaleo.org/"]')
  Array.from(links).forEach(a => {
    const parts = a.pathname.split('/')
    if (parts[parts.length - 1]) {
      parts[parts.length - 1] += '.html'
    }
    a.href = parts.join('/')
  })
})