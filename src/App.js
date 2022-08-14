import Counter from "./component/Counter";
import Hello from "./component/Hello";
import InputSample from "./component/InputSample";
import Wrapper from "./component/Wrapper";

function App() {

  return (
  <>
    <Wrapper>
      <Hello name='react' color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper>
    <Counter />
    <br />
    <InputSample />
  </>
  );
}

export default App;
