
import{results,mbtis} from'./data.js'

const mbti=new URLSearchParams(location.search).get('mbti');
const result=results[mbtis[mbti]]

const subtitleEl=document.querySelector(".page-subtitle")
const titleEl=document.querySelector('.page-title');
const characterEl=document.querySelector('.character');
const boxEls=document.querySelectorAll('.box');

const jobEls=document.querySelectorAll('.job');
const lectureEl=document.querySelector('.lecture')
const lectureImgEl=document.querySelector('.lecture img');

subtitleEl.innerHTML=mbti;
titleEl.innerHTML=result.title;
characterEl.src=result.character;
boxEls.forEach((boxel,id)=>{
      boxel.innerHTML=result.results[id];
})

jobEls.forEach((jobEl,index)=>{
  jobEl.innerHTML=result.jobs[index];
})
lectureEl.href=result.lectureUrl;
lectureImgEl.src=result.lectureImg;