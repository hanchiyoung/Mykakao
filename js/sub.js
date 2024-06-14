const $list = document.querySelectorAll('#wrap > section > nav > ul > li > a');
const $back = document.querySelector('#wrap > header > a');
const $textarea = document.getElementById('textarea');
const $button = document.querySelector('#wrap > footer > div > button');
const $chatScreen = document.querySelector('#wrap > section');
chatTop = $chatScreen.scrollHeight;


for(let i=0;i<$list.length;i++){
    $list[i].addEventListener('click', (evt)=>{
        evt.preventDefault();
    });
};


$back.addEventListener('click', (evt)=>{
    evt.preventDefault();
    window.history.back();
});

$textarea.addEventListener('input', ()=>{
    if($textarea.value.length > 0){
        $button.classList.add('on');
    }
    else{
        $button.classList.remove('on')
    }
});

window.onload = function() {
    $chatScreen.scrollTo(0, chatTop);
};