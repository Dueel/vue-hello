function initVue(){

    new Vue ({
        el: '#app',
        data: {
            'title': 'Header1',
            'image': 'img/mixdaily.jpeg'
        }
    })
};

function init(){

    initVue();
};

$(init);