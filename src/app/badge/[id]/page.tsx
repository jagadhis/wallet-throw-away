'use client'

import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import {TimelineLayout} from "@/components/timeline-layout";
import {timelineData} from "@/data/timeline-data";
import {badgesData} from "@/data/badges-data";
import {useParams} from "next/navigation";
import {getSubjectsBySubjectId} from "@/lib/data-utils";
import badgeImage from '@/assets/badge-general.jpeg';

type BadgeDetailsType = {
    id: number;
    subjectId: number;
    unitId: number;
    badgeName: string;
    description: string;
    badgeType: string;
    status: string;
    imageUrl?: string;
};

type SubjectDetailsType = {
    id: number;
    subjectName: string;
    subCode: string;
};

export default function BadgeDetails() {
    const [passcodeVisible, setPasscodeVisible] = useState(false);
    const [passcode, setPasscode] = useState('');
    const [badgeDetails, setBadgeDetails] = useState<BadgeDetailsType | null>(null);
    const [subjectDetails, setSubjectDetails] = useState<SubjectDetailsType | null>(null);

    const params = useParams();
    const badgeId = Array.isArray(params?.id) ? params.id[0] : params?.id;

    useEffect(() => {
        if (badgeId) {
            const badge = badgesData.find((badge) => badge.id === parseInt(badgeId));
            if (badge) {
                setBadgeDetails(badge);
                const subject = getSubjectsBySubjectId(badge.subjectId)[0];
                if (subject) {
                    setSubjectDetails(subject);
                } else {
                    console.error(`Subject with ID ${badge.subjectId} not found`);
                }
            } else {
                console.error(`Badge with ID ${badgeId} not found`);
            }
        }
    }, [badgeId]);

    const handleClaimBadge = () => {
        setPasscodeVisible(true);
    };

    if (!badgeDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="pt-20 pb-12">
            <h1 className="text-3xl font-bold mb-4">{badgeDetails.badgeName}</h1>
            <div className="flex justify-between items-center space-x-2">
                <Badge variant="outline" className="text-sm">{badgeDetails.badgeType}</Badge>
                <p className="text-lg">{subjectDetails?.subCode}</p>
            </div>

            <div className="my-6">
                <div
                    className={`badge-image-container ${badgeDetails.badgeType === 'Super Badge' ? 'super-badge' : ''}`}
                >
                    <Image
                        src={badgeImage}
                        alt={badgeDetails.badgeName}
                        width={200}
                        height={200}
                        className="object-cover mx-auto"
                    />
                </div>
            </div>
            {passcodeVisible && (
                <div className="mb-4">
                    <Input
                        placeholder="Enter passcode"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        type="password"
                        className="text-sm"
                    />
                </div>
            )}
            <Button onClick={handleClaimBadge} className="w-full mb-4">
                Claim My Badge
            </Button>

            <Tabs defaultValue="description" className="mt-6">
                <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="stats">Stats</TabsTrigger>
                    <TabsTrigger value="status">Status</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                    <p className="mt-4">
                        {badgeDetails.description}
                    </p>
                </TabsContent>
                <TabsContent value="stats">
                    <div className="mt-4">
                        <p className="text-lg">Badge Status Overview:</p>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Claimed by 150 students</li>
                            <li>Pending for 20 students</li>
                            <li>Available for 50 more students</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="status">
                    <div className="overflow-y-auto" style={{maxHeight: '250px'}}>
                        <TimelineLayout items={timelineData}/>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}