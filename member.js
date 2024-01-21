function skillsMember() {
    var skills = [
        {
            name: 'HTML',
            level: '90'
        },
        {
            name: 'CSS',
            level: '90'
        },
        {
            name: 'Javascript',
            level: '70'
        },
        {
            name: 'PHP',
            level: '70'
        },
        {
            name: 'Laravel',
            level: '60'
        },
        {
            name: 'MySQL',
            level: '70'
        },
        {
            name: 'Git',
            level: '60'
        },
        {
            name: 'Bootstrap',
            level: '90'
        },
        {
            name: 'SASS',
            level: '70'
        },
        {
            name: 'jQuery',
            level: '70'
        },
        {
            name: 'Vue.js',
            level: '60'
        },
        {
            name: 'React.js',
            level: '50'
        },
        {
            name: 'Photoshop',
            level: '70'
        },
        {
            name: 'Illustrator',
            level: '60'
        },
        {
            name: 'Premiere',
            level: '50'
        },
        {
            name: 'After Effects',
            level: '50'
        },
    ];

    var html = '';
    for (var i = 0; i < skills.length; i++) {
        html += '<div class="skill">';
        html += '<div class="skill-name">';
        html += '<span>' + skills[i].name + '</span>';
        html += '</div>';
        html += '<div class="skill-level">';
        html += '<div class="level" style="width: ' + skills[i].level + '%">';
        html += '<span>' + skills[i].level + '%</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    document.getElementById('skills').innerHTML = html;
}