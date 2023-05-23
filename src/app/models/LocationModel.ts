export class LocationModel {
    constructor(
        public id: number,
        public name: string,
        public adress: string,
        public description: string,
        public coordLat: number,
        public coordLon: number,
        public isPrivateLocation: boolean,
        public locationOwner?: string,
    ) {}
}