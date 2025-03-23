const panels =document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click', () =>{
        panels.forEach(pan =>{
            pan.classList.remove('active')
        })
        panel.classList.add('active')
    })
})

// function remoteActiveClasses(){
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }