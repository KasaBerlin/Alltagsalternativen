// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const navLinks=[
  {path:"Hallo",comp:"App"},
  {path:"Was ist Sexismus?", comp:"Was"},
  {path:"Gender IFAQs",comp:"Ifaqs"},
  {path:"Zweigeschlechtlichkeit",comp:"Zwei"},
  {path:"Für Selbstverteiler_Innen",comp:"Selbstverteiler"},
  {path:"Dies Und Das",comp:"DiesUndDas"},
  {path:"Links",comp:"Links"},
  {path:"Kontakt", comp:"Kontakt"} ]

const getLinks=()=>navLinks.map(({path,comp},i)=>console.log(`<Route key=${i} exact path=${"/"+path} component=${comp})/>`))

getLinks();