import styled from'styled-components';

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

`;
const Button= styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: white;
    border-radius: 5px;
    padding: 10px 18px ;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0ms.3s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid  black;
        color: black;
        cursor: pointer; 
        transition: 0ms.3s background ease-in;
    }

`;
