//particle.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#1e2558', '#4a3a58', '#292742', '#1b1c2b', '#3a2d4a'] // Cosmic-themed colors
        },
        shape: {
            type: 'triangle',
            stroke: {
                width: 0,
                color: '#453244'
            }
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#800080',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

    const animatedImage = document.getElementById('animatedImage');
    const pulseElement = document.querySelector('.pulse');

    // Function to handle the animation end event
    function handleAnimationEnd() {
        pulseElement.style.animation = 'pulse 2s ease-in-out infinite';
        pulseElement.style.opacity = 1;
        animatedImage.removeEventListener('animationend', handleAnimationEnd);
    }

    // Add event listener for the animation end event
    animatedImage.addEventListener('animationend', handleAnimationEnd);



document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const textArray = [
            'I just wanna be in a place where you cant find me',
            'Realm beyond the scope of your existence',
            'A world that beats all antecedents',
            'I just wanna be in my imagination',
            'There, where new things come alive',
            'WELCOME TO MY SPACE\nYou found me!'
        ];

        const textElement = document.getElementById('typed-text');
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progress-bar');

        let currentTextIndex = 0;
        let currentCharacterIndex = 0;
        let cursorVisible = true;
        const typingSpeed = 19; // Characters per second

        function typeText(timestamp) {
            if (currentTextIndex < textArray.length) {
                if (currentCharacterIndex < textArray[currentTextIndex].length) {
                    if (!lastTimestamp) {
                        lastTimestamp = timestamp;
                    }
                    const elapsedTime = timestamp - lastTimestamp;
                    if (elapsedTime >= 1000 / typingSpeed) {
                        textElement.textContent = textArray[currentTextIndex].substring(0, currentCharacterIndex);
                        if (cursorVisible) {
                            textElement.textContent += textArray[currentTextIndex][currentCharacterIndex] + '_';
                        }
                        currentCharacterIndex++;
                        lastTimestamp = timestamp;

                        // Update the progress bar
                        const progress = (currentTextIndex + currentCharacterIndex / textArray[currentTextIndex].length) / textArray.length * 100;
                        progressBar.style.width = progress + '%';

                        if (progress >= 100) {
                            // When progress reaches 100%, hide the progress bar
                            progressBarContainer.style.display = 'none';
                            revealHiddenSections();
                        }
                    }
                    requestAnimationFrame(typeText);
                } else {
                    setTimeout(function () {
                        currentTextIndex++;
                        currentCharacterIndex = 0;
                        typeText();

                        if (currentTextIndex === textArray.length) {
                            revealHiddenSections();
                        }
                    }, 1000); // Delay between texts
                }
            } else {
                cursorBlink();
            }
        }

function revealHiddenSections() {
    const hiddenSections = document.querySelectorAll('#about, #btm-up, .quote, #portfolio, #vlog, #skills, #contact, .foot');
    hiddenSections.forEach(function (section) {
        setTimeout(function () {
            section.classList.add('visible');
        }, 1000);
    });
}


       function cursorBlink() {
    cursorVisible = !cursorVisible;
    if (currentTextIndex < textArray.length) {
        if (cursorVisible) {
            textElement.textContent += '_';
        } else {
            textElement.textContent = textElement.textContent.slice(0, -1); // Remove the cursor
        }
        setTimeout(function () {
            cursorBlink();
        }, 500); // Adjust the blinking speed as needed
    } else {
        setTimeout(function () {
            textElement.textContent = textArray[textArray.length - 1] + (cursorVisible ? '_' : ''); // Keep cursor visible after the last phrase
            cursorVisible = !cursorVisible;
            setTimeout(cursorBlink, 500);
        }, 500); // Delay after the last phrase
    }
}

        let lastTimestamp = null;
        requestAnimationFrame(typeText);
    }, 1000);
});




// Constants
// Constants
const apiKey = 'AIzaSyASS9tOHBPmGJlaEoVV6__m8hNYmQaWsaE';
const playlistId = 'PLcEGjOuqaOYrJu5U2GNAxgeglyKh9g_lM';
const maxResults = 6;
let nextPageToken = '';
let videoListContainer = document.getElementById('videoList');
let loadMoreBtn = document.getElementById('loadMoreBtn');
let loadingMessage = document.getElementById('loadingMessage');
let errorMessage = document.getElementById('errorMessage');
let refreshText = document.getElementById('refreshText');

// Function to show loading message
function showLoadingMessage() {
    loadingMessage.style.display = 'block';
}

// Function to hide loading message
function hideLoadingMessage() {
    loadingMessage.style.display = 'none';
}

