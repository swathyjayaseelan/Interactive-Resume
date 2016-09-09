var bio = {
    "name": "Swathy Jayaseelan",
    "role": "Web Developer",
    "welcomeMessage": "Hello !",
    "biopic": "images/fry.jpg",
    "resume": "docs/resume.docx",
    "contact": {
        "mobile": "+19495725679",
        "email": "swathyjayaseelan@gmail.com",
        "github": "Swathy Jayaseelan",
        "location": "3700 South Plaza Drive, Santa Ana, California"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Java"]

};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "August 2016",
        "links": "https://github.com/swathyjayaseelan/Portfolio",
        "description": "Responsive online portfolio web page using Bootstrap framework",
        "images": ["images/portfolio.png"]

    }, {
        "title": "SRS for COS",
        "dates": "May 2016",
        "links": "docs/SRS.docx",
        "description": "Drafted the Software Requirements Specification document for an Online Cafeteria Ordering System",
        "images": ["images/srs.png"]
    }]
};

var work = {
    "jobs": [{
        "employer": "Tata Consultancy Services Ltd.,",
        "title": "Systems Engineer",
        "location": "India",
        "dates": "2012-2013",
        "description": " <strong>Responsibilities</strong>: Deploy applications on WebLogic servers •	Integrate applications with WebSSO (Single sign-on)•	Support the system by analyzing and rectifying problems that arise later"
    }, {
        "employer": "Adam Associates",
        "title": "Import/Export Coordinator",
        "location": "India",
        "dates": "2013-2015",
        "description": "<strong>Responsibilities</strong>: Build and maintain relationships with vendors for feedback and improvement opportunities •	Communicate with foreign agents for shipment coordination •	Manage and Monitor on time performance •	Assist the traders as needed."
    }]
};

var education = {
    "schools": [{
        "name": "Sastra University",
        "location": "India",
        "degrees": "Btech",
        "dates": "May2012",
        "majors": ["EEE"],
        "url": "http://www.sastra.edu/"
    }, {
        "name": "California State University, Fullerton",
        "location": "California",
        "degrees": "Masters",
        "dates": "May 2017",
        "majors": ["Software Engineering"],
        "url": "http://www.fullerton.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "December 2016",
        "url": "https://www.udacity.com/"
    }],
};

bio.display = function() {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
    for (var key in bio.contact) {
        formattedContact = HTMLcontactGeneric.replace("%contact%", key);
        var finalContact = formattedContact.replace("%data%", bio.contact[key]);
        $("#topContacts").append(finalContact);
    }

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbioPic);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeader);
    var formattedResume = HTMLresumeDownload.replace("#", bio.resume);
    $("#header").prepend(formattedResume);
}
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};


$("#main").append(internationalizeButton);

function inName() {
    var temp = bio.name;
    temp = temp.split(" ");
    temp[1] = temp[1].toUpperCase();
    temp[0] = temp[0].slice(0, 1).toUpperCase() + temp[0].slice(1).toLowerCase();
    temp = temp.join(" ");
    return temp;
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var text in projects.projects) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[text].title);
        $(".project-entry:last").append(formattedprojectTitle);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[text].dates);
        $(".project-entry:last").append(formattedprojectDates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[text].description);
        $(".project-entry:last").append(formattedprojectDescription);
        for (var i = 0; i < projects.projects[text].images.length; i++) {
            var formattedprojectImages = HTMLprojectImage.replace("%data%", projects.projects[text].images[i]);
            $(".project-entry:last").append(formattedprojectImages);
        }
        var formattedprojectLink = HTMLprojectLink.replace("%data%", projects.projects[text].links);
        $(".project-entry:last").append(formattedprojectLink);
    }
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedschoolName = formattedschoolName.replace("#", education.schools[school].url);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degrees);
        $(".education-entry:last").append(formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
        for (var i = 0; i < education.schools[school].majors.length; i++) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[i]);
            $(".education-entry:last").append(formattedschoolMajor);
        }
    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineclassesStart);
    for (var online in education.onlineCourses) {

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        formattedonlineSchool = formattedonlineSchool.replace("#", education.onlineCourses[online].url);
        $(".online").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
        $(".online").append(formattedonlineDates);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        $(".online").append(formattedonlineTitle);
    }
};
$(document).ready(function() {
    $("#topContacts").hover(function() {
        $(this).addClass("transition");
        $(".biopic").fadeOut();
    }, function() {
        $(this).removeClass("transition");
        $(".biopic").fadeIn();
    });

});
$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();
