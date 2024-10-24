// Get the elements

var sidebarSelector = ".sidebar-div";

const navItems = document.querySelectorAll("#dashboard2-navitem-hover");

const dashboard2Column1 = document.querySelector("#mainpage-column1");
const dashboard2Column2 = document.querySelector("#mainpage-column2");

const mobileNavbarWidth = document.querySelector(".navlink-column1");
// const testing = document.querySelector(".aside-nav-link ul li a")

let dashboard2Togglebtn = document.getElementById("dashboard2-side-close-btn");
let dashboard2SideBarClose = document.getElementById(
  "dashboard2-sidebar-close"
);
let dashboard2SideBarOpen = document.getElementById("dashboard2-sidebar-open");

let mobileMenuDiv = document.querySelector(".dashboard2-menu-toggle-btn");

const dashboard2Text = document.querySelectorAll("#dasboard2-text");

const dropdownToggleIcon = document.querySelector(".dropdown-icon");

const testingLInk = document.querySelector("#dropdown-link-row");

const testClicking = document.querySelector("#testClick");

dashboard2SideBarClose.style.display = "none";

let dashboard2Hidden = true;

// Function to handle sidebar width changes
function updateSidebarWidth(open) {
  if (open) {
    // For larger screens
    if (window.innerWidth > 1080) {
      dashboard2Column1.style.width = "35%";
      // dashboard2Column2.style.width = "85%";
    } else {
      // For smaller screens
      dashboard2Column1.style.width = "85%";
      // testing.style.paddingLeft = '15px'
      mobileNavbarWidth.style.width = "100%";

      // dashboard2Column2.style.width = "100%";
    }
  } else {
    if (window.innerWidth > 1080) {
      dashboard2Column1.style.width = "4.5%";
      // dashboard2Column2.style.width = "95%";
    } else {
      // For smaller screens
      dashboard2Column1.style.width = "0%";
      mobileNavbarWidth.style.width = "0%";

      // dashboard2Column2.style.width = "100%";
    }
  }

  dashboard2Hidden = !dashboard2Hidden;
}

// Loop through each navItem and add event listeners

if (window.innerWidth > 1080) {
  navItems.forEach((navItem) => {
    navItem.addEventListener("mouseenter", function () {
      if (dashboard2Hidden) {
        updateSidebarWidth(true);

        testingLInk.classList.add("dropdown-link-row-expanded");

        dashboard2Text.forEach((text) => {
          text.classList.add("expanded-sidebar-link");
          // text.classList.remove("dasboard2-text");
        });

        dashboard2SideBarClose.style.display = "flex";
        dashboard2SideBarOpen.style.display = "none";
      }
    });

    // Update sidebar width when mouse leaves the sidebar area
    dashboard2Column1.addEventListener("mouseleave", function () {
      updateSidebarWidth(false);

      testingLInk.classList.remove("dropdown-link-row-expanded");

      dashboard2Text.forEach((text) => {
        text.classList.remove("expanded-sidebar-link");
        // text.classList.add("dasboard2-text");
      });

      dashboard2SideBarClose.style.display = "none";
      dashboard2SideBarOpen.style.display = "block";
    });
  });
}

// Click event listener for toggle button
dashboard2Togglebtn.addEventListener("click", () => {


  updateSidebarWidth(dashboard2Hidden);
  if (dashboard2Hidden) {
    // mobileMenuDiv.style.display = "block";

    dashboard2SideBarClose.style.display = "none";
    dashboard2SideBarOpen.style.display = "block";

    // dropdownToggleIcon.style.display = "none"

    testingLInk.classList.remove("dropdown-link-row-expanded");

    dashboard2Text.forEach((text) => {
      text.classList.remove("expanded-sidebar-link");
    });

    console.log("close");
  } else {

    if (window.innerWidth < 768) {
      mobileMenuDiv.style.display = "none";
    }


    dashboard2SideBarClose.style.display = "flex";
    dashboard2SideBarOpen.style.display = "none";

    // dropdownToggleIcon.style.display = "flex"

    testingLInk.classList.add("dropdown-link-row-expanded");

    dashboard2Text.forEach((text) => {
      text.classList.add("expanded-sidebar-link");
    });

    console.log("open");
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
    console.log("click");
    $(".dropdown-content").slideUp("fast");
  });

  $(".sidebar-div").on("mouseleave", function () {
    // console.log("leave");
    $(".dropdown-content").slideUp("fast");
  });
});
