import * as React from "react";
import { cn } from "@/lib/utils";

const Timeline = React.forwardRef<
    HTMLOListElement,
    React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
    <ol ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
    HTMLLIElement,
    React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn("relative flex flex-col md:flex-row md:items-start", className)}
        {...props}
    />
));
TimelineItem.displayName = "TimelineItem";

const TimelineTime = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "mt-1 text-sm font-semibold italic leading-none text-secondary-foreground md:ml-4",
            className,
        )}
        {...props}
    />
));
TimelineTime.displayName = "TimelineTime";

const TimelineConnector = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "absolute left-5 top-0 bottom-0 w-[2px] bg-primary",
            className
        )}
        {...props}
    />
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center gap-2 md:gap-4", className)}
        {...props}
    />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "font-semibold text-base leading-none tracking-tight text-primary",
            className
        )}
        {...props}>
        {children}
    </h3>
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("w-4 h-4 bg-primary rounded-full z-10", className)}
        {...props}
    />
));
TimelineIcon.displayName = "TimelineIcon";

const TimelineDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground md:ml-4", className)}
        {...props}
    />
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col", className)}
        {...props}
    />
));
TimelineContent.displayName = "TimelineContent";

export {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineTitle,
    TimelineIcon,
    TimelineDescription,
    TimelineContent,
    TimelineTime,
};