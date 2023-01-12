// import React from "react";
// import ContentLoader from "react-content-loader";
// import "../Categories/Categories.scss";
// import "../Tasks/Tasks.scss";

// export function CategoriesLoader() {
//   return (
//     <div className="categories">
//       <ContentLoader
//         speed={2}
//         width={185}
//         height={51}
//         style={{ marginBottom: "60px" }}
//         viewBox="0 0 185 51"
//         backgroundColor="#f3f3f3"
//         foregroundColor="#fdd3d3"
//       >
//         <path d="M 5.18 9.38 c 0 -1.726 1.547 -3.126 3.455 -3.126 h 15.542 v 37.524 H 8.635 c -1.908 0 -3.454 -1.4 -3.454 -3.127 V 9.38 z" />
//         <path d="M 5.18 9.38 c 0 -1.726 1.547 -3.126 3.455 -3.126 h 15.542 v 37.524 H 8.635 c -1.908 0 -3.454 -1.4 -3.454 -3.127 V 9.38 z" />
//         <path d="M 46.627 43.091 c 1.863 0.004 3.454 -1.365 3.454 -3.128 V 8.505 c 0 -1.763 -1.59 -3.132 -3.454 -3.128 V 43.09 z" />
//         <path d="M 46.627 43.091 c 1.863 0.004 3.454 -1.365 3.454 -3.128 V 8.505 c 0 -1.763 -1.59 -3.132 -3.454 -3.128 V 43.09 z" />
//         <path d="M 25.904 6.254 L 40.83 3.797 c 2.12 -0.349 4.071 1.126 4.071 3.077 v 36.284 c 0 1.95 -1.951 3.425 -4.071 3.076 l -14.925 -2.456 V 6.254 z" />
//         <path d="M 25.904 6.254 L 40.83 3.797 c 2.12 -0.349 4.071 1.126 4.071 3.077 v 36.284 c 0 1.95 -1.951 3.425 -4.071 3.076 l -14.925 -2.456 V 6.254 z" />
//         <path d="M 87 9.506 v 5.283 h -8.355 v 22.735 h -6.101 V 14.789 h -8.311 V 9.506 H 87 z M 104.075 35.042 c -2.269 2.028 -5.04 3.042 -8.311 3.042 c -3.272 0 -6.042 -1.014 -8.312 -3.042 c -2.24 -2.055 -3.36 -4.563 -3.36 -7.525 c 0 -2.962 1.12 -5.456 3.36 -7.484 c 2.27 -2.055 5.04 -3.082 8.312 -3.082 c 3.271 0 6.042 1.027 8.311 3.082 c 2.27 2.027 3.404 4.522 3.404 7.484 c 0 2.962 -1.134 5.47 -3.404 7.525 z m -12.6 -3.562 c 1.15 1.04 2.58 1.56 4.289 1.56 c 1.71 0 3.139 -0.52 4.288 -1.56 c 1.15 -1.04 1.724 -2.362 1.724 -3.963 c 0 -1.6 -0.574 -2.921 -1.724 -3.962 c -1.15 -1.04 -2.579 -1.561 -4.288 -1.561 c -1.71 0 -3.14 0.52 -4.289 1.56 c -1.12 1.042 -1.68 2.362 -1.68 3.963 s 0.56 2.922 1.68 3.963 z M 127.363 9.506 h 5.703 v 28.018 h -5.703 v -2.362 c -1.68 1.948 -4.068 2.922 -7.162 2.922 c -2.977 0 -5.527 -1.014 -7.649 -3.042 c -2.092 -2.055 -3.138 -4.563 -3.138 -7.525 c 0 -2.962 1.046 -5.456 3.138 -7.484 c 2.122 -2.055 4.672 -3.082 7.649 -3.082 c 3.094 0 5.482 0.974 7.162 2.921 V 9.506 z M 116.841 31.6 c 1.179 1.04 2.652 1.56 4.421 1.56 c 1.768 0 3.227 -0.52 4.376 -1.56 c 1.15 -1.068 1.725 -2.428 1.725 -4.083 c 0 -1.654 -0.575 -3.002 -1.725 -4.042 c -1.149 -1.068 -2.608 -1.601 -4.376 -1.601 c -1.769 0 -3.242 0.533 -4.421 1.6 c -1.15 1.041 -1.724 2.389 -1.724 4.043 c 0 1.655 0.574 3.015 1.724 4.083 z M 156.231 35.042 c -2.27 2.028 -5.04 3.042 -8.312 3.042 c -3.271 0 -6.042 -1.014 -8.311 -3.042 c -2.24 -2.055 -3.36 -4.563 -3.36 -7.525 c 0 -2.962 1.12 -5.456 3.36 -7.484 c 2.269 -2.055 5.04 -3.082 8.311 -3.082 c 3.272 0 6.042 1.027 8.312 3.082 c 2.269 2.027 3.404 4.522 3.404 7.484 c 0 2.962 -1.135 5.47 -3.404 7.525 z m -12.6 -3.562 c 1.149 1.04 2.579 1.56 4.288 1.56 c 1.71 0 3.139 -0.52 4.289 -1.56 c 1.149 -1.04 1.724 -2.362 1.724 -3.963 c 0 -1.6 -0.575 -2.921 -1.724 -3.962 c -1.15 -1.04 -2.579 -1.561 -4.289 -1.561 c -1.709 0 -3.139 0.52 -4.288 1.56 c -1.12 1.042 -1.68 2.362 -1.68 3.963 s 0.56 2.922 1.68 3.963 z M 181.596 35.042 c -2.269 2.028 -5.04 3.042 -8.311 3.042 c -3.272 0 -6.042 -1.014 -8.312 -3.042 c -2.24 -2.055 -3.36 -4.563 -3.36 -7.525 c 0 -2.962 1.12 -5.456 3.36 -7.484 c 2.27 -2.055 5.04 -3.082 8.312 -3.082 c 3.271 0 6.042 1.027 8.311 3.082 c 2.269 2.027 3.404 4.522 3.404 7.484 c 0 2.962 -1.135 5.47 -3.404 7.525 z m -12.6 -3.562 c 1.15 1.04 2.579 1.56 4.289 1.56 c 1.709 0 3.138 -0.52 4.288 -1.56 c 1.149 -1.04 1.724 -2.362 1.724 -3.963 c 0 -1.6 -0.575 -2.921 -1.724 -3.962 c -1.15 -1.04 -2.579 -1.561 -4.288 -1.561 c -1.71 0 -3.139 0.52 -4.289 1.56 c -1.12 1.042 -1.68 2.362 -1.68 3.963 s 0.56 2.922 1.68 3.963 z" />
//       </ContentLoader>
//       <ContentLoader
//         speed={2}
//         width={179}
//         height={389}
//         viewBox="0 0 179 389"
//         backgroundColor="#f3f3f3"
//         foregroundColor="#fdd3d3"
//       >
//         <rect x="0" y="150" rx="8" ry="8" width="168" height="25" />
//         <rect x="1" y="104" rx="8" ry="8" width="88" height="25" />
//         <rect x="0" y="200" rx="8" ry="8" width="109" height="25" />
//         <rect x="0" y="250" rx="8" ry="8" width="159" height="25" />
//         <rect x="0" y="315" rx="8" ry="8" width="179" height="39" />
//         <rect x="109" y="363" rx="8" ry="8" width="70" height="26" />
//         <rect x="0" y="50" rx="8" ry="8" width="129" height="25" />
//         <rect x="0" y="0" rx="8" ry="8" width="88" height="25" />
//         <rect x="0" y="0" rx="8" ry="8" width="88" height="25" />
//       </ContentLoader>
//     </div>
//   );
// }

