 const checkk = document.querySelector('.js-button')
      // console.log(checkk.classList.contains('js-button'));
      const gamingButtonElement = document.querySelector('.js-gaming-button');
      const musicElement = document.querySelector('.js-music-button');
      const techElement = document.querySelector('.js-tech-button');
      


      function toggle(para){
        
        if (!para.classList.contains('is-toggled')){
          gamingButtonElement.classList.remove('is-toggled');
          musicElement.classList.remove('is-toggled');
          techElement.classList.remove('is-toggled');

          para.classList.add('is-toggled');
        } 
        else {
          para.classList.remove('is-toggled');

          
        }
      }
      

