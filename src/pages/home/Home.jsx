import { Header, About,Depositions, Details, Subjects, Bonus, FreeClass, SocialProof, Certificates} from "../../components";
import "./styles.scss"

const Home = () => {
  return (
    <div className="wrapper">
    <Header/>
    <About/>
    <Depositions/>
    <Details/>
    <Subjects/>
    <Bonus/>
    <FreeClass/>
    <SocialProof/>
    <Certificates/>

    </div>
  )
}

export default Home