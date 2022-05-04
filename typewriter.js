const textField = document.getElementById('awesomeAnimation');

const typewriter = new Typewriter(textField, {
    loop: true,
    delay: 200,
});

typewriter
    .typeString(`<span> swimmer.</span>`)
    .pauseFor(200)
    .deleteChars(10)
    .pauseFor(500)
    .typeString(`<span> student.</span>`)
    .pauseFor(200)
    .deleteChars(8)
    .pauseFor(500)
    .typeString(`<span> web developer.</span>`)
    .pauseFor(200)
    .deleteChars(15)
    .pauseFor(500)
    .start()