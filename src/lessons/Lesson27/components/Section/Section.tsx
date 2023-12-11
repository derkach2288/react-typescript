import { Content } from "lessons/Lesson27/components";

import { SectionWrapper } from "./styles";

// interface SectionProps {
//   userData: {
//     userName: string;
//     age: number;
//     email: string;
//   }
// }

// function Section({userData}: SectionProps ) {
function Section() {
  return (
    <SectionWrapper>
      <h2>Section component</h2>
      {/* <Content userData={userData} /> */}
      <Content />
    </SectionWrapper>
  );
}

export default Section;
