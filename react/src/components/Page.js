import React, { Component } from 'react';
import guitar1 from "../images/guitar1.png";
import guitar2 from "../images/guitar2.png";
import guitar3 from "../images/guitar3.png";
import book from "../images/book.png";
import caracteristicas_a from "../images/caracteristicas_a.png";
import caracteristicas_b from "../images/caracteristicas_b.png";
import caracteristicas_c from "../images/caracteristicas_c.png";
import caracteristicas_d from "../images/caracteristicas_d.png";
import kurt1 from "../images/kurt1.png";
import artistas_kurt_1 from "../images/artistas/kurt_1.jpg";
import artistas_kurt_2 from "../images/artistas/kurt_2.jpg";
import artistas_ratliff_1 from "../images/artistas/kurt_3.jpg";
import artistas_ratliff_2 from "../images/artistas/ratliff_1.jpg";
import artistas_ratliff_3 from "../images/artistas/ratliff_2.jpg";
import artistas_kurt_3 from "../images/artistas/ratliff_3.jpg";
import galeria_foto1 from "../images/galeria/foto1.jpg";
import galeria_foto2 from "../images/galeria/foto2.jpg";
import galeria_foto3 from "../images/galeria/foto3.jpg";
import galeria_foto4 from "../images/galeria/foto4.jpg";
import galeria_foto5 from "../images/galeria/foto5.jpg";

