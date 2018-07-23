class facebook_About
{
    constructor(public Name:string,public birthday:string,public age:number,
    public school:string,public college:string,public city:string,public mobile:number,
   public email: string, public working: boolean,public work:string, public familymembers:number,
public livesin:string,public quotes:string )
{
    this.Name = Name;
    this.birthday = birthday;
    this.age = age;
    this.school = school;
    this.college = college;
    this.city = city;
    this.mobile = mobile;
    this.email = email;
    this.working = working;
    this.work = work;
    this.familymembers = familymembers;
    this.livesin = livesin;
    this.quotes = quotes;

}

 getname = ()=>
 {
     return this.Name;
 }
   getmobile = ()=>
   {
       return this.mobile;
   }
 knowworking = ()=>
 {
     return this.working;
 }


 setname = (newname:string)=>
 {
     this.Name = newname;
 }

 setmobile = (newmobile:number)=>
 {
     this.mobile = newmobile;
 }
}

 let fb_id = new facebook_About("Arun Kumar","26 feb 1992",27,"high school","rcet raipur",
"delhi",888888888,"am@gmail.com",true,"private",7,"delhi","i love to learn new things")
console.log(fb_id);
console.log(fb_id.getmobile());
console.log(fb_id.getname());
fb_id.setname("AMAN");
console.log(fb_id.getname());
