window.addEventListener('scroll',showImgAlt)

function showImgAlt () {
  const css = 'position: absolute; z-index: 1000; background-color: #b7e4f8; color: black; font-size: 0.95rem; padding: 15px; border-radius:5px;margin-top:0px'
  const format = str => str.match(/(?<=alt=".*?).*?(?=")/g)[0].replace(/(可能是).*(：|文字是)|可能是 |May be an image of (text that says |)|的..$/g, '')
  if (location.href.indexOf('www.facebook.com') > -1) {
    const posts = document.querySelectorAll('div.xqtp20y.x6ikm8r.x10wlt62.x1n2onr6 > div.x10l6tqk.x13vifvy')
    for (let i = 0; i < posts.length; i++) {
      const setNode = posts[i].parentNode.parentNode.parentNode.parentNode.parentNode
      try {
        setNode.outerHTML.match(/showPictureAlt/g)[0]
      } catch (err) {
        try {
          const imgAlt = format(posts[i].outerHTML)
          const para = document.createElement('p')
          const node = document.createTextNode(htmlUnescape(imgAlt))
          para.appendChild(node)
          setNode.prepend(para)
          para.setAttribute('id', 'showPictureAlt' + [i])
          para.setAttribute('style', css)
          para.addEventListener('click', e => navigator.clipboard.writeText(e.target.outerText))
        } catch {}
      }
    }
  } else {
    const posts = document.getElementsByClassName('img _5sgi img _2sxw _4s0y')
    for (let i = 0; i < posts.length; i++) {
      const setNode = posts[i].parentNode.parentNode.parentNode.parentNode
      try {
        setNode.outerHTML.match(/showPictureAlt/g)[0]
      } catch (err) {
        try {
          const imgAlt = format(posts[i].outerHTML)
          const para = document.createElement('p')
          const node = document.createTextNode(htmlUnescape(imgAlt))
          para.appendChild(node)
          setNode.prepend(para)
          para.setAttribute('id', 'showPictureAlt' + [i])
          para.setAttribute('style', css)
          para.addEventListener('click', e => navigator.clipboard.writeText(e.target.outerText))
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
