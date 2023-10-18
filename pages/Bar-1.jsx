import React from "react";
import estiloBar from '@/styles/Bar.css';
import Header from './Header.jsx';
import Grafica from "./Grafica";

function Bar() {     
    return(
            <div className="Bar">
                    <div className="Logo">
                        <a className="edi"> Zona Sana</a>
                    </div>
                    <div className="Options">
                       <div className="paginas-div">
                       <ul className="Paginas-ul">
                          <li className="Paginas">

                            <a className="Paginas-Enlaces">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 21H5C3.89543 21 3 20.1046 
                                3 19V12.2969C3 11.7852 3.19615 11.2929 3.54809 10.9215L10.5481 3.53257C11.3369 2.69989 12.663 2.69989 13.4519 3.53257L20.4519 10.9215C20.8038 11.2929 21 11.7852 21 12.2969V19C21 20.1046 20.1046 21 19 21H14M10 21V15.5C10 15.2239 10.2239 15 10.5 15H13.5C13.7761 15 14 15.2239 14 15.5V21M10 21H14" stroke="#0ACF83" stroke-width="1.5"/>
                                </svg> Menu</a></li>
                          <li className="Paginas">
                            <a className="Paginas-Enlaces"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M22.0102 15.5633L22.0109 15.5659L22.0109 15.5659C22.1775 16.1908 21.8186 16.8695 21.185 16.992L15.2478 18.5567C15.3216 19.7232 14.569 20.8123 13.4004 21.1164C12.2322 21.4433 11.0181 20.8702 10.5099 19.8297L9.53051 20.0967L9.52946 20.097C9.32195 20.1488 9.10627 20.0453 9.05193 19.8293C9.05188 19.8292 9.05184 19.829 9.0518 19.8288L5.05583 5.11524L3.15679 5.59009L3.14467 5.54159L3.15679 5.59009C2.66761 5.7124 2.13082 5.41953 1.98428 4.90644M22.0102 15.5633L2.03235 4.89271M22.0102 15.5633L22.0102 15.5631L21.5701 13.9419C21.57 13.9417 21.57 13.9416 21.5699 13.9414C21.5156 13.7254 21.2999 13.622 21.0924 13.6737L21.0919 13.6739L19.4481 14.1017L17.6072 7.26778C17.6072 7.26764 17.6071 7.2675 17.6071 7.26736C17.5528 7.0513 17.3371 6.9478 17.1296 6.99959L17.1287 6.99981L13.5385 7.96023L12.5554 4.32466C12.5553 4.3245 12.5553 4.32434 12.5553 4.32419C12.5009 4.10816 12.2852 4.00468 12.0777 4.05647L12.0771 4.05662L7.44408 5.27222M22.0102 15.5633L7.44408 5.27222M1.98428 4.90644L2.03235 4.89271M1.98428 4.90644C1.98428 4.90645 1.98428 4.90645 1.98428 4.90645L2.03235 4.89271M1.98428 4.90644C1.83695 4.39074 2.15686 3.87817 2.66749 3.73232L2.66916 3.73185L2.66917 3.73188L6.39939 2.8052M2.03235 4.89271C1.89335 4.40614 2.19449 3.91942 2.68123 3.7804L6.41224 2.85352M6.39939 2.8052C6.3991 2.80528 6.39882 2.80536 6.39853 2.80544L6.41224 2.85352M6.39939 2.8052L6.40019 2.805L6.41224 2.85352M6.39939 2.8052C6.58712 2.75218 6.80093 2.85932 6.85458 3.07278L6.85448 3.07239L6.80618 3.08533M6.41224 2.85352C6.57437 2.80729 6.75979 2.89992 6.80618 3.08533M6.80618 3.08533L6.85468 3.07319M6.80618 3.08533L7.40866 5.33321L6.85468 3.07319M6.85468 3.07319L7.44408 5.27222M6.85468 3.07319L7.44408 5.27222M5.69548 4.57859L5.69555 4.57857L5.69466 4.57589C5.64281 4.42053 5.48733 4.28679 5.3228 4.28679H5.25329V4.28532L5.2414 4.28823L2.97039 4.84445L2.97038 4.84441L2.96856 4.84493C2.90035 4.8644 2.84749 4.85275 2.80878 4.8273C2.76892 4.8011 2.73981 4.75737 2.72648 4.70651C2.69967 4.60414 2.73901 4.49137 2.85679 4.45443L6.21445 3.60934L9.86283 17.0483C9.86287 17.0485 9.86291 17.0486 9.86296 17.0488C9.91729 17.2648 10.133 17.3683 10.3405 17.3165L10.3409 17.3164L10.8072 17.1954C10.3552 17.7407 10.1772 18.4623 10.2721 19.1303L9.69195 19.2704L5.69548 4.57859ZM11.0948 19.2924L11.0947 19.2923C10.8018 18.3461 11.3422 17.3784 12.2879 17.1307L12.2884 17.1306C13.2798 16.8603 14.2479 17.5141 14.4277 18.4131L14.4277 18.4132L14.4279 18.4141C14.63 19.3353 14.0467 20.1691 13.1886 20.4177C12.287 20.6655 11.3646 20.1695 11.0948 19.2924ZM20.9754 16.2926L15.0636 17.8567C14.8149 17.2186 14.2794 16.7014 13.6324 16.4618C14.2561 16.2964 14.9238 16.1196 15.6118 15.9374C17.3835 15.4681 19.2904 14.9631 20.9301 14.5248L21.2647 15.7743L21.2648 15.7745C21.3272 16.0037 21.203 16.23 20.9764 16.2923C20.9762 16.2924 20.976 16.2925 20.9758 16.2925L20.9754 16.2926ZM18.7255 14.3125L10.5027 16.4884L8.74449 10.0267L16.9673 7.85077L18.7255 14.3125ZM7.65536 6.01759L11.9153 4.88459L12.7931 8.14821L8.53301 9.28121L7.65536 6.01759Z" fill="#12B76A" stroke="#12B76A" stroke-width="0.1"/>
                                </svg>
                                Inventario
                                </a></li>
                          <li className="Paginas">
                            
                            <a className="Paginas-Enlaces">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.4445 20.8889V12.8039C16.4445 12.5008 16.7022 12.2551 17.0001 12.2551C17.3068 12.2551 17.5556 12.4946 17.5556 12.8039V20.8889H18.675C19.889 20.8889 20.889 19.8918 20.889 18.6749V5.32498C20.889 4.11098 19.8919 3.11099 18.675 3.11099H5.32512C4.11113 3.11099 3.11113 4.10806 3.11113 5.32498V18.6749C3.11113 19.8889 4.1082 20.8889 5.32512 20.8889H6.44454V15.5903C6.44454 15.2776 6.70221 15.0239 7.00007 15.0239C7.30685 15.0239 7.5556 15.2703 7.5556 15.5903V20.8889H9.77784V10.0379C9.77784 9.73333 10.0355 9.48652 10.3334 9.48652C10.6403 9.48652 10.889 9.72424 10.889 10.0379V20.8889H13.1111V5.88611C13.1111 5.58087 13.3689 5.33337 13.6668 5.33337C13.9736 5.33337 14.2223 5.58114 14.2223 5.88611V20.8889H16.4445ZM2 5.32505C2 3.4887 3.5032 2 5.32505 2H18.675C20.5113 2 22 3.5032 22 5.32505V18.675C22 20.5113 20.4968 22 18.675 22H5.32505C3.4887 22 2 20.4968 2 18.675V5.32505Z" fill="#12B76A"/>
                            </svg>
                                Estadistica</a></li>
                          <li className="Paginas">
                            
                            <a className="Paginas-Enlaces">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9999 2.00018C6.48613 2.00018 2 6.48631 2 12.0001C2 14.4654 2.89843 16.7233 4.38279 18.4684C4.4018 18.4977 4.4236 18.5254 4.44906 18.5508C4.45482 18.5566 4.46127 18.5603 4.46702 18.5657C6.30174 20.6679 8.99734 21.9998 12 21.9998C15.0027 21.9998 17.6982 20.6679 19.533 18.5657C19.5387 18.5604 19.5455 18.5564 19.5509 18.5508C19.5764 18.5254 19.5984 18.4973 19.6172 18.4684C21.1016 16.7231 22 14.4652 22 12.0001C22 6.48631 17.5139 2.00018 12.0001 2.00018H11.9999ZM11.9999 21C9.44414 21 7.13567 19.9276 5.49595 18.2111L6.18095 17.5261C6.84273 16.8645 7.72232 16.5 8.65758 16.5H15.3424C16.2776 16.5 17.1572 16.8645 17.8188 17.5259L18.5038 18.2109C16.8642 19.9274 14.5557 21 11.9998 21H11.9999ZM19.1561 17.4492L18.5259 16.819C17.6754 15.9685 16.5449 15.4999 15.3424 15.4999H8.65758C7.455 15.4999 6.32465 15.9685 5.47417 16.819L4.84395 17.4492C3.68829 15.9356 2.99999 14.047 2.99999 12.0001C2.99999 7.03769 7.03719 3.00022 11.9999 3.00022C16.9624 3.00022 20.9999 7.03742 20.9999 12.0001C20.9999 14.0471 20.3116 15.9357 19.1561 17.4492H19.1561ZM11.9999 6.50019C9.79449 6.50019 7.99986 8.2946 7.99986 10.5003C7.99986 12.7057 9.79427 14.5003 11.9999 14.5003C14.2054 14.5003 16 12.7059 16 10.5003C16 8.2946 14.2054 6.50019 11.9999 6.50019ZM11.9999 13.5001C10.3457 13.5001 8.99999 12.1544 8.99999 10.5002C8.99999 8.84598 10.3457 7.50027 11.9999 7.50027C13.6541 7.50027 14.9999 8.84602 14.9999 10.5002C14.9999 12.1544 13.6541 13.5001 11.9999 13.5001Z" fill="#12B76A"/>
                                    </svg>

                                Proveedores</a></li>
                          <li className="Paginas">
                            
                            <a className="Paginas-Enlaces">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.187 21.3776L7.18698 21.3776L7.18863 21.3793C7.21922 21.4098 7.25378 21.4368 7.2959 21.4555C7.33846 21.4744 7.38353 21.4826 7.43226 21.4826H21.753C21.8498 21.4826 21.9382 21.4499 22.0028 21.3854C22.0673 21.321 22.1 21.2325 22.1 21.1356L22.0998 6.81485C22.0998 6.6871 22.0357 6.57088 21.9191 6.52642L15.2813 2.59282C15.2551 2.55776 15.2202 2.53749 15.1847 2.52738C15.1493 2.51729 15.1121 2.51736 15.0901 2.5174L15.0863 2.5174H2.24698C2.15022 2.5174 2.06177 2.55007 1.99725 2.61455C1.93273 2.67904 1.9 2.76751 1.9 2.86438V15.7037C1.9 15.7524 1.90821 15.7974 1.92709 15.84C1.94561 15.8817 1.97221 15.916 2.0025 15.9465C2.00279 15.9468 2.00307 15.947 2.00335 15.9473L7.187 21.3776ZM21.406 20.7886H7.77908V7.1617H12.5173V10.7653C12.5173 10.8621 12.5499 10.9506 12.6144 11.0151C12.6789 11.0796 12.7674 11.1123 12.8643 11.1123H16.0741C16.1709 11.1123 16.2593 11.0797 16.3239 11.0152C16.3884 10.9507 16.4211 10.8622 16.4211 10.7653L16.4209 7.1617H21.406L21.406 20.7886ZM13.2111 10.4184V7.16179H15.7272V10.4184H13.2111ZM11.5402 3.21114H14.9849L20.4748 6.46779H16.4253L11.5402 3.21114ZM12.9685 6.46796L8.08336 3.21129L10.2908 3.21114L15.1759 6.46781L12.9685 6.46796ZM7.54007 6.46796L3.28304 3.21114L6.83396 3.21114L11.7191 6.4678L7.54007 6.46796ZM2.59407 15.5647V3.56023L7.08535 6.98775V20.2688L2.59407 15.5647Z" fill="#12B76A" stroke="#12B76A" stroke-width="0.2"/>
                                </svg>
                                Ventas</a></li>
                          <li className="Paginas">
                            
                            <a className="Paginas-Enlaces">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0229 17.8548H9.64885C9.55729 17.8548 9.49615 17.9159 9.49615 18.0075C9.49615 18.099 9.55729 18.1602 9.64885 18.1602H11.0229C11.1145 18.1602 11.1756 18.099 11.1756 18.0075C11.1756 17.9311 11.0993 17.8548 11.0229 17.8548Z" fill="#12B76A"/>
                                    <path d="M19.6773 2.84641C19.2276 2.39664 18.63 2.1492 17.9934 2.1492L6.56615 2.14893C5.92962 2.14893 5.33236 2.39636 4.88227 2.84613C4.43249 3.29591 4.18506 3.89346 4.18506 4.53002V19.7678C4.18506 20.4044 4.43249 21.0016 4.88227 21.4517C5.33204 21.9015 5.92959 22.1489 6.56615 22.1489H17.9949C18.6314 22.1489 19.2287 21.9015 19.6788 21.4517C20.1285 21.0019 20.376 20.4044 20.376 19.7678V4.53002C20.3748 3.89376 20.1274 3.29623 19.6776 2.84642L19.6773 2.84641ZM19.4229 19.7686C19.4229 20.5566 18.7825 21.197 17.9946 21.197H6.56585C5.77788 21.197 5.13747 20.5566 5.13747 19.7686V4.53008C5.13747 3.74211 5.7779 3.10171 6.56585 3.10171H17.9946C18.7825 3.10171 19.4229 3.74214 19.4229 4.53008V19.7686Z" fill="#12B76A"/>
                                    <path d="M10.0385 10.86L8.47036 12.4284L7.85498 11.813C7.66934 11.6274 7.36707 11.6274 7.18171 11.813C6.99607 11.9987 6.99607 12.301 7.18171 12.4863L8.13442 13.439C8.22431 13.5289 8.34483 13.5787 8.47147 13.5787C8.59811 13.5787 8.71891 13.5289 8.80853 13.439L10.7136 11.5339C10.8993 11.3483 10.8993 11.046 10.7136 10.8606C10.528 10.6747 10.2238 10.6736 10.0384 10.8601L10.0385 10.86Z" fill="#12B76A"/>
                                    <path d="M10.0385 15.6211L8.47036 17.1892L7.85498 16.5738C7.66934 16.3881 7.36707 16.3881 7.18171 16.5738C6.99607 16.7594 6.99607 17.0617 7.18171 17.2471L8.13442 18.1998C8.22431 18.2897 8.34483 18.3395 8.47147 18.3395C8.59811 18.3395 8.71891 18.2897 8.80853 18.1998L10.7136 16.2946C10.8993 16.109 10.8993 15.8067 10.7136 15.6214C10.528 15.4355 10.2238 15.4355 10.0384 15.6211L10.0385 15.6211Z" fill="#12B76A"/>
                                    <path d="M10.0385 6.09761L8.47036 7.66571L7.85498 7.05033C7.66934 6.86469 7.36707 6.86469 7.18171 7.05033C6.99607 7.23598 6.99607 7.53824 7.18171 7.7236L8.13442 8.67631C8.22431 8.7662 8.34483 8.81602 8.47147 8.81602C8.59811 8.81602 8.71891 8.7662 8.80853 8.67631L10.7136 6.77119C10.8993 6.58554 10.8993 6.28328 10.7136 6.09792C10.528 5.91227 10.2238 5.91227 10.0384 6.09764L10.0385 6.09761Z" fill="#12B76A"/>
                                    <path d="M17.0425 11.673H12.2803C12.017 11.673 11.8044 11.8865 11.8044 12.149C11.8044 12.4114 12.0179 12.6249 12.2803 12.6249H17.0425C17.3058 12.6249 17.5184 12.4114 17.5184 12.149C17.5184 11.8857 17.3049 11.673 17.0425 11.673Z" fill="#12B76A"/>
                                    <path d="M17.0425 17.3874H12.2803C12.017 17.3874 11.8044 17.6009 11.8044 17.8633C11.8044 18.1258 12.0179 18.3393 12.2803 18.3393H17.0425C17.3058 18.3393 17.5184 18.1258 17.5184 17.8633C17.5184 17.6009 17.3049 17.3874 17.0425 17.3874Z" fill="#12B76A"/>
                                    <path d="M17.0425 6.91058H12.2803C12.017 6.91058 11.8044 7.12406 11.8044 7.38652C11.8044 7.64898 12.0179 7.86246 12.2803 7.86246H17.0425C17.3058 7.86246 17.5184 7.64898 17.5184 7.38652C17.5184 7.12406 17.3049 6.91058 17.0425 6.91058Z" fill="#12B76A"/>
                                    <path d="M11.0229 18.9233H9.64885C9.55729 18.9233 9.49615 18.9844 9.49615 19.076C9.49615 19.1675 9.55729 19.2287 9.64885 19.2287H11.0229C11.1145 19.2287 11.1756 19.1675 11.1756 19.076C11.1756 18.9844 11.0993 18.9233 11.0229 18.9233Z" fill="#12B76A"/>
                                    </svg>
                                Citas</a></li>
                          <li className="Paginas">
                            
                            <a className="Paginas-Enlaces">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0229 17.8548H9.64885C9.55729 17.8548 9.49615 17.9159 9.49615 18.0075C9.49615 18.099 9.55729 18.1602 9.64885 18.1602H11.0229C11.1145 18.1602 11.1756 18.099 11.1756 18.0075C11.1756 17.9311 11.0993 17.8548 11.0229 17.8548Z" fill="#12B76A"/>
                                    <path d="M19.6773 2.84641C19.2276 2.39664 18.63 2.1492 17.9934 2.1492L6.56615 2.14893C5.92962 2.14893 5.33236 2.39636 4.88227 2.84613C4.43249 3.29591 4.18506 3.89346 4.18506 4.53002V19.7678C4.18506 20.4044 4.43249 21.0016 4.88227 21.4517C5.33204 21.9015 5.92959 22.1489 6.56615 22.1489H17.9949C18.6314 22.1489 19.2287 21.9015 19.6788 21.4517C20.1285 21.0019 20.376 20.4044 20.376 19.7678V4.53002C20.3748 3.89376 20.1274 3.29623 19.6776 2.84642L19.6773 2.84641ZM19.4229 19.7686C19.4229 20.5566 18.7825 21.197 17.9946 21.197H6.56585C5.77788 21.197 5.13747 20.5566 5.13747 19.7686V4.53008C5.13747 3.74211 5.7779 3.10171 6.56585 3.10171H17.9946C18.7825 3.10171 19.4229 3.74214 19.4229 4.53008V19.7686Z" fill="#12B76A"/>
                                    <path d="M10.0385 10.86L8.47036 12.4284L7.85498 11.813C7.66934 11.6274 7.36707 11.6274 7.18171 11.813C6.99607 11.9987 6.99607 12.301 7.18171 12.4863L8.13442 13.439C8.22431 13.5289 8.34483 13.5787 8.47147 13.5787C8.59811 13.5787 8.71891 13.5289 8.80853 13.439L10.7136 11.5339C10.8993 11.3483 10.8993 11.046 10.7136 10.8606C10.528 10.6747 10.2238 10.6736 10.0384 10.8601L10.0385 10.86Z" fill="#12B76A"/>
                                    <path d="M10.0385 15.6211L8.47036 17.1892L7.85498 16.5738C7.66934 16.3881 7.36707 16.3881 7.18171 16.5738C6.99607 16.7594 6.99607 17.0617 7.18171 17.2471L8.13442 18.1998C8.22431 18.2897 8.34483 18.3395 8.47147 18.3395C8.59811 18.3395 8.71891 18.2897 8.80853 18.1998L10.7136 16.2946C10.8993 16.109 10.8993 15.8067 10.7136 15.6214C10.528 15.4355 10.2238 15.4355 10.0384 15.6211L10.0385 15.6211Z" fill="#12B76A"/>
                                    <path d="M10.0385 6.09761L8.47036 7.66571L7.85498 7.05033C7.66934 6.86469 7.36707 6.86469 7.18171 7.05033C6.99607 7.23598 6.99607 7.53824 7.18171 7.7236L8.13442 8.67631C8.22431 8.7662 8.34483 8.81602 8.47147 8.81602C8.59811 8.81602 8.71891 8.7662 8.80853 8.67631L10.7136 6.77119C10.8993 6.58554 10.8993 6.28328 10.7136 6.09792C10.528 5.91227 10.2238 5.91227 10.0384 6.09764L10.0385 6.09761Z" fill="#12B76A"/>
                                    <path d="M17.0425 11.673H12.2803C12.017 11.673 11.8044 11.8865 11.8044 12.149C11.8044 12.4114 12.0179 12.6249 12.2803 12.6249H17.0425C17.3058 12.6249 17.5184 12.4114 17.5184 12.149C17.5184 11.8857 17.3049 11.673 17.0425 11.673Z" fill="#12B76A"/>
                                    <path d="M17.0425 17.3874H12.2803C12.017 17.3874 11.8044 17.6009 11.8044 17.8633C11.8044 18.1258 12.0179 18.3393 12.2803 18.3393H17.0425C17.3058 18.3393 17.5184 18.1258 17.5184 17.8633C17.5184 17.6009 17.3049 17.3874 17.0425 17.3874Z" fill="#12B76A"/>
                                    <path d="M17.0425 6.91058H12.2803C12.017 6.91058 11.8044 7.12406 11.8044 7.38652C11.8044 7.64898 12.0179 7.86246 12.2803 7.86246H17.0425C17.3058 7.86246 17.5184 7.64898 17.5184 7.38652C17.5184 7.12406 17.3049 6.91058 17.0425 6.91058Z" fill="#12B76A"/>
                                    <path d="M11.0229 18.9233H9.64885C9.55729 18.9233 9.49615 18.9844 9.49615 19.076C9.49615 19.1675 9.55729 19.2287 9.64885 19.2287H11.0229C11.1145 19.2287 11.1756 19.1675 11.1756 19.076C11.1756 18.9844 11.0993 18.9233 11.0229 18.9233Z" fill="#12B76A"/>
                                    </svg>
                                Opcion Incompleta</a></li>
                        </ul>
                       </div>
                    </div>
                <div className="Close">
                        <ul className="Close-Options">
                        <li className="Close-li">
                         <a className="Close-Enlaces">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.99998 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99998C12.5 8.61927 11.3807 7.49998 9.99998 7.49998C8.61927 7.49998 7.49998 8.61927 7.49998 9.99998C7.49998 11.3807 8.61927 12.5 9.99998 12.5Z" stroke="#5D6679" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.1666 12.5C16.0557 12.7513 16.0226 13.0301 16.0716 13.3005C16.1207 13.5708 16.2495 13.8202 16.4416 14.0166L16.4916 14.0666C16.6466 14.2214 16.7695 14.4052 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4648 16.9373 15.6817 16.8534 15.884C16.7695 16.0864 16.6466 16.2702 16.4916 16.425C16.3369 16.5799 16.153 16.7029 15.9507 16.7867C15.7484 16.8706 15.5315 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6742 16.7867C14.4719 16.7029 14.2881 16.5799 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.054 13.3671 16.005C13.0968 15.956 12.818 15.989 12.5666 16.1C12.3202 16.2056 12.11 16.381 11.9619 16.6046C11.8138 16.8282 11.7344 17.0902 11.7333 17.3583V17.5C11.7333 17.942 11.5577 18.3659 11.2452 18.6785C10.9326 18.991 10.5087 19.1666 10.0666 19.1666C9.62462 19.1666 9.2007 18.991 8.88813 18.6785C8.57557 18.3659 8.39998 17.942 8.39998 17.5V17.425C8.39353 17.1491 8.30424 16.8816 8.14374 16.6572C7.98323 16.4328 7.75893 16.2619 7.49998 16.1666C7.24863 16.0557 6.96982 16.0226 6.69949 16.0716C6.42916 16.1207 6.17971 16.2495 5.98331 16.4416L5.93331 16.4916C5.77852 16.6466 5.59471 16.7695 5.39238 16.8534C5.19005 16.9373 4.97317 16.9805 4.75415 16.9805C4.53512 16.9805 4.31824 16.9373 4.11591 16.8534C3.91358 16.7695 3.72977 16.6466 3.57498 16.4916C3.42002 16.3369 3.29709 16.153 3.21321 15.9507C3.12934 15.7484 3.08617 15.5315 3.08617 15.3125C3.08617 15.0935 3.12934 14.8766 3.21321 14.6742C3.29709 14.4719 3.42002 14.2881 3.57498 14.1333L3.62498 14.0833C3.81709 13.8869 3.94597 13.6375 3.99498 13.3671C4.044 13.0968 4.01091 12.818 3.89998 12.5666C3.79434 12.3202 3.61894 12.11 3.39537 11.9619C3.17179 11.8138 2.9098 11.7344 2.64165 11.7333H2.49998C2.05795 11.7333 1.63403 11.5577 1.32147 11.2452C1.00891 10.9326 0.833313 10.5087 0.833313 10.0666C0.833313 9.62462 1.00891 9.2007 1.32147 8.88813C1.63403 8.57557 2.05795 8.39998 2.49998 8.39998H2.57498C2.85081 8.39353 3.11832 8.30424 3.34273 8.14374C3.56714 7.98323 3.73808 7.75893 3.83331 7.49998C3.94424 7.24863 3.97733 6.96982 3.92832 6.69949C3.8793 6.42916 3.75043 6.17971 3.55831 5.98331L3.50831 5.93331C3.35335 5.77852 3.23042 5.59471 3.14655 5.39238C3.06267 5.19005 3.0195 4.97317 3.0195 4.75415C3.0195 4.53512 3.06267 4.31824 3.14655 4.11591C3.23042 3.91358 3.35335 3.72977 3.50831 3.57498C3.6631 3.42002 3.84692 3.29709 4.04925 3.21321C4.25158 3.12934 4.46845 3.08617 4.68748 3.08617C4.90651 3.08617 5.12338 3.12934 5.32571 3.21321C5.52804 3.29709 5.71186 3.42002 5.86665 3.57498L5.91665 3.62498C6.11305 3.81709 6.36249 3.94597 6.63282 3.99498C6.90315 4.044 7.18197 4.01091 7.43331 3.89998H7.49998C7.74645 3.79434 7.95666 3.61894 8.10472 3.39537C8.25279 3.17179 8.33224 2.9098 8.33331 2.64165V2.49998C8.33331 2.05795 8.50891 1.63403 8.82147 1.32147C9.13403 1.00891 9.55795 0.833313 9.99998 0.833313C10.442 0.833313 10.8659 1.00891 11.1785 1.32147C11.4911 1.63403 11.6666 2.05795 11.6666 2.49998V2.57498C11.6677 2.84313 11.7472 3.10513 11.8952 3.3287C12.0433 3.55228 12.2535 3.72768 12.5 3.83331C12.7513 3.94424 13.0301 3.97733 13.3005 3.92832C13.5708 3.8793 13.8202 3.75043 14.0166 3.55831L14.0666 3.50831C14.2214 3.35335 14.4052 3.23042 14.6076 3.14655C14.8099 3.06267 15.0268 3.0195 15.2458 3.0195C15.4648 3.0195 15.6817 3.06267 15.884 3.14655C16.0864 3.23042 16.2702 3.35335 16.425 3.50831C16.5799 3.6631 16.7029 3.84692 16.7867 4.04925C16.8706 4.25158 16.9138 4.46845 16.9138 4.68748C16.9138 4.90651 16.8706 5.12338 16.7867 5.32571C16.7029 5.52804 16.5799 5.71186 16.425 5.86665L16.375 5.91665C16.1829 6.11305 16.054 6.36249 16.005 6.63282C15.956 6.90315 15.989 7.18197 16.1 7.43331V7.49998C16.2056 7.74645 16.381 7.95666 16.6046 8.10472C16.8282 8.25279 17.0902 8.33224 17.3583 8.33331H17.5C17.942 8.33331 18.3659 8.50891 18.6785 8.82147C18.991 9.13403 19.1666 9.55795 19.1666 9.99998C19.1666 10.442 18.991 10.8659 18.6785 11.1785C18.3659 11.4911 17.942 11.6666 17.5 11.6666H17.425C17.1568 11.6677 16.8948 11.7472 16.6713 11.8952C16.4477 12.0433 16.2723 12.2535 16.1666 12.5Z" stroke="#5D6679" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Ajustes</a></li>
                        <li className="Close-li">
                        <a className="Close-Enlaces">
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_327_20" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="22" fill="black">
                            <rect fill="white" width="18" height="22"/>
                            <path d="M9.56512 20.6454H2.09465C1.8466 20.6454 1.64516 20.4398 1.64516 20.187V2.11327C1.64516 1.86058 1.84677 1.65484 2.09465 1.65484H9.56512C9.74315 1.65484 9.8877 1.50813 9.8877 1.32742C9.8877 1.14672 9.74315 1 9.56512 1H2.09465C1.49106 1 1 1.49955 1 2.11328V20.187C1 20.8007 1.49106 21.3003 2.09465 21.3003H9.56512C9.74315 21.3003 9.8877 21.1535 9.8877 20.9728C9.8877 20.7921 9.74333 20.6454 9.56512 20.6454V20.6454ZM17.1499 10.9186L12.7247 6.42719C12.5987 6.29929 12.3946 6.29929 12.2684 6.42719C12.1422 6.55509 12.1424 6.76247 12.2684 6.89036L16.1433 10.8227H5.61245C5.43442 10.8227 5.28987 10.9694 5.28987 11.1501C5.28987 11.3308 5.43442 11.4775 5.61245 11.4775H16.1433L12.2684 15.4103C12.1424 15.5382 12.1424 15.7454 12.2684 15.8734C12.3314 15.9374 12.4136 15.9694 12.4964 15.9694C12.5792 15.9694 12.6617 15.9374 12.7245 15.8734L17.1497 11.382C17.21 11.3208 17.2442 11.2375 17.2442 11.1505C17.2444 11.0633 17.2105 10.9802 17.1499 10.9186V10.9186Z"/>
                        </mask>
                            <path d="M9.56512 20.6454H2.09465C1.8466 20.6454 1.64516 20.4398 1.64516 20.187V2.11327C1.64516 1.86058 1.84677 1.65484 2.09465 1.65484H9.56512C9.74315 1.65484 9.8877 1.50813 9.8877 1.32742C9.8877 1.14672 9.74315 1 9.56512 1H2.09465C1.49106 1 1 1.49955 1 2.11328V20.187C1 20.8007 1.49106 21.3003 2.09465 21.3003H9.56512C9.74315 21.3003 9.8877 21.1535 9.8877 20.9728C9.8877 20.7921 9.74333 20.6454 9.56512 20.6454V20.6454ZM17.1499 10.9186L12.7247 6.42719C12.5987 6.29929 12.3946 6.29929 12.2684 6.42719C12.1422 6.55509 12.1424 6.76247 12.2684 6.89036L16.1433 10.8227H5.61245C5.43442 10.8227 5.28987 10.9694 5.28987 11.1501C5.28987 11.3308 5.43442 11.4775 5.61245 11.4775H16.1433L12.2684 15.4103C12.1424 15.5382 12.1424 15.7454 12.2684 15.8734C12.3314 15.9374 12.4136 15.9694 12.4964 15.9694C12.5792 15.9694 12.6617 15.9374 12.7245 15.8734L17.1497 11.382C17.21 11.3208 17.2442 11.2375 17.2442 11.1505C17.2444 11.0633 17.2105 10.9802 17.1499 10.9186V10.9186Z" fill="#5D6679"/>
                        <path d="M9.56512 20.6454H9.66512V20.5454H9.56512V20.6454ZM9.56512 20.6454H9.46512V20.7454H9.56512V20.6454ZM17.1499 10.9186H17.2499V10.8776L17.2211 10.8484L17.1499 10.9186ZM12.7247 6.42719L12.6535 6.49737L12.6535 6.49737L12.7247 6.42719ZM12.2684 6.42719L12.3396 6.49742L12.3396 6.49742L12.2684 6.42719ZM12.2684 6.89036L12.1971 6.96055L12.1971 6.96055L12.2684 6.89036ZM16.1433 10.8227V10.9227H16.3822L16.2145 10.7525L16.1433 10.8227ZM16.1433 11.4775L16.2145 11.5477L16.3822 11.3775H16.1433V11.4775ZM12.2684 15.4103L12.1971 15.3401L12.1971 15.3401L12.2684 15.4103ZM12.2684 15.8734L12.1971 15.9436L12.1971 15.9436L12.2684 15.8734ZM12.7245 15.8734L12.6533 15.8032L12.6532 15.8034L12.7245 15.8734ZM17.1497 11.382L17.2209 11.4522L17.2209 11.4522L17.1497 11.382ZM17.2442 11.1505L17.1442 11.1503V11.1505H17.2442ZM17.1499 10.9186H17.0499V10.9596L17.0786 10.9888L17.1499 10.9186ZM9.56512 20.5454H2.09465V20.7454H9.56512V20.5454ZM2.09465 20.5454C1.90369 20.5454 1.74516 20.3865 1.74516 20.187H1.54516C1.54516 20.4932 1.7895 20.7454 2.09465 20.7454V20.5454ZM1.74516 20.187V2.11327H1.54516V20.187H1.74516ZM1.74516 2.11327C1.74516 1.91393 1.90387 1.75484 2.09465 1.75484V1.55484C1.78968 1.55484 1.54516 1.80724 1.54516 2.11327H1.74516ZM2.09465 1.75484H9.56512V1.55484H2.09465V1.75484ZM9.56512 1.75484C9.79978 1.75484 9.9877 1.56194 9.9877 1.32742H9.7877C9.7877 1.45431 9.68652 1.55484 9.56512 1.55484V1.75484ZM9.9877 1.32742C9.9877 1.0929 9.79978 0.9 9.56512 0.9V1.1C9.68652 1.1 9.7877 1.20054 9.7877 1.32742H9.9877ZM9.56512 0.9H2.09465V1.1H9.56512V0.9ZM2.09465 0.9C1.43424 0.9 0.9 1.44593 0.9 2.11328H1.1C1.1 1.55317 1.54788 1.1 2.09465 1.1V0.9ZM0.9 2.11328V20.187H1.1V2.11328H0.9ZM0.9 20.187C0.9 20.8543 1.43424 21.4003 2.09465 21.4003V21.2003C1.54788 21.2003 1.1 20.7471 1.1 20.187H0.9ZM2.09465 21.4003H9.56512V21.2003H2.09465V21.4003ZM9.56512 21.4003C9.79978 21.4003 9.9877 21.2074 9.9877 20.9728H9.7877C9.7877 21.0997 9.68652 21.2003 9.56512 21.2003V21.4003ZM9.9877 20.9728C9.9877 20.7383 9.8 20.5454 9.56512 20.5454V20.7454C9.68667 20.7454 9.7877 20.8459 9.7877 20.9728H9.9877ZM9.66512 20.6454V20.6454H9.46512V20.6454H9.66512ZM17.2211 10.8484L12.7959 6.357L12.6535 6.49737L17.0786 10.9888L17.2211 10.8484ZM12.7959 6.357C12.6307 6.18932 12.3625 6.18939 12.1972 6.35696L12.3396 6.49742C12.4266 6.40918 12.5666 6.40925 12.6535 6.49737L12.7959 6.357ZM12.1972 6.35695C12.0325 6.52386 12.0328 6.79378 12.1971 6.96055L12.3396 6.82018C12.2519 6.73115 12.2518 6.58632 12.3396 6.49742L12.1972 6.35695ZM12.1971 6.96055L16.0721 10.8929L16.2145 10.7525L12.3396 6.82017L12.1971 6.96055ZM16.1433 10.7227H5.61245V10.9227H16.1433V10.7227ZM5.61245 10.7227C5.37779 10.7227 5.18987 10.9156 5.18987 11.1501H5.38987C5.38987 11.0232 5.49105 10.9227 5.61245 10.9227V10.7227ZM5.18987 11.1501C5.18987 11.3846 5.37779 11.5775 5.61245 11.5775V11.3775C5.49105 11.3775 5.38987 11.277 5.38987 11.1501H5.18987ZM5.61245 11.5775H16.1433V11.3775H5.61245V11.5775ZM16.072 11.4074L12.1971 15.3401L12.3396 15.4804L16.2145 11.5477L16.072 11.4074ZM12.1971 15.3401C12.0327 15.5069 12.0328 15.7766 12.1971 15.9436L12.3397 15.8033C12.2519 15.7141 12.252 15.5694 12.3396 15.4804L12.1971 15.3401ZM12.1971 15.9436C12.2795 16.0272 12.3877 16.0694 12.4964 16.0694V15.8694C12.4396 15.8694 12.3833 15.8476 12.3396 15.8032L12.1971 15.9436ZM12.4964 16.0694C12.6051 16.0694 12.7136 16.0273 12.7958 15.9435L12.6532 15.8034C12.6098 15.8475 12.5534 15.8694 12.4964 15.8694V16.0694ZM12.7957 15.9436L17.2209 11.4522L17.0785 11.3118L12.6533 15.8032L12.7957 15.9436ZM17.2209 11.4522C17.2998 11.3722 17.3442 11.2636 17.3442 11.1505H17.1442C17.1442 11.2113 17.1202 11.2694 17.0785 11.3118L17.2209 11.4522ZM17.3442 11.1507C17.3444 11.0374 17.3004 10.9289 17.2211 10.8485L17.0786 10.9888C17.1207 11.0315 17.1443 11.0893 17.1442 11.1503L17.3442 11.1507ZM17.2499 10.9186V10.9186H17.0499V10.9186H17.2499Z" fill="#5D6679" mask="url(#path-1-outside-1_327_20)"/>
                        </svg>
                            Salir</a></li>
                        </ul>
                </div>
            </div>        
    );
}
export default Bar;



