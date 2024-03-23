import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Icone_Logo.png";

function Sign() {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email,setEmail] = useState("")

    const navigation = useNavigate()

    useEffect(() => {
        console.log(nome)
    }, [nome, senha])

    return (
        <div className="form-signin w-25 m-auto py-5 " >
            <form>
                <div align="center">
                    <img className="mb-4" src={logo} alt="" width="70" height="70" />
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name"
                        onKeyUp={(event) => {
                            setNome(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingInput">Nome:</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name"
                        onKeyUp={(event) => {
                            setNome(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingInput">Sobrenome:</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onKeyUp={(event) => {
                            setEmail(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingInput">E-Mail:</label>
                    </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onKeyUp={(event) => {
                            setSenha(event.target.value)
                        }}
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                <button
                    className="w-100 btn btn-lg btn-danger"
                    type="submit"
                    onClick={() => {
                        navigation("/", {
                            state: {
                                nome: nome,
                                senha: senha,
                                email: email
                            }
                        })
                    }}
                >
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Sign;