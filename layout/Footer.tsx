import style from '../styles/Layouts/Footer.module.sass';
import { useRef } from 'react';
import Layout80 from './Layout80';
const Footer: React.FC = () => {
   const thisRef = useRef<HTMLDivElement>(null);

   return (
      <>
         <div id={style.FooterWrapper}>
            <div ref={thisRef} id={style.Footer}>
               <div></div>
               <Layout80>
                  <div id={style.FooterContent}>
                     <div>
                        <label htmlFor="emailSubcribe">
                           Subscribe to my newsletter here *
                        </label>
                        <form>
                           <input
                              required
                              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                              id="emailSubcribe"
                              type="email"
                              placeholder="Enter your email"
                           ></input>
                           <input
                              className="btn btn-light"
                              type="submit"
                              placeholder="submit"
                           ></input>
                        </form>
                     </div>

                     <div>
                        <svg
                           id={style.GitHub}
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           viewBox="0 0 100 100"
                        >
                           <path
                              fill="#6694c1"
                              d="M71,82H29c-6.075,0-11-4.925-11-11V29c0-6.075,4.925-11,11-11h42c6.075,0,11,4.925,11,11v42	C82,77.075,77.075,82,71,82z"
                           ></path>
                           <path
                              fill="#eeecd9"
                              d="M69.933,49.039c0-3.321-1.305-6.334-3.419-8.573c0.396-2.203,0.351-5.301-0.538-7.966	c-4.475,0-8.114,3.447-8.702,4H44.47c-0.589-0.552-4.019-4-8.494-4c-0.8,2.401-1.087,5.233-0.846,7.295	c-2.518,2.286-4.108,5.575-4.108,9.245c0,6.908,5.599,12.459,12.507,12.459h2.447c-2.003,0.917-3.635,2.756-4,5	c-2,0-4.864-0.182-6.181-2.158c-2.46-3.69-3.59-3.69-4.819-3.69c-1.23,0-1.33,1.23-0.1,2.46c1.23,1.23,1.23,1.23,2.46,3.69	c1.012,2.027,3.64,3.699,8.64,3.699v6h17v-8.845c0-2.718-1.681-5.092-4-6.155h2.449C64.334,61.5,69.933,55.947,69.933,49.039z"
                           ></path>
                           <path
                              fill="#1f212b"
                              d="M58.976,77c-0.276,0-0.5-0.224-0.5-0.5v-8.845c0-2.431-1.456-4.668-3.708-5.701	c-0.214-0.098-0.331-0.332-0.28-0.561C54.538,61.164,54.741,61,54.976,61h2.449c6.621,0,12.008-5.366,12.008-11.961	c0-3.064-1.166-5.987-3.282-8.229c-0.109-0.115-0.157-0.275-0.129-0.432c0.333-1.854,0.39-4.725-0.409-7.37	c-3.682,0.162-6.795,2.725-7.987,3.848C57.533,36.943,57.401,37,57.274,37H44.469c-0.127,0-0.249-0.048-0.342-0.135l-0.092-0.087	c-3.078-2.927-5.829-3.686-7.697-3.77c-0.662,2.162-0.941,4.762-0.712,6.729c0.019,0.16-0.042,0.319-0.161,0.428	c-2.506,2.275-3.943,5.51-3.943,8.875c0,6.595,5.387,11.96,12.007,11.96h2.447c0.235,0,0.438,0.164,0.488,0.394	c0.051,0.229-0.066,0.463-0.28,0.561c-1.974,0.904-3.397,2.676-3.715,4.625C42.43,66.822,42.221,67,41.976,67	c-2.333,0-5.191-0.271-6.598-2.38c-2.311-3.467-3.28-3.467-4.403-3.467c-0.14,0-0.385,0.023-0.448,0.178	c-0.086,0.206,0.031,0.756,0.702,1.428c1.287,1.287,1.311,1.335,2.554,3.82C34.885,68.785,37.795,70,41.976,70	c0.276,0,0.5,0.224,0.5,0.5v6c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-5.505c-5.797-0.131-7.866-2.525-8.588-3.969	c-1.194-2.387-1.194-2.387-2.366-3.56c-0.869-0.869-1.213-1.81-0.919-2.518c0.209-0.505,0.709-0.795,1.372-0.795	c1.588,0,2.81,0.272,5.235,3.912c1.069,1.604,3.359,1.9,5.356,1.932c0.362-1.545,1.309-2.965,2.63-3.997h-0.668	c-7.172,0-13.007-5.813-13.007-12.959c0-3.562,1.485-6.988,4.084-9.442c-0.209-2.203,0.128-4.956,0.896-7.257	C35.57,32.138,35.761,32,35.976,32c2.036,0,5.192,0.696,8.692,4h12.409c1.427-1.311,4.847-4,8.898-4	c0.215,0,0.406,0.138,0.475,0.342c0.935,2.802,0.928,5.901,0.598,7.965c2.185,2.404,3.385,5.495,3.385,8.732	C70.433,56.186,64.598,62,57.425,62h-0.693c1.707,1.368,2.744,3.442,2.744,5.655V76.5C59.476,76.776,59.252,77,58.976,77z"
                           ></path>
                           <path
                              fill="#1f212b"
                              d="M65.5,77h-31C28.159,77,23,71.841,23,65.5v-31C23,28.159,28.159,23,34.5,23h31	c0.276,0,0.5,0.224,0.5,0.5S65.776,24,65.5,24h-31C28.71,24,24,28.71,24,34.5v31C24,71.29,28.71,76,34.5,76h31	C71.29,76,76,71.29,76,65.5v-15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v15C77,71.841,71.841,77,65.5,77z"
                           ></path>
                           <path
                              fill="#1f212b"
                              d="M76.5,48.5c-0.276,0-0.5-0.224-0.5-0.5v-6.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V48	C77,48.276,76.776,48.5,76.5,48.5z"
                           ></path>
                           <path
                              fill="#1f212b"
                              d="M76.5,38.5c-0.276,0-0.5-0.224-0.5-0.5v-3.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V38	C77,38.276,76.776,38.5,76.5,38.5z"
                           ></path>
                           <path
                              fill="#1f212b"
                              d="M71,83H29c-6.617,0-12-5.383-12-12V29c0-6.617,5.383-12,12-12h42c6.617,0,12,5.383,12,12v42	C83,77.617,77.617,83,71,83z M29,19c-5.514,0-10,4.486-10,10v42c0,5.514,4.486,10,10,10h42c5.514,0,10-4.486,10-10V29	c0-5.514-4.486-10-10-10H29z"
                           ></path>
                        </svg>
                        <svg
                           id={style.Facebook}
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           viewBox="0,0,256,256"
                           style={{ fill: '#000000' }}
                        >
                           <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: 'normal' }}
                           >
                              <g transform="scale(2.56,2.56)">
                                 <path
                                    d="M69.575,80h-39c-6.6,0 -12,-5.4 -12,-12v-39c0,-6.6 5.4,-12 12,-12h39c6.6,0 12,5.4 12,12v39c0,6.6 -5.4,12 -12,12z"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M69.575,81h-39c-7.168,0 -13,-5.832 -13,-13v-39c0,-7.168 5.832,-13 13,-13h39c7.168,0 13,5.832 13,13v39c0,7.168 -5.832,13 -13,13zM30.575,18c-6.065,0 -11,4.935 -11,11v39c0,6.065 4.935,11 11,11h39c6.065,0 11,-4.935 11,-11v-39c0,-6.065 -4.935,-11 -11,-11z"
                                    fill="#1f212b"
                                 ></path>
                                 <path
                                    d="M77.075,46.5v18.663c0,5.685 -4.652,10.337 -10.337,10.337h-33.326c-5.685,0 -10.337,-4.652 -10.337,-10.337v-33.326c0,-5.685 4.652,-10.337 10.337,-10.337h33.663"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M66.738,76h-33.326c-5.976,0 -10.837,-4.861 -10.837,-10.837v-33.326c0,-5.976 4.861,-10.837 10.837,-10.837h33.663c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5h-33.663c-5.424,0 -9.837,4.413 -9.837,9.837v33.326c0,5.424 4.413,9.837 9.837,9.837h33.326c5.424,0 9.837,-4.413 9.837,-9.837v-18.663c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5v18.663c0,5.976 -4.862,10.837 -10.837,10.837z"
                                    fill="#1f212b"
                                 ></path>
                                 <path
                                    d="M77.075,45c-0.276,0 -0.5,-0.224 -0.5,-0.5v-4c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5v4c0,0.276 -0.224,0.5 -0.5,0.5zM77.075,39c-0.276,0 -0.5,-0.224 -0.5,-0.5v-2c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5v2c0,0.276 -0.224,0.5 -0.5,0.5z"
                                    fill="#1f212b"
                                 ></path>
                                 <path
                                    d="M45.075,39.137c0,0.859 0,4.363 0,4.363h-3v5h3v16h7v-16h4.113c0,0 0.385,-2.387 0.571,-5c-0.536,0 -5.684,0 -5.684,0c0,0 0,-3.146 0,-3.7c0,-0.553 0.725,-1.3 1.442,-1.3c0.717,0 3.123,0 4.558,0c0,-0.788 0,-3.493 0,-6c-1.907,0 -4.081,0 -5.035,0c-7.133,0.008 -6.965,5.777 -6.965,6.637z"
                                    fill="#fdfcee"
                                 ></path>
                                 <path
                                    d="M52.075,65h-7c-0.276,0 -0.5,-0.224 -0.5,-0.5v-15.5h-2.5c-0.276,0 -0.5,-0.224 -0.5,-0.5v-5c0,-0.276 0.224,-0.5 0.5,-0.5h2.5v-3.863h0.5l-0.5,-0.057c-0.008,-2.167 0.612,-3.892 1.843,-5.128c1.286,-1.292 3.178,-1.95 5.621,-1.952h5.036c0.276,0 0.5,0.224 0.5,0.5v6c0,0.276 -0.224,0.5 -0.5,0.5h-4.558c-0.47,0 -0.942,0.549 -0.942,0.8v3.2h5.184c0.139,0 0.271,0.058 0.366,0.159c0.094,0.102 0.143,0.238 0.133,0.376c-0.186,2.605 -0.573,5.02 -0.577,5.044c-0.04,0.243 -0.249,0.421 -0.494,0.421h-3.612v15.5c0,0.276 -0.224,0.5 -0.5,0.5zM45.575,64h6v-15.5c0,-0.276 0.224,-0.5 0.5,-0.5h3.683c0.106,-0.721 0.32,-2.282 0.461,-4h-5.144c-0.276,0 -0.5,-0.224 -0.5,-0.5v-3.7c0,-0.875 0.998,-1.8 1.942,-1.8h4.058v-5h-4.535c-2.168,0.002 -3.821,0.56 -4.914,1.658c-1.036,1.041 -1.558,2.527 -1.551,4.419v0.06v4.363c0,0.276 -0.224,0.5 -0.5,0.5h-2.5v4h2.5c0.276,0 0.5,0.224 0.5,0.5z"
                                    fill="#1f212b"
                                 ></path>
                              </g>
                           </g>
                        </svg>
                        <svg
                           id={style.Zalo}
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           viewBox="0,0,256,256"
                           style={{ fill: '#000000' }}
                        >
                           <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: 'normal' }}
                           >
                              <g transform="scale(2.56,2.56)">
                                 <path
                                    d="M69,82h-38c-7.18,0 -13,-5.82 -13,-13v-38c0,-7.18 5.82,-13 13,-13h38c7.18,0 13,5.82 13,13v38c0,7.18 -5.82,13 -13,13z"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M82,63.61v5.39c0,7.18 -5.82,13 -13,13h-32.7l-8.15,-8.15c-0.09,-0.09 -0.15,-0.21 -0.15,-0.35l0.92,0.26c0.59,0.3 1.92,0.74 4.58,0.74c3.54,0 6.25,-1.24 9.2,-2.12c1.08,-0.33 2.25,-0.3 3.31,0.09c3.57,1.31 7.44,2.03 11.49,2.03c9.84,0 18.63,-4.24 24.5,-10.89z"
                                    fill="#3070b7"
                                 ></path>
                                 <path
                                    d="M82,31v33.24c-6.19,6.76 -15.08,10.64 -24.5,10.64c-4.01,0 -7.94,-0.7 -11.66,-2.07c-0.95,-0.35 -2.02,-0.37 -2.99,-0.08c-0.67,0.2 -1.31,0.42 -1.96,0.63c-2.24,0.74 -4.57,1.52 -7.39,1.52c-4.09,0 -5.24,-1.03 -5.35,-1.15c-0.12,-0.12 -0.17,-0.29 -0.14,-0.45c0.03,-0.16 0.14,-0.3 0.29,-0.36c0.04,-0.02 4.34,-1.92 6.02,-5.55c0.33,-0.73 0.17,-1.6 -0.41,-2.18c-5.75,-5.79 -8.91,-13.36 -8.91,-21.31c0,-10.52 5.43,-20.11 14.59,-25.88h29.41c7.18,0 13,5.82 13,13z"
                                    fill="#fefdef"
                                 ></path>
                                 <path
                                    d="M71.5,40c-3.309,0 -6,2.916 -6,6.5c0,3.584 2.691,6.5 6,6.5c3.309,0 6,-2.916 6,-6.5c0,-3.584 -2.691,-6.5 -6,-6.5zM71.5,49.5c-1.309,0 -2.375,-1.346 -2.375,-3c0,-1.654 1.066,-3 2.375,-3c1.309,0 2.375,1.346 2.375,3c0,1.654 -1.066,3 -2.375,3z"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M61.75,35.5c-0.966,0 -1.75,0.783 -1.75,1.75v14c0,0.967 0.784,1.75 1.75,1.75c0.966,0 1.75,-0.783 1.75,-1.75v-14c0,-0.967 -0.784,-1.75 -1.75,-1.75z"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M54.5,46.5c0,1.657 -1.119,3 -2.5,3c-1.381,0 -2.5,-1.343 -2.5,-3c0,-1.657 1.119,-3 2.5,-3c1.381,0 2.5,1.343 2.5,3zM56.25,40.25c-0.732,0 -1.357,0.45 -1.618,1.088c-0.905,-0.836 -2.031,-1.338 -3.257,-1.338c-2.969,0 -5.375,2.91 -5.375,6.5c0,3.59 2.406,6.5 5.375,6.5c1.226,0 2.352,-0.502 3.257,-1.338c0.261,0.638 0.887,1.088 1.618,1.088c0.966,0 1.75,-0.783 1.75,-1.75v-9c0,-0.967 -0.784,-1.75 -1.75,-1.75z"
                                    fill="#6694c1"
                                 ></path>
                                 <path
                                    d="M43.25,49h-5.667l6.732,-9.756c0.549,-0.796 0.349,-1.886 -0.447,-2.435c-0.302,-0.208 -0.646,-0.308 -0.987,-0.309c-0.002,0 -0.005,-0.001 -0.007,-0.001h-8.374c-0.897,0 -1.625,0.728 -1.625,1.625c0,0.897 0.728,1.625 1.625,1.625h5.214l-6.904,10.007c-0.369,0.535 -0.411,1.231 -0.109,1.808c0.302,0.577 0.899,0.936 1.549,0.936h9c0.966,0 1.75,-0.783 1.75,-1.75c0,-0.967 -0.784,-1.75 -1.75,-1.75z"
                                    fill="#6694c1"
                                 ></path>
                                 <g fill="#1f212b">
                                    <path d="M71.5,53.5c-3.584,0 -6.5,-3.141 -6.5,-7c0,-3.859 2.916,-7 6.5,-7c3.584,0 6.5,3.141 6.5,7c0,3.859 -2.916,7 -6.5,7zM71.5,40.5c-3.033,0 -5.5,2.691 -5.5,6c0,3.309 2.467,6 5.5,6c3.033,0 5.5,-2.691 5.5,-6c0,-3.309 -2.467,-6 -5.5,-6zM71.5,50c-1.585,0 -2.875,-1.57 -2.875,-3.5c0,-1.93 1.29,-3.5 2.875,-3.5c1.585,0 2.875,1.57 2.875,3.5c0,1.93 -1.29,3.5 -2.875,3.5zM71.5,44c-1.034,0 -1.875,1.121 -1.875,2.5c0,1.379 0.841,2.5 1.875,2.5c1.034,0 1.875,-1.121 1.875,-2.5c0,-1.379 -0.841,-2.5 -1.875,-2.5z"></path>
                                    <path d="M61.75,53.5c-1.241,0 -2.25,-1.01 -2.25,-2.25v-14c0,-1.24 1.009,-2.25 2.25,-2.25c1.241,0 2.25,1.01 2.25,2.25v14c0,1.24 -1.009,2.25 -2.25,2.25zM61.75,36c-0.689,0 -1.25,0.561 -1.25,1.25v14c0,0.689 0.561,1.25 1.25,1.25c0.689,0 1.25,-0.561 1.25,-1.25v-14c0,-0.689 -0.561,-1.25 -1.25,-1.25z"></path>
                                    <path d="M51.375,53.5c-3.239,0 -5.875,-3.141 -5.875,-7c0,-3.859 2.636,-7 5.875,-7c1.121,0 2.192,0.371 3.13,1.08c0.419,-0.518 1.054,-0.83 1.745,-0.83c1.241,0 2.25,1.01 2.25,2.25v9c0,1.24 -1.009,2.25 -2.25,2.25c-0.691,0 -1.325,-0.312 -1.745,-0.83c-0.938,0.709 -2.009,1.08 -3.13,1.08zM51.375,40.5c-2.688,0 -4.875,2.691 -4.875,6c0,3.309 2.187,6 4.875,6c1.056,0 2.064,-0.417 2.917,-1.205c0.12,-0.11 0.289,-0.156 0.447,-0.121c0.16,0.035 0.292,0.147 0.355,0.299c0.193,0.473 0.647,0.777 1.155,0.777c0.689,0 1.25,-0.561 1.25,-1.25v-9c0,-0.689 -0.561,-1.25 -1.25,-1.25c-0.508,0 -0.962,0.305 -1.155,0.777c-0.062,0.151 -0.195,0.264 -0.355,0.299c-0.158,0.034 -0.327,-0.01 -0.447,-0.121c-0.853,-0.788 -1.861,-1.205 -2.917,-1.205zM52,50c-1.654,0 -3,-1.57 -3,-3.5c0,-1.93 1.346,-3.5 3,-3.5c1.654,0 3,1.57 3,3.5c0,1.93 -1.346,3.5 -3,3.5zM52,44c-1.103,0 -2,1.121 -2,2.5c0,1.379 0.897,2.5 2,2.5c1.103,0 2,-1.121 2,-2.5c0,-1.379 -0.897,-2.5 -2,-2.5z"></path>
                                    <path d="M43.25,53h-9c-0.839,0 -1.603,-0.462 -1.992,-1.204c-0.39,-0.743 -0.336,-1.634 0.14,-2.324l6.363,-9.222h-4.261c-1.172,0 -2.125,-0.953 -2.125,-2.125c0,-1.172 0.953,-2.125 2.125,-2.125h8.375c0.011,0 0.022,0 0.034,0.001c0.447,0.007 0.876,0.144 1.244,0.396c0.495,0.342 0.827,0.855 0.936,1.446c0.108,0.592 -0.02,1.189 -0.361,1.685l-6.192,8.972h4.714c1.241,0 2.25,1.01 2.25,2.25c0,1.24 -1.009,2.25 -2.25,2.25zM34.5,37c-0.62,0 -1.125,0.505 -1.125,1.125c0,0.62 0.505,1.125 1.125,1.125h5.214c0.186,0 0.356,0.104 0.443,0.268c0.086,0.165 0.074,0.363 -0.031,0.517l-6.905,10.005c-0.265,0.384 -0.294,0.878 -0.078,1.291c0.217,0.413 0.641,0.669 1.107,0.669h9c0.689,0 1.25,-0.561 1.25,-1.25c0,-0.689 -0.561,-1.25 -1.25,-1.25h-5.667c-0.186,0 -0.356,-0.104 -0.443,-0.268c-0.086,-0.165 -0.074,-0.363 0.031,-0.517l6.732,-9.756c0.392,-0.567 0.249,-1.348 -0.319,-1.739c-0.216,-0.147 -0.449,-0.192 -0.733,-0.221h-8.351z"></path>
                                    <path d="M57.5,74.875c-4.013,0 -7.937,-0.693 -11.663,-2.061c-0.952,-0.351 -2.015,-0.379 -2.991,-0.081c-0.662,0.197 -1.309,0.412 -1.956,0.627c-2.245,0.744 -4.566,1.515 -7.391,1.515c-4.089,0 -5.236,-1.029 -5.354,-1.146c-0.118,-0.117 -0.168,-0.284 -0.138,-0.447c0.031,-0.162 0.141,-0.299 0.292,-0.365c0.043,-0.019 4.339,-1.916 6.015,-5.55c0.337,-0.722 0.172,-1.596 -0.41,-2.178c-5.741,-5.787 -8.904,-13.355 -8.904,-21.314c0,-10.864 5.801,-20.745 15.518,-26.432c0.236,-0.139 0.544,-0.06 0.684,0.179c0.139,0.238 0.059,0.545 -0.179,0.685c-9.407,5.505 -15.023,15.062 -15.023,25.568c0,7.693 3.06,15.012 8.615,20.607c0.877,0.877 1.122,2.205 0.608,3.305c-1.359,2.945 -4.17,4.796 -5.621,5.594c0.677,0.233 1.885,0.494 3.898,0.494c2.663,0 4.806,-0.711 7.076,-1.464c0.656,-0.218 1.313,-0.436 1.981,-0.636c1.18,-0.359 2.469,-0.325 3.625,0.1c3.615,1.327 7.423,2 11.318,2c2.655,0 5.307,-0.321 7.88,-0.955c0.269,-0.064 0.539,0.098 0.605,0.366c0.066,0.268 -0.098,0.539 -0.366,0.604c-2.651,0.654 -5.383,0.985 -8.119,0.985z"></path>
                                    <path d="M74.5,70.208c-0.17,0 -0.335,-0.087 -0.429,-0.243c-0.142,-0.236 -0.065,-0.544 0.172,-0.686c0.332,-0.199 0.661,-0.404 0.984,-0.614c0.233,-0.15 0.542,-0.085 0.692,0.146c0.151,0.231 0.085,0.541 -0.146,0.691c-0.334,0.218 -0.673,0.429 -1.016,0.634c-0.081,0.05 -0.169,0.072 -0.257,0.072z"></path>
                                    <path d="M69.5,72.638c-0.201,0 -0.39,-0.121 -0.466,-0.319c-0.1,-0.258 0.028,-0.548 0.286,-0.647c1.083,-0.418 2.049,-0.846 2.954,-1.305c0.244,-0.123 0.547,-0.027 0.672,0.22c0.125,0.246 0.027,0.548 -0.22,0.673c-0.935,0.474 -1.931,0.914 -3.046,1.346c-0.059,0.021 -0.12,0.032 -0.18,0.032z"></path>
                                    <path d="M69,83h-38c-7.72,0 -14,-6.28 -14,-14v-38c0,-7.72 6.28,-14 14,-14h38c7.72,0 14,6.28 14,14v38c0,7.72 -6.28,14 -14,14zM31,19c-6.617,0 -12,5.383 -12,12v38c0,6.617 5.383,12 12,12h38c6.617,0 12,-5.383 12,-12v-38c0,-6.617 -5.383,-12 -12,-12z"></path>
                                 </g>
                              </g>
                           </g>
                        </svg>{' '}
                        <svg
                           id={style.Call}
                           xmlns="http://www.w3.org/2000/svg"
                           x="0px"
                           y="0px"
                           viewBox="0,0,256,256"
                           style={{ fill: '#000000' }}
                        >
                           <g transform="translate(32,32) scale(0.75,0.75)">
                              <g
                                 fill="none"
                                 fillRule="nonzero"
                                 stroke="none"
                                 strokeWidth="1"
                                 strokeLinecap="butt"
                                 strokeLinejoin="miter"
                                 strokeMiterlimit="10"
                                 strokeDasharray=""
                                 strokeDashoffset="0"
                                 fontFamily="none"
                                 fontWeight="none"
                                 fontSize="none"
                                 textAnchor="none"
                                 style={{ mixBlendMode: 'normal' }}
                              >
                                 <g transform="scale(5.33333,5.33333)">
                                    <path
                                       d="M10.106,44.273c5,0 3.611,-0.064 8.11,-0.069c3.752,-0.004 6.202,-0.362 8.892,-0.209c2.228,0.127 4.42,0.438 6.647,0.291c3.044,-0.2 7.326,1.134 9.489,-1.663c1.367,-1.768 0.831,-4.719 0.769,-6.893c-0.095,-3.321 0.473,-8.466 0.237,-10.628c-0.611,-5.605 -0.437,-7.204 -0.208,-12.838c0.083,-2.056 0.352,-4.888 -0.935,-6.492c-1.24,-1.545 -3.227,-2.06 -6.598,-2.017c-4.447,0.057 -7.87,0.134 -12.317,0.111c-1.699,-0.009 -3.553,-0.098 -5.253,-0.106c-1.371,-0.007 -4.453,-0.215 -5.824,-0.193c-1.275,0.02 -4.203,0.099 -5.508,0.205c-1.307,0.107 -2.748,1.109 -3.321,2.287c-0.245,0.502 -0.315,1.067 -0.444,1.611c-0.242,1.02 -0.128,10.078 -0.075,10.611c0.5,5 0.339,2.492 0.339,7.492c0,1.388 -0.323,3.712 -0.335,6.362c-0.016,3.513 -0.001,5.052 0.335,7.138c0.484,3.003 2.091,5.193 6,5"
                                       fill="#668fc6"
                                    ></path>
                                    <path
                                       d="M38.463,44.933c-0.705,0 -1.415,-0.044 -2.1,-0.087c-0.923,-0.058 -1.795,-0.111 -2.576,-0.06c-1.62,0.105 -3.236,-0.024 -4.798,-0.151c-0.635,-0.052 -1.271,-0.104 -1.91,-0.14c-1.465,-0.084 -2.853,-0.015 -4.46,0.069c-1.274,0.064 -2.718,0.139 -4.402,0.14c-2.154,0.002 -2.955,0.019 -3.756,0.034c-0.872,0.018 -1.745,0.035 -4.342,0.035c-3.712,0.177 -5.897,-1.646 -6.506,-5.421c-0.35,-2.171 -0.357,-3.782 -0.341,-7.22c0.007,-1.535 0.119,-2.987 0.209,-4.153c0.067,-0.876 0.126,-1.632 0.126,-2.206c0,-1.278 0.01,-2.067 0.018,-2.616c0.017,-1.225 0.017,-1.225 -0.161,-2.929l-0.194,-1.897c-0.046,-0.46 -0.183,-9.646 0.086,-10.777c0.031,-0.132 0.059,-0.266 0.087,-0.399c0.09,-0.434 0.184,-0.883 0.394,-1.314c0.654,-1.343 2.257,-2.444 3.729,-2.564c1.344,-0.109 4.368,-0.188 5.541,-0.207c0.763,-0.012 2.049,0.046 3.285,0.103c0.987,0.044 1.938,0.088 2.549,0.091c0.854,0.005 1.746,0.029 2.638,0.054c0.884,0.024 1.769,0.049 2.615,0.053c3.392,0.016 6.129,-0.023 9.298,-0.069l3.01,-0.042c3.67,-0.065 5.701,0.592 6.995,2.204c1.29,1.606 1.168,4.183 1.07,6.253l-0.099,2.303c-0.185,4.303 -0.261,6.084 0.279,11.032c0.13,1.193 0.026,3.216 -0.084,5.356c-0.095,1.859 -0.194,3.782 -0.15,5.312c0.011,0.404 0.04,0.834 0.068,1.279c0.133,2.038 0.284,4.349 -0.942,5.934c-1.285,1.659 -3.214,2 -5.176,2zM34.47,43.766c0.624,0 1.276,0.04 1.955,0.082c2.457,0.155 5,0.311 6.422,-1.529c0.994,-1.286 0.856,-3.396 0.735,-5.257c-0.03,-0.458 -0.059,-0.9 -0.071,-1.315c-0.044,-1.57 0.055,-3.513 0.152,-5.393c0.108,-2.1 0.21,-4.083 0.088,-5.195c-0.548,-5.024 -0.471,-6.828 -0.284,-11.185l0.099,-2.307c0.09,-1.901 0.202,-4.269 -0.852,-5.581c-1.076,-1.341 -2.859,-1.879 -6.202,-1.829l-3.008,0.042c-3.175,0.046 -5.918,0.086 -9.318,0.069c-0.854,-0.005 -1.746,-0.029 -2.638,-0.054c-0.884,-0.024 -1.769,-0.049 -2.615,-0.053c-0.62,-0.003 -1.587,-0.047 -2.589,-0.093c-1.22,-0.055 -2.477,-0.11 -3.224,-0.101c-1.163,0.019 -4.156,0.096 -5.476,0.203c-1.126,0.094 -2.405,0.975 -2.909,2.007c-0.155,0.32 -0.233,0.69 -0.314,1.081c-0.03,0.143 -0.06,0.285 -0.093,0.427c-0.211,0.887 -0.139,9.694 -0.064,10.446l0.193,1.894c0.182,1.746 0.183,1.774 0.166,3.045c-0.007,0.547 -0.018,1.331 -0.018,2.604c0,0.612 -0.06,1.387 -0.129,2.283c-0.093,1.21 -0.199,2.581 -0.206,4.08c-0.017,3.612 0.006,5.055 0.329,7.058c0.521,3.236 2.292,4.724 5.482,4.58l0.024,-0.001c2.595,0 3.465,-0.018 4.334,-0.035c0.806,-0.016 1.611,-0.032 3.775,-0.034c1.66,-0.001 3.09,-0.074 4.353,-0.139c1.636,-0.084 3.048,-0.156 4.568,-0.068c0.647,0.037 1.291,0.089 1.934,0.141c1.597,0.131 3.104,0.251 4.652,0.15c0.245,-0.017 0.495,-0.023 0.749,-0.023z"
                                       fill="#010101"
                                    ></path>
                                    <path
                                       d="M20.665,25.639c1.18,1.041 2.361,2.082 3.541,3.122c0.607,0.535 2.275,2.097 3.081,2.159c1.156,0.089 3.066,-1.841 4.212,-2.015c0.821,-0.124 2.26,0.624 3,1c0.93,0.473 1.35,0.924 2.175,1.617c1.096,0.922 1.247,1.844 1.115,2.84c-0.082,0.623 -0.528,1.13 -0.982,1.564c-0.617,0.589 -1.468,1.392 -2.292,1.611c-1.271,0.337 -2.546,0.125 -3.77,-0.356c-1.86,-0.731 -3.991,-1.621 -5.663,-2.714c-2.594,-1.695 -6.645,-5.145 -8.582,-7.563c-3.28,-4.095 -4.289,-6.04 -6,-11c-0.331,-0.958 -0.41,-3.073 0,-4c0.386,-0.873 1.192,-2.014 2.074,-2.38c0.429,-0.178 0.88,-0.334 1.344,-0.327c0.976,0.015 1.782,0.727 2.492,1.397c1.318,1.245 2.727,2.676 2.827,4.487c0.076,1.379 -0.636,2.667 -1.362,3.841c-0.229,0.371 -0.468,0.754 -0.526,1.187c-0.067,0.495 0.112,0.987 0.308,1.446c0.694,1.624 1.828,2.774 3.008,4.084"
                                       fill="#d6e5e5"
                                    ></path>
                                    <path
                                       d="M33.231,38.204c-0.841,0 -1.724,-0.185 -2.669,-0.557c-1.994,-0.783 -4.07,-1.661 -5.753,-2.76c-2.589,-1.691 -6.702,-5.177 -8.699,-7.669c-3.229,-4.031 -4.31,-6.011 -6.083,-11.149c-0.378,-1.096 -0.445,-3.325 0.016,-4.365c0.45,-1.017 1.347,-2.228 2.339,-2.64c0.444,-0.185 0.977,-0.358 1.543,-0.365c1.13,0.019 2.017,0.768 2.828,1.534c1.45,1.37 2.875,2.872 2.982,4.822c0.085,1.53 -0.696,2.936 -1.435,4.132c-0.214,0.347 -0.412,0.667 -0.456,0.99c-0.046,0.346 0.075,0.723 0.272,1.184c0.589,1.377 1.544,2.429 2.556,3.542l0.344,0.38l3.726,3.287c0.5,0.447 2.023,1.809 2.583,1.853c0.483,0.032 1.328,-0.523 2.021,-0.974c0.748,-0.484 1.454,-0.942 2.078,-1.037c0.877,-0.128 2.132,0.453 3.234,1.015c0.86,0.438 1.31,0.827 1.878,1.32l0.459,0.394c1.375,1.156 1.411,2.365 1.289,3.289c-0.104,0.784 -0.63,1.38 -1.133,1.859c-0.617,0.589 -1.55,1.479 -2.51,1.732c-0.457,0.123 -0.927,0.183 -1.41,0.183zM13.887,9.699c-0.375,0 -0.76,0.139 -1.121,0.289c-0.701,0.291 -1.44,1.287 -1.809,2.12c-0.345,0.78 -0.282,2.772 0.016,3.635c1.746,5.061 2.742,6.886 5.917,10.851c1.937,2.418 5.941,5.808 8.465,7.456c1.608,1.051 3.628,1.903 5.573,2.668c1.283,0.505 2.413,0.613 3.459,0.337c0.712,-0.188 1.532,-0.971 2.075,-1.488c0.376,-0.359 0.769,-0.791 0.832,-1.268c0.114,-0.865 -0.002,-1.603 -0.941,-2.393l-0.471,-0.404c-0.537,-0.466 -0.925,-0.802 -1.609,-1.15c-0.664,-0.338 -2.055,-1.045 -2.699,-0.951c-0.411,0.062 -1.058,0.482 -1.684,0.888c-0.904,0.587 -1.848,1.214 -2.642,1.131c-0.828,-0.063 -2.072,-1.119 -3.173,-2.104l-3.783,-3.341l-0.361,-0.398c-1.07,-1.178 -2.08,-2.29 -2.735,-3.822c-0.227,-0.53 -0.425,-1.104 -0.344,-1.709c0.072,-0.535 0.348,-0.981 0.591,-1.375c0.694,-1.124 1.361,-2.317 1.292,-3.56c-0.088,-1.584 -1.313,-2.867 -2.671,-4.15c-0.696,-0.657 -1.385,-1.248 -2.157,-1.261c-0.005,-0.001 -0.012,-0.001 -0.02,-0.001z"
                                       fill="#010101"
                                    ></path>
                                 </g>
                              </g>
                           </g>
                        </svg>
                     </div>
                  </div>
                  <hr></hr>
                  <div>©2022 copyright. All rights reserved.</div>
               </Layout80>
            </div>
         </div>
      </>
   );
};

export default Footer;
