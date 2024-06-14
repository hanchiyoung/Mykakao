let click = true;
let bell = true;

const $friendListimg = document.querySelector('.screen > div > .friendlist > p > img');
const $friendList = document.querySelector('.screen > div > .friendlist > ul');
const $down_li = document.querySelectorAll('#wrap > .gnb > .down > li:nth-of-type(-n+2)');




$friendListimg.addEventListener('click', ()=>{
    if(click === true){
        $friendListimg.style.transform = 'rotate(90deg)';
        $friendList.style.display = 'none';
        click = false;
    }
    else{
        $friendListimg.style.transform = 'rotate(270deg)';
        $friendList.style.display = 'block';
        click = true;
    }
});


for(let i=0;i<$down_li.length;i++){
    $down_li[i].addEventListener('click',(evt)=>{
        evt.preventDefault();
        if(bell === true){
            $down_li[i].setAttribute('class', 'down-off');
            $down_li[i+1].removeAttribute('class', 'down-off');
            bell = false;
        }
        else{
            $down_li[i].setAttribute('class', 'down-off');
            $down_li[i-1].removeAttribute('class', 'down-off');
            bell = true;
        }
    });
}


