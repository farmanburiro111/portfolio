  const menuBtn =
            document.getElementById("menuBtn");

        const navLinks =
            document.getElementById("navLinks");


        menuBtn.addEventListener("click", function() {

            navLinks.classList.toggle("show");

        });


        /* Close menu after click */

        document
            .querySelectorAll(".nav-links a")
            .forEach(function(link) {

                link.addEventListener("click", function() {

                    navLinks.classList.remove("show");

                });

            });


        /* Active Navbar */

        const sections =
            document.querySelectorAll("section[id]");

        const navItems =
            document.querySelectorAll(".nav-links a");


        window.addEventListener("scroll", function() {

            let current = "";

            sections.forEach(function(section) {

                const top =
                    section.offsetTop - 150;

                if (window.scrollY >= top) {

                    current =
                        section.getAttribute("id");

                }

            });


            navItems.forEach(function(link) {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }

            });

        });


        /* Contact Form */

        const form =
            document.getElementById("contactForm");

        const formMessage =
            document.getElementById("formMessage");


        form.addEventListener("submit", function(event) {

            event.preventDefault();

            formMessage.style.color = "#16a34a";

            formMessage.textContent =
                "Thank you! Your message has been received.";

            form.reset();

        });