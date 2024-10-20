'use client'

import {useState} from 'react';
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {QrCode, Search} from "lucide-react";
import Link from "next/link";
import {badgesData} from "@/data/badges-data";
import Image from "next/image";
import badgeImage from "../../../../public/assets/badge-general.png";

export default function Wallet() {
    const [selectedTab, setSelectedTab] = useState('live');
    const [searchTerm, setSearchTerm] = useState('');

    const studentDetails = {
        name: 'Hari haran',
        badgesEarned: '1',
        department: 'ECE',
        semester: '4th',
        batch: '2019-2023',
    };

    const filteredBadges = badgesData.filter(
        (badge) =>
            badge.status === selectedTab &&
            badge.badgeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-20 pb-12">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">
                    Hello, {studentDetails.name} 👋
                </h1>
            </div>
            <Card className="p-4 mb-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <p><strong>Name:</strong> {studentDetails.name}</p>
                    <p><strong>Badges Earned:</strong> {studentDetails.badgesEarned}</p>
                    <p><strong>Department:</strong> {studentDetails.department}</p>
                    <p><strong>Semester:</strong> {studentDetails.semester}</p>
                    <p><strong>Batch:</strong> {studentDetails.batch}</p>
                </div>
            </Card>

            <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value)} className="mb-4">
                <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="live" className="w-full">Live</TabsTrigger>
                    <TabsTrigger value="need to claim" className="w-full">Pending</TabsTrigger>
                    <TabsTrigger value="claimed" className="w-full">Claimed</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="relative mb-4">
                <Input
                    placeholder="Search subjects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-sm pr-14"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-3">
                    <Search className="w-5 h-5"/>
                    <QrCode className="w-5 h-5"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 480px)' }}>
                {filteredBadges.map((badge) => (
                    <Link key={badge.id} href={`/badge/${badge.id}`}>
                        <Card className="p-4 flex flex-col justify-between items-center cursor-pointer">
                            <div className="flex flex-col items-center justify-center">
                                <div
                                    className={`relative flex items-center justify-center hexagon-border ${
                                        badge.badgeType === 'Super Badge' ? 'super-badge' : ''
                                    }`}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src={badgeImage} alt={badge.badgeName}
                                               width={100}
                                               height={100}
                                               className="object-cover mx-auto"/>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-center text-sm font-bold">{badge.badgeName}</h3>
                            </div>
                            <Button className={`mt-2 ${badge.status === 'claimed'}`}>
                                {badge.status === 'claimed' ? 'Claimed' : 'Claim'}
                            </Button>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}