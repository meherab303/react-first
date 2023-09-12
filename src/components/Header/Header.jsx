
import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center border-b-2 p-4 mx-4">
            <h3 className=" text-3xl text-indigo-700">Knowledge Cafe</h3>
            <img src={profile} alt="" />
            
        </header>
    );
};

export default Header;