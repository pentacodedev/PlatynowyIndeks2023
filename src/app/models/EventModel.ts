import { LocationModel } from "./LocationModel";
import { PlayerModel } from "./PlayerModel";

export class EventModel
{
    constructor(
        public id: number,
        public name: string,
        public location: LocationModel,
        public description: string,
        public isPrivate: boolean,
        public dateOfStart: Date,
        public dateOfEnd: Date,
        public invitedUsers: PlayerModel[],
        public confirmedParticipants: PlayerModel[],
        public eventHost: PlayerModel,
        public adminsOfEvent: PlayerModel[],
    ) {}
}