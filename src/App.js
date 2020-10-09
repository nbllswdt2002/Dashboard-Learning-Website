import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Inputs, Button, Navbar
  //  Footer 
  } from 'adminlte-2-react';
import ReactPasswordStrength from 'react-password-strength';
import Logo from './assets/deploy_ai.png';
import Logo2 from './assets/learning-from-home.png';
import Logo3 from './assets/classroom-virtual.png'

const { Item } = Sidebar;
const { Text, Radio, Select2} = Inputs;
const items = [
  {
    src: './assets/deploy_ai.png',
    altText: 'Slide 1',
    caption: 'Slide 1'
  }
];

ReactDOM.render(<App />, document.getElementById('root'));

function useInputForm(initial){
  const [ value, setValue ] = useState(initial);
  function handler(e){
    setValue(e.target.value);
  };

  return {
    onChange: handler,
    value,
  };
}

function Logout(props){
  return (<Content title="Logout"></Content>);
}

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

function Home(props){
  return (
  <Content title="Home" className="container">
  </Content>
  );
}

function Announcement(props){
  return (<Content title="Announcement"></Content>);
}

function Registrasi(props){
  const full_name = useInputForm("");
  const nick_name = useInputForm("");
  const email = useInputForm("");
  const password = useInputForm("");
  const confirm_password = useInputForm("");
  const address = useInputForm("");
  const gender = useInputForm("");
  const year = useInputForm("");

  const [ show, setShow ] = useState("");

  function Show(t){
    if(t === "")
      setShow("");
    else
      setShow(<Box>{t}</Box>);
  }

  const op_gender = [{label: "Male", checked: true, value:'M'}, {label: "Female", value:'F'}];

  var op_year = [];
  for(var y = 2020; y >= 1945; y--){
    op_year.push(y);
  }

  function click(){
    const out = (
      <>
      {full_name.value}
      <br/>
      {nick_name.value}
      <br/>
      {email.value}
      <br/>
      {password.value}
      <br/>
      {confirm_password.value}
      <br/>
      {address.value}
      <br/>
      {gender.value}
      <br/>
      {year.value}
      </>
    );
    Show(out);
  }

  return (
    <Content title="Registrasi">
      <Row>
        <Col xs={12}>
          <Box footer={<><Button text="Save" onClick={click}/><Button text="Clear" onClick={() => {setShow("");}}/></>}>
            {/* <Col md={6}> */}
              <Text {...full_name} label="Full Name" placeholder="Input Full Name" labelPosition="above"/>
              <Text {...nick_name} label="Nick Name" placeholder="Input Nick Name" labelPosition="above"/>
              <Text {...email} label="E-Mail Address" placeholder="Input E-Mail Address" labelPosition="above"/>
              <Text {...password} label="Password" placeholder="Input Password" labelPosition="above"/>
              <ReactPasswordStrength
                className="customClass"
                style={{ display: 'none' }}
                minLength={5}
                minScore={2}
                scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                // changeCallback={foo}
                inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
              />
              <Text {...confirm_password} label="Konfirmasi Password" placeholder="Input Confirmation Password" labelPosition="above"/>
              <Text {...address} label="Address" placeholder="Input Address" labelPosition="above"/>
              <Radio {...gender} label="Gender" placeholder="Input Gender" options={op_gender} labelPosition="above"/>
              <Select2  {...year} label="Brithday (year)" options={op_year} labelPosition="above"/>
            {/* </Col> */}
          </Box>
          {show}
        </Col>
      </Row>
    </Content>
  );
}

function Login(props){
  const email= useInputForm("");
  const password = useInputForm("");

  const [ show, setShow1 ] = useState("");
  
function Show1(t){
  if(t === "")
    setShow1("");
  else
    setShow1(<Box>{t}</Box>);
}

function clickLogin(){
  const out = (
  <>
    {email.value}
  <br/>
    {password.value}
  </>
  );
   Show1(out);
}

return (
  <Content title="Login">
    <Row>
      <Col xs={12}>
        <Box footer={<><Button text="Login" onClick={clickLogin}/><Button text="Back" onClick={() => {setShow1("");}}/></>}>
          {/* <Col md={6}> */}
          {/* <View style={styles.Container}> */}
            <Text {...email} label="E-Mail Address" placeholder="Input E-Mail Address" labelPosition="above"/>
            <Text {...password} label="Password" placeholder="Input Password" labelPosition="above"/>
          {/* </Col> */}
        </Box>
        {show}
      </Col>
    </Row>
  </Content>
);
}

function App(props) {
  return (
    <AdminLTE title={["Dashboard", "Learning"]} titleShort={["N", "D"]} theme="blue" 
    // footer={<Footer />}
    >
      <Navbar.Core>
        <Item icon="fa-sign-out-alt" key="logout" text="Logout" to="/logout"/>
      </Navbar.Core>
      <Sidebar.Core>
        <Item icon="fa-home" key="home" text="Home" to="/" />
        <Item icon="fa-bullhorn" key="announcement" text="Announcement" to="/announcement" />
        <Item icon="fa-registered" key="registrasi" text="Registrasi" to="/registrasi" />
        <Item icon="fa-sign-in-alt" key="login" text="Login" to="/login" />
      </Sidebar.Core>
      <Home exact path="/"/>
      <Registrasi exact path="/registrasi"/>
      <Announcement exact path="/announcement"/>
      <Login exact path="/login"/>
      <Logout exact path="/logout"/>
    </AdminLTE>
  );
}

export default App;