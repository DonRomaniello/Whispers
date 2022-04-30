function mousemove(event){

    let demo = document.getElementById("demo")

    demo.style.top = event.pageY + 'px'
    demo.style.left = event.pageX + 'px'


    console.log(event.clientX, event.clientY)
}

window.addEventListener('mousemove', mousemove);
