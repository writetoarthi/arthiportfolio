import Hero from "./component/hero";
import Footer from "./component/footer";
import Contact from "./component/contact";
import Tools from "./component/tools";
import Prodcutdeck from "./component/productdeck";
import Experience from "./component/experience";
import Skills from "./component/skills";







export default function Example() {
  return (
    <div>
      <Hero/>
      <Experience/>
    <Prodcutdeck/>
    <Skills/> 
      <Tools/>
      <Contact/>
      <Footer/>
    </div>
  )
}
