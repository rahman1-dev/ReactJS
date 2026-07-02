import React from "react";
import ReactDOM from "react-dom/client";

// let h1 = React.createElement("h1", {}, "This is day 2 of react");
// const root = ReactDOM.createRoot(document.querySelector("#root"));

// let para = <p className="para">This is paragraph made by using JSX syntax</p>;
// let heading = <h1 className="Heading">This is multi line code in JSX</h1>;

// let h2 = <h2>This is react h2</h2>;
// console.log(h2);
// root.render(h2);

//Components and Composition

// let userName = "Abdul Noman";
// const apiData = "<script>alert('You are hacked')<script/>";
//This will be not going to allowed in JSX ,
//Becouse the hackers will run there script any where using this , It is the main feature of JSX

// function App() {
//   return (
//     <div>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }
// root.render(<App />);

// function Header() {
//   return (
//     <h2>
//       {userName}
//       <p>{apiData}</p>
//       This is header
//     </h2>
//   );
// }
// function Body() {
//   return (
//     <h1>
//       This is body
//       <Section />
//     </h1>
//   );
// }
// const Section = () => {
//   return <section>This is section {10 + 9}</section>;
// };
// function Footer() {
//   return (
//     <div>
//       <h2>This is footer</h2>
//       {h1}
//     </div>
//     // {h1 } is the react element , you can render it in your components
//   );
// }

const profileCard = (
  <div className="profile-card">
    <img src="#" alt="Profile" className="profile-image" />
    <h2>John Doe</h2>
    <p>Software Developer</p>
    <div>
      <div>
        <span>1.2K</span>
        <span>Followers</span>
      </div>
      <div>
        <span>340</span>
        <span>Following</span>
      </div>
      <div>
        <span>89</span>
        <span>Posts</span>
      </div>
    </div>
    <button>Follow</button>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(profileCard);
