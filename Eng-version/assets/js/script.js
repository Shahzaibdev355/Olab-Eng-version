// Get the elements

// var sidebarSelector = ".sidebar-div";

// const navItems = document.querySelectorAll("#dashboard2-navitem-hover");

// const dashboard2Column1 = document.querySelector("#mainpage-column1");
// const dashboard2Column2 = document.querySelector("#mainpage-column2");

// const mobileNavbarWidth = document.querySelector(".navlink-column1");
// // const testing = document.querySelector(".aside-nav-link ul li a")

// let dashboard2Togglebtn = document.getElementById("dashboard2-side-close-btn");
// let dashboard2SideBarClose = document.getElementById(
//   "dashboard2-sidebar-close"
// );
// let dashboard2SideBarOpen = document.getElementById("dashboard2-sidebar-open");

// let mobileMenuDiv = document.querySelector(".dashboard2-menu-toggle-btn");

// const dashboard2Text = document.querySelectorAll("#dasboard2-text");

// const dropdownToggleIcon = document.querySelector(".dropdown-icon");

// const testingLInk = document.querySelector("#dropdown-link-row");

// const testClicking = document.querySelector("#testClick");

// dashboard2SideBarClose.style.display = "none";

// let dashboard2Hidden = true;

// // Function to handle sidebar width changes
// function updateSidebarWidth(open) {
//   if (open) {
//     // For larger screens
//     if (window.innerWidth > 1080) {
//       dashboard2Column1.style.width = "35%";
//       // dashboard2Column2.style.width = "85%";
//     } else {
//       // For smaller screens
//       dashboard2Column1.style.width = "85%";
//       // testing.style.paddingLeft = '15px'
//       mobileNavbarWidth.style.width = "100%";

//       // dashboard2Column2.style.width = "100%";
//     }
//   } else {
//     if (window.innerWidth > 1080) {
//       dashboard2Column1.style.width = "4.5%";
//       // dashboard2Column2.style.width = "95%";
//     } else {
//       // For smaller screens
//       dashboard2Column1.style.width = "0%";
//       mobileNavbarWidth.style.width = "0%";

//       // dashboard2Column2.style.width = "100%";
//     }
//   }

//   dashboard2Hidden = !dashboard2Hidden;
// }

// // Loop through each navItem and add event listeners

// if (window.innerWidth > 1080) {
//   navItems.forEach((navItem) => {
//     navItem.addEventListener("mouseenter", function () {
//       if (dashboard2Hidden) {
//         updateSidebarWidth(true);

//         testingLInk.classList.add("dropdown-link-row-expanded");

//         dashboard2Text.forEach((text) => {
//           text.classList.add("expanded-sidebar-link");
//           // text.classList.remove("dasboard2-text");
//         });

//         dashboard2SideBarClose.style.display = "flex";
//         dashboard2SideBarOpen.style.display = "none";
//       }
//     });

//     // Update sidebar width when mouse leaves the sidebar area
//     dashboard2Column1.addEventListener("mouseleave", function () {
//       updateSidebarWidth(false);

//       testingLInk.classList.remove("dropdown-link-row-expanded");

//       dashboard2Text.forEach((text) => {
//         text.classList.remove("expanded-sidebar-link");
//         // text.classList.add("dasboard2-text");
//       });

//       dashboard2SideBarClose.style.display = "none";
//       dashboard2SideBarOpen.style.display = "block";
//     });
//   });
// }

// // Click event listener for toggle button
// dashboard2Togglebtn.addEventListener("click", () => {


//   updateSidebarWidth(dashboard2Hidden);
//   if (dashboard2Hidden) {
//     // mobileMenuDiv.style.display = "block";

//     dashboard2SideBarClose.style.display = "none";
//     dashboard2SideBarOpen.style.display = "block";

//     // dropdownToggleIcon.style.display = "none"

//     testingLInk.classList.remove("dropdown-link-row-expanded");

//     dashboard2Text.forEach((text) => {
//       text.classList.remove("expanded-sidebar-link");
//     });

