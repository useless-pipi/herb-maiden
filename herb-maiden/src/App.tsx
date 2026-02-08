import './App.css'
import { CharacterList } from './pages/CharList';
import Combat from './pages/Combat';
// import Test from './pages/Test';
// import Test3 from './pages/Test3';
import World from './pages/World';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col">
      
      {/* Top Bar - fixed min-height of 4rem */}
      <div className="min-h-[4rem] bg-gradient-to-r from-blue-500 to-blue-600 border-b border-blue-700 flex items-center justify-between px-8">
        <h1 className="text-2xl font-bold text-white">Application Name</h1>
        <nav className="flex items-center space-x-6">
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white backdrop-blur-sm transition">
            Dashboard
          </button>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white backdrop-blur-sm transition">
            Projects
          </button>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white backdrop-blur-sm transition">
            Settings
          </button>
        </nav>
      </div>

      {/* Middle section - takes remaining space */}
      <div className="flex flex-1 min-h-0">
        
        {/* Left Sidebar - fixed min-width of 9rem */}
        <div className="min-w-[9rem] w-[10vw] max-w-[200px] bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 p-6 flex flex-col">
          <div className="text-white text-lg font-semibold mb-8">Navigation</div>
          <div className="flex flex-col space-y-3">
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Home
            </button>
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Analytics
            </button>
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Settings
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-2 overflow-auto">
          <World></World>
        </div>

        {/* Right Sidebar - fixed min-width of 9rem */}
        <div className="min-w-[9rem] w-[10vw] max-w-[200px] bg-gradient-to-b from-gray-900 to-gray-800 border-l border-gray-700 p-6 flex flex-col">
          <div className="text-white text-lg font-semibold mb-8">Tools</div>
          <div className="flex flex-col space-y-3">
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Quick Actions
            </button>
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Notifications
            </button>
            <button className="p-4 hover:bg-gray-700/50 rounded-lg text-white text-left transition">
              Help Center
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar - fixed min-height of 4rem */}
      <div className="min-h-[4rem] bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 flex items-center justify-between px-8">
        <div className="text-white">System Status: Operational</div>
        <div className="text-gray-300">© 2024 My Application</div>
        <div className="text-gray-400">Last updated: Just now</div>
      </div>

    </div>
  );
}

//   return (
//       <div className="relative w-full bg-gray-50 flex justify-center-safe">
//         <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
//                 <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
//             </a>
//             <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
//             </button>
//             <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//                 <li>
//                   <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <World></World>

//       </div>
//   );
// }


export default App
