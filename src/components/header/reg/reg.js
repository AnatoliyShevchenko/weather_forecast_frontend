import { useState } from "react";
import { REG } from "../../../apiEndpoints";
import "./reg.css"


const Registration = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(REG, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
            alert(error);
        }
};

return (
    <div className="header-block">
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="email" className="input" value={formData.email} onChange={handleChange} />
            <input type="text" name="username" className="input" value={formData.username} onChange={handleChange} />
            <input type="password" name="password" className="input" value={formData.password} onChange={handleChange} />
            <button type="submit" className="button">Регистрация</button>
        </form>
    </div>
);
};

export default Registration;