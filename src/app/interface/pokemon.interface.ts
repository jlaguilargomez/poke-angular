export interface Pokemon{
    name : string;
    type : string[];
    height : number;
    weight : number;
    stats : [{'name' : string, 'base-stat': number}];
    moves : string[];
    ability : string[];
    imagePath : string;
}