import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/Sidebar";


const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg">
            <Sidebar/>
            <MessageContainer/>
        </div>
    )
}

export default Home;