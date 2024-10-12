import {badgesData} from "@/data/badges-data";
import {unitsData} from "@/data/units-data";
import {subjectsData} from "@/data/subjects-data";

export const getUnitsBySubjectId = (subjectId: number) => {
    return unitsData.filter(unit => unit.subjectId === subjectId);
};

export const getSubjectsBySubjectId = (subjectId: number) => {
    return subjectsData.filter(subject => subject.id === subjectId)
}


export const getBadgesBySubjectAndUnit = (subjectId: number, unitId: number) => {
    return badgesData.filter(badge => badge.subjectId === subjectId && badge.unitId === unitId);
};

export const getSubjectsByDepartmentAndSemester = (department: string, semester: number) => {
    return subjectsData.filter(subject => subject.department === department && subject.semester === semester);
};