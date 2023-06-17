import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import Total_Score from "./Total_Score";


const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
         <Total_Score/>
          <NumberSelector/>
      </div>
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer=styled.main`
  padding:70px 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;