export default class Page extends Component {
    render() {
        return <div>
            <a id="gotop" href="javascript:$.scrollTo('#home',300);"/>

            <div id="wrapper" className="clearfix">

                <div id="home" className="page-wrapper clearfix">
                    <header className="page page-1 clearfix">
                        <img id="guitar1" src={guitar1} />
                        <div className="col">
                            <nav>
                                <ul>
                                    <li><a href="javascript:$.scrollTo('#caracteristicas',800, {'offset': -40});">Caracter&iacute;sticas</a></li>
                                    <li><a href="javascript:$.scrollTo('#galeria',800, {'offset': -40});">Galer&iacute;a</a></li>
                                    <li><a href="javascript:$.scrollTo('#especificaciones',800, {'offset': -40});">Especificaciones</a></li>
                                    <li><a href="javascript:$.scrollTo('#artistas',800, {'offset': -40});">Art&iacute;stas</a></li>
                                    <li><a href="javascript:$.scrollTo('#contacto',800, {'offset': -40});">Contacto</a></li>
                                </ul>
                            </nav>

                            <h1>Jaguar Kurt Cobain</h1>

                            <div id="social-btns">
                                <label>Seguinos</label>
                                <a className="fb" href="social.html#facebook-page" target="_blank">Facebook</a>
                                <a className="tw" href="social.html#twitter-page" target="_blank">Twitter</a>
                                <a className="yt" href="http://youtube.com/fenderjkc" target="_blank">Youtube</a>
                                <a className="fd" href="feed" target="_blank">Feed</a>
                            </div>
                        </div>
                    </header>
                </div>

                <div id="caracteristicas" className="page-wrapper">
                    <section className="page page-2 clearfix">
                        <header>
                            <h1>Caracter&iacute;sticas</h1>
                        </header>

                        <img id="guitar2" src={guitar2} width="334" height="809"/>
                        <div className="main">
                            <p className="bajada">Fender presenta uno de los modelos "signature" más característicos de su historia: la Kurt Cobain Jaguar, diseñada respetando los mínimos detalles de la particular y ajetreada Jaguar de 1965 que Cobain empuñara a principios de los años 90, cuando Nirvana reinaba en el rock y lideraba un movimiento sorprendente desde lo musical y subversivo hasta lo cultural.</p>
                            <article className="odd">
                                <figure>
                                    <img src={caracteristicas_a} width="152" height="152"/>
                                </figure>
                                <h2>Botones cil&iacute;ndricos</h2>
                                <p>con triple estriado (volumen- volumen- tono), selector de tres posiciones, puente  Adjusto-Matic™ en cromo negro.</p>
                            </article>
                            <article className="even">
                                <figure>
                                    <img src={caracteristicas_c} width="152" height="152"/>
                                </figure>
                                <h2>Diapas&oacute;n</h2>
                                <p>con marcadores de puntos perlados, pala Stratocaster con logo "spaghetti" al estilo de los años 50.</p>
                            </article>
                            <article className="odd">
                                <figure>
                                    <img src={caracteristicas_b} width="152" height="152"/>
                                </figure>
                                <h2>Cuerpo</h2>
                                <p>de aliso con acabado envejecido Road <br/>Worn incluidos los herrajes.</p>
                            </article>
                            <article className="even">
                                <figure>
                                    <img src={caracteristicas_d} width="152" height="152"/>
                                </figure>
                                <h2>Pastilla de m&aacute;stil</h2>
                                <p> humbucker DiMarzio® DP103 PAF 36th Anniversary, y pastilla de puente DP100 Super Distortion.</p>
                            </article>
                        </div>
                        <img id="kurt1" src={kurt1} width="496" height="759"/>
                    </section>
                </div>

                <div id="galeria" className="page-wrapper clearfix">
                    <section className="page page-3">
                        <header>
                            <h1>Galer&iacute;a</h1>
                        </header>

                        <div id="galeria-container">
                            <div className="controls">
                                <a id="galeria-prev" className="prev" href="#">Anterior</a>
                                <a id="galeria-next" className="next" href="#">Siguiente</a>
                            </div>
                            <div id="galeria-slider" className="pics" style={{position: "relative"}}>
                                <img src={galeria_foto1} />
                                <img src={galeria_foto2} />
                                <img src={galeria_foto3} />
                                <img src={galeria_foto4} />
                                <img src={galeria_foto5} />
                            </div>
                        </div>

                    </section>
                </div>

                <div id="especificaciones" className="page-wrapper clearfix">
                    <section className="page page-4">
                        <header>
                            <h1>Especificaciones</h1>
                        </header>

                        <img id="guitar3" src={guitar3}/>

                        <div id="tabs">
                            <ul>
                                <li><a href="#tabs-1">Cuerpo y m&aacute;stil</a></li>
                                <li><a href="#tabs-2">Electr&oacute;nica y Hardware</a></li>
                                <li><a href="#tabs-3">Otras</a></li>
                            </ul>

                            <div id="tabs-1" className="tab">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Cuerpo</b>:</td>
                                        <td className="specs_desc">Aliso (700700) Alder</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Forma del cuerpo</b>:</td>
                                        <td className="specs_desc">Jaguar®</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Acabado del cuerpo</b>:</td>
                                        <td className="specs_desc"><ul><li>(0143000700, 0143020700)<br/>Gloss Lacquer</li></ul></td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Perfil del mástil</b>:</td>
                                        <td className="specs_desc">Forma C</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Número de trastes</b>:</td>
                                        <td className="specs_desc">22</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Tamaño de traste</b>:</td>
                                        <td className="specs_desc">Médium Jumbo</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Marcadores de posición</b>:</td>
                                        <td className="specs_desc">Incrustaciones de marcadores de posición de punto nacarados</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Radío del diapasón</b>:</td>
                                        <td className="specs_desc">Radio 9.5"  (241 mm)</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Diapasón</b>:</td>
                                        <td className="specs_desc">Palosanto</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Material del mástil</b>:</td>
                                        <td className="specs_desc">Arce</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Acabado del mástil</b>:</td>
                                        <td className="specs_desc">Gloss Urethane</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Ancho de cejilla</b>:</td>
                                        <td className="specs_desc">1.650” (42 mm)</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Longitud de la escala</b>:</td>
                                        <td className="specs_desc">24" (61 cm)</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="tabs-2" className="tab">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Configuración de pastilla</b>:</td>
                                        <td className="specs_desc">H/H</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Pastilla del puente</b>:</td>
                                        <td className="specs_desc">Dimarzio® Super Distortion® DP100</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Neck Pickup</b>:</td>
                                        <td className="specs_desc">DiMarzio® PAF DP-103 36th Anniversary Humbucking Pickup (Neck)</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Selector de pastillas</b>:</td>
                                        <td className="specs_desc">Selector de 3 posiciones: Posición 1: Pastilla del puente, Posición 2: Pastillas del puente y mástil, Posición 3: Pastilla del mástil</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Controles</b>:</td>
                                        <td className="specs_desc">Lead Circuit Controls (Slide Switch Down): Volume (Neck), Volume (Bridge), Master Tone; Rhythm Circuit Controls (Slide Switch Up): Two Thumbwheel Controls for Neck Pickup Volume and Tone</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="tabs-3" className="tab">
                                <table cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Model Name</b>:</td>
                                        <td className="specs_desc">Kurt Cobain Jaguar®</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Series</b>:</td>
                                        <td className="specs_desc">Artist</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Color / Part #</b>:</td>
                                        <td className="specs_desc"><ul><li><b>3-Color Sunburst</b><br/>014-3000-700</li></ul><ul><li><b>3-Color Sunburst</b><br/>014-3020-700</li></ul></td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Herrajes</b>:</td>
                                        <td className="specs_desc">Níquel/Cromo</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Puente</b>:</td>
                                        <td className="specs_desc">Puente Adjusto-Matic™ con cordal de trémolo flotante tipo Vintage y botón de bloqueo de trémolo.</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Hueso de las cuerdas</b>:</td>
                                        <td className="specs_desc">Hueso sintético de cejuela</td>
                                    </tr>
                                    <tr className="even">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Clavijeros</b>:</td>
                                        <td className="specs_desc">Gotoh® Cast/Sealed Tuning Machines</td>
                                    </tr>
                                    <tr className="odd">
                                        <td className="specs_name" valign="top" width="200" nowrap=""><b>Interruptor auxiliar</b>:</td>
                                        <td className="specs_desc">2-Position On/Off Slide Switch for Switching Between "Lead" and "Rhythm" Circuits</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="especs-close"><div></div></div>
                        </div>
                        <figure>
                            <figcaption>Contiene un exclusivo libro Fender con 32 páginas sobre Kurt Cobain con imágenes y comentarios del fotógrafo Charles Peterson y una entrevista con el técnico de guitarristas de Nirvana Earnie Bailey.</figcaption>
                            <img id="book" src={book}/>
                        </figure>
                    </section>

                </div>

                <div id="artistas" className="page-wrapper alt clearfix">
                    <section className="page page-5">
                        <header>
                            <h1>Art&iacute;stas</h1>
                        </header>

                        <div id="artists-carrousel-controls" className="controls">
                            <a className="prev" href="#">Anterior</a>
                            <a className="next" href="#">Siguiente</a>
                        </div>

                        <div id="artists-carrousel">
                            <article className="artist">
                                <header>
                                    <h2>Kurt Cobain</h2>
                                    <p>Cobain empu&ntilde;&oacute; esta guitarra a principios de los años 90, cuando Nirvana reinaba en el rock y lideraba un movimiento sorprendente desde lo musical y subversivo hasta lo cultural.</p>
                                </header>
                                <div className="artist-gallery">
                                    <figure className="first">
                                        <img src={artistas_kurt_1} />
                                    </figure>
                                    <figure>
                                        <img src={artistas_kurt_2} />
                                    </figure>
                                    <figure className="last">
                                        <img src={artistas_kurt_3} />
                                    </figure>
                                </div>
                            </article>

                            <article className="artist">
                                <header>
                                    <h2>Tommy Ratliff</h2>
                                    <p>Tommy es el primer guitarrista de la banda de Adam Lambert. Tocó el bajo para Adam durante todo el GlamNation. Es originalmente guitarrista pero estaba preparado para aprender partes en bajo para formar parte de la banda.</p>
                                </header>
                                <div className="artist-gallery">
                                    <figure className="first">
                                        <img src={artistas_ratliff_1} />
                                    </figure>
                                    <figure>
                                        <img src={artistas_ratliff_2} />
                                    </figure>
                                    <figure className="last">
                                        <img src={artistas_ratliff_3} />
                                    </figure>
                                </div>
                            </article>
                        </div>


                    </section>
                </div>

                <div id="contacto" className="page-wrapper">
                    <section className="page page-6">
                        <header>
                            <h1>Contacto</h1>
                        </header>

                        <menu>
                            <ul>
                                <li><a href="#">Sobre Fender</a></li>
                                <li><a href="#">Informaci&oacute;n de contacto</a></li>
                                <li><a href="#">Fender en directo</a></li>
                                <li><a href="#">Newsroom</a></li>
                                <li><a href="#">Pol&iacute;tica de privacidad</a></li>
                                <li><a href="#">Condiciones de uso</a></li>
                            </ul>
                        </menu>

                        <div className="social-shares">
                            <div className="fb">
                                <label>Facebook</label>
                                <div className="share-fb">
                                    <div className="fb-like" data-href="http://www.fenderjkc.com.ar" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div></div>
                                <a href="social.html#facebook-page" target="_blank">facebook.com/fenderjkc</a>
                            </div>
                            <div className="tw">
                                <label>Twitter</label>
                                <div className="share-tw">
                                    <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://www.fenderjkc.com.ar" data-via="fenderjkc" data-lang="es">Twittear</a>
                                </div>
                                <a href="social.html#twitter-page" target="_blank">twitter.com/fenderjkc</a>
                            </div>
                        </div>

                        <form id="form-contacto">
                            <p className="description">Para información respecto de distribuidoras, precios, disponibilidad, otros productos y accesorios, por favor escríbenos através del siguiente formulario:</p>
                            <input type="text" id="name" name="name" placeholder="Nombre"/>
                            <input type="text" id="email" name="email" placeholder="E-mail"/>
                            <textarea name="message" placeholder="Consulta"></textarea>
                            <a href="#" id="submit" className="submit">Enviar</a>
                        </form>

                    </section>
                </div>
                <div id="legales"className="page-wrapper">
                    <div className="page">
                        <p className="left">Copyright &copy; 2012 Fender Musical Instruments Corporation. Todos los derechos reservados.</p>
                        <p className="right">Dise&ntilde;o y desarrollo: Leandro Almeida</p>
                    </div>
                </div>

            </div>


        </div>
    }
}