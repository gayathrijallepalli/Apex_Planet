// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required!";
    }

    let emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address!";
    }

    if (!nameError.textContent && !emailError.textContent) {
        alert("Form submitted successfully!");
    }
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Image Gallery Upload
document.getElementById("imageUpload").addEventListener("change", function(event) {
    let gallery = document.getElementById("gallery");

    Array.from(event.target.files).forEach(file => {
        let reader = new FileReader();
        reader.onload = function(e) {
            let div = document.createElement("div");
            div.classList.add("image-container");

            let img = document.createElement("img");
            img.src = e.target.result;

            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Delete";
            removeBtn.onclick = function() {
                this.parentElement.remove();
            };

            div.appendChild(img);
            div.appendChild(removeBtn);
            gallery.appendChild(div);
        };
        reader.readAsDataURL(file);
    });
});
function startSlideshow() {
    let images = document.querySelectorAll("#gallery img"); // Get all images
    let index = 0;

    if (images.length === 0) {
        alert("No images to display in the slideshow!");
        return;
    }

    // Initially hide all images
    images.forEach(img => img.style.display = "none");

    function showNextImage() {
        images.forEach(img => img.style.display = "none"); // Hide all images
        images[index].style.display = "block"; // Show current image
        index = (index + 1) % images.length; // Move to next image
    }

    showNextImage(); // Show the first image
    setInterval(showNextImage, 2000); // Rotate images every 2 seconds
}


