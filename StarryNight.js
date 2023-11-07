 var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('starry-night-container').appendChild(renderer.domElement);

        // Create a starry night background
        var starsGeometry = new THREE.BufferGeometry();
        var starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });

        var starsVertices = [];
        for (var i = 0; i < 1000; i++) {
            var x = (Math.random() - 0.5) * 2000;
            var y = (Math.random() - 0.5) * 2000;
            var z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        var stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Set camera position
        camera.position.z = 5;

        // Add smooth parallax animation
        var animateParallax = function () {
            requestAnimationFrame(animateParallax);

            // Create a subtle parallax effect
            camera.position.x += (mouseX - camera.position.x) * 0.005;
            camera.position.y += (-mouseY - camera.position.y) * 0.005;
            camera.lookAt(scene.position);
        };

        // Add animation loop for star rotation
        var animateStars = function () {
            stars.rotation.y += 0.001;
            renderer.render(scene, camera);
            requestAnimationFrame(animateStars);
        };

        // Handle window resize
        window.addEventListener('resize', function () {
            var newWidth = window.innerWidth;
            var newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        });

        // Add mouse interaction for parallax effect
        var mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', function (event) {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        animateParallax();
        animateStars();