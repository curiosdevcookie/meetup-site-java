
const events = [
    { date: '2025-08-18', time: '18:00–20:00', title: 'What\'s in it for me? Java from version 8 to 21.', speaker: 'Christian Baer' },
    { date: '2025-11-20', time: '18:00–20:00', title: 'Insights into JUnit', speaker: 'Christian Stein' },
    { date: '2026-02-19', time: '18:00–20:00', title: 'All you need about Maven 4', speaker: 'Matthias Bünger' },
    { date: '2026-05-28', time: '18:00–20:00', title: 'Scala Type System', speaker: 'Michael Bauer' },
    { date: '2026-08-20', time: '18:00–20:00', title: 'Java Meetup Cologne 26/03', speaker: 'TBA' },
    { date: '2026-11-19', time: '18:00–20:00', title: 'Java Meetup Cologne 26/04', speaker: 'TBA' },
];

const today = new Date().toISOString().split('T')[0];

const formatDate = dateStr =>
    new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });

const renderCard = ({ date, time, title, speaker }) => `
    <article class="meetup-card">
        <time datetime="${date}">${formatDate(date)}</time>
        <p>${time}</p>
        <h3>${title}</h3>
        <p>${speaker}</p>
    </article>`;

const renderSection = (id, cards, fallback = '') =>
    document.getElementById(id).innerHTML = cards.map(renderCard).join('') || fallback;

const upcoming = events.filter(e => e.date >= today);
const past     = events.filter(e => e.date <  today).toReversed();

renderSection('upcoming-container', upcoming, '<p>No upcoming events.</p>');
renderSection('past-container', past);
