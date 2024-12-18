# Project Responsive Web Design using Bootstrap
## Date:16/12/2024

## AIM:
To create a simplified clone of Dribbble (https://dribbble.com/) landing page.


## DESIGN STEPS:

### Step 1:
Clone the repository from GitHub.

### Step 2:
Create Django Admin project.

### Step 3:
Create a New App under the Django Admin project.

### Step 4:
Insert the necessary CSS and JavaScript files as external in order to use Bootstrap.

### Step 5:
Create a HTML file and include the needed Bootstrap components.

### Step 6:
Publish the website in the LocalHost.

## PROGRAM :
```
dribble.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dribbble_Clone</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">Dribbble</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Explore</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign In</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-primary nav-link text-white" href="#">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container py-5">
        <h1 class="text-center mb-4">Explore Creative Work</h1>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card">
                    <img src="855.webp" class="card-img-top" alt="Placeholder">
                    <div class="card-body">
                        <h5 class="card-title">Finance App Design</h5>
                        <p class="card-text">A brief description of the design work showcased here.</p>
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="755.webp" class="card-img-top" alt="Placeholder">
                    <div class="card-body">
                        <h5 class="card-title">Design Logo</h5>
                        <p class="card-text">Logo & Brand Identity Design.</p>
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="955.webp" class="card-img-top" alt="Placeholder">
                    <div class="card-body">
                        <h5 class="card-title">Design Page</h5>
                        <p class="card-text">Spartherm - Dark Luxury Clean Fireplace Website Collection Page.</p>
                        <a href="#" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="bg-light text-center py-3">
        <p>&copy; 2024 Dribbble Clone. All rights reserved.</p>
        <p>Designed and Developed by Ramsanjay C</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

styles.css

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.navbar-light .navbar-nav .nav-link {
    color: #555;
    margin-right: 15px;
    transition: color 0.3s ease;
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #000;
}

.btn-primary {
    background-color: #ea4c89;
    border-color: #ea4c89;
}

.btn-primary:hover {
    background-color: #d7396b;
    border-color: #d7396b;
}

h1 {
    font-weight: 700;
    color: #333;
}

.card {
    border: none;
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
}

.card-text {
    color: #666;
}

footer {
    background-color: #fff;
    border-top: 1px solid #ddd;
    color: #666;
}

footer p {
    margin: 0;
}

script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Dribbble Clone Loaded!");

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Card clicked! You can add more functionality here.');
        });
    });

    const signUpButton = document.querySelector('.btn-primary');
    if (signUpButton) {
        signUpButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior for demo purposes
            alert('Sign Up button clicked! Redirect or handle form submission here.');
        });
    }
});

```

## OUTPUT:
![alt text](<Screenshot 2024-12-16 161515.png>)
![alt text](<Screenshot 2024-12-16 161659.png>)

## RESULT:
The Project for responsive web design using Bootstrap is completed successfully.
