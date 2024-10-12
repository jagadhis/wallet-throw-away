export const timelineData = [
    {
        id: 1,
        title: "Badge issued",
        date: "01/10",
        description:
            "The badge has been issued by professor X",
    },
    {
        id: 2,
        title: "Waiting for passcode verification",
        date: "05/10",
        description:
            "Passcode verification pending",
    },
    {
        id: 3,
        title: "Badge claimed",
        date: "16/10",
        description:
            "The badge has been successfully claimed",
    },
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
    id: number;
    title: string;
    date: string;
    description: string;
}