
const formulario = document.getElementById('form')

//const usuario = document.getElementById('user')
//const comentario = document.getElementById('comment')




formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(usuario.value) 
    console.log(comentario.value)
})



// Eventos

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Gracias por participar 💙', 'success')
  })
}

// Storage



const enviar = document.getElementById('send')
const user = document.getElementById('user')
const comment = document.getElementById('comment')

enviar.addEventListener('click', () => {

   dato1 = localStorage.setItem('user', usuario)
   dato2 = localStorage.setItem('comment', comentario)

   console.log(dato1+dato2)
   
})



