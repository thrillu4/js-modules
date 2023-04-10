const accordion = (triggers) => {
    const btns = document.querySelectorAll(triggers);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            btns.forEach(i => {
                if(i === this) {
                    btn.classList.toggle('active-style');
                    btn.nextElementSibling.classList.toggle('active-content');
                    if(btn.classList.contains('active-style')) {
                        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 80 + 'px';
                    } else {
                        btn.nextElementSibling.style.maxHeight = '0px'
                    }
                } else {
                    i.classList.remove('active-style');
                    i.nextElementSibling.classList.remove('active-content');
                    i.nextElementSibling.style.maxHeight = '0px'
                }
            }) 
        })
    })
}

export default accordion;