const FunctionalComponent = ({ nombre, apellido }) => {
  return (
    <div>
      <h2>Hola soy un componente funcional</h2>
      <h1>
        Mi nombre es {nombre} {apellido}
      </h1>
    </div>
  );
};

export default FunctionalComponent;
