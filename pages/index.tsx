import Background from "../components/BackGround";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home() {

  return (
    <div>
      <div id="container">
        <Section />
        <Section2 />
        <Section3 />
      </div>

      <Background />
    </div>
  )
    
  
}
