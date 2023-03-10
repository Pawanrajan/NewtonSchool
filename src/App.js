import './App.css';
const User = (props) => {
  const { name } = props;
  console.log('Props->', props);
  return (
    <div className="user-container">
      <h3>
        {name.firstName} {name.lastName}
      </h3>
      <h3>{props.lastName}</h3>
    </div>
  );
};

function App() {
  const userName = { firstName: 'pawan', lastName: 'Rajan' };
  return (
    <main>
      <p>hii</p>
      <User name={userName} />
      <User name={userName} />
    </main>
  );
}
export default App;
