export interface Tutor {
    id: number;
    name: string;
    price: number;
    description: string;
    students: number;
    lessons: number;
    experience: number;
    language: string[];
    rating: number;
    ratingcount: number;
    certification: string[];
    recomended: boolean;
    subjects:string[];
    gender:string;
    age:number;
    currentposition:string;
}
