const getMessagesForPassedStudents = (allStudents, failedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => !failedStudents.includes(name)
  );
  const messages = passedStudents.map((name) => "Good job, " + name);
  return messages;
};

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const failedStudents = ["Tom", "Bob"];

console.log(getMessagesForPassedStudents(allStudents, failedStudents));
