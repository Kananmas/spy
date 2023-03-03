import { useState } from "react";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Slide } from "./components/Slide";
import "./index.css";

export function HowToPlay() {
  let [currentPage, setCurrentPage] = useState(1);

  const ToNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const ToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Menu />
      <Slide index={1} currentPage={currentPage}>
        in this game we pick a random word,then the player will be divided into
        two groups citizens and spies,citizen are pepole who know the actual
        word and find out who are the spies, and spies must find out what that
        word is...
      </Slide>
      <Slide index={2} currentPage={currentPage}>
        inorder for citizens to find out who the spy is they must ask indirect
        questions from one of the aspects of the intended word,if the answers
        from other player didn't match the intended answer,the player who
        answered can be an option for being a spy
      </Slide>
      <Slide index={3} currentPage={currentPage}>
        Spy must listen to questions answers and guess what the word is inorder
        to stay hidden,this game is ment to be played with a group of pepole
        that gathered in one place.
      </Slide>
      <Button onClick={ToPreviousPage} disabled={currentPage === 1}>
        Pervious
      </Button>
      <Button onClick={ToNextPage} disabled={currentPage === 3}>
        Next
      </Button>
    </>
  );
}
