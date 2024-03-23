import ServiçosCard from "../../componentes/ServiçosCard"
import {serviços} from "../../mocks/serviços"

const Serviços = () => {

    return (
            <div className="container text-center py-5">
                <div className="row">
                    {
                        serviços.map((serviços, indice) => {
                            return (
                                <div className="col" key={indice}>
                                    <ServiçosCard
                                        imagem={serviços.imagem}
                                        titulo={serviços.titulo}
                                        texto={serviços.texto}
                                        rotulo={serviços.rotulo}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}
export default Serviços;