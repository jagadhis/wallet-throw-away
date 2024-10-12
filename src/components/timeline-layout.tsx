"use client";

import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineTitle,
    TimelineIcon,
    TimelineDescription,
    TimelineContent,
    TimelineTime,
} from "@/components/ui/timeline";
import { TimelineElement } from "@/data/timeline-data";

interface TimelineLayoutProps {
    items: TimelineElement[];
}

export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
    return (
        <Timeline>
            {items.map((item, index) => (
                <TimelineItem key={index} className="relative pb-2">
                    {index !== items.length - 1 && (
                        <TimelineConnector className="absolute left-5 top-6 h-full w-[2px]" />
                    )}
                    <TimelineIcon className="absolute left-3.5 top-6 w-4 h-4 rounded-full z-10" />

                    <div className="pl-10 mt-6">
                        <TimelineHeader className="flex items-start">
                            <TimelineTitle className="font-bold">{item.title}</TimelineTitle>
                        </TimelineHeader>

                        <TimelineTime className="text-sm text-secondary-foreground">{item.date}</TimelineTime>

                        <TimelineContent>
                            <TimelineDescription className="text-secondary-foreground">
                                {item.description}
                            </TimelineDescription>
                        </TimelineContent>
                    </div>
                </TimelineItem>
            ))}
        </Timeline>
    );
};