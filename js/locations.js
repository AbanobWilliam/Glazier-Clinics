(function () {
    'use strict';
    //var clinicsGrid = $.extend({}, markers);
    var markers = [
        {
            sp: '',
            name: 'Atlanta, GA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/9/xsmall/Atlanta-Skyline.jpg',
            date: 'Feb 23-25, 2018',
            link: '/Coaching_Clinics/Atlanta-Georgia-Football-Clinic'
        },
        {
            sp: '150 CLINIC',
            name: 'Atlanta, GA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/9/xsmall/Atlanta-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Atlanta-150-Georgia-Football-Clinic'
        },
        {
            sp: 'Flexbone Clinic',
            name: 'ATLANTA, GA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/9/xsmall/Atlanta-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Atlanta-150-Georgia-Football-Clinic'
        },
        {
            sp: 'SPECIAL TEAMS CLINIC',
            name: 'ATLANTA, GA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/9/xsmall/Atlanta-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Atlanta-150-Georgia-Football-Clinic'
        },
        {
            sp: '',
            name: 'Atlantic City, NJ',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/11/xsmall/Atlantic-City-Skyline-web.jpg',
            date: 'Feb 23-25, 2018',
            link: '/Coaching_Clinics/Atlantic-City-New-Jersey-Football-Clinic'
        },
        {
            sp: '',
            name: 'Baltimore, MD',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/12/xsmall/Baltimore-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Baltimore-Maryland-Football-Clinic'
        },
        {
            sp: '',
            name: 'Boston, MA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/13/xsmall/Boston-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Boston-Massachusetts-Football-Clinic'
        },
        {
            sp: '',
            name: 'Charlotte, NC',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/5/xsmall/Charlotte-Skyline.jpg',
            date: 'Mar 9-11, 2018',
            link: '/Coaching_Clinics/Charlotte-North-Carolina-Football-Clinic'
        },
        {
            sp: '',
            name: 'Chicago, IL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/1/xsmall/Chicago-Skyline-Big.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Chicago-Illinois-Football-Clinic-February'
        },
        {
            sp: '',
            name: 'Chicago, IL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/1/xsmall/Chicago-Skyline-Big.jpg',
            date: 'Mar 9-11, 2018',
            link: '/Coaching_Clinics/Chicago-Illinois-Football-Clinic-March'
        },
        {
            sp: '',
            name: 'Cincinnati, OH',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/14/xsmall/Cincinnati-Skyline.jpg',
            date: 'Feb 23-25, 2018',
            link: '/Coaching_Clinics/Cincinnati-Ohio-Football-Clinic'
        },
        {
            sp: 'HCA Clinic',
            name: 'Cincinnati, OH',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/14/xsmall/Cincinnati-Skyline.jpg',
            date: 'Feb 23-24, 2018',
            link: '/Coaching_Clinics/Cincinnati-Ohio-Football-Clinic'
        },
        {
            sp: '',
            name: 'Cleveland, OH',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/6/xsmall/Cleveland-Skyline-Big.jpg',
            date: 'Mar 2-4, 2018',
            link: '/Coaching_Clinics/Cleveland-Ohio-Football-Clinic'
        },
        {
            sp: '',
            name: 'Dallas, TX',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/3/xsmall/Dallas-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Dallas-Texas-Football-Clinic'
        },
        {
            sp: '',
            name: 'Denver, CO',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/8/xsmall/Denver-Skyline.jpg',
            date: 'Feb 23-25, 2018',
            link: '/Coaching_Clinics/Denver-Colorado-Football-Clinic'
        },
        {
            sp: '',
            name: 'Detroit, MI',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/15/xsmall/Detroit-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/Detroit-Michigan-Football-Clinic'
        },
        {
            sp: '',
            name: 'Grand Rapids',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/16/xsmall/Grand-Rapids-Skyline.jpg',
            date: 'Mar 2-4, 2018',
            link: '/Coaching_Clinics/Grand-Rapids-Michigan-Football-Clinic'
        },
        {
            sp: '',
            name: 'Houston, TX',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/18/xsmall/Houston-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/Houston-Texas-Football-Clinic'
        },
        {
            sp: 'O-Line Clinic',
            name: 'Houston, TX',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/18/xsmall/Houston-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/Houston-Texas-Football-Clinic'
        },
        {
            sp: '150 CLINIC',
            name: 'Indianapolis, IN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/19/xsmall/Indianapolis-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Indianapolis-Indiana-Football-Clinic'
        },
        {
            sp: '3-3 DEFENSE CLINIC',
            name: 'Indianapolis, IN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/19/xsmall/Indianapolis-Skyline.jpg',
            date: 'Jan 19-20, 2018',
            link: '/Coaching_Clinics/Indianapolis-Indiana-Football-Clinic'
        },
        {
            sp: 'FLEXBONE CLINIC',
            name: 'Indianapolis, IN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/19/xsmall/Indianapolis-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Indianapolis-Indiana-Football-Clinic'
        },
        {
            sp: 'SPECIAL TEAMS CLINICS',
            name: 'Indianapolis, IN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/19/xsmall/Indianapolis-Skyline.jpg',
            date: 'Jan 19-21, 2018',
            link: '/Coaching_Clinics/Indianapolis-Indiana-Football-Clinic'
        },
        {
            sp: '',
            name: 'Kansas City, MO',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/20/xsmall/Kansas-City-Skyline.jpg',
            date: 'Feb 9-11, 2018	',
            link: '/Coaching_Clinics/Kansas-City-Missouri-Football-Clinic'
        },
        {
            sp: '8 MAN CLINIC',
            name: 'Kansas City, MO',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/20/xsmall/Kansas-City-Skyline.jpg',
            date: 'Feb 9-10, 2018',
            link: '/Coaching_Clinics/Kansas-City-Missouri-Football-Clinic'
        },
        {
            sp: '',
            name: 'Las Vegas, NV',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/21/xsmall/Las-Vegas-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Las-Vegas-Nevada-Football-Clinic'
        },
        {
            sp: 'FLEXBONE CLINIC',
            name: 'Las Vegas, NV',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/21/xsmall/Las-Vegas-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Las-Vegas-Nevada-Football-Clinic'
        },
        {
            sp: '',
            name: 'Los Angeles, CA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/2/xsmall/Los-Angeles-Skyline.jpg',
            date: 'Feb 23-25, 2018',
            link: '/Coaching_Clinics/Los-Angeles-California-Football-Clinic'
        },
        {
            sp: '',
            name: 'Minneapolis, MN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/10/xsmall/Minneapolis-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Minneapolis-Minnesota-Football-Clinic'
        },
        {
            sp: 'HCA Clinic',
            name: 'Minneapolis, MN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/10/xsmall/Minneapolis-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Minneapolis-Minnesota-Football-Clinic'
        },
        {
            sp: '',
            name: 'Nashville, TN',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/22/xsmall/Nashville-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/Coaching_Clinics/Nashville-Tennessee-Football-Clinic'
        },
        {
            sp: '',
            name: 'New England Regional',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/35/xsmall/New-England-Skyline.jpg',
            date: 'Feb 2-4, 2018',
            link: '/coaching_clinics/new-england-regional-football-clinic'
        },
        {
            sp: 'SPECIAL TEAMS',
            name: 'New England REGIONAL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/35/xsmall/New-England-Skyline.jpg',
            date: 'Feb 2-4, 2018',
            link: '/coaching_clinics/new-england-regional-football-clinic'
        },
        {
            sp: '',
            name: 'Northern Virginia, D.C.',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/24/xsmall/N-VA-DC-Skyline.jpg',
            date: 'Mar 2-4, 2018',
            link: '/coaching_clinics/northern-virginia-dc-football-clinic'
        },
        {
            sp: '',
            name: 'NYC / North Jersey',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/23/xsmall/NYC-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/North-Jersey-New-Jersey-Football-Clinic'
        },
        {
            sp: 'FLEXBONE CLINIC',
            name: 'NYC / North Jersey',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/23/xsmall/NYC-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/North-Jersey-New-Jersey-Football-Clinic'
        },
        {
            sp: '',
            name: 'Orlando, FL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/25/xsmall/Orlando-Skyline.jpg',
            date: 'Feb 9-11, 2018',
            link: '/coaching_clinics/orlando-florida-football-clinic'
        },
        {
            sp: 'HCA Clinic',
            name: 'Orlando, FL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/25/xsmall/Orlando-Skyline.jpg',
            date: 'Feb 9-10, 2018	',
            link: '/coaching_clinics/orlando-florida-football-clinic'
        },
        {
            sp: '',
            name: 'Phoenix, AZ',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/26/xsmall/Phoenix-Skyline.jpg',
            date: 'Jan 26-28, 2018',
            link: '/Coaching_Clinics/Phoenix-Arizona-Football-Clinic'
        },
        {
            sp: '',
            name: 'Pittsburgh, PA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/27/xsmall/Pittsburgh-Skyline.jpg',
            date: 'Feb 23-25, 2018',
            link: '/coaching_clinics/pittsburgh-pennsylvania-football-clinic'
        },
        {
            sp: '',
            name: 'Red River / Choctaw',
            img: 'imgs/hotel-placeholder-bg-small.png',
            date: 'Feb 23-25, 2018',
            link: '/coaching_clinics/texas-south-oklahoma-football-clinic'
        },
        {
            sp: 'SPECIAL TEAMS CLINIC',
            name: 'Red River / CHOCTAW',
            img: 'imgs/hotel-placeholder-bg-small.png',
            date: 'Feb 23-25, 2018',
            link: '/coaching_clinics/texas-south-oklahoma-football-clinic'
        },
        {
            sp: '',
            name: 'Reno, NV',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/28/xsmall/Reno-Skyline.jpg',
            date: 'Mar 2-4, 2018',
            link: '/Coaching_Clinics/Reno-Nevada-Football-Clinic'
        },
        {
            sp: '',
            name: 'San Francisco, CA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/29/xsmall/San-Francisco-Skyline.jpg',
            date: 'Feb 16-18, 2018',
            link: '/Coaching_Clinics/San-Francisco-California-Football-Clinic'
        },
        {
            sp: '',
            name: 'Seattle, WA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/7/xsmall/Seattle-Skyline.jpg',
            date: 'Mar 9-11, 2018',
            link: '/Coaching_Clinics/Seattle-Washington-Football-Clinic'
        },
        {
            sp: 'HCA Clinic',
            name: 'Seattle, WA',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/7/xsmall/Seattle-Skyline.jpg',
            date: 'Mar 9-10, 2018',
            link: '/Coaching_Clinics/Seattle-Washington-Football-Clinic '
        },
        {
            sp: '',
            name: 'St. Louis, MO',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/30/xsmall/St-Louis-Skyline.jpg',
            date: 'Mar 2-4, 2018',
            link: '/Coaching_Clinics/St-Louis-Missouri-Football-Clinic'
        },
        {
            sp: '',
            name: 'Tampa, FL',
            img: 'https://s3-us-west-2.amazonaws.com/emt-assets/markets/31/xsmall/Tampa-Skyline.jpg',
            date: 'Mar 2-4, 2018',
            link: '/Coaching_Clinics/Tampa-Florida-Football-Clinic'
        }
    ];
    setStates();

    $(document).ready(function () {
        //Start locations!
        init();

        $("#AzState").change(function () {
            sortByAlphabet($(this).val());
        });
        $("#AzLoc").change(function () {
            sortByAlphabet($(this).val());
        });
    });

    function setStates() {
        markers.map(function (elem) {
            var name = elem.name.split(',');
            if (name.length > 1) {
                elem.state = name[1];
            } else {
                elem.state = '';
            }
        });
    }

    function sortByAlphabet(val) {
        var sVal = val;
        if (sVal !== "") {
            markers.sort(dynamicSort(val));
            init();
        }
    }

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    function init() {
        insertHtmlIntoSection($('.search-clinics-grid>.row'));
    }

    function insertHtmlIntoSection(section) {
        section.html(setHtml(markers));
    }

    function setHtml(mapData) {
        var length = mapData.length;
        var html = '';
        for (var i = 0; i < length; i++) {
            html += getTemplate(mapData[i]);
        }
        return html;
    }

    function getTemplate(marker) {
        return '<div class="col-xs-12 col-sm-6 col-md-3">' +
            '<div class="search-clinics-item">' +
            '<div class="search-clinics-item-img">' +
            '<img src="' + marker.img + '" alt="img">' +
            '<div class="search-clinics-item-overlay"><a href="">VIEW</a></div>' +
            '</div>' +
            '<div class="search-clinics-item-info">' +
            getSpecialInfo(marker) +
            //'<h4>Athletic Performance Clinic</h4>' +
            '<h3>' + marker.name + '</h3>' +
            '<h3>' + marker.date + '</h3>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    function getSpecialInfo(elem) {
        if (elem.sp !== undefined && elem.sp !== '') {
            return '<h4>' + elem.sp + '</h4>';
        }
        return '';
    }
})();