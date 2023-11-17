function showEvents() {
  var eventsDiv = document.getElementById('events');
  eventsDiv.classList.toggle('none');
}

function filterEvents() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('eventList');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

function toggleRegistrationLinks() {
  var registrationLinks = document.getElementById("registration-links");
  if (registrationLinks.style.display === "block") {
      registrationLinks.style.display = "none";
  } else {
      registrationLinks.style.display = "block";
  }
}

function loadGallery() {
  var imageContainer = document.getElementById("image-container");

  // Array of image URLs
  var imageUrls = [
    "gallery1.png",
    "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
    "gallery6.png",
    "gallery7.png",
    "gallery8.png",
    "gallery9.png",
    "gallery10.png",
    "gallery11.png",
    "gallery12.png"
  ];

  // Clear previous images
  imageContainer.innerHTML = "";

  // Load and display images
  for (var i = 0; i < imageUrls.length; i++) {
    var image = document.createElement("img");
    image.src = imageUrls[i];
    image.alt = "Image " + (i + 1);
    image.className = "gallery-image";
    imageContainer.appendChild(image);
  }
}

function showHomePage() {
  var homeContent = document.getElementById("home-content");

  // Toggle display of home content
  if (homeContent.style.display === "block") {
    homeContent.style.display = "none";
  } else {
    homeContent.style.display = "block";
  }
}

function showContactDetails() {
  var contactDetails = document.getElementById("contact-details");

  // Toggle display of contact details
  if (contactDetails.style.display === "block") {
    contactDetails.style.display = "none";
  } 
  else {
    contactDetails.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Get the register button
  var homeBtn = document.getElementById('homeBtn');

  // Add click event listener
  homeBtn.addEventListener('click', function() {
      // Scroll to the register section
      document.getElementById('home-content').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the register button
  var eventBtn = document.getElementById('eventBtn');

  // Add click event listener
  eventBtn.addEventListener('click', function() {
      // Scroll to the register section
      document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the register button
  var registerBtn = document.getElementById('registerBtn');

  // Add click event listener
  registerBtn.addEventListener('click', function() {
      // Scroll to the register section
      document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the register button
  var registerBtn = document.getElementById('registerBtn');

  // Add click event listener
  registerBtn.addEventListener('click', function() {
      // Scroll to the register section
      document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the register button
  var registerBtn = document.getElementById('registerBtn');

  // Add click event listener
  registerBtn.addEventListener('click', function() {
      // Scroll to the register section
      document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  });
});