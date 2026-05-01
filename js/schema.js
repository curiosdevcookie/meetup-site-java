if (upcoming.length) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: upcoming.map((e, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Event',
                name: e.title,
                startDate: `${e.date}T${e.time.split('–')[0]}`,
                endDate:   `${e.date}T${e.time.split('–')[1]}`,
                eventStatus: 'https://schema.org/EventScheduled',
                organizer: { '@type': 'Organization', name: 'JUG Colonia' },
                performer: { '@type': 'Person', name: e.speaker },
            },
        })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}
