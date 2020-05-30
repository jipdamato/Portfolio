document.querySelector('.contact-btn').addEventListener('click', () => {
    copyEmail()
})

const copyText = document.querySelector('.hidden-input')
const emailCopied = document.querySelector('.email-copied')

function copyEmail() {

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    emailCopied.classList.add('show')
    setTimeout(() => {
        //emailCopied.classList.remove('show')
    }, 0 * 1000);

}

const menuOpt = document.querySelector('.menu-opt')
document.querySelector('.menu-btn').addEventListener('click', () => {
    toggleMenu()
})

function toggleMenu() {
    menuOpt.classList.toggle('show')
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then((registration) => registration.update());
}