const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none'
            mark.classList.remove('animated', 'fadeIn')
        })

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach(mark => {
                mark.style.display = 'block'
                mark.classList.add('animated', 'fadeIn')
            })
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    }

    menu.addEventListener('click', (e) => {
        const markType = wrapper.querySelectorAll(`.${e.target.classList[0]}`)
        if (e.target && e.target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }

        if(markType.length) {
            typeFilter(markType);
        } else {
            typeFilter();
        }
    })

}

export default filter;