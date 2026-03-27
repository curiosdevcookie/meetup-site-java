
const events = [
    { date: '2025-08-18', title: 'Java Meetup Cologne 25/03', time: '18:00–20:00' },
    { date: '2025-11-20', title: 'Java Meetup Cologne 25/04', time: '18:00–21:00' },
    { date: '2026-02-19', title: 'Java Meetup Cologne 26/01', time: '18:00–20:00' },
    { date: '2026-05-28', title: 'Java Meetup Cologne 26/02', time: '18:00–20:00' },
    { date: '2026-08-20', title: 'Java Meetup Cologne 26/03', time: '18:00–20:00' },
    { date: '2026-11-19', title: 'Java Meetup Cologne 26/04', time: '18:00–20:00' },
];

const today = new Date().toISOString().split('T')[0];

const past     = events.filter(e => e.date <  today).reverse();
const upcoming = events.filter(e => e.date >= today);

const formatDate = dateStr => new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
});

document.getElementById('upcoming-container').innerHTML = upcoming.map(e => `
    <div class="meetup-container">
        <article class="meetup-card">
            <div class="card-header">
                <time datetime="${e.date}">${formatDate(e.date)}</time>
                <h3>${e.title}</h3>
            </div>
            <p>${e.time}</p>
        </article>
    </div>
`).join('') || '<p>No upcoming events.</p>';

document.getElementById('past-container').innerHTML = past.map(e => `
    <li>
        <article>
            <time datetime="${e.date}">${formatDate(e.date)}</time>
            <h3>${e.title}</h3>
            <p>${e.time}</p>
        </article>
    </li>
`).join('');