// Function to show error message
function showErrorMessage(message) {
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// Function to hide error message
function hideErrorMessage() {
    errorMessage.style.display = 'none';
}

// Function to show "Load More" button
function showLoadMoreButton() {
    loadMoreBtn.style.display = 'block';
}

// Function to hide "Load More" button
function hideLoadMoreButton() {
    loadMoreBtn.style.display = 'none';
}

// Function to show "Refresh" text
function showRefreshText() {
    refreshText.style.display = 'block';
}

// Function to hide "Refresh" text
function hideRefreshText() {
    refreshText.style.display = 'none';
}

// Function to load more videos
function loadMoreVideos() {
    fetchVideos();
}

// Event listener for "Load More" button
loadMoreBtn.addEventListener('click', loadMoreVideos);

// Event listener for "Refresh" text
refreshText.addEventListener('click', fetchVideos);

// Function to open the video modal with YouTube IFrame API
function openVideoModal(videoId) {
  const modal = document.getElementById('videoModal');
  modal.style.display = 'block';

  // Add class to body to prevent scrolling
  document.body.style.overflow = 'hidden';

  // Create a container for the YouTube player
  const playerContainer = document.getElementById('videoPlayer');
  playerContainer.innerHTML = '';

  // Load the YouTube IFrame API if not already loaded
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    // If the API is already loaded, create the player immediately
    createYouTubePlayer();
  }

  // Callback when the YouTube IFrame API is ready
  window.onYouTubeIframeAPIReady = function () {
    createYouTubePlayer();
  };

  // Function to create the YouTube player
  function createYouTubePlayer() {
    const ytPlayer = new YT.Player('videoPlayer', {
      height: 400,
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 0, // Hide default controls
      },
      events: {
        onReady: function (event) {
          // You can add custom event handling here if needed
        },
      },
    });

    // Add event listeners for custom controls
    document.getElementById('playButton').addEventListener('click', function () {
      ytPlayer.playVideo();
    });

    document.getElementById('pauseButton').addEventListener('click', function () {
      ytPlayer.pauseVideo();
    });

    document.getElementById('rewindButton').addEventListener('click', function () {
      // Custom rewind logic, adjust the seconds as needed
      ytPlayer.seekTo(ytPlayer.getCurrentTime() - 10, true);
    });

    document.getElementById('fastForwardButton').addEventListener('click', function () {
      // Custom fast-forward logic, adjust the seconds as needed
      ytPlayer.seekTo(ytPlayer.getCurrentTime() + 10, true);
    });
  }
}


// Function to close the video modal and stop the video
function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  modal.style.display = 'none';

  // Remove class from body to allow scrolling
  document.body.style.overflow = 'visible';

  // Stop the YouTube player when the modal is closed
  const ytPlayer = document.getElementById('videoPlayer');
  if (ytPlayer && ytPlayer.contentWindow) {
    ytPlayer.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }
}

// Event listener for play button clicks
videoListContainer.addEventListener('click', function(event) {
  const playButton = event.target.closest('.play-button');
  if (playButton) {
    const videoId = playButton.parentElement.getAttribute('data-video-id');
    if (videoId) {
      openVideoModal(videoId);
    }
  }
});

// Function to fetch more videos
async function fetchVideos() {
    showLoadingMessage(); // Show loading message while fetching videos

    try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        nextPageToken = data.nextPageToken || '';
        displayVideos(data.items);
        hideErrorMessage(); // Hide error message if it was previously displayed
        showLoadMoreButton(); // Show "Load More" button after videos are successfully fetched
        hideRefreshText(); // Hide "Refresh" text after successful fetch
    } catch (error) {
        console.error('Error fetching videos:', error);
        showErrorMessage('Failed to load videos. Please try again.'); // Show error message
        hideLoadMoreButton(); // Hide "Load More" button in case of an error
        showRefreshText(); // Show "Refresh" text after an error
    } finally {
        hideLoadingMessage(); // Hide loading message regardless of success or failure
    }
}

// Function to display videos
async function displayVideos(videos) {
    for (const video of videos) {
        const videoDetails = await fetchVideoDetails(video.snippet.resourceId.videoId);
        const videoCard = createVideoCard(video.snippet, videoDetails);
        videoListContainer.appendChild(videoCard);
    }
}

// Function to fetch video details
async function fetchVideoDetails(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return data.items[0];
    } catch (error) {
        console.error('Error fetching video details:', error);
    }
}

// Function to create a video card
function createVideoCard(snippet, details) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('cust');
    videoCard.setAttribute('data-video-id', snippet.resourceId.videoId);

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${snippet.thumbnails.medium.url}" alt="Video Thumbnail">`;

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details');

    detailsContainer.innerHTML = `
        <div class="title">${snippet.title}</div>
        <div class="description">${snippet.description}</div>
        <div class="meta">
            <span class="material-icons mat-icon">access_time</span> ${parseDuration(details.contentDetails.duration)}
            <span class="material-icons mat-icon">remove_red_eye</span> ${details.statistics.viewCount}
            <span class="material-icons mat-icon">thumb_up</span> ${details.statistics.likeCount}
        </div>
    `;

    const playButton = document.createElement('div');
    playButton.classList.add('play-button');
    playButton.innerHTML = '<img src="./img/play-btn.png" alt="Play Button">';

    videoCard.appendChild(thumbnail);
    videoCard.appendChild(detailsContainer);
    videoCard.appendChild(playButton);

    return videoCard;
}

// Function to parse video duration
function parseDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    let durationString = '';

    if (hours > 0) {
        durationString += `${hours}:`;
    }

    if (minutes > 0 || hours > 0) {
        durationString += `${minutes}:`;
    }

    durationString += `${seconds}`;

    return durationString.trim();
}

// Initial load
fetchVideos();

function subscribeToChannel() {
            window.open('https://www.youtube.com/channel/UCvOozhUHYkYS0UC5EgJsX-w?sub_confirmation=1', '_blank');
            // Replace YOUR_CHANNEL_ID with your actual YouTube channel ID
        }




