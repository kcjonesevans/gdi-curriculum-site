/**
 This array contains one object for each teaching material.
 To add a new material, please add an object to end of array
 and submit a pull request.

 A description of the properties:
 title:     "", // A string, the title of the class
 studentL:  "", // A string, a URL to a publicly viewable version of the slides
 editL:     "", // A string, a URL to the editable version of the slides (usually github)
 teacherL:  "", // A string, a URL to a teacher's guide (if exists)
 duration:  N,  // A number representing average duration in hours
 covers:    "", // A sentence describing the main topics covered
 prereqs:   "", // A string describing prereqs, "None" if there are none.
 tags:      [], // An array of high-level tags - try to use ones already used, if they apply
 reviewL:   "", // A link to an external review of the content, if one has been done
 sequence:  "", // A string - the sequence this belongs to, if any - like "GDISF" or "Minn-RoR"
 status:    "", // A string, representing the review status - either "unreviewed", "doesntmeet", "meetsreq", or "meetsrec"
 **/
var materials = [
   {
    title:     "Intro to Web Concepts",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/girldevelopit/gdi-intro-web-concepts",
    duration:  3,
    covers:    "Covers the fundamentals of web development in layman terms. Teaches basic concepts like the difference between a client and a server, the difference between backend and front end code, the tools needed to develop a website, and the typical web development team.",
    prereqs:   "None",
    tags:      ["frontend", "backend"],
    reviewL:   "",
    sequence:  "Featured",
    status:    "unreviewed"
   },
   {
    title:     "Intro to HTML/CSS",
    studentL:  "https://www.girldevelopit.com/materials/html-intro",
    teacherL:  "",
    editL:    "https://github.com/girldevelopit/gdi-core-html-css",
    duration:  8,
    covers:    "Covers basic HTML tags, HTML validation, CSS positioning, and CSS positioning.",
    prereqs:   "None",
    tags:      ["frontend", "html", "css"],
    reviewL:   "",
    sequence:  "Featured",
    status:     "unreviewed"
   },
   {
    title:     "Intro to JavaScript",
    studentL:  "https://www.girldevelopit.com/materials/intro-js",
    teacherL:  "",
    editL:    "https://github.com/girldevelopit/gdi-intro-js/",
    duration:  8,
    covers:    "These materials cover basic programming concepts like variables, data types, and functions, if/then statements, arrays and loops. They also introduce the Document Object Model (DOM) and how to use JavaScript to interact with the DOM and change HTML pages. ",
    prereqs:   "Assumes familiarity with HTML/CSS",
    tags:      ["javascript", "frontend"],
    reviewL:   "",
    sequence:  "Featured",
    status:     "unreviewed"
   },
   {
    title:     "Intermediate HTML/CSS",
    studentL:  "https://www.girldevelopit.com/materials/inter-html",
    teacherL:  "",
    editL:    "https://github.com/girldevelopit/gdi-core-intermediate-html-css",
    duration:  8,
    covers:    "Covers HTML 5 and CSS 3, standard design practices like reset stylesheets, fixed nav menus, hero images, web fonts, animations, plus the basics of responsive design.",
    prereqs:   "Basic HTML and CSS",
    tags:      ["frontend", "html", "css"],
    reviewL:   "",
    sequence:  "Featured",
    status:     "meetsrec"
   },
   {
    title:     "Web Accessibility",
    studentL:  "https://www.girldevelopit.com/materials/web-accessibility",
    teacherL:  "",
    editL:    "https://github.com/girldevelopit/girldevelopit-rdu-access",
    duration:  2,
    covers:    "Covers types of disabilities, screen readers, basic HTML improvements (alt tags), and UX tips.",
    prereqs:   "HTML",
    tags:      ["frontend", "accessibility"],
    reviewL:   "https://drive.google.com/open?id=1YWhCzFDQa_b61wOEtE7HftYo13oEXFXd2V5dXLU-muE",
    sequence:  "Featured",
    status:     "meetsreq"
   },
   {
    title:     "Intro to Git/Github",
    studentL:  "https://www.girldevelopit.com/materials/intro-git-github",
    teacherL:  "",
    editL:     "https://github.com/girldevelopit/gdi-core-git-github",
    duration:  2,
    covers:    "Covers the basics of using Git to manage software and sharing code repositories through the site GitHub.",
    prereqs:   "Command-line experience",
    tags:      ["git"],
    reviewL:   "",
    sequence:  "Featured",
    status:     "unreviewed"
   },
   {
    title:     "HTML101: HTML/CSS (Lecture-taught)",
    studentL:  "http://www.teaching-materials.org/htmlcss-1day/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/htmlcss-1day",
    duration:  10,
    covers:    "Covers HTML tags (links, tables, forms, media), CSS selectors, and CSS positioning.",
    prereqs:   "None",
    tags:      ["frontend", "html", "css"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "HTML101: HTML & CSS (Self-paced)",
    studentL:  "http://www.teaching-materials.org/htmlcss-selfpaced/",
    teacherL:  "http://www.teaching-materials.org/htmlcss-selfpaced/lessonplan.html",
    editL:     "",
    duration:  10,
    covers:    "Covers basic HTML tags (links, images, tables, forms), CSS selectors (level 3), CSS text properties, and CSS layout.",
    prereqs:   "None",
    tags:      ["html", "css"],
    reviewL:   "",
    sequence:  "GDISF",
    status:    "unreviewed"
   },
   {
    title:     "CSS3",
    studentL:  "http://www.teaching-materials.org/css3/#slide1",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/css3",
    duration:  5,
    covers:    "Covers CSS3 selectors and CSS3 properties.",
    prereqs:   "Basic CSS",
    tags:      ["frontend", "css"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS101: Intro to JS (Lecture-taught)",
    studentL:  "http://www.teaching-materials.org/javascript/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/javascript",
    duration:  14,
    covers:    "Covers variables, functions, logic, loops, arrays, and objects. Does not cover any interaction with HTML.",
    prereqs:   "None",
    tags:      ["frontend", "javascript"],
    reviewL:   "https://drive.google.com/open?id=1DKHPPYxzoWNnjrv93pecU57Axpb8fJkJSXsrtSjNsJY",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS 101: Intro to JS (Self-paced)",
    studentL:  "http://www.teaching-materials.org/javascript-selfpaced/",
    teacherL:  "http://www.teaching-materials.org/javascript-selfpaced/lessonplan.html",
    editL:     "",
    duration:  12,
    covers:    "Covers JavaScript variables, functions, logic, loops, conditionals, and arrays, along with the ProcessingJS library.",
    prereqs:   "None",
    tags:      ["javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:    "unreviewed"
   },
   {
    title:     "JS102: Arrays, Objects, and Functions (Review)",
    studentL:  "http://www.teaching-materials.org/jsreview/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jsreview",
    duration:  5,
    covers:    "Covers arrays, objects, and functions, as a re-Intro of the concepts and slightly deeper dive.",
    prereqs:   "JavaScript fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS 200: JS & the Web (Lecture-taught)",
    studentL:  "http://www.teaching-materials.org/jsweb/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jsdom",
    duration:  6,
    covers:    "Covers DOM access, DOM modification, DOM events, and DOM animation.",
    prereqs:   "Basic HTML and CSS, JavaScript fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS 200: JS & the Web (Self-paced)",
    studentL:  "http://www.teaching-materials.org/jsweb-selfpaced/",
    teacherL:  "http://www.teaching-materials.org/jsweb-selfpaced/lessonplan.html",
    editL:     "",
    duration:  6,
    covers:    "Covers DOM access, DOM modification, DOM events, and DOM animation.",
    prereqs:   "HTML/CSS fundamentals, JavaScript fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "GDISF",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "JS 201: JS and the DOM (Review)",
    studentL:  "http://www.teaching-materials.org/jsdom/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jsdom",
    duration:  2,
    covers:    "Covers DOM access, traversal, and modification, as a re-Intro and slightly deeper dive.",
    prereqs:   "JS DOM API fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },{
    title:     "JS 301a: jQuery",
    studentL:  "http://www.teaching-materials.org/jquery/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jquery",
    duration:  3,
    covers:    "Covers DOM access and modification in jQuery.",
    prereqs:   "JS DOM API fundamentals.",
    tags:      ["frontend", "javascript", "jquery"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS 301b: jQuery",
    studentL:  "http://www.teaching-materials.org/jquery2/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jquery2",
    duration:  2,
    covers:    "Covers DOM events and animation in jQuery, plus jQuery plugins.",
    prereqs:   "jQuery fundamentals (DOM access/modification).",
    tags:      ["frontend", "javascript", "jquery"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS 302: AJAX/JSON",
    studentL:  "http://www.teaching-materials.org/ajax/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/ajax",
    duration:  2.5,
    covers:    "Covers using JSON in a webpage and bringing JSON in via AJAX requests to create dynamic pages.",
    prereqs:   "JS DOM API fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS303: Client-side APIs",
    studentL:  "http://gdisf-js-apis.appspot.com/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/apis",
    duration:  3,
    covers:    "Covers image generators, iframe embeds, JS widgets, JSONP APIs, full JS API libraries.",
    prereqs:   "HTML, JS DOM API fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS304a: Object-Oriented JS",
    studentL:  "http://www.teaching-materials.org/jsoo/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jsoo",
    duration:  2.5,
    covers:    "Covers organizing code using OO concepts in JS (prototype-based).",
    prereqs:   "JavaScript fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS304b: JS MVC",
    studentL:  "http://www.teaching-materials.org/jsmvc/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/jsmvc",
    duration:  3,
    covers:    "Covers restructuring spaghetti code in a webpage into an MVC architecture, with models and views.",
    prereqs:   "JavaScript fundamentals, JS DOM API fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS402: Backbone",
    studentL:  "http://www.teaching-materials.org/backbone/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/backbone",
    duration:  6,
    covers:    "Covers Backbone models, views, events, templates, and CRUD.",
    prereqs:   "JS fundamentals, JS DOM API, jQuery, AJAX.",
    tags:      ["frontend", "javascript", "backend"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS404: AngularJS",
    studentL:  "http://www.teaching-materials.org/angular/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/angular",
    duration:  6,
    covers:    "Covers AngularJS directives, controllers, services, debugging, and animation.",
    prereqs:   "JS fundamentals, JS DOM API.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "JS410: D3.JS",
    studentL:  "http://www.teaching-materials.org/d3/#/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/d3",
    duration:  2.5,
    covers:    "Covers SVG basics, and D3 data binding, transitions, scales.",
    prereqs:   "HTML, CSS, JS fundamentals.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "HTML5: Graphics",
    studentL:  "http://www.teaching-materials.org/graphics/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/graphics",
    duration:  2,
    covers:    "Covers SVG, canvas tag, and WebGL",
    prereqs:   "HTML, CSS, JS fundamentals.",
    tags:      ["frontend", "html", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "HTML5: Multimedia",
    studentL:  "http://www.teaching-materials.org/multimedia/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/multimedia",
    duration:  2,
    covers:    "Covers audio tag, video tag, and JS libraries that wrap them.",
    prereqs:   "HTML, CSS, JS fundamentals, JS DOM API.",
    tags:      ["frontend", "html", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "HTML5: Storage",
    studentL:  "http://www.teaching-materials.org/storage/",
    teacherL:  "",
    editL:    "https://github.com/gdisf/teaching-materials/tree/master/storage",
    duration:  3,
    covers:    "Covers localStorage, sessionStorage, IndexedDB, file API, use cases, and best practices.",
    prereqs:   "HTML, JS fundamentals, JS DOM API.",
    tags:      ["frontend", "javascript"],
    reviewL:   "",
    sequence:  "GDISF",
    status:     "unreviewed"
   },
   {
    title:     "Intro to Python",
    studentL:  "http://calebsmith.github.io/gdi-intro-python/#/",
    teacherL:  "",
    editL:     "https://github.com/calebsmith/gdi-intro-python",
    duration:  8,
    covers:    "Covers using Python from the shell, variables, loops, functions, conditionals, data structures, object-oriented programming.",
    prereqs:   "None",
    tags:      ["python"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Learn to program with Python",
    studentL:  "http://gailcarmichael.com/learn-python",
    teacherL:  "",
    editL:     "",
    duration:  10,
    covers:    "Covers using Python with Turtle graphics and a command line game. Teaches loops, functions, conditionals, data structures.",
    prereqs:   "None",
    tags:      ["python"],
    reviewL:   "",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to OOP with Java",
    studentL:  "http://www.gdiannarbor.com/events/intro-java/",
    teacherL:  "",
    editL:     "https://github.com/gdiannarbor/intro-oop-java",
    duration:  8,
    covers:    "Covers using Java from command line. Teaches variables, conditionals, arrays, objects, and object-oriented programming principles.",
    prereqs:   "None",
    tags:      ["java"],
    reviewL:   "https://docs.google.com/a/girldevelopit.com/document/d/1_zBSIipoHpKUlw8pQ91q2Hm2LKq67YRwT7NC-oupVIo/edit?usp=sharing",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Data Modeling",
    studentL:  "http://www.teaching-materials.org/data-modeling/",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/multimedia",
    duration:  2,
    covers:    "Covers data storage types (with emphasis on JSON), techniques for modeling attributes and relationships. Not DB or backend specific.",
    prereqs:   "None, but JS fundamentals helpful.",
    tags:      ["javascript"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Algorithms",
    studentL:  "http://www.teaching-materials.org/algorithms/",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/algorithms",
    duration:  3,
    covers:    "Covers algorithms without coding - mostly sorting, searching, graph.",
    prereqs:   "None",
    tags:      ["algorithms"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Command line",
    studentL:  "http://www.teaching-materials.org/cli/slides.html",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/cli",
    duration:  2,
    covers:    "Covers files, directories, file editors, searching files.",
    prereqs:   "None",
    tags:      ["cli"],
    reviewL:   "https://docs.google.com/document/d/12ucWXpZB606yekXAVg_uEynD8jYKJ05-VC4TYY27kOg/edit",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Web Hosting",
    studentL:  "http://www.teaching-materials.org/hosting/slides.html",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/hosting",
    duration:  1,
    covers:    "Covers type of web hosting and what to look for in a good host.",
    prereqs:   "None",
    tags:      ["backend"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Web Domains",
    studentL:  "http://www.teaching-materials.org/domains/slides.html",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/domains",
    duration:  1,
    covers:    "Covers how domain names work and how to register them.",
    prereqs:   "None",
    tags:      ["backend"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Version control & Git",
    studentL:  "http://www.teaching-materials.org/git/slides.html",
    teacherL:  "",
    editL:     "https://github.com/gdisf/teaching-materials/tree/master/git",
    duration:  1,
    covers:    "Covers the concepts of repos/branches, and basic git commands.",
    prereqs:   "Basic command-line",
    tags:      ["git", "cli"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "SaSS",
    studentL:  "http://slides.com/lesjames/sass-workshop#/",
    teacherL:  "",
    editL:     "",
    duration:  2,
    covers:    "Covers setting up SaSS, using variables, extensions, operations, functions, mix-ins, loops.",
    prereqs:   "HTML/CSS fundamentals.",
    tags:      ["css"],
    reviewL:   "https://drive.google.com/open?id=1hw5uFOGRSXWervk3BHfGTLNTM7XUNyzcG5r4BBrtDiY",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to Scala",
    studentL:  "http://gdiboulder.com/scala/slides/#/",
    teacherL:  "",
    editL:     "",
    duration:  6,
    covers:    "",
    prereqs:   "Java fundamentals.",
    tags:      [],
    reviewL:   "https://docs.google.com/document/d/1Qf8gOaKKMi1orELZE8irJVHNQIUle7dh9O5Ui6qeMrA/edit#heading=h.rln2823t4xd",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to Java with Android development",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/girldevelopit/gdi-intro-android",
    duration:  8,
    covers:    "Unknown",
    prereqs:   "Unknown",
    tags:      ["java", "android"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to JavaScript and jQuery",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/gdiottawa/intro-jquery",
    duration:  7,
    covers:    "Covers JavaScript, APIs, jQuery, and APIs.",
    prereqs:   "HTML and CSS fundamentals.",
    tags:      [],
    reviewL:   "",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to Programming with Python",
    studentL:  "http://gailcarmichael.com/processing-workshop",
    teacherL:  "",
    editL:     "",
    duration:  6,
    covers:    "Covers Java variables, loops, if statements, booleans, objects, arrays, and some ProcessingJS functions.",
    prereqs:   "None",
    tags:      [],
    reviewL:   "",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to programming with SCRATCH",
    studentL:  "http://www.gailcarmichael.com/sites/default/files/GDIOttawa-IntroductiontoScratch.pdf",
    teacherL:  "http://compscigail.blogspot.ca/2011/05/programming-concepts-in-scratch.html",
    editL:     "",
    duration:  3,
    covers:    "Covers variables, loops, and conditionals, plus SCRATCH concepts like broadcast.",
    prereqs:   "None",
    tags:      [],
    reviewL:   "https://docs.google.com/document/d/1yqI3miIjf9usLLtV1BkWGdOCtOkexdDMyYA58ZcOims/edit#heading=h.rln2823t4xd",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Photoshop for Web Design",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/zoerooney/gdi-photoshop-for-web-design",
    duration:  2,
    covers:    "Covers Photoshop workspaces, unit setup, layers, slicing, web-optimized saving",
    prereqs:   "None, but basic HTML/CSS is useful.",
    tags:      [],
    reviewL:   "https://docs.google.com/document/d/1Qo72WX3O1Ys98CLXnv2bzFKVDS17dcuA4fO3wtO9hEY/edit?usp=sharing",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to UX",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/snkahn/gdi-ux-basics",
    duration:  6,
    covers:    "Covers user testing, user personas, design process, prototyping, and iterating.",
    prereqs:   "None",
    tags:      ["ux", "design"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Typography",
    studentL:  "http://yeseniaperezcruz.com/GDI",
    teacherL:  "",
    editL:     "",
    duration:  2,
    covers:    "Covers basic and advanced typography concepts (with beautiful slides).",
    prereqs:   "None",
    tags:      ["ux", "design"],
    reviewL:   "https://docs.google.com/document/d/1M7dVdnuYD0E6_Qqw-jYon7y_NVQCUrL0T9GXK2WXMMs/edit?usp=sharing",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to PHP/MySQL",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/Roenok/gdi-intro-php-mysql",
    duration:  8,
    covers:    "Covers PHP variables, functions, conditionals, arrays, plus MySQL connection and queries.",
    prereqs:   "None",
    tags:      ["php", "mysql", "backend"],
    reviewL:   "https://docs.google.com/document/d/1K1JqKBrf8kXJbHc5KjCz8A6TiDF10p1UhEjzPG34WVM/edit",
    sequence:  "",
    status:    "meetsrec"
   },
   {
    title:     "Intro to Open Source Software",
    studentL:  "https://docs.google.com/presentation/d/1JAh3nhPzCXjZLU2Q69gzpmkD9M3owRz-MICq-R_x3K8/edit#slide=id.p",
    teacherL:  "",
    editL:     "",
    duration:  1.5,
    covers:    "Covers open source principles, licenses, Git commands.",
    prereqs:   "Command-line basics.",
    tags:      ["git", "cli", "oss"],
    reviewL:   "https://drive.google.com/open?id=1Xs6KDjSRHYjfMu7fOKCqSqyxZb2hBBxpjWtwmpcNjWI",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intro to databases",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/hglennrock/gdi-intro-databases",
    duration:  8,
    covers:    "Covers data modeling concepts and using SQL queries to do queries, joins, updates, and inserts",
    prereqs:   "None",
    tags:      ["databases"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Ruby",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/cherimarie/gdi-ruby",
    duration:  8,
    covers:    "Covers Ruby in the shell. Teaches variables, loops, conditions, data types, and object-oriented programming.",
    prereqs:   "None",
    tags:      ["ruby"],
    reviewL:   "",
    sequence:  "Seattle-RoR",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Rails",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/cherimarie/gdi-rails",
    duration:  8,
    covers:    "Covers Rails basics, objects, ActiveRecord, deployment to Heroku.",
    prereqs:   "Ruby fundamentals",
    tags:      ["ruby", "rails", "backend"],
    reviewL:   "",
    sequence:  "Seattle-RoR",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Git/Github",
    studentL:  "http://feministy.github.io/gdi-core-git-github",
    teacherL:  "",
    editL:     "https://github.com/gdichicago/git-github",
    duration:  4,
    covers:    "Covers the basics of using Git to manage software, sharing code repositories through the site GitHub, and standard Github workflow.",
    prereqs:   "Command-line experience",
    tags:      ["git"],
    reviewL:   "",
    sequence:  "",
    status:     "unreviewed"
   },
   {
    title:     "Intro to iOS",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/zorn/GDI-iOS-Intro/",
    duration:  10,
    covers:    "Covers Swift ('crash course'), MVC, containers, layout, animation, networking. Slides are PDFs",
    prereqs:   "Comfortable with at least one other programming language.",
    tags:      ["ios", "mobile", "swift"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
      {
    title:     "Intro to iOS with Xcode",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/jillhc/iOS-Class-Girl-Develop-It-RDU",
    duration:  8,
    covers:    "Recent (July 2015) intro to iOS development. Covers Xcode, Swift, the MVC model, and App & View Lifecycle. Slides are HTML",
    prereqs:   "Comfortable with at least one other programming language.",
    tags:      ["ios", "mobile", "swift"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Web hosting 101",
    studentL:  "http://mathemagica.github.io/gdi-hosting-in-30-minutes/",
    teacherL:  "",
    editL:     "https://github.com/mathemagica/gdi-hosting-in-30-minutes",
    duration:  0.5,
    covers:    "Covers type of webhosts, client vs. server, and uploading to Dropbox.",
    prereqs:   "Basic HTML.",
    tags:      ["frontend", "backend", "html"],
    reviewL:   "https://docs.google.com/document/d/1tz1PRdUuKMXOHrIu4SqXVD4PF0KG07R_04GWhUcn83g/edit",
    sequence:  "",
    status:    "meetsreq"
   },
   {
    title:     "Intro to Git/Github",
    studentL:  "http://www.amygori.com/gdi-rdu-git-github/",
    teacherL:  "",
    editL:     "https://github.com/amygori/gdi-rdu-git-github",
    duration:  2,
    covers:    "Covers the basics of using Git to manage software and sharing code repositories through the site GitHub.",
    prereqs:   "Command-line experience",
    tags:      ["git"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Ruby",
    studentL:  "http://gdiannarbor.github.io/intro-ruby/",
    teacherL:  "",
    editL:     "https://github.com/gdiannarbor/intro-ruby",
    duration:  8,
    covers:    "Covers Ruby in the shell. Teaches variables, loops, conditions, data types, and object-oriented programming.",
    prereqs:   "None",
    tags:      ["ruby"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Python",
    studentL:  "http://www.gdiannarbor.com/events/intro-python/#/",
    teacherL:  "",
    editL:     "https://github.com/gdiannarbor/intro-python",
    duration:  8,
    covers:    "Covers using Python 3 from the shell, variables, loops, functions, conditionals, data structures, and functional programming.",
    prereqs:   "None",
    tags:      ["python"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Digital Project Management",
    studentL:  "https://docs.google.com/presentation/d/1e5RtOC3sKETKQo2uRPuKUNbz4sylAGkS3VnWfrOZ970/edit?usp=sharing",
    teacherL:  "",
    editL:     "",
    duration:  5,
    covers:    "Gives a general Intro of what a project managr does- requirements gathering, team communication, document creation.",
    prereqs:   "None",
    tags:      [""],
    reviewL:   "https://docs.google.com/document/d/1pJ1e00g4QN-J6i7QXz6h1YPkOsjdnULJtts95Yy9Af0/edit#heading=h.xpmnimw6yna6",
    sequence:  "",
    status:    "doesntmeet"
   },
   {
    title:     "Intermediate JavaScript",
    studentL:  "http://amlyhamm.com/gdi/intermediate_javascript/",
    teacherL:  "",
    editL:     "",
    duration:  "Unknown",
    covers:    "Covers a review of DOM API plus using JS libraries.",
    prereqs:   "JavaScript fundamentals, HTML/CSS fundamentals.",
    tags:      ["javascript", "frontend"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to JavaScript: Part 1",
    studentL:  "http://amlyhamm.com/gdi/intro_to_javascript/day_one/",
    teacherL:  "",
    editL:     "",
    duration:  "Unknown",
    covers:    "Covers JavaScript variables, functions, conditionals, loops, and arrays.",
    prereqs:   "None",
    tags:      ["javascript"],
    reviewL:   "",
    sequence:  "Minn-JS",
    status:    "unreviewed"
   },
   {
    title:     "Intro to JavaScript: Part 2",
    studentL:  "http://amlyhamm.com/gdi/intro_to_javascript/day_two/#/",
    teacherL:  "",
    editL:     "",
    duration:  "Unknown",
    covers:    "Covers JavaScript objects and the DOM API.",
    prereqs:   "JavaScript basics.",
    tags:      ["javascript", "frontend"],
    reviewL:   "",
    sequence:  "Minn-JS",
    status:    "unreviewed"
   },
   {
    title:     "Intro to HTML/CSS",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/gdiannarbor/intro-html-css",
    duration:  8,
    covers:    "Covers basic HTML tags, HTML validation, CSS positioning, and CSS positioning.",
    prereqs:   "None",
    tags:      ["frontend", "html", "css"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Wordpress",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/TheTracyL/GDI-WordPress-101",
    duration:  9,
    covers:    "Covers getting started with Wordpress, including how to install it, creating and posting content, using plugins and themes.",
    prereqs:   "None",
    tags:      ["wordpress"],
    reviewL:   "https://docs.google.com/document/d/1kT8LzrraKdKISQfR_45bbggHZjJFnle6JNPUeJnU76A/edit#",
    sequence:  "",
    status:    "meetsreq"
   },
   {
    title:     "Building Themes for WordPress",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/TheTracyL/GDI-Building-WordPress-Themes",
    duration:  8,
    covers:    "Covers the creation of themes for WordPress.",
    prereqs:   "WordPress fundamentals.",
    tags:      ["wordpress"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Responsive Web Design",
    studentL:  "http://gdidetroit.com/intro-responsive/#/",
    teacherL:  "",
    editL:     "https://github.com/leeanndrees/gdi-responsive",
    duration:  4,
    covers:    "Covers fluid grids, flexible images, CSS media queries, and Foundation framework.",
    prereqs:   "HTML/CSS fundamentals.",
    tags:      ["html", "css"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to AngularJS",
    studentL:  "http://ahoef.co/gdi-angular/slides",
    teacherL:  "",
    editL:     "https://github.com/ahoef/gdi-angular",
    duration:  4,
    covers:    "Includes overview of MVC frameworks and covers expressions, built-in directives, controllers, $scope, dependency injection, and the future of Angular 2.0",
    prereqs:   "HTML, basic JavaScript",
    tags:      ["frontend", "javascript", "angular"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to Programming Concepts",
    studentL:  "",
    teacherL:  "",
    editL:     "https://github.com/gdiboulder/gdi-boulder-intro-programming-concepts",
    duration:  "Unknown",
    covers:    "Covers the basics of common programming concepts, structures, and flow.",
    prereqs:   "None",
    tags:      ["frontend", "backend"],
    reviewL:   "",
    sequence:  "",
    status:    "unreviewed"
   },
   {
    title:     "Intro to HTML/CSS (Project-Based)",
    studentL:  "http://gdiboston.github.io/gdi-core-html-css",
    teacherL:  "https://github.com/gdiboston/gdi-core-html-css/blob/master/README.md",
    editL:     "",
    duration:  8,
    covers:    "Covers basic HTML tags with an emphasis on HTML5, CSS positioning, display properties, use of CodePen, and coding a single-page site from a design.",
    prereqs:   "None",
    tags:      ["frontend", "html", "css"],
    reviewL:   "",
    sequence:  "GDIBoston",
    status:    "unreviewed"
   },
   {
    title:     "Introduction to Programming with Ruby",
    studentL:  "http://kcjonesevans.github.io/gdidayton-intro-ruby/#/",
    teacherL:  "https://github.com/kcjonesevans/gdidayton-intro-ruby",
    editL:     "",
    duration:  12,
    covers:    "Variables, methods, datatypes, loops, conditionals, control flow, O-O intro, writing classes. Focus on core CS concepts.",
    prereqs:   "None",
    tags:      ["ruby"],
    reviewL:   "",
    sequence:  "GDIDayton",
    status:    "unreviewed"
   },
   {
    title: "Intro to Command Line",
    studentL: "http://slides.com/jaredstilwell/intro-to-command-line",
    teacherL: "http://slides.com/jaredstilwell/intro-to-command-line",
    editL: "",
    duration: 2,
    covers: "Terminal terminology. Working in directories including pwd, cd, ls, flags, mkdir, rmdir. Working with files including cat, more, less, touch, rm. Permissions management. Standard output and input, pipes, grep and filters. Processes. Accessing commands in history. Examples of real-world use of terminal.",
    prereqs: "None",
    tags: ["command-line"],
    reviewL: "",
    sequence: "GDIAustin",
    status: "unreviewed"
   },
   {
    title: "Unix Command Line Basics",
    studentL: "http://gdiminneapolis.com/classes/CommandLine_Liz/slideshow/index.html",
    teacherL: "http://gdiminneapolis.com/classes/CommandLine_Liz/slideshow/index.html",
    editL: "http://gdiminneapolis.com/classes/CommandLine_Liz/slideshow/index.html",
    duration: 2,
    covers: "Cover basics of directory and file traversal, finding and searching for files and content, and using many of the powerful tools that come along with most Unix Shells. If we’re being totally honest, this is an Intro to Unix, but it’s from the angle of ‘getting things done’ rather than technical depth or purity",
    prereqs: "None",
    tags: ["command-line"],
    reveiwL: "",
    sequence: "GDIMinneapolis",
    status: "unreviewed"
   },
   {
    title: "Intro to Mobile App Building with Salesforce",
    studentL: "https://org62.my.salesforce.com/sfc/p/000000000062/a/30000000A3a3/iZYKssxp5fi1Rod3G2N9hYnukTwFqkcmLMPpeA.nuvE",
    teacherL: "",
    editL: "",
    duration: 6,
    covers: "Overview of using the Salesforce1 Platform to builhttp://sforce.co/1MhEiCKd a drag-and-drop mobile app. All slides: Class 1: Overview & Apps (http://sforce.co/1RVNIk4), Class 2: Data Modeling (http://sforce.co/1MhEiCK), Class 3: Modifying the User Experience (http://sforce.co/1MtJBdd), Class 4: Add Business Logic (http://sforce.co/1UHChkH), Class 5: Reports & Dashboards (http://sforce.co/1pSXgG1), Class 6: Customizing the Mobile Experience (http://sforce.co/21AJseV)",
    prereqs: "None",
    tags: ["mobile", "salesforce"],
    reviewL: "",
    sequence: "",
    status: "unreviewed"
   }
];
