var priceToggle = false;
var anyWhereClicked = false;
const canvasElement = document.getElementById('Anywhere');
const dropdownElement = document.getElementById('newRegionDropdown-btn');
const canvasElement1 = document.getElementById('Anyweeek');
const dropdownElement1 = document.getElementById('CheckInDropDown');
const canvasElement2 = document.getElementById('AnyGuest');
const dropdownElement2 = document.getElementById('guest-dropDown');
const boxes = document.querySelectorAll('.bg-white-box');

// var carouselItems = [];


//      for (var i = 1; i <= 8; i++) {
//       var carouselItem = document.querySelectorAll('#carousal-' + i);
//       carouselItems.push(carouselItem);

//     }
//     console.log(carouselItems);

canvasElement.addEventListener('click', function () {
  setTimeout(function () {
    $(dropdownElement).dropdown('toggle');
  }, 700);
});

canvasElement1.addEventListener('click', function () {
  setTimeout(function () {
    $(dropdownElement1).dropdown('toggle');
  }, 700);
});

canvasElement2.addEventListener('click', function () {
  setTimeout(function () {
    $(dropdownElement2).dropdown('toggle');
  }, 700);
});

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(otherBox => {
      otherBox.classList.remove('active-box');
    });
    box.classList.add('active-box');
  });
});

// carouselItem.forEach(carousel => {
//   carousel.addEventListener('mouseover', (event) => {
//     console.log(event.target);

//     carouselItem.forEach(otherCarousel => {
//       otherCarousel.classList.remove('active-box');
//     });

//     carousel.classList.add('active-box');
//   });
// });


function closeModal() {
  anyWhereClicked = false;
  document.getElementById('navbar-middle-container').style.display = 'flex';
  document.getElementById('top-navbar').classList.remove('navbar-class');
  document.getElementById('stays-list-items').style.display = 'none';
  document.getElementById('stays-list-items').style.transitionDelay = '2s';
  document.getElementById('body-container').style.opacity = 'initial';
  document.getElementById('type-list-container').style.opacity = 'initial';
  document.getElementById('body-container').style.background = 'initial';
  document.getElementById('type-list-container').style.background = 'initial';
  document.getElementById('canvas-section').style.display = 'none';
  document.getElementById('top-header').style.position = 'inherit';

}

