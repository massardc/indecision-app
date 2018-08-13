console.log('App.js is running...');

const appObject = {
  title: 'Indecision App',
  subtitle: 'Helps you decide what to do.',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAll = () => {
  appObject.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const option = appObject.options[randomNum];
  console.log('option =>', option);
};

const appRoot = document.getElementById('app');


// JSX - JavaScript XML
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1> 
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          appObject.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};

renderTemplate();