import "./index.css";

export const CitizenScreen = (props) => {
  return (
    <div className="citizen-screen">
      <h1>You Are An Citizen</h1>
      <h3>The Keyword Is:</h3>
      <h4 className="keyword">{props.keyWord}</h4>
      <h3>Press Next</h3>
    </div>
  );
};
