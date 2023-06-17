import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Total_Score from "./Total_Score";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "./Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
   const [currentDice, setCurrentDice]= useState(1);
   const [error, setError] =useState(" ");
   const [viewRules,setViewRules] =useState(false);

      
    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice=()=>{
        if(!selectedNumber) {
          setError("You are not selected any number");
          return;
        }
        const randomNumber= generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(selectedNumber == randomNumber){
          setScore((prev)=>prev +randomNumber);
        }
        else{
          setScore((prev)=>prev-2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore=()=>{
      setScore(0);
    };



  return (
    <MainContainer>
      <div className="top_section">
         <Total_Score score ={score} />
          <NumberSelector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber} 
          setSelectedNumber={setSelectedNumber}
          />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=> setViewRules((prev)=>!prev)}>{viewRules ?"Hide" : "Show"}Rules</Button>
      </div>
      {viewRules&& <Rules/>}
    </MainContainer>
  );   
};
export default GamePlay;

const MainContainer=styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top:70px;
  .top_section { 
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;