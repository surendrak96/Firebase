export class Message {
    
    public $key: string; // as the firebase uses it automatically, do not need it in the constructor
    constructor(
        public userId: string,
        public text: string,
        public timeStamp: any,
        public read: boolean
    ) {}
}