// export function TasksLoader() {
//   return (
//     <div className="tasks">
//       <ContentLoader
//         speed={2}
//         width={679}
//         height={385}
//         viewBox="0 0 679 385"
//         backgroundColor="#f3f3f3"
//         foregroundColor="#fdd3d3"
//       >
//         <rect x="1" y="0" rx="8" ry="8" width="119" height="30" />
//         <rect x="1" y="58" rx="8" ry="8" width="655" height="39" />
//         <rect x="1" y="137" rx="8" ry="8" width="28" height="28" />
//         <rect x="47" y="146" rx="7" ry="7" width="225" height="14" />
//         <rect x="47" y="190" rx="7" ry="7" width="310" height="14" />
//         <rect x="47" y="364" rx="7" ry="7" width="297" height="14" />
//         <rect x="47" y="234" rx="7" ry="7" width="164" height="14" />
//         <rect x="47" y="278" rx="7" ry="7" width="257" height="14" />
//         <rect x="46" y="322" rx="7" ry="7" width="370" height="14" />
//         <rect x="1" y="181" rx="8" ry="8" width="28" height="28" />
//         <rect x="1" y="225" rx="8" ry="8" width="28" height="28" />
//         <rect x="1" y="269" rx="8" ry="8" width="28" height="28" />
//         <rect x="1" y="313" rx="8" ry="8" width="28" height="28" />
//         <rect x="0" y="357" rx="8" ry="8" width="28" height="28" />
//       </ContentLoader>
//     </div>
//   );
// }