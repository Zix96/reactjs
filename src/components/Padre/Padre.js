const Padre = ({ saludo, children }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      {children}
    </div>
  );
};

export default Padre;