//     console.log("close");
//   } else {

//     if (window.innerWidth < 768) {
//       mobileMenuDiv.style.display = "none";
//     }


//     dashboard2SideBarClose.style.display = "flex";
//     dashboard2SideBarOpen.style.display = "none";

//     // dropdownToggleIcon.style.display = "flex"

//     testingLInk.classList.add("dropdown-link-row-expanded");

//     dashboard2Text.forEach((text) => {
//       text.classList.add("expanded-sidebar-link");
//     });

//     console.log("open");
//   }
// });




const sidebarSelector = ".sidebar-div";

const navItems = document.querySelectorAll("#dashboard2-navitem-hover");

const dashboard2Column1 = document.querySelector("#mainpage-column1");
const dashboard2Column2 = document.querySelector("#mainpage-column2");

const mobileNavbarWidth = document.querySelector(".navlink-column1");
// const testing = document.querySelector(".aside-nav-link ul li a")

let dashboard2Togglebtn = document.getElementById("dashboard2-side-close-btn");


let dashboard2SideBarClose = document.getElementById( "dashboard2-sidebar-close");


let dashboard2SideBarOpen = document.getElementById("dashboard2-sidebar-open");

let mobileMenuDiv = document.querySelector(".dashboard2-menu-toggle-btn");

const dashboard2Text = document.querySelectorAll("#dasboard2-text");

const dropdownToggleIcon = document.querySelector(".dropdown-icon");

const testingLInk = document.querySelector("#dropdown-link-row");

const testClicking = document.querySelector("#testClick");

const languageSelector = document.querySelector("#languageBtn");

dashboard2SideBarClose.style.display = "none";

let dashboard2Hidden = true;

let collapseTimeout = null; // Holds the timeout for collapsing





mobileNavbarWidth.style.width = "100%";





// Function to handle sidebar width changes
function updateSidebarWidth(open) {
  if (open) {
    if (window.innerWidth > 1080) {
      dashboard2Column1.style.width = "35%";
    } else {
      dashboard2Column1.style.width = "85%";
      mobileNavbarWidth.style.width = "100%";
    }
  } else {
    if (window.innerWidth > 1080) {
      dashboard2Column1.style.width = "4.5%";
    } else {
      dashboard2Column1.style.width = "0%";


      mobileNavbarWidth.style.width = "100%";


      


    }
  }
  dashboard2Hidden = !open;
}

// Function to expand the sidebar
function expandSidebar() {
  if (collapseTimeout) clearTimeout(collapseTimeout); // Cancel collapse if ongoing
  updateSidebarWidth(true);

  testingLInk.classList.add("dropdown-link-row-expanded");
  dashboard2Text.forEach((text) => {
    text.classList.add("expanded-sidebar-link");
  });

  dashboard2SideBarClose.style.display = "flex";
  dashboard2SideBarOpen.style.display = "none";


  // Show the language selector button with fade-in effect
  // setTimeout(() => {
  //   languageSelector.classList.add('show');
  //   languageSelector.classList.remove('hide'); // Remove 'hide' class if it was previously added
  // }, 500); // Adjust delay as needed

  // languageSelector.style.display = "flex";

  // setTimeout(() => {
  //   languageSelector.style.display = "flex";
  //   // languageSelector.classList.remove("language-change-btn2"); // reset
  //   // void languageSelector.offsetWidth; // force reflow
  //   languageSelector.classList.add("language-change-btn2");
  // },800)

  
}

// Function to collapse the sidebar with delay
function collapseSidebar() {
  collapseTimeout = setTimeout(() => {
    updateSidebarWidth(false);

    testingLInk.classList.remove("dropdown-link-row-expanded");
    dashboard2Text.forEach((text) => {
      text.classList.remove("expanded-sidebar-link");
    });

    dashboard2SideBarClose.style.display = "none";
    dashboard2SideBarOpen.style.display = "block";



     // Remove 'show' class if it was previously added

  }, 300); // Adjust delay as needed

  languageSelector.style.display = "none";
    // languageSelector.classList.remove('show');
}

