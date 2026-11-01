console.log("안녕");

const searchEl = document.querySelector('#head_layout .inner .search'); // document 는 html 파일 
console.log(searchEl); // null 이라 뜸   body가 다 로드된 후에 script가 실행되지  않음 ->script 에  defer 속성 넣으면 됨  
const searchInputEl = document.querySelector('#head_layout .inner .search input');


// 변수를 var로 설정하게 되면 내가 다루고자하는 , 외부에서 다루는 데이터의 경우에는  데이터가 안담기는 경우가 가끔 있음  var라고 되있어도 let으로 하는게 좋다 
// const : 상수  , 선택자           


searchEl.addEventListener('click', function () { // click 이 이뤄졌을때 어떤 행위를 하겠다  
  searchInputEl.focus();
  console.log(1);

}); // search 요소를 클릭했을때 input 박스가 focus 될꺼야


searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '통합검색');
  searchEl.classList.add('focused');
  // <input type = "text " placeholder= "통합검색" 이거랑 똑같음 
});

searchInputEl.addEventListener('blur', function () {
  searchInputEl.setAttribute('placeholder', '');
  searchEl.classList.remove('focused');


});


const badgesEl = document.querySelector('#head_layout  .badges');
const totopEl = document.querySelector('#to-top');
window.onload= function(){

    gsap.to(totopEl, .6, {
      x:100
    })
}
window.addEventListener('scroll', _.throttle(function () {

  // console.log('scroll!!!');
  if (window.scrollY > 500) {
    // 배지 숨기기 
    //  badgesEl.style.display= "none";
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 버튼 보이기 
     gsap.to(totopEl, .6, {
      x:0 
      
     
  })
 } else {
    // 배지 보이기 
    //  badgesEl.style.display= "block";

    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // //버튼 숨기기 
      gsap.to(totopEl, .6, {
       x: 100
     })
  }
}, 300));

// 상단으로 이동시 
// 상단으로 이동시 
totopEl.addEventListener('click', function() { 
  gsap.to(window, .7, { scrollTo: 0 }); 
});

 




const fadeEls = document.querySelectorAll(' .banner .fade-in');
console.log(fadeEls); //같은이름을 가진 선택자 여럿 가져올떄는 All씀  


let sec = 0; // 외부에서 다루는 데이터를 다룰때는 let 씀 
fadeEls.forEach(function (fadeEl, idx) {


  if (idx == 1) { // "자세히 보기" 는 나중에 나오도록 

    gsap.to(fadeEl, 1, {
      delay: 4.2,
      opacity: 1

    })



  } else {

    gsap.to(fadeEl, 1, {
      delay: (idx) * .7,
      opacity: 1

    })
    sec = sec + 1;
    //sec++ 
  }







})


var swiper = new Swiper('.swiper-container',{
  direction: 'vertical',
  autoplay:true,
  loop:true
});



var swiper = new Swiper('.swiper',{  
  autoplay:{
    delay: 5000 // 5초
  },
  loop : true,    
  slidesPerView : 3 , // 한번에 보여줄 슬라이드 개수 
  spaceBetween : 10, // 슬라이드 사이 여백 
  centeredSlides :true , // 1번 슬라이드가 가운데 
  pagination: {
    el : '.promotion .swiper-pagination',
    clickable : true
  },
    
  navigation:{
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
     
  }

});


// promotion 토글 기능 
// 슬라이드 영역
const promotionEl = document.querySelector('.promotion');
// 슬라이드 영역 토글 버튼 
const promotionToggleEl = document.querySelector('.toggle-promotion');

// console.log(promotionEl);
// console.log(promotionToggleEl);


promotionToggleEl.addEventListener('click', function(){
  if(promotionEl.classList.contains('hide')){
    // hide 존재 
    promotionEl.classList.remove('hide');
    promotionToggleEl.classList.add('rot');
     console.log("쮸글 ");
  }else{     

    // hide 존재   x   
    promotionEl.classList.add('hide');
    promotionToggleEl.classList.remove('rot');
    
  }
}); 


// 스크롤 영역 감지 
const spyEls = document.querySelectorAll("#body_layout .scroll-spy");

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ // Scene 감지할 요소 추가 
    triggerElement : spyEl, // 보여짐 여부를 감지할 요소
    triggerHook: 0.8 // 화면80%  지점에서 보여짐 여부 감지 

  })
  .setClassToggle(spyEl,'show') // 요소가 화면에 감지되면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); //  코드 내부에 기능 할당(필수!) 
})




// AWARDS SWIPER  
var swiper2 = new Swiper('.awards .awards-swiper',{  
  loop:true,
  autoplay:{
    delay: 3000 // 3초
  },
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수 
  spaceBetween:34,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'}
}); 