function anywhereClick() {
  // document.getElementById("top-header").style.paddingBottom = "1%";

  anyWhereClicked = !anyWhereClicked;
  
  // document.getElementById("type-list-container").style.position = "absolute";

  const myPromise = new Promise(function(myResolve, myReject) {

    // document.getElementById('stays-list-items').classList.add('navbar-transitions');
    document.getElementById('stays-list-items').classList.add('margin-transitions');
    document.getElementById('canvas-main').classList.add('transition-container');
    document.getElementById('stays-list-items').classList.add('margin-transition');
    document.getElementById('top-header').classList.add('padding-transition');


    setTimeout(function(){ myResolve("12.5rem"); }, .1);
  });
  
  myPromise.then(function(value) {

    // document.getElementById("top-navbar").style.height = value;
    // document.getElementById("navbar-middle-container").style.width = "200%";

    document.getElementById("positionAbsoluteTransition").style.position = "absolute";
    document.getElementById("positionAbsoluteTransition").style.width = "150%";

  });


  setTimeout(() => {
  document.getElementById('stays-list-items').style.marginTop = '0';
  document.getElementById('body-container').style.background = 'rgb(179 179 179)';

}, .1);

  // document.getElementById('transition-container').style.marginTop = '-50px';
  document.getElementById('stays-list-items').style.marginTop = '0';

  setTimeout(() => {
    if (anyWhereClicked) {
  document.getElementById("padding-transition-container").style.paddingBottom = "5%";


      document.getElementById('navbar-middle-container').style.display = 'none';
      document.getElementById('navbar-middle-container').style.opacity = '0';
      document.getElementById('navbar-middle-container').style.display = 'none';
      document.getElementById('top-navbar').classList.add('navbar-class');
      document.getElementById('positionAbsoluteTransition').classList.add('navbar-class');
      document.getElementById('body-container').style.opacity = '0.2';
      document.getElementById('type-list-container').style.visibility = 'hidden';

  
      setTimeout(function () {
      document.getElementById('type-list-container').style.opacity = '1';
      document.getElementById('canvas-section').style.display = 'flex';
      document.getElementById('canvas-section').style.width = '100%';
      document.getElementById('stays-list-items').style.display = 'flex';
    }, 400);
  
      document.getElementById('stays-list-items').style.opacity = '1';
  
      if (anyWhereClicked) {
          // document.getElementById('stays-list-items').style.marginTop = '-100px';
          document.getElementById("body-container").addEventListener("click", function () {
          document.getElementById('stays-list-items').classList.add('margin-transition');
          document.getElementById('stays-list-items').classList.remove('margin-transition');
       
          setTimeout(() => {
            //  document.getElementById('stays-list-items').style.marginTop = '-100px';
            //  document.getElementById('transition-container').style.marginTop = '0';
        }, 100);
  
          document.getElementById('stays-list-items').style.opacity = '0';
  
          anyWhereClicked = false;
          document.getElementById('navbar-middle-container').style.display = 'flex';
          document.getElementById('top-navbar').classList.remove('navbar-class');
          document.getElementById('positionAbsoluteTransition').classList.remove('navbar-class');

          document.getElementById('stays-list-items').style.display = 'none';
          document.getElementById('body-container').style.opacity = 'initial';
          document.getElementById('type-list-container').style.opacity = 'initial';
          document.getElementById('body-container').style.background = 'initial';
          // document.getElementById('type-list-container').style.background = 'initial';
         document.getElementById('type-list-container').style.visibility = 'visible';

          document.getElementById('canvas-section').style.display = 'none';
          document.getElementById('navbar-middle-container').style.display = 'flex';
          document.getElementById('navbar-middle-container').style.opacity = '1';
         document.getElementById('top-header').classList.remove('padding-transition');

           
          setTimeout(() => {
            // document.getElementById('top-navbar').style.height = '5rem';
          //  document.getElementById("top-navbar").style.width = "100%";
           document.getElementById("positionAbsoluteTransition").style.width = "80%";
            document.getElementById("padding-transition-container").style.paddingBottom = "4%";

          //  document.getElementById("navbar-middle-container").style.width = "100%";
          }, 100);
        });
      }
    }
  }, 220);
  








  // if (anyWhereClicked) {

  //   document.getElementById('navbar-middle-container').style.display = 'none';
  //   document.getElementById('navbar-middle-container').style.opacity = '0';
  //   document.getElementById('navbar-middle-container').style.display = 'none';
  //   document.getElementById('top-navbar').classList.add('navbar-class');
  //   document.getElementById('positionAbsoluteTransition').classList.add('navbar-class');


  //   document.getElementById('body-container').style.opacity = '0.2';

  //   setTimeout(function () {
  //   document.getElementById('type-list-container').style.opacity = '1';
  //   document.getElementById('type-list-container').style.background = 'gray';
  //   document.getElementById('canvas-section').style.display = 'flex';
  //   document.getElementById('canvas-section').style.width = '100%';
  //   document.getElementById('stays-list-items').style.display = 'flex';
  // }, 600);

  //   document.getElementById('stays-list-items').style.opacity = '1';

  //   if (anyWhereClicked) {
  //       document.getElementById('stays-list-items').style.marginTop = '-100px';
  //       document.getElementById("body-container").addEventListener("click", function () {
  //       document.getElementById('stays-list-items').classList.add('margin-transition');
  //       document.getElementById('stays-list-items').classList.remove('margin-transition');
     
  //       setTimeout(() => {
  //          document.getElementById('stays-list-items').style.marginTop = '-100px';
  //          document.getElementById('transition-container').style.marginTop = '0';
  //     }, 100);

  //       document.getElementById('stays-list-items').style.opacity = '0';

  //       anyWhereClicked = false;
  //       document.getElementById('navbar-middle-container').style.display = 'flex';
  //       document.getElementById('top-navbar').classList.remove('navbar-class');
  //       document.getElementById('positionAbsoluteTransition').classList.remove('navbar-class');

  //       document.getElementById('stays-list-items').style.display = 'none';
  //       document.getElementById('body-container').style.opacity = 'initial';
  //       document.getElementById('type-list-container').style.opacity = 'initial';
  //       document.getElementById('body-container').style.background = 'initial';
  //       document.getElementById('type-list-container').style.background = 'initial';
  //       document.getElementById('canvas-section').style.display = 'none';
  //       document.getElementById('navbar-middle-container').style.display = 'flex';
  //       document.getElementById('navbar-middle-container').style.opacity = '1';
         
  //       setTimeout(() => {
  //         document.getElementById('top-navbar').style.height = '5rem';
  //       //  document.getElementById("top-navbar").style.width = "100%";
  //        document.getElementById("positionAbsoluteTransition").style.width = "80%";
  //       //  document.getElementById("navbar-middle-container").style.width = "100%";




  //       }, 100);
  //     });
  //   }
  // }
}

