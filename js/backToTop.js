window.onscroll = function(){
    // khi scroll > 100 
    if(document.documentElement.scrollTop>100){
      // gắn class active vô 
        document.querySelector('.backToTop').classList.add('active');  
    }else{
      // gỡ class active ra 
        document.querySelector('.backToTop').classList.remove('active');
    }
}