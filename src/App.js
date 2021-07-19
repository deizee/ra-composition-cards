import './App.css';
import Card from "./components/Card";
import CardTitle from "./components/CardTitle";
import CardText from "./components/CardText";
import Button from "./components/Button";

const URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgrWUoxU20_qygWu5prhEmz2MtUd5gCFe2XITvE1igwlnncutHUgWn4iqh-mtlHdEKcs&usqp=CAU";

function App() {
  return (
    <div className="App container pt-5 d-flex">
      <Card imgUrl={URL} style={{width: '20rem', marginBottom: '20px'}}>
          <CardTitle>Card 1</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardText>
          <Button>Go somewhere</Button>
      </Card>
      <Card style={{width: '20rem'}}>
          <CardTitle>Card 2</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
          </CardText>
          <Button>Go somewhere</Button>
      </Card>
    </div>
  );
}

export default App;
