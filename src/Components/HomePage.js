import React, { Component } from "react"
import { BodyPage, Container , Boxcar , CardCar , BoxButton , BoxListCar , CardCarList , BoxButtonListCar ,BoxRessTotal , BoxCardList , BoxCardInfo ,  BoxImgCar , ImgRemove } from "./StylesCarsProject"
import Carros from "./StateCarros"
import Addcarro from "../Imgs/add.svg"
import ImgCar from "../Imgs/car.svg"
import DellCar from "../Imgs/remove.svg"



export default class Home extends Component {

    state = {
        carros: Carros,
        listCar: [],
        valorTotal: []
    };

    
    Addcarro = (x) => {
        if (x.on === true) {
            this.setState({
                listCar: this.state.listCar.concat(x),
                valorTotal: this.state.valorTotal.concat(x.preco)
            });
            x.on = false;
        }
    };

    DellCarro = (x) => {
        this.setState({
            valorTotal: this.state.valorTotal.concat(-x.preco),
            listCar: this.state.listCar.filter(
                (item) => item.id !== x.id
            )
        });
        x.on = true;
    };

    ClearList = () => {
        this.setState({
            listCar: [],
            valorTotal: [],
            carros: this.state.carros.map((item) => ({
                ...item,
                on: true
            }))
        });
    };

    render() {
        return (
            <BodyPage>

                <div>
                    <h1>Lojas de carros!</h1>
                </div>

                <Container>
                    <Boxcar>
                        {this.state.carros.map((item,index) => (
                            <CardCar key={index} isactivate={item.on}>
                                <BoxButton>
                                    <h3>{item.nome}</h3>
                                    <img
                                        src={Addcarro}
                                        alt="imagem representativa de um botão com o simbulo de operações matematicas +"
                                        onClick={() => this.Addcarro(item)}
                                    />
                                </BoxButton>
                                <BoxCardInfo>
                                    <p>
                                        <b>Montadora:</b>
                                        {item.montadora}
                                    </p>
                                    <p>
                                        <b>Preço:</b>
                                        {item.preco}.000
                                    </p>
                                    <p>
                                        <b>Tipo:</b>
                                        {item.tipo}
                                    </p>
                                </BoxCardInfo>
                            </CardCar>
                        ))}
                    </Boxcar>

                    <BoxListCar>
                        <BoxCardList>
                            {this.state.listCar.length <= 0 ? (
                                < BoxImgCar >
                                    <img src={ImgCar} alt="imagem representativa de um carro" />
                                    <h2>Arraste aqui seus carros </h2>
                                </ BoxImgCar >
                            ) : (
                                this.state.listCar.map((item,index) => (
                                    <CardCarList key={index}>
                                        <BoxButtonListCar>
                                            <h3>{item.nome}</h3>
                                            <ImgRemove
                                                src={DellCar}
                                                alt="imagem representativa de um botão com o simbulo de operações matematicas -"
                                                onClick={() => this.DellCarro(item)}
                                            />
                                        </BoxButtonListCar>

                                        <div>
                                            <p>
                                                <b>Tipo:</b>
                                                {item.tipo}
                                            </p>

                                            <p>
                                                <b>Preço:</b>
                                                {item.preco}.000
                                            </p>
                                        </div>
                                    </CardCarList>
                                ))
                            )}
                        </BoxCardList>

                        <BoxRessTotal>
                            <h3>Total </h3>
                            <h3>
                                R$ {this.state.valorTotal.reduce(
                                    (valorAcumulado, valorAtual) => valorAcumulado + valorAtual,
                                    0
                                )}
                                .000
                            </h3>
                        </BoxRessTotal>
                    </BoxListCar>
                </Container>

                <div>
                    <div onClick={this.ClearList}>
                        <h2>Limpar lista</h2>
                    </div>
                </div>
            </BodyPage>
        );
    }
}
