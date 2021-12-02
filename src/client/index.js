import { checkForName } from './js/URLChecker'
import { handleSubmit } from './js/formHandler'
import './styles/styles.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('sbtn')
    submitBtn.addEventListener('click', (e) => {
        handleSubmit(e)
    })
})

export {
    checkForName,
    handleSubmit
}
