

$(document).ready(function () {

    


  // Check if preloader has been shown in the current session
  if (!Cookies.get("preloaderShown")) {
    // Simulate loading process
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      gsap.to(".progress-bar-inner", {
        width: progress + "%",
        duration: 0.2,
        ease: "power1.out",
      });

      if (progress >= 100) {
        clearInterval(interval);
        gsap.to(".progress-para", {
          top: "30%",
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
        });

        gsap.to("#preloader", {
          top: "-130%",
          duration: 1.5,
          delay: 0.5,
          ease: "power4.inOut",
          onComplete: function () {
            document.body.style.overflowY = "hidden";
          },
        });

        gsap.from(".title", {
          y: 10,
          opacity: 0,
          duration: 2,
          delay: 1.5,
          ease: "expo.inOut",
        });
        // Set a session-like cookie to prevent the preloader from showing again in this session
        Cookies.set("preloaderShown", "true");
      }
    }, 500); // Update every 500ms
  } else {
    // If preloader has already been shown, directly show the content
    $("#preloader").remove();
  }

  // Listen for tab closure and delete the session cookie
//   window.addEventListener("beforeunload", function () {
//     Cookies.remove("preloaderShown");
//   });
});
