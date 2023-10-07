    import Cabecalho from '../cabecalho';
    import Card from '../card';
    import './index.scss';
    import Rodape from '../rodape';




   


    export default function Home(){






        return(
            <div className='mae'>
        <Cabecalho/>

        <div className='container'>

<div className="marquee">
          <marquee behavior="" direction=""><img className='homepiscina' src="./assets/image/pisc-1.png" alt="" />
                                            <img className='homepiscina' src="./assets/image/pisc-2.png" alt="" /> 
                                            <img className='homepiscina' src="./assets/image/pisc-3.png" alt="" />
                                            <img className='homepiscina' src="./assets/image/pisc-4.png" alt="" />
                                            <img className='homepiscina' src="./assets/image/pisc-5.png" alt="" />
                                            <img className='homepiscina' src="./assets/image/pisc-6.png" alt="" />
                                            </marquee>
       
 </div>      

                <div className='subcontainer'>
                    
                                <div className='agrupa-titulos'>
                                    <h1>PRODUTOS</h1>
                                    <h3>CONHEÇA NOSSA LINHA DE PRODUTOS PARA PISCINA !!</h3>
                                </div>
                                
                                <div className='agrupa-card-1'>
                                    
                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-aqueci-1.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>AQUECIMENTO</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>
                                {/* card-1 fim */}


                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-asp.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>ASPIRADORES AUTOMÁTICOS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>
                                {/* card-2 fim */}


                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-bord.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>BORDAS PARA PISCINA</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                    {/* card-3 fim */}

                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-limp.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>LIMPEZAS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                    {/* card-4 fim */}
                        
                                </div> 



                    
                                    {/* segunda parte abaixoo dos cards de categoria */}





                                <div className='agrupa-card-1'>
                                    
                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-casca.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>CASCATAS E DUCHAS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>
                                {/* card-1 , 2fx , fim */}


                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-disp.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>DISPOSITIVOS E ACESSÓRIOS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>
                                {/* card-2 , 2fx , fim */}


                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-purif.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>PURIFICADOR DE ÁGUA </h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                    {/* card-3 , 3fx , fim */}

                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-filt.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>FILTROS E BOMBAS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                        {/* card-4 , 4fx , fim */}
                        
                                </div> 
                                {/* final da 2 faixa */}





                                <div className='agrupa-card-3'>
                                    
                                


                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-ilumin.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>ILUMINAÇÃO</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                    {/* card-1 , 3fx , fim */}

                                    <div className='cardd'>
                                        <div>
                                            <img className='categorias' src="./assets/image/catego-reves.png" alt="" />
                                        </div>

                                        <div className='line'>
                                        </div>

                                        <div>
                                            <h2>REVESTIMENTO DE PISCINAS</h2>
                                            <img className='cruz' src="./assets/image/cruz.png" alt="" />
                                        </div>
                                    </div>

                                        {/* card-1 , 4fx , fim */}
                        
                                </div> 


                </div> {/* < final subcontainer */}


            

            


            <div className='subcontainer2'>
    
                    <h1>UM POUCO DE NOSSOS SERVIÇOS !</h1>
            
            
            <div>
                <img className='servic' src="../assets/image/servic.png" alt="" />
            </div>
            
            </div>
    

    

        <div className='rodape'>

            <div className='agrupa-info'>
                
                <div className="infos">

                    
                    <div className='grupo'>
                        <h2>Institucional</h2>
                        <p>Fale conosco</p>
                        <p>Sobre nós</p>
                    </div>

                    <div className='line'>
                    <div>

                    </div>
                    </div>

                </div>

                <div className="infos">
                    <div className='grupo'>
                        <h2>Ajuda e Suporte</h2>
                        <p>Recursos</p>
                        <p>Política de Entrega</p>
                        <p>Segurança e Privacidade</p>
                    </div>
                    <div className='line'>
                    <div>

                    </div>
                    </div>
                </div>


                <div className="infos">
                    <div className='grupo'>
                        <h2>Atendimento</h2>
                        <p className=''><img src="../assets/image/local.png" alt="" /> Rua Getúlio Vargas, 314 SP</p>
                        <p><img src="../assets/image/tell.png" alt="" /> 11 9 1234-5678</p>
                        <p><img src="../assets/image/email.png" alt="" /> poolmax.2023@gmail.com</p>
                    </div>

                    <div className='line'>
                    <div>

                    </div>
                    </div>
                </div>

                        
                <div className="infos">
                    <div className='grupo-image'>
                        <h2>Redes sociais</h2>
                    <img src="../assets/image/facebook.png" alt="" />
                    <img src="../assets/image/instagram.png" alt="" />
                    <img src="../assets/image/wpp.png" alt="" />
                    <img src="../assets/image/twt.png" alt="" />
                    </div>

                </div>
    

            </div>


        </div>

        </div>   

    

                
            

            </div>  
            
        );
    }



