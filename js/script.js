window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent =document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContent(i = 0){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
   
    hideTabsContent();  
    showTabsContent();
    

    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });


// timer 

    const deadLine = '2021-06-28';
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t/(1000 * 60 * 60  *24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24 )),
              minutes = Math.floor((t / 1000 * 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return{
            'total':t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function getZero(num){
        if(num >=0 && num <=10){
            return `0${num}`;
        }else{
            return num;
        }
    }
    
    
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds= timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();    

        function updateClock(){
            const t = getTimeRemaining(endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer',deadLine);
});






// Тренки

// let start = new Date();
// for(let i=0;i<100000; i++){
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);



// let timeID;
  
    // function logger(){
    //     if(i === 10){
    //         clearInterval(timeID);
    //     }
    //     console.log('Hello');
    //     i++;
    // }
    // let i = 0;
    // let id = setTimeout(function log(){
    //     if (i == 10){
    //         clearInterval();
    //     }else{
    //         console.log("hello");
    //         id = setTimeout(log,500);
    //         i++; 
    //     }
    // },500);