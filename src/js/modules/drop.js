const drop = () => {
const fileInputs = document.querySelectorAll('[name="upload"]');

['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventElem => {
    fileInputs.forEach(input => {
        input.addEventListener(eventElem, preventDefaults, false);
    });
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    if(item.closest('calc_form')) {
        item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }
}

function unHighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.backgroundColor = '#ededed';
};

['dragenter', 'dragover'].forEach(eventElem => {
    fileInputs.forEach(input => {
        input.addEventListener(eventElem, () => highlight(input), false)
    });
});

['dragleave', 'drop'].forEach(eventElem => {
    fileInputs.forEach(input => {
        input.addEventListener(eventElem, () => unHighlight(input), false)
    });
});

fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
        input.files = e.dataTransfer.files;
        let dots;
        const arr = input.files[0].name.split(".");
        arr[0].length < 6 ? (dots = ".") : (dots = "...");
        const name = arr[0].substring(0, 6) + dots + arr[1];
        input.previousElementSibling.textContent = name;
    })
})
}

export default drop;