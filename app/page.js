import Header from '@/pages/Header';
import styles from '../app/Home.css'
import Grafica from '@/pages/Grafica';
import Bar from '@/pages/Bar-1';

export default function Home() {
  return(
            <section className="seccion1">
             <div className='bar1'>
                <Bar/>
             </div>
             <div className='hola'>
               <Header/>
               <div className='grafica'>
                   <h1>Buildeando la grafica</h1>
               </div>
              <div className='avisos'>
                 <div className='citas'>
                      <div className='Citas'>
                        <a className='titulo-citas'>Citas</a>
                      </div>
                    <div className='citas-pendientes'>
                          <div className='inf'>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.8879 0C4.88448 0 0 4.88448 0 10.8879C0 13.5721 0.978208 16.0305 2.59438 17.9305C2.61507 17.9624 2.63881 17.9926 2.66653 18.0203C2.6728 18.0266 2.67982 18.0306 2.68609 18.0364C4.68372 20.3253 7.61869 21.7756 10.888 21.7756C14.1572 21.7756 17.0921 20.3253 19.0899 18.0364C19.0961 18.0308 19.1035 18.0264 19.1094 18.0203C19.1371 17.9926 19.1611 17.962 19.1816 17.9305C20.7977 16.0303 21.7759 13.5718 21.7759 10.8879C21.7759 4.88448 16.8913 0 10.8879 0ZM10.8879 20.687C8.10515 20.687 5.59171 19.5193 3.80638 17.6504L4.55221 16.9046C5.27275 16.1842 6.23045 15.7874 7.24875 15.7874H14.5271C15.5454 15.7874 16.5031 16.1842 17.2235 16.9044L17.9693 17.6502C16.1841 19.5191 13.6707 20.687 10.8879 20.687ZM18.6795 16.8209L17.9933 16.1347C17.0673 15.2087 15.8364 14.6985 14.5271 14.6985H7.24875C5.93939 14.6985 4.70867 15.2087 3.78267 16.1347L3.09648 16.8209C1.83821 15.1728 1.08879 13.1165 1.08879 10.8879C1.08879 5.48482 5.48448 1.08884 10.8879 1.08884C16.291 1.08884 20.687 5.48453 20.687 10.8879C20.687 13.1166 19.9376 15.1729 18.6795 16.8209ZM10.8879 4.8996C8.48662 4.8996 6.53263 6.85334 6.53263 9.25485C6.53263 11.6561 8.48638 13.6101 10.8879 13.6101C13.2891 13.6101 15.2431 11.6564 15.2431 9.25485C15.2431 6.85334 13.2892 4.8996 10.8879 4.8996ZM10.8879 12.5211C9.08677 12.5211 7.62157 11.0559 7.62157 9.2548C7.62157 7.45368 9.08681 5.98848 10.8879 5.98848C12.689 5.98848 14.1542 7.45373 14.1542 9.2548C14.1542 11.0559 12.689 12.5211 10.8879 12.5211Z" fill="#24B8F1"/>
                              </svg>
                              <h1 className='citas-inf'>21</h1>
                              <a className='inf-a'>Numero de citas</a>
                          </div>
                    </div>
                    <div className='linea'></div>
                    <div className='citas-pendientes1'>
                          <div className='inf'>
                             
                              <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.68919 0C0.756214 0 0 0.756214 0 1.68919V23.3108C0 24.2438 0.756214 25 1.68919 25H17.9054C18.8384 25 19.5946 24.2438 19.5946 23.3108V1.68919C19.5946 0.756214 18.8384 0 17.9054 0H1.68919ZM4.48619 0.675615H1.68919C1.12927 0.675615 0.675615 1.12925 0.675615 1.68919V23.3108C0.675615 23.8707 1.12925 24.3244 1.68919 24.3244H17.9054C18.4653 24.3244 18.919 23.8707 18.919 23.3108V1.68919C18.919 1.12927 18.4653 0.675615 17.9054 0.675615H15.1084L14.6637 2.00965C14.5259 2.42347 14.1384 2.7027 13.7022 2.7027H5.89273C5.45653 2.7027 5.06913 2.42345 4.93122 2.00965L4.48619 0.675615ZM14.3963 0.675615H5.19866L5.57218 1.79591C5.61813 1.93401 5.74727 2.02685 5.89267 2.02685H13.7022C13.8476 2.02685 13.9767 1.934 14.0226 1.79591L14.3963 0.675615Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04053 7.43237C3.04053 6.87268 3.49416 6.41879 4.0541 6.41879H5.40533C5.96525 6.41879 6.41891 6.87267 6.41891 7.43237V8.7836C6.41891 9.34351 5.96527 9.79717 5.40533 9.79717H4.0541C3.49418 9.79717 3.04053 9.34353 3.04053 8.7836V7.43237ZM4.0541 7.09443C3.86746 7.09443 3.71617 7.24572 3.71617 7.43237V8.7836C3.71617 8.97024 3.86746 9.12153 4.0541 9.12153H5.40533C5.59198 9.12153 5.74327 8.97024 5.74327 8.7836V7.43237C5.74327 7.24572 5.59198 7.09443 5.40533 7.09443H4.0541Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04053 12.4999C3.04053 11.9402 3.49416 11.4864 4.0541 11.4864H5.40533C5.96525 11.4864 6.41891 11.9402 6.41891 12.4999V13.8512C6.41891 14.4111 5.96527 14.8647 5.40533 14.8647H4.0541C3.49418 14.8647 3.04053 14.4111 3.04053 13.8512V12.4999ZM4.0541 12.162C3.86746 12.162 3.71617 12.3133 3.71617 12.4999V13.8512C3.71617 14.0378 3.86746 14.1891 4.0541 14.1891H5.40533C5.59198 14.1891 5.74327 14.0378 5.74327 13.8512V12.4999C5.74327 12.3133 5.59198 12.162 5.40533 12.162H4.0541Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04053 17.5675C3.04053 17.0078 3.49416 16.5539 4.0541 16.5539H5.40533C5.96525 16.5539 6.41891 17.0078 6.41891 17.5675V18.9187C6.41891 19.4786 5.96527 19.9323 5.40533 19.9323H4.0541C3.49418 19.9323 3.04053 19.4787 3.04053 18.9187V17.5675ZM4.0541 17.2296C3.86746 17.2296 3.71617 17.3809 3.71617 17.5675V18.9187C3.71617 19.1054 3.86746 19.2567 4.0541 19.2567H5.40533C5.59198 19.2567 5.74327 19.1054 5.74327 18.9187V17.5675C5.74327 17.3809 5.59198 17.2296 5.40533 17.2296H4.0541Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77026 8.10805C7.77026 7.92141 7.92155 7.77036 8.1082 7.77036H16.5541C16.7408 7.77036 16.8921 7.92141 16.8921 8.10805C16.8921 8.2947 16.7408 8.44599 16.5541 8.44599H8.1082C7.92155 8.44599 7.77026 8.2947 7.77026 8.10805Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77026 13.1756C7.77026 12.989 7.92155 12.8379 8.1082 12.8379H16.5541C16.7408 12.8379 16.8921 12.989 16.8921 13.1756C16.8921 13.3623 16.7408 13.5136 16.5541 13.5136H8.1082C7.92155 13.5136 7.77026 13.3623 7.77026 13.1756Z" fill="#817AF3" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77026 18.2432C7.77026 18.0565 7.92155 17.9055 8.1082 17.9055H16.5541C16.7408 17.9055 16.8921 18.0565 16.8921 18.2432C16.8921 18.4298 16.7408 18.5811 16.5541 18.5811H8.1082C7.92155 18.5811 7.77026 18.4298 7.77026 18.2432Z" fill="#817AF3" fill-opacity="0.8"/>
                                </svg>
                          
                              <h1 className="citas-inf">21</h1>
                              <a className='inf-a'> Numero de citas</a>
                          </div>
                      </div>
                 </div>
                 <div className='inventario'>

                 </div>
              </div>
             </div>
              
            </section>
 );
 
}
