console.log('App.js is running...');

const appObject = {
  title: 'Indecision App',
  subtitle: 'Helps you decide what to do.',
  options: ['One', 'Two']
}
// JSX - JavaScript XML
const template = (
  <div>
    <h1>{appObject.title}</h1> 
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const subtractOne = () => {
  if (count > 0) {
    count--;
    renderCounterApp();
  }
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={subtractOne}>-1</button>
      <button onClick={addOne}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();