var markers_ = (function () {
    var markers = [{
        id: 1,
        lat: 32.7766642,
        lng: -96.7969879,
        hotel: 'Sheraton DFW Airport Hotel',
        date: 'Feb 9-11, 2018',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/3/xsmall/Dallas-Skyline.jpg',
        link: '/Coaching_Clinics/Dallas-Texas-Football-Clinic',
        state: 'Dallas',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884539/icon3_n2b5xt.png'
    }, {
        id: 2,
        lat: 39.5296329,
        lng: -119.8138027,
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/28/xsmall/Reno-Skyline.jpg',
        state: 'Reno',
        hotel: 'Atlantis Casino Resort Spa',
        date: 'Mar 2-4, 2018',
        link: '/Coaching_Clinics/Reno-Nevada-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 3,
        lat: 39.2903848,
        lng: -76.6121893,
        hotel: 'Hyatt Regency Baltimore On The Inner Harbor',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/12/xsmall/Baltimore-Skyline.jpg',
        state: 'Baltimore',
        date: 'Feb 9-11, 2018',
        link: '/Coaching_Clinics/Baltimore-Maryland-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 4,
        lat: 28.5383355,
        lng: -81.3792365,
        hotel: 'Hyatt Regency Orlando',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/25/xsmall/Orlando-Skyline.jpg',
        state: 'Florida',
        date: 'Feb 9-11, 2018',
        link: '/coaching_clinics/orlando-florida-football-clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 5,
        lat: 37.7749295,
        lng: -122.4194155,
        hotel: 'Hilton Concord Hotel',
        date: 'Feb 16-18, 2018',
        state: 'San-Francisco',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/29/xsmall/San-Francisco-Skyline.jpg',
        link: '/Coaching_Clinics/San-Francisco-California-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 6,
        lat: 42.9633599,
        lng: -85.6680863,
        hotel: 'Crowne Plaza Grand Rapids',
        date: 'Mar 2-4, 2018',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/16/xsmall/Grand-Rapids-Skyline.jpg',
        state: 'Grand-Rapids',
        link: '/Coaching_Clinics/Grand-Rapids-Michigan-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 7,
        lat: 39.1031182,
        lng: -84.5120196,
        hotel: '*Last Used 2014 - Hilton Cincinnati Netherland Plaza',
        date: 'Feb 23-25, 2018',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/14/xsmall/Cincinnati-Skyline.jpg',
        state: 'Ohio',
        link: '/Coaching_Clinics/Cincinnati-Ohio-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 8,
        lat: 41.3497456,
        lng: -72.0790717,
        hotel: 'Mystic Marriott Hotel & Spa',
        date: 'Feb 2-4, 2018',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/35/xsmall/New-England-Skyline.jpg',
        state: 'New England',
        link: '/coaching_clinics/new-england-regional-football-clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 9,
        lat: 39.0997265,
        lng: -94.5785667,
        hotel: 'Westin Kansas hotel at Crowne Center',
        date: 'Feb 9-11, 2018',
        state: 'Kansas',
        img: 'imgs/hotel-placeholder-bg-small.png',
        link: '/Coaching_Clinics/Kansas-hotel-Missouri-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 10,
        lat: 27.950575,
        lng: -82.4571776,
        hotel: 'Sheraton Tampa East Hotel',
        date: 'Mar 2-4, 2018',
        state: 'Florida',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/31/xsmall/Tampa-Skyline.jpg',
        link: '/Coaching_Clinics/Tampa-Florida-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 11,
        lat: 47.6062095,
        lng: -122.3320708,
        hotel: '*NEW - Hyatt Regency Lake Washington at Seattle\'s Southport',
        date: 'Mar 9-11, 2018',
        state: 'Washington',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/7/xsmall/Seattle-Skyline.jpg',
        link: '/Coaching_Clinics/Seattle-Washington-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 12,
        lat: 39.7392358,
        lng: -104.990251,
        hotel: 'The Westin Westminster',
        date: 'Feb 23-25, 2018',
        state: 'Denver',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/8/xsmall/Denver-Skyline.jpg',
        link: '/Coaching_Clinics/Denver-Colorado-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 13,
        lat: 39.3642834,
        lng: -74.4229266,
        hotel: 'Bally\'s Atlantic hotel',
        date: 'Feb 23-25, 2018',
        state: 'New Jersey',
        img: 'imgs/hotel-placeholder-bg-small.png',
        link: '/Coaching_Clinics/Atlantic-hotel-New-Jersey-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 14,
        lat: 42.331427,
        lng: -83.0457538,
        hotel: 'Sheraton Detroit Novi',
        date: 'Feb 16-18, 2018',
        state: 'Michigan',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/15/xsmall/Detroit-Skyline.jpg',
        link: '/Coaching_Clinics/Detroit-Michigan-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 15,
        lat: 34.0522342,
        lng: -118.2436849,
        hotel: 'Hilton Orange County/Coasta Mesa',
        date: 'Feb 23-25, 2018',
        state: 'Los Angeles',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/2/xsmall/Los-Angeles-Skyline.jpg',
        link: '/Coaching_Clinics/Los-Angeles-California-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 16,
        lat: 33.7489954,
        lng: -84.3879824,
        hotel: 'Renaissance Atlanta Waverly Hotel & Convention Center',
        date: 'Feb 23-25, 2018',
        state: 'Georgia',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/9/xsmall/Atlanta-Skyline.jpg',
        link: '/Coaching_Clinics/Atlanta-Georgia-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884539/icon3_n2b5xt.png'
    }, {
        id: 17,
        lat: 44.977753,
        lng: -93.2650108,
        hotel: 'The DoubleTree by Hilton Bloomington - Minneapolis South',
        date: 'Feb 9-11, 2018',
        state: 'Minnesota',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/10/xsmall/Minneapolis-Skyline.jpg',
        link: '/Coaching_Clinics/Minneapolis-Minnesota-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 18,
        lat: 42.3600825,
        lng: -71.0588801,
        hotel: 'Boston Marriott Newton',
        date: 'Feb 9-11, 2018',
        state: 'Texas',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/18/xsmall/Houston-Skyline.jpg',
        link: '/Coaching_Clinics/Houston-Texas-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 19,
        lat: 41.8781136,
        lng: -87.6297982,
        hotel: 'Hilton Chicago/Oak Brook Hills Resort & Conference Center',
        date: 'Feb 9-11, 2018',
        state: 'Chicago',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/1/xsmall/Chicago-Skyline-Big.jpg',
        link: '/Coaching_Clinics/Chicago-Illinois-Football-Clinic-February',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 20,
        lat: 33.4483771,
        lng: -112.0740373,
        hotel: 'Hilton Phoenix/Mesa',
        date: 'Jan 26-28, 2018',
        state: 'Arizona',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/26/xsmall/Phoenix-Skyline.jpg',
        link: '/Coaching_Clinics/Phoenix-Arizona-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 21,
        lat: 35.2270869,
        lng: -80.8431267,
        hotel: 'Renaissance Charlotte Suites',
        date: 'Mar 9-11, 2018',
        state: 'North Carolina',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/5/xsmall/Charlotte-Skyline.jpg',
        link: '/Coaching_Clinics/Charlotte-North-Carolina-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 22,
        lat: 36.1699412,
        lng: -115.1398296,
        hotel: 'Tropicana Las Vegas',
        date: 'Feb 9-11, 2018',
        state: 'Nevada',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/21/xsmall/Las-Vegas-Skyline.jpg',
        link: '/Coaching_Clinics/Las-Vegas-Nevada-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884539/icon3_n2b5xt.png'
    }, {
        id: 23,
        lat: 38.6270025,
        lng: -90.1994042,
        hotel: 'Hilton St. Louis at the Ballpark',
        date: 'Mar 2-4, 2018',
        state: 'Missouri',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/30/xsmall/St-Louis-Skyline.jpg',
        link: '/Coaching_Clinics/St-Louis-Missouri-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 24,
        lat: 40.4406248,
        lng: -79.9958864,
        hotel: 'Sheraton Pittsburgh Hotel at Station Square',
        date: 'Feb 23-25, 2018',
        state: 'Pittsburgh',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/27/xsmall/Pittsburgh-Skyline.jpg',
        link: '/coaching_clinics/pittsburgh-pennsylvania-football-clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 25,
        lat: 39.768403,
        lng: -86.158068,
        hotel: 'Indianapolis Marriott East',
        date: 'Jan 19-21, 2018',
        state: 'Indiana',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/19/xsmall/Indianapolis-Skyline.jpg',
        link: '/Coaching_Clinics/Indianapolis-Indiana-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884539/icon3_n2b5xt.png'
    }, {
        id: 26,
        lat: 40.8254055,
        lng: -74.4022355,
        hotel: 'Marriott Hanover',
        date: 'Feb 16-18, 2018',
        img: 'imgs/hotel-placeholder-bg-small.png',
        link: '',
        state: 'imgs/hotel-placeholder-bg-small.png',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }, {
        id: 27,
        lat: 36.1626638,
        lng: -86.7816016,
        hotel: 'Franklin Marriott Cool Springs',
        date: 'Feb 9-11, 2018',
        state: 'Tennessee',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/22/xsmall/Nashville-Skyline.jpg',
        link: '/Coaching_Clinics/Nashville-Tennessee-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 28,
        lat: 38.9695545,
        lng: -77.3860976,
        hotel: 'Hyatt Regency Dulles',
        date: 'Mar 2-4, 2018',
        img: 'imgs/hotel-placeholder-bg-small.png',
        state: 'virginia',
        link: '/coaching_clinics/northern-virginia-dc-football-clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }
        , {
        id: 29,
        lat: 41.49932,
        lng: -81.6943605,
        hotel: 'The Bertram Hotel & Conference Center',
        date: 'Mar 2-4, 2018',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/14/xsmall/Cincinnati-Skyline.jpg',
        state: 'Ohio',
        link: '/Coaching_Clinics/Cleveland-Ohio-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon1_xbwrvx.png'
    }, {
        id: 32,
        lat: 29.7604267,
        lng: -95.3698028,
        hotel: '*Last Used 2016 - Omni Houston Hotel Westside',
        date: 'Feb 16-18, 2018',
        state: 'Texas',
        img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/18/xsmall/Houston-Skyline.jpg',
        link: '/Coaching_Clinics/Houston-Texas-Football-Clinic',
        icon: 'http://res.cloudinary.com/dvia2oaxl/image/upload/v1504884538/icon2_mu1cfm.png'
    }];

    init();

    function init() {
        addProp();
    }

    function addProp() {
        markers = markers.map(function (elem) {
            var b = elem.img.split('/');
            var c = b.splice(b.length - 1, 1);//ATLANTIC-HOTEL-SKYLINE-WEB.JPG
            var location = c[0].split('-Skyline.jpg')[0];
            elem.location = location;
            return elem;
        });
    }

    var mapDataServ = {
        markers: markers
    }
    return mapDataServ;
})();