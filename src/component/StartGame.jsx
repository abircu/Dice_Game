import styled from'styled-components';
import { Button } from './Button';
const StartGame = ({toggle}) => {
  return (
   <Container> 
       <div>
         <img src="images/dices 1.png" alt="" />
       </div>
        <div className="content">
            <h1>Dice Game</h1>
             <Button onClick = {toggle} >Play Now</Button>
        </div>
     </Container>
  );
};

export default StartGame;

const Container = styled.div`
    max-width:1180px ;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content {
        h1{
        font-size: 96px;
        white-space: nowrap;
        }
    }
    @media (0 <width <780px){
      padding: 24px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 300px;
      height: 300px;
    }
    .content{
      width: 300px;
      height: 300px;
      gap: 24px;
      h1{
        font-size: 48px;
      }
    }
   

`;
