//img
import logo from '../../assets/img/finl.png'

function Error() {
  return (
    <div className="wrapper fadeInDown">
        <div id="formContent">
            

            {
                //icon
            }
            <div className="fadeIn first">
                <img src={logo} id="icon" alt="User Icon" />
            </div>
            
            <div className="fadeIn second">
                <h1>Tus datos son incorrectos, verificalos de nuevo</h1>
            </div>

        </div>
    </div>
  );
}
export default Error;