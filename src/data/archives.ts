import type { ArchiveRecord } from "../types/archive";

export const archives: ArchiveRecord[] = [
    {
        id: "case-0009",
        caseNumber: "Case N° 0009",
        title: "The Founder's Quill",
        date: "Autumn, 1791",
        location: "Founder's Study",
        status: "Recovered",
        excerpt:
            "The quill that signed the charter of the academy. Its ink never fully dried.",
        story: [
            "On the night the academy was founded, the charter was signed by candlelight with a single raven feather. Witnesses recorded that the ink took on a violet shade as the last name was written.",
            "The quill was locked in the founder's desk and forgotten for nearly two centuries. When the drawer was finally forced open, the nib was still wet.",
            "It is said that whoever writes with it can only write the truth — which is why it is so rarely used.",
        ],
        productId: 6,
    },
    {
        id: "case-0094",
        caseNumber: "Case N° 0094",
        title: "The Ring That Grew Cold",
        date: "Spring, 1923",
        location: "Hall of Portraits",
        status: "Recovered",
        excerpt:
            "Worn by three successive keepers of the academy's secrets. The stone frosted during an inquiry.",
        story: [
            "The obsidian ring was passed from keeper to keeper, each one sworn to guard the academy's most delicate records.",
            "During the inquiry of 1923, a visiting inspector questioned the third keeper in the Hall of Portraits. Halfway through his testimony, frost spread across the stone. The inspector left the academy that same evening and never returned.",
            "The ring was recovered from a portrait frame, hidden behind the canvas.",
        ],
        productId: 2,
    },
    {
        id: "case-0158",
        caseNumber: "Case N° 0158",
        title: "Curfew Candles",
        date: "Winter, 1951",
        location: "West Dormitory",
        status: "Recovered",
        excerpt:
            "Lit after curfew by students who refused to sleep. The flame turned violet when someone approached.",
        story: [
            "For one winter, the students of the west dormitory held secret gatherings long after curfew, in the light of black wax candles.",
            "They never needed a lookout. Each time a prefect walked down the corridor, the flames shifted from gold to violet, and the room fell silent before the door opened.",
            "The gatherings ended in February. Nobody ever explained why.",
        ],
        productId: 4,
    },
    {
        id: "case-0217",
        caseNumber: "Case N° 0217",
        title: "The Night Watcher",
        date: "Autumn, 2019",
        location: "North Tower, Library",
        status: "Recovered",
        excerpt:
            "A student kept watch from the library tower for forty nights. Only the hoodie remained.",
        story: [
            "For forty nights, a student climbed the north tower after the library closed and kept watch over the forest. No one knew what she was waiting for.",
            "On the forty-first morning, the tower was empty. A black hoodie lay folded on the window ledge, the raven sigil facing the trees.",
            "The student was found safe a week later. She never spoke about what she had seen — but she asked for the hoodie back.",
        ],
        productId: 1,
    },
    {
        id: "case-0311",
        caseNumber: "Case N° 0311",
        title: "The Archivist's Bag",
        date: "Summer, 1964",
        location: "East Wing, Sub-basement",
        status: "Recovered",
        excerpt:
            "Used by the last archivist to save the records from the fire in the east wing.",
        story: [
            "When fire broke out in the east wing, the archivist ran into the sub-basement while everyone else ran out.",
            "She came back at dawn, covered in ash, carrying a single canvas bag filled with the academy's oldest records. Not one page was burnt.",
            "The bag still smells faintly of smoke. The archive seal was stamped on it the following week.",
        ],
        productId: 3,
    },
    {
        id: "case-0402",
        caseNumber: "Case N° 0402",
        title: "The Unfinished Journal",
        date: "Autumn, 1988",
        location: "The Greenhouse",
        status: "Recovered",
        excerpt:
            "The notebook of a student who investigated the disappearances. The last page was torn out.",
        story: [
            "A student spent an entire term investigating a series of disappearances around the academy. She wrote everything down: names, dates, footprints, lies.",
            "The journal was found among the poisonous plants of the greenhouse, open on its final pages. The last one had been carefully torn out.",
            "The disappearances stopped. The missing page was never found.",
        ],
        productId: 5,
    },
    {
        id: "case-0013",
        caseNumber: "Case N° 0013",
        title: "[Redacted]",
        date: "Unknown",
        location: "Unknown",
        status: "Sealed",
        excerpt:
            "Access to this file is restricted by order of the Headmistress.",
        story: [],
    },
];
