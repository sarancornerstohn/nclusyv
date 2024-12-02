// METHOD 1 -FAILED


// "use client"
// import React from 'react';


// const Page = () => {
//   const handleLoginRedirect = () => {
//     window.location.href = '/login';
//   };
//   const handleRegisterRedirect = () => {
//     window.location.href = '/register';
//   };

//   return (
//     <div>
//       <h1>MAIN PROJECT PAGE</h1>
//       <div>
//         <button onClick={handleLoginRedirect}>Login</button>
//       </div>
//       <div>
//         <button onClick={handleRegisterRedirect}>Go to Register</button>
//       </div>

//     </div>
//   );
// };

// export default Page;


// -----------------------

// METHOD 2

// // Page.js
// // pages/index.js
// "use client";
// import React, { useEffect } from 'react';
// import { getPosts } from '@/_actions/action';

// const Page = () => {
//     useEffect(() => {
//         const initializeConnection = async () => {
//             try {
//                 await getPosts()
//             } catch (error) {
//                 console.error('Connection initialization failed:', error);
//                 // Handle error (e.g., show a notification)
//             }
//         };

//         initializeConnection();
//     }, []); // Empty dependency array to run once on mount

//     return (
//         <div>
//             <h1>MAIN PROJECT PAGE</h1>
//             {/* Add more content or components as needed */}

//         </div>
//     );
// };

// export default Page;


// ------------------------

// METHOD 3

// Page.js
// // pages/index.js
"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { getPosts } from '@/_actions/action';

const Page = () => {
    

    useEffect(() => {
        const initializeConnection = async () => {
            try {
                await getPosts();
            } catch (error) {
                console.error('Connection initialization failed:', error);
                // Handle error (e.g., show a notification)
            }
        };
        initializeConnection();
    }, []);

    const handleNavigationLogin = () => {
        window.location.href = 'http://localhost/login';
    };
    const handleNavigationRegister = () => {
        window.location.href = 'http://localhost/register';
    };

    return (
        <div>
            <h1><b>MAIN PROJECT PAGE</b></h1>
            <h6><b>BUTTONS</b></h6>
            <button onClick={handleNavigationLogin}>LOGIN</button>
            <button onClick={handleNavigationRegister}>REGISTER</button>
            <br></br>
            <h6><b>LINKS</b></h6>
            <a href="http://localhost/login" className="btn-link">LOGIN</a>
            <a href="http://localhost/register" className="btn-link">REGISTER</a>
        </div>
    );
};

export default Page;



