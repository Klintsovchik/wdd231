const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseList = document.querySelector("#course-list");
const totalCredits = document.querySelector("#total-credits");

const allButton = document.querySelector("#all");
const cseButton = document.querySelector("#cse");
const wddButton = document.querySelector("#wdd");

const courseDetails = document.querySelector("#course-details");


function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button
            class="close-modal"
            type="button"
            aria-label="Close course details"
        >
            ❌
        </button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p>
            <strong>Credits:</strong>
            ${course.credits}
        </p>

        <p>
            <strong>Certificate:</strong>
            ${course.certificate}
        </p>

        <p>
            ${course.description}
        </p>

        <p>
            <strong>Technologies:</strong>
            ${course.technology.join(", ")}
        </p>
    `;

    courseDetails.showModal();

    const closeButton =
        courseDetails.querySelector(".close-modal");

    closeButton.addEventListener("click", () => {
        courseDetails.close();
    });
}


function displayCourses(courseArray) {

    courseList.innerHTML = "";

    courseArray.forEach((course) => {

        const courseCard =
            document.createElement("div");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.textContent =
            `${course.subject} ${course.number}`;

        courseCard.setAttribute("role", "button");
        courseCard.setAttribute("tabindex", "0");

        courseCard.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        courseCard.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                displayCourseDetails(course);
            }
        });

        courseList.appendChild(courseCard);

    });

    displayCredits(courseArray);
}


function displayCredits(courseArray) {

    const credits = courseArray.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent = credits;
}


allButton.addEventListener("click", () => {

    displayCourses(courses);

    setSelectedButton(allButton);

});


cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(
        course => course.subject === "CSE"
    );

    displayCourses(cseCourses);

    setSelectedButton(cseButton);

});


wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(
        course => course.subject === "WDD"
    );

    displayCourses(wddCourses);

    setSelectedButton(wddButton);

});


function setSelectedButton(selectedButton) {

    allButton.classList.remove("selected");
    cseButton.classList.remove("selected");
    wddButton.classList.remove("selected");

    selectedButton.classList.add("selected");

}


// Close modal when clicking outside the dialog
courseDetails.addEventListener("click", (event) => {

    const dialogDimensions =
        courseDetails.getBoundingClientRect();

    const clickedOutside =
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom;

    if (clickedOutside) {
        courseDetails.close();
    }

});


displayCourses(courses);

setSelectedButton(allButton);