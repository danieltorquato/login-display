function mostrarSenha() {
    let tipo = window.document.getElementById('senha')
    if (tipo.type == 'password') {
        tipo.type = 'text'

        window.document.getElementById('olhoaberto').style.display = ''
        window.document.getElementById('olho').style.display = 'none'
        window.document.getElementById('olhoaberto').style.position = 'relative'
        window.document.getElementById('olhoaberto').style.left = '85px'
    }
}

function ocultaSenha() {
    let tipo = window.document.getElementById('senha')
    if (tipo.type == 'text') {
        tipo.type = 'password'
        window.document.getElementById('olho').style.display = ''
        window.document.getElementById('olhoaberto').style.display = 'none'
        window.document.getElementById('olho').style.position = 'relative'
        window.document.getElementById('olho').style.left = '85px'
    }
}

function mostrarOlho() {
    let senha = window.document.getElementById('senha').value
    let senha1 = window.document.getElementById('senha')
    if (senha.length >= 1 && senha1.type == 'password') {
        window.document.getElementById('olho').style.display = ''
        window.document.getElementById('olho').style.position = 'relative'
        window.document.getElementById('olho').style.left = '120px'
        window.document.getElementById('but').style.position = 'relative'
        window.document.getElementById('but').style.top = '-5px'
    } else if (senha.length >= 1 && senha1.type == 'text') {
        window.document.getElementById('olhoaberto').style.display = ''
        window.document.getElementById('olhoaberto').style.position = 'relative'
        window.document.getElementById('olhoaberto').style.left = '120px'
        window.document.getElementById('but').style.position = 'relative'
        window.document.getElementById('but').style.top = '-5px'
    }
    else {
        window.document.getElementById('olhoaberto').style.display = 'none'
        window.document.getElementById('olho').style.display = 'none'
    }
}
function ocultarOlho() {
    window.document.getElementById('olhoaberto').style.display = 'none'
    window.document.getElementById('olho').style.display = 'none'
}