import logo from './logo.svg';
import './App.css';
import Footer from './components/Header/header';
import SearchBar from './components/Header/main/main';
import BodyPart from './components/Header/body';
import FooterAbout from './components/footer';



export default function App() {
    return(
        <div class="mainpage">
            <Footer />
            <SearchBar/>
            <BodyPart />
            <FooterAbout />
           
        </div>
    )
}

