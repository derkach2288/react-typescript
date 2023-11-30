import "./styles.css";

function Homework20() {
  let firstName: string = "John";
  let lastName: string = "Doe";
  let job: string = "Software Engineer";
  let isManager: boolean = false;
  let experience: number = 5;
  let email: string = "john.doe@google.com";

  let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

    const newProgramLangs = programLangs.map((el: string, index) => {
      return <li key={index}>{el}</li>
    })


  return (
    <div className="homework20-wrapper">
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{job}</div>
      <div>{isManager ? "Manager" : "Employee"}</div>
      <div>{experience}</div>
      <div>{email}</div>
      <ul>{newProgramLangs}</ul>
    </div>
  );
}

export default Homework20;
