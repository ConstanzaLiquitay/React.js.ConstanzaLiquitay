import { useState } from "react";

const Formulario = () => {

    const [formData, setFormData] = useState({
        name:"",
        email: "",
        phone:"",

    });

    console.log(formData);


    const handleChange = (event) => {
        console.log("handleChange", event.target.value, event.target.name);

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleReset = () => {
        setFormData({
            name:"",
            phone:"",
            email:"",
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit", formData);
    
        alert(JSON.stringify(formData));

        handleReset();
    }
  

    return (
         <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Telefono</label>
        <input
          value={formData.phone}
          name="phone"
          id="phone"
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>

  )
}

export default Formulario
