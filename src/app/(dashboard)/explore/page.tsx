'use client'

import {useEffect, useState} from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import {Book, CheckCircle, AlertCircle, Search, QrCode} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Link from 'next/link';
import {subjectsData} from "@/data/subjects-data";
import {departmentsData} from "@/data/department-data";
import {batchesData} from "@/data/batches-data";
import {getBadgesBySubjectAndUnit, getUnitsBySubjectId} from "@/lib/data-utils";
import {semestersData} from "@/data/semester-data";

export default function Explore() {
    const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
    const [selectedUnit, setSelectedUnit] = useState<number | null>(null);
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [batch, setBatch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const subjects = subjectsData;
    const units = selectedSubject !== null ? getUnitsBySubjectId(selectedSubject) : [];
    const badges = selectedSubject !== null && selectedUnit !== null
        ? getBadgesBySubjectAndUnit(selectedSubject, selectedUnit)
        : [];
    const filteredSubjects = subjectsData.filter((subject) =>
        (subject.department === department) &&
        (subject.semester.toString() === semester)
    );
    const analytics = {
        totalSubjects: subjects.length,
        claimedBadges: badges.filter((badge) => badge.status === 'claimed').length,
        needToClaimBadges: badges.filter((badge) => badge.status === 'need to claim').length,
    };

    useEffect(() => {
        if (selectedSubject !== null) localStorage.setItem('selectedSubject', selectedSubject.toString());
        if (selectedUnit !== null) localStorage.setItem('selectedUnit', selectedUnit.toString());
        if (department) localStorage.setItem('department', department);
        if (semester) localStorage.setItem('semester', semester);
        if (batch) localStorage.setItem('batch', batch);
    }, [selectedSubject, selectedUnit, department, semester, batch]);
    useEffect(() => {
        const savedSubject = localStorage.getItem('selectedSubject');
        const savedUnit = localStorage.getItem('selectedUnit');
        const savedDepartment = localStorage.getItem('department');
        const savedSemester = localStorage.getItem('semester');
        const savedBatch = localStorage.getItem('batch');

        if (savedSubject) setSelectedSubject(parseInt(savedSubject));
        if (savedUnit) setSelectedUnit(parseInt(savedUnit));
        if (savedDepartment) setDepartment(savedDepartment);
        if (savedSemester) setSemester(savedSemester);
        if (savedBatch) setBatch(savedBatch);
    }, []);

    return (
        <div className="pt-20 pb-12">
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
            <div className="grid grid-cols-3 gap-2 mb-3">
                <Select onValueChange={(value) => setBatch(value)}>
                    <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Batch" />
                    </SelectTrigger>
                    <SelectContent>
                        {batchesData.map((batch) => (
                            <SelectItem key={batch.value} value={batch.value}>
                                {batch.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setDepartment(value)}>
                    <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Department"/>
                    </SelectTrigger>
                    <SelectContent>
                        {departmentsData.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                                {dept.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setSemester(value)}>
                    <SelectTrigger className="text-sm">
                        <SelectValue placeholder="Semester" />
                    </SelectTrigger>
                    <SelectContent>
                        {semestersData.map((sem) => (
                            <SelectItem key={sem.value} value={sem.value}>
                                {sem.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Card className="mb-3 p-1">
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center">
                        <Book className="h-6 w-6 text-blue-500" />
                        <div className="text-sm font-bold mt-1">{analytics.totalSubjects}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <div className="text-sm font-bold mt-1">{analytics.claimedBadges}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <AlertCircle className="h-6 w-6 text-yellow-500" />
                        <div className="text-sm font-bold mt-1">{analytics.needToClaimBadges}</div>
                    </div>
                </div>
            </Card>

            <div className="flex gap-1 mb-4 overflow-x-auto whitespace-nowrap">
                {filteredSubjects
                    .filter((subject) => subject.subjectName.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((subject) => (
                        <Badge
                            key={subject.id}
                            variant={selectedSubject === subject.id ? 'default' : 'outline'}
                            onClick={() => {
                                setSelectedSubject(subject.id);
                                setSelectedUnit(null);
                            }}
                            className={`cursor-pointer p-3 ${selectedSubject === subject.id}`}
                        >
                            {subject.subjectName}
                        </Badge>
                    ))}
            </div>

            {selectedSubject !== null && (
                <div className="flex gap-1 mb-4 overflow-x-auto whitespace-nowrap">
                    {units.map((unit) => (
                        <Badge
                            key={unit.id}
                            variant={selectedUnit === unit.id ? 'default' : 'outline'}
                            onClick={() => setSelectedUnit(unit.id)}
                            className={`cursor-pointer p-3 ${selectedUnit === unit.id}`}
                        >
                            {unit.unitName}
                        </Badge>
                    ))}
                </div>
            )}

            {selectedSubject !== null && selectedUnit !== null && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {badges.map((badge) => (
                        <Link key={badge.id} href={`/badge/${badge.id}`}>
                        <Card className="p-4 flex flex-col justify-between items-center cursor-pointer">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="relative w-12 h-12 flex items-center justify-center hexagon-border">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <span className="text-sm font-bold">Badge</span>
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-center text-sm font-bold">{badge.badgeName}</h3>
                                </div>
                                <Button className={`mt-2 ${badge.status === 'claimed' ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {badge.status === 'claimed' ? 'Claimed' : 'Claim'}
                                </Button>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}