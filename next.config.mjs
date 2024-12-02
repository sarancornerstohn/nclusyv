// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // No need for external redirect if Nginx is proxying /login
      ];
    },
    
    // next.config.js


  };

  
  export default nextConfig;
  

  


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async redirects() {
//       return [
//         {
//           source: '/login',
//           destination: 'http://localhost:4002',  // Redirect to login microservice
//           permanent: false,
//         },
//       ];
//     },
//   };
  
//   export default nextConfig;
  