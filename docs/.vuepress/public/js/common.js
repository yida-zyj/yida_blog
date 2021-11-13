export function autoInput(id,des){
    let divTyping = document.getElementById(id)
    let i = 0,
      timer = 0,
      str = des
    function typing () {
      if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_'
        timer = setTimeout(typing, 200)
      }
      else {
        divTyping.innerHTML = str//结束打字,移除 _ 光标
        clearTimeout(timer)
      }
    }
  typing()
}