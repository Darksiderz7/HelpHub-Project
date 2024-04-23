document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=';
    const displayArea = document.getElementById('charity-data');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCharities(data);
        })
        .catch(error => {
            displayArea.innerHTML = '<p>Error loading charity data. Please try again later.</p>';
            console.error('There was a problem with your fetch operation:', error);
        });

    function displayCharities(data) {
        let projects = data.projects.project;
        let html = '<ul>';
        projects.forEach(project => {
            html += `<li><h3>${project.title}</h3><p>${project.summary}</p></li>`;
        });
        html += '</ul>';
        displayArea.innerHTML = html;
    }
});
