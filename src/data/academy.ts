export interface Place {
    name: string;
    description: string;
    archiveId: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    text: string;
    archiveId?: string;
}

export const places: Place[] = [
    {
        name: "Founder's Study",
        description:
            "A sealed room at the heart of the old building. The desk has not been moved since 1791.",
        archiveId: "case-0009",
    },
    {
        name: "Hall of Portraits",
        description:
            "Two centuries of headmasters watch the corridor. Some of the frames hide more than paint.",
        archiveId: "case-0094",
    },
    {
        name: "West Dormitory",
        description:
            "Narrow beds, cold floors, and a curfew that has never truly been respected.",
        archiveId: "case-0158",
    },
    {
        name: "East Wing",
        description:
            "Rebuilt after the fire of 1964. The sub-basement beneath it still holds the oldest records.",
        archiveId: "case-0311",
    },
    {
        name: "The Greenhouse",
        description:
            "Rare plants, most of them poisonous. Students are advised not to touch anything.",
        archiveId: "case-0402",
    },
    {
        name: "North Tower",
        description:
            "The highest point of the academy. From the library window, you can see the whole forest.",
        archiveId: "case-0217",
    },
];

export const timeline: TimelineEvent[] = [
    {
        year: "1791",
        title: "The charter is signed",
        text: "Nevermore Academy is founded by candlelight, with a single raven feather.",
        archiveId: "case-0009",
    },
    {
        year: "1923",
        title: "The inquiry",
        text: "A visiting inspector questions the keepers of the academy's secrets. He leaves the same evening.",
        archiveId: "case-0094",
    },
    {
        year: "1951",
        title: "The winter gatherings",
        text: "Students meet in secret after curfew, by the light of black candles.",
        archiveId: "case-0158",
    },
    {
        year: "1964",
        title: "Fire in the east wing",
        text: "The archivist saves the oldest records from the flames.",
        archiveId: "case-0311",
    },
    {
        year: "1988",
        title: "The disappearances",
        text: "A student investigates a series of disappearances. Her journal is found in the greenhouse.",
        archiveId: "case-0402",
    },
    {
        year: "2019",
        title: "Forty nights",
        text: "A student keeps watch from the north tower, night after night.",
        archiveId: "case-0217",
    },
    {
        year: "Today",
        title: "The archives open",
        text: "For the first time, artefacts from the academy are released to those outside its walls.",
    },
];
