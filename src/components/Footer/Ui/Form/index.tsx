import { useState } from "react";
import { Button } from "../../../Button";
import styles from './styles.module.scss';
import { toast } from "react-toastify";

interface FormData {
    name: string;
    email: string;
    terms: boolean;
}

export const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        terms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.terms) {
            toast.warning("Por favor, preencha todos os campos e aceite os termos.");
            return;
        }

        setFormData({
            name: '',
            email: '',
            terms: false
        })

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

        toast.success('Informações enviadas com sucesso, em breve entraremos em contato');
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.colunm}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                   
                />
                <label htmlFor="termos" className={styles.label}>
                    <input
                        type="checkbox"
                        name="terms"
                        id="termos"
                        checked={formData.terms}
                        onChange={handleChange}
                       
                    />
                    <p>Aceito os termos e condições</p>
                </label>
            </div>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
            />
            <div className={styles.button}>
                <Button link={false} color="secondary">INSCREVER</Button>
            </div>
        </form>
    );
};
