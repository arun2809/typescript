var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creating a class 
var utube = /** @class */ (function () {
    // initialize the properties of class using constructot
    function utube(Title, videotype, quality, duration, quality_in_pixel, videomode, report, speed, video_of_channel, comments, noofsubscriber, noofviewers, noofunsubscriber, no_of_shares, nooflikes) {
        var _this = this;
        // end of constructor 
        // creating methods 
        this.getnumberofviewers = function () {
            return _this.noofviewers;
        };
        this.getnumberofsubscriber = function () {
            return _this.noofsubscriber;
        };
        this.getnumberofunsubscriber = function () {
            return _this.noofunsubscriber;
        };
        // set the number of likes 
        this.getnumberoflikes = function () {
            return _this.nooflikes;
        };
        this.setnumberoflikes = function (likes) {
            _this.nooflikes = likes;
        };
        this.Title = Title;
        this.videotype = videotype;
        this.quality = quality;
        this.duration = duration;
        this.quality_in_pixel = quality_in_pixel;
        this.videomode = videomode;
        this.report = report;
        this.speed = speed;
        this.video_of_channel = video_of_channel;
        this.comments = comments;
        this.noofsubscriber = noofsubscriber;
        this.no_of_shares = no_of_shares;
        this.noofunsubscriber = noofunsubscriber;
        this.noofviewers = noofviewers;
        this.nooflikes = nooflikes;
    }
    return utube;
}());
// end of class
//  first object of class utube 
var youtube_video1 = new utube("sacret games", "AVi ", "Hd ", "2 hrs ", " 720px", "PORTRAIT ", " effecting society", " Normal", "Ts Video ", "Nice", 5000, 10000, 4000, 2000, 3500);
// second object of class utube
var youtube_video2 = new utube(" games of throne ", "mp4 ", "medium ", "2 hrs ", " 480px", "PORTRAIT ", " effecting society", " Normal", "Ts Video ", "superb story", 50000, 100000, 4000, 20000, 3500);
// calling of methods 
console.log(youtube_video1);
console.log(youtube_video2);
console.log(youtube_video1.getnumberoflikes());
console.log(youtube_video1.getnumberofsubscriber());
console.log(youtube_video1.getnumberofunsubscriber());
console.log(youtube_video1.getnumberofviewers());
console.log(youtube_video2.getnumberoflikes());
// set method calling 
youtube_video2.setnumberoflikes(5555555);
console.log(youtube_video2.getnumberoflikes());
console.log(youtube_video2.getnumberofsubscriber());
// inheritance  
var utube1 = /** @class */ (function (_super) {
    __extends(utube1, _super);
    function utube1(Title, videotype, quality, duration, quality_in_pixel, videomode, report, speed, video_of_channel, comments, noofsubscriber, noofviewers, noofunsubscriber, no_of_shares, nooflikes) {
        return _super.call(this, Title, videotype, quality, duration, quality_in_pixel, videomode, report, speed, video_of_channel, comments, noofsubscriber, noofviewers, noofunsubscriber, no_of_shares, nooflikes) || this;
    }
    return utube1;
}(utube));
var inheritYoutube_video = new utube1(" Web Series ", "Avi ", "Hd ", "2 hrs ", " 720px ", "PORTRAIT ", " entertainment", " Normal", "Ts Video ", "superb story", 500, 1000, 40000, 2000, 35000);
console.log(inheritYoutube_video);
console.log(inheritYoutube_video.Title);
console.log(inheritYoutube_video.getnumberofsubscriber());
