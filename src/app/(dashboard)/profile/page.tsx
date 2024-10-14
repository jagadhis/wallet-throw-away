'use client'

import {Card} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Progress} from '@/components/ui/progress';
import {badgesData} from "@/data/badges-data";
import {CircleUserRound} from "lucide-react";

export default function Profile() {
    const studentDetails = {
        name: 'Hari haran',
        department: 'ECE',
        semester: '4th',
        batch: '2019-2023',
        totalBadges: badgesData.length,
        badgesCollected: badgesData.filter(badge => badge.status === 'claimed').length,
    };

    const departmentAverage = 85;
    const badgesPending = badgesData.filter(badge => badge.status === 'need to claim').length;

    return (
        <div className="pt-20 pb-12">
            <div className="mb-4">
                <h1 className="text-2xl font-bold flex items-center space-x-2">
                    <CircleUserRound className="h-6 w-6"/>
                    <span>Profile</span>
                </h1>
            </div>
            <Card className="p-6 mb-6">
                <p><strong>Name:</strong> {studentDetails.name}</p>
                <p><strong>Department:</strong> {studentDetails.department}</p>
                <p><strong>Semester:</strong> {studentDetails.semester}</p>
                <p><strong>Batch:</strong> {studentDetails.batch}</p>
                <p><strong>Total Badges
                    Collected:</strong> {studentDetails.badgesCollected} / {studentDetails.totalBadges}</p>
            </Card>
            <Card className="p-6 mb-6">
                <h2 className="text-xl font-bold">Department Performance</h2>
                <p>Department Average: {departmentAverage}%</p>
                <Progress value={departmentAverage} className="mt-2"/>
            </Card>
            <Card className="p-6">
                <h2 className="text-xl font-bold">Badge Analytics</h2>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                        <Badge variant="default" className="text-sm">Collected</Badge>
                        <span className="text-lg font-bold">{studentDetails.badgesCollected}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-sm">Pending</Badge>
                        <span className="text-lg font-bold">{badgesPending}</span>
                    </div>
                </div>
                <p>Total Badges Available: {studentDetails.totalBadges}</p>
                <p>Badges Pending: {badgesPending}</p>
            </Card>
        </div>
    );
}