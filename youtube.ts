
// creating a class 
class utube
{
     Title:string;
     videotype:string;
    quality:string;
    duration:string;
    quality_in_pixel:string;
    videomode:string;
    report:string;
    speed:string;
    video_of_channel:string;
    comments:string;

    nooflikes:number;
    noofsubscriber:number;
    noofviewers:number;
    noofunsubscriber:number;
    no_of_shares:number;

// initialize the properties of class using constructot
    constructor(Title:string, videotype:string, quality:string,duration:string,  quality_in_pixel:string,
        videomode:string,
        report:string,
        speed:string,
        video_of_channel:string,
        comments:string, noofsubscriber:number,
        noofviewers:number,
        noofunsubscriber:number,
        no_of_shares:number,nooflikes:number )
        {
              this.Title = Title;
              this.videotype = videotype;
              this.quality = quality;
              this.duration = duration;
              this.quality_in_pixel = quality_in_pixel;
              this.videomode = videomode;
              this.report = report;
              this.speed= speed;
              this.video_of_channel = video_of_channel;
              this.comments = comments;
              this.noofsubscriber = noofsubscriber;
              this.no_of_shares = no_of_shares;
              this.noofunsubscriber = noofunsubscriber;
              this.noofviewers = noofviewers;
              this.nooflikes = nooflikes;
        }

        // end of constructor 
// creating methods 
        getnumberofviewers = ()=>
        {
            return this.noofviewers;

        }

    getnumberofsubscriber = ()=>
    {
        return this.noofsubscriber;
    }

    getnumberofunsubscriber = ()=>
    {
        return this.noofunsubscriber;
    }

    // set the number of likes 
    getnumberoflikes = ()=>
    {
        return this.nooflikes;
    }

    setnumberoflikes = (likes:number)=>
    {
    this.nooflikes = likes;

    }

}

// end of class

//  first object of class utube 
 let youtube_video1 = new utube("sacret games","AVi ","Hd ","2 hrs "," 720px","PORTRAIT ",
 " effecting society"," Normal","Ts Video ",
 "Nice",5000,10000,4000,2000,3500);

// second object of class utube

 let youtube_video2 = new utube(" games of throne ","mp4 ","medium ","2 hrs "," 480px","PORTRAIT ",
 " effecting society"," Normal","Ts Video ",
 "superb story",50000,100000,4000,20000,3500); 

  // calling of methods 
 console.log(youtube_video1)
 console.log(youtube_video2)
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
 
  class utube1 extends utube
  {
      constructor(Title:string, videotype:string, quality:string,duration:string,  quality_in_pixel:string,
        videomode:string,
        report:string,
        speed:string,
        video_of_channel:string,
        comments:string, noofsubscriber:number,
        noofviewers:number,
        noofunsubscriber:number,
        no_of_shares:number,nooflikes:number)
       {
          super(Title,videotype,quality,duration,quality_in_pixel,videomode,report,speed,video_of_channel,comments
        ,noofsubscriber,noofviewers,noofunsubscriber,no_of_shares,nooflikes)
      }
  }

   let inheritYoutube_video = new utube1(" Web Series ","Avi ","Hd ","2 hrs "," 720px ","PORTRAIT ",
   " entertainment"," Normal","Ts Video ",
   "superb story",500,1000,40000,2000,35000)
   console.log(inheritYoutube_video);
   console.log(inheritYoutube_video.Title);
   console.log(inheritYoutube_video.getnumberofsubscriber());
   