function simulateClick(element) {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  element.dispatchEvent(event);
}

function positionInherit() {

  // const parentDiv1 = document.getElementById('globeModal');
  // const childDiv1 =  document.getElementById('globe-modal-header');
  // const childDiv2 =  document.getElementById('globe-modal-body');


  document.getElementById('top-header').style.position = 'inherit';

  document.getElementById("filter-close-btn").addEventListener("click", function () {

    document.getElementById('top-header').style.position = 'sticky';

  });

  // parentDiv1.addEventListener('click', function(event) {

  //     if (event.target == childDiv1 || event.target == childDiv2) {


  //     console.log('Event triggered child element');

  //    }

  //    else{
  //     console.log('Event triggered on parent div');
  //     document.getElementById('top-header').style.position = 'sticky';




  //      }

  // });

  // globe-cross-btn
}

function toggleTranslate(id) {

  priceToggle = !priceToggle;

  if (priceToggle == true) {
    if (id = 'tp-toggle-btn') {
      document.getElementById('tp-toggle-btn').classList.add('translate-12-right');
    }
    if (id = 'price-container-toggle-btn') {
      document.getElementById('price-container-toggle-btn').classList.add('translate-12-right');
    }

  }
  else {

    if (id == 'tp-toggle-btn') {
      document.getElementById('tp-toggle-btn').classList.remove('translate-12-right');
    }
    else if (id == 'price-container-toggle-btn') {
      document.getElementById('price-container-toggle-btn').classList.remove('translate-12-right');
    }

  }




}

function showRegion() {
  document.getElementById('regionDropdown-btn').classList.add('show');
  document.getElementById('regionDropdown-btn').ariaExpanded = "true";
  document.getElementById('region-canvas-dropdown').classList.add('show');
  document.getElementById('region-canvas-dropdown').classList.add('canvas-class');
}

function showCalender() {
  document.getElementById('checkin-dropDown').classList.add('show');
  document.getElementById('checkin-dropDown').ariaExpanded = "true";
  document.getElementById('checkin-canvas-dropDown').classList.add('show');
  document.getElementById('checkin-canvas-dropDown').classList.add('canvas-class');
  document.getElementById('checkin-canvas-dropDown').classList.add('calender-canvas');

}

function showGuest() {
  document.getElementById('guest-dropDown').classList.add('show');
  document.getElementById('guest-dropDown').ariaExpanded = "true";
  document.getElementById('guest-canvas-dropDown').classList.add('show');
  document.getElementById('guest-canvas-dropDown').classList.add('canvas-class');
  document.getElementById('guest-canvas-dropDown').classList.add('guest-canvas');

}

function moveBackward() {



  const itemList = document.getElementById('items');
  const firstItem = itemList.firstElementChild;

  if (firstItem.id !== "2") {
    document.getElementById("moveforward").style.display = "flex";
  }

  itemList.removeChild(firstItem);
  itemList.appendChild(firstItem);

  if (firstItem.id == "forward-end") {
    document.getElementById("movebackward").style.display = "none";
  }
  else {
    document.getElementById("movebackward").style.display = "flex";
  }

}

function moveForward() {

  const itemList = document.getElementById('items');
  const lastItem = itemList.lastElementChild;
  const firstItem = itemList.firstElementChild;

  if (firstItem.id !== "forward-end") {
    document.getElementById("movebackward").style.display = "flex";
  }

  itemList.removeChild(lastItem);
  itemList.insertBefore(lastItem, itemList.firstChild);

  if (firstItem.id == "2") {

    document.getElementById("moveforward").style.display = "none";
  }
  else {
    document.getElementById("moveforward").style.display = "flex";

  }
}

function activeItem() {

  // var element = document.getElementsByClassName('checkin-menu-items').classList;

  // if(element.contain('active'))
  // {
  //     alert('active');
  // }
  // else{
  //     alert();
  // }

}

function toggleNavbar() {
  var navbar = document.getElementById('stays-list-items');
  navbar.classList.toggle('open');
}