window.addEventListener('scroll', function () {
  showImgAlt()
})
function showImgAlt () {
  if (location.href.indexOf('www.facebook.com') > -1) {
    const posts = document.querySelectorAll('div.do00u71z.ni8dbmo4.stjgntxs.l9j0dhe7 > div.pmk7jnqg.kr520xx4')
    for (let i = 0; i < posts.length; i++) {
      const setNode = posts[i].parentNode.parentNode.parentNode.parentNode.parentNode
      try {
        setNode.outerHTML.match(/show_picture_alt/g)[0]
      } catch (err) {
        try {
          const imgAlt = posts[i].outerHTML.match(/(?<=alt=".*?).*?(?=")/g)[0].replace(/(可能是).*(：|文字是)|可能是 |May be an image of (text that says |)|的..$/g, '')
          const para = document.createElement('p')
          const node = document.createTextNode(htmlUnescape(imgAlt))
          para.appendChild(node)
          setNode.prepend(para)
          para.setAttribute('id', 'show_picture_alt' + [i])
          para.setAttribute('onclick', 'navigator.clipboard.writeText(this.outerText)')
          para.setAttribute('style', 'position: absolute; z-index: 1000; background-color: white; color: black; font-size: 0.95rem; padding: 3px; border-radius:5px;')
        } catch {}
      }
    }
  } else {
    const posts = document.getElementsByClassName('img _5sgi img _2sxw _4s0y')
    for (let i = 0; i < posts.length; i++) {
      const setNode = posts[i].parentNode.parentNode.parentNode.parentNode
      try {
        setNode.outerHTML.match(/show_picture_alt/g)[0]
      } catch (err) {
        try {
          const imgAlt = posts[i].outerHTML.match(/(?<=aria-label=".*?).*?(?=")/g)[0].replace(/(可能是).*(：|文字是)|可能是 |May be an image of (text that says |)|的..$/g, '')
          const para = document.createElement('p')
          const node = document.createTextNode(htmlUnescape(imgAlt))
          para.appendChild(node)
          setNode.prepend(para)
          para.setAttribute('id', 'show_picture_alt' + [i])
          para.setAttribute('onclick', 'navigator.clipboard.writeText(this.outerText);')
          para.setAttribute('style', 'position: absolute; z-index: 1000; background-color: #b7e4f8; color: black; font-size: 0.95rem; padding: 3px; border-radius:5px;')
        } catch {}
      }
    }
  }
}
function htmlUnescape (str) {
  str = str.replace(/&#123;/g, '{')
  str = str.replace(/&#125;/g, '}')
  str = str.replace(/&quot;/g, '"')
  str = str.replace(/&amp;/g, '&')
  str = str.replace(/&lt;/g, '<')
  str = str.replace(/&gt;/g, '>')
  str = str.replace(/&#10;/g, '\\n')
  return str
}
