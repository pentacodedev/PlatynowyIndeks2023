export class GroupModel
{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public hasSignedObject: boolean
    ) {};
}