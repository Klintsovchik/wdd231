const byuiCourse = {
  code: "WDD231",
  name: "Web Frontend Development I",

  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 88,
      instructor: "Brother Bingham"
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 81,
      instructor: "Sister Shultz"
    },
    {
      sectionNum: 3,
      roomNum: "STC 360",
      enrolled: 95,
      instructor: "Sister Smith"
    }
  ],

  changeEnrollment(sectionNum, add = true) {
    const section = this.sections.find(
      section => section.sectionNum === sectionNum
    );

    if (section) {
      if (add) {
        section.enrolled++;
      } else {
        section.enrolled--;
      }
    }
  }
};

export default byuiCourse;