// Add event listeners for hover behavior
if (window.innerWidth > 1080) {
  navItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", expandSidebar);

    dashboard2Column1.addEventListener("mouseleave", collapseSidebar);
  });
}



let toggleLanguageBtnTimeout;

// Click event listener for toggle button
dashboard2Togglebtn.addEventListener("click", () => {
  updateSidebarWidth(dashboard2Hidden);
  if (dashboard2Hidden) {
    dashboard2SideBarClose.style.display = "none";
    dashboard2SideBarOpen.style.display = "block";

    testingLInk.classList.remove("dropdown-link-row-expanded");
    dashboard2Text.forEach((text) => {
      text.classList.remove("expanded-sidebar-link");
    });


    // Clear timeout in case it's still pending
    clearTimeout(toggleLanguageBtnTimeout);

     // Hide with fade-out
     languageSelector.classList.remove("language-change-btn2");
     languageSelector.style.display = "none";

  } else {
    dashboard2SideBarClose.style.display = "flex";
    dashboard2SideBarOpen.style.display = "none";

    testingLInk.classList.add("dropdown-link-row-expanded");
    dashboard2Text.forEach((text) => {
      text.classList.add("expanded-sidebar-link");
    });


    clearTimeout(toggleLanguageBtnTimeout);

    toggleLanguageBtnTimeout = setTimeout(() => {
      languageSelector.style.display = "flex";
      // force reflow to trigger animation even on first click
      void languageSelector.offsetWidth;
      languageSelector.classList.add("language-change-btn2");
    }, 900); // delay before showing + animating

  }
});






const Clicking = () => {
  testClicking.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    // Check if sidebar is open, and close it
    if (!dashboard2Hidden) {

      updateSidebarWidth(false); // Close the sidebar

      // Add delay before setting the mobile menu display to 'block'
      setTimeout(() => {
        mobileMenuDiv.style.display = "block";
        console.log("Mobile menu displayed with delay");
      }, 1500); // Adjust delay as needed (300ms)


      dashboard2SideBarClose.style.display = "none";


      dashboard2SideBarOpen.style.display = "block";

      // Remove expanded class from the dropdown links
      testingLInk.classList.remove("dropdown-link-row-expanded");

      dashboard2Text.forEach((text) => {
        text.classList.remove("expanded-sidebar-link");
      });


      // Hide language selector button when sidebar is closed
      $(languageSelector).fadeOut();

      console.log("Sidebar closed through click");
    }

  });
};
Clicking();

$(document).ready(function () {
  $(".dropdown-icon").click(function (event) {
    event.stopPropagation();
    $(this)
      .closest(".product-dropdown")
      .find(".dropdown-content")
      .slideToggle("fast");
    console.log("hello");
  });

  // Toggle sidebar class on button click
  $("#dashboard2-sidebar-close").click(function () {
    console.log("click outside close");
    $(".dropdown-content").slideUp("fast");
  });

  $(".sidebar-div").on("mouseleave", function () {
    // console.log("leave");
    $(".dropdown-content").slideUp("fast");
  });
});




















document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("#dashboard2-navitem-hover");
  const activeItem = document.querySelector(".aside-nav-link .active");

  navItems.forEach((item) => {
      // Handle hover events
      item.addEventListener("mouseenter", () => {
          if (activeItem) activeItem.classList.remove("active");
      });

      item.addEventListener("mouseleave", () => {
          if (activeItem) activeItem.classList.add("active");
      });
  });
});












let showLanguageBtnTimeout;

dashboard2Column1.addEventListener("mouseenter", () => {
  showLanguageBtnTimeout = setTimeout(() => {
    languageSelector.style.display = "flex";
    languageSelector.classList.add("language-change-btn2");
  }, 900);
});

dashboard2Column1.addEventListener("mouseleave", () => {
  clearTimeout(showLanguageBtnTimeout); // Cancel showing if mouse leaves early
  languageSelector.classList.remove("language-change-btn2");
  languageSelector.style.display = "none";
});