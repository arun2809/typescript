var facebook_About = /** @class */ (function () {
    function facebook_About(Name, birthday, age, school, college, city, mobile, email, working, work, familymembers, livesin, quotes) {
        var _this = this;
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
        this.getname = function () {
            return _this.Name;
        };
        this.getmobile = function () {
            return _this.mobile;
        };
        this.knowworking = function () {
            return _this.working;
        };
        this.setname = function (newname) {
            _this.Name = newname;
        };
        this.setmobile = function (newmobile) {
            _this.mobile = newmobile;
        };
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
    return facebook_About;
}());
var fb_id = new facebook_About("Arun Kumar", "26 feb 1992", 27, "high school", "rcet raipur", "delhi", 888888888, "am@gmail.com", true, "private", 7, "delhi", "i love to learn new things");
console.log(fb_id);
console.log(fb_id.getmobile());
console.log(fb_id.getname());
fb_id.setname("AMAN");
console.log(fb_id.getname());
