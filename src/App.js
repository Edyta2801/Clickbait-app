import React from "react";
import "./App.css";

const styles = {
  backgroundColor: "#dfe6e9",
  border: "#b2bec3 2px solid",
  padding: 10,
  color:"#636e72",
para: {
    color: "#6c5ce7"
  }
};

function BlogTile({ title, intro }) {
  return (
    <div style={styles}>
      <h2>{title}</h2>
      <p style={styles.para}>{intro}</p>
    </div>
  );
}

const posts = [
  { id: 1, title: "Pilne: Co to był za dzień!", intro: "Tego świat jeszcze nie widział" },
  { id: 2, title: "Wszyscy zazdroszą Polakom!", intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił" },
  {
    id: 3, title: "Adam Małysz Zgolił wąs",
    intro: "Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy"
  }
];


const charsLength=25;

function App() {
  const introSentence=(intro)=>{
    if (intro.length > charsLength){
      return `${intro.slice(0,charsLength)}...`;
    }
    return intro;
  };
  return (
    <div>
      {posts.map((elem) => (
        <BlogTile key={`post-${elem.id}`} title={elem.title} intro={introSentence(elem.intro)} />
      ))}
    </div>
  );
}

export default App;
