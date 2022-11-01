const Input = ({ valorRequerido }) => {
  return (
    <input
      placeholder={valorRequerido}
      style={{ borderRadius: "15px", borderColor: "blue" }}
    />
  );
};

export default Input;
