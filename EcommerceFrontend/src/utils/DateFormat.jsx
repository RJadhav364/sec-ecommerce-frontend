// import React from 'react'

// const useDateFormat = (createdAt) => {
//     console.log("createdAt", createdAt)
//     const convertData = () => {
//         const formattedDate = new Date(createdAt).toLocaleDateString("en-GB");
//         console.log(formattedDate); // 02/07/2026
//     }
//     return {convertData}
// }

// export default useDateFormat;

const convertData = (createdAt) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB");
  return formattedDate;
};
export default convertData;