export class ObjectLocation {
    constructor(
        public id: number,
        public name: string,
        public adress: string,
        public description: string,
        public coordLat: number,
        public coordLon: number,
        public locationOwner: string,
        public isPrivateLocation: boolean
    ) {}
}