export class AutomaticReview{
    
    constructor(public automaticallyRejected: boolean,
        public rejectionReasons: string,
        public labelsList?: string,
    ){}

}