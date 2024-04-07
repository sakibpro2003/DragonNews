import Header from "./Header";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid md:grid-cols-4 gap-6">

          <div className="border">
            <p>left side nav</p>
          </div>



          <div className="col-span-2 border">
            <h2>Hot news coming soon</h2>
          </div>



          <div className="border">
            <p>Right side nav</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;