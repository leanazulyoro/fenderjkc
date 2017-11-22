import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return <header class="page page-1 clearfix">
            <img id="guitar1" src="images/guitar1.png" />
            <div class="col">
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
                    <a class="fb" href="social.html#facebook-page" target="_blank">Facebook</a>
                    <a class="tw" href="social.html#twitter-page" target="_blank">Twitter</a>
                    <a class="yt" href="http://youtube.com/fenderjkc" target="_blank">Youtube</a>
                    <a class="fd" href="feed" target="_blank">Feed</a>
                </div>
            </div>
        </header>
    }
}