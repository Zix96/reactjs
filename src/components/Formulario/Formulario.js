import Input from "../Input/Input";

const Formulario = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Input valorRequerido="Nombre" />
      <Input valorRequerido="Apellido" />
      <Input valorRequerido="Telefono" />
      <Input valorRequerido="Mail" />
    </form>
  );
};

export default Formulario;
