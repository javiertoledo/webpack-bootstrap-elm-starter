import 'bootstrap';
import './styles/app.scss';

var Elm = require('../elm/Main.elm');
Elm.Main.embed( document.getElementById( 'main' ) );
