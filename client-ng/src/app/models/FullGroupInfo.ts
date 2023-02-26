import { Player } from "./Player";
import { GroupEvent } from "./GroupEvent";

export class FullGroupInfo
{
    constructor(
        public name: string,
        public description: string,
        public hasSignedObject: boolean,
        public members: Player[],
        public admins: Player[],
        public events: GroupEvent[]
    ) {